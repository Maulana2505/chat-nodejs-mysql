const express = require('express');
const verifytoken = require('../middleware/verifytoken');
const users = require('../models/user.js')
const friend = require('../models/friends')
const friendreq = require('../models/friendrequest.js')
const pendings = require('../models/pending.js');
const friendroure = express.Router()

friendroure.post('/friendadd/:id', verifytoken, async (req, res) => {
    const paramsid = req.params.id
    const userreq = await users.findOne({ where: { id: paramsid } })
    const curus = await users.findOne({ where: { id: req.user.id } })
    const pens = await pendings.findOne({ where: { 'userid': curus.id, 'friendid': userreq.id } })
    const freq2 = await friendreq.findOne({ where: { 'userid': req.user.id, 'friendreqid': userreq.id } })
    const frss = await friend.findOne({ where: { 'userid': req.user.id, 'friendid': userreq.id } })
    if (pens) return res.status(400).json({ msg: 'Pending' })
    if (freq2) return res.status(400).json({ msg: 'friend req' })
    if (frss) return res.status(400).json({ msg: 'friend' })
    else {
        const fadd = {
            'userid': userreq.id,
            'friendreqid': req.user.id,
        }
        const padd = {
            'userid': req.user.id,
            'friendid': userreq.id,
        }
        const q = await friendreq.create(fadd)
        const p = await pendings.create(padd)
        if (q || p) return res.status(200).json('Friend Request Sended')
        else return res.status(400).json('ssss')
    }
})

friendroure.get('/friendreq', verifytoken, async (req, res) => {
    const fr = await friendreq.findAll({
        where: { userid: req.user.id }, include: [
            { as: 'friendreq', model: users }
        ]
    })
    // return res.status(200).json(fr)
    if (fr <= 1) return res.status(400).json({ code: 400, msg: 'Friend Request Empty' })
    else return res.status(200).json(fr)
})

friendroure.post('/friendreqacc/:id', verifytoken, async (req, res) => {
    const paramsid = req.params.id
    const aa = friendreq.findOne({ where: { userid: req.user.id, 'friendreqid': paramsid } })
    const bb = pendings.findOne({ where: { 'userid': paramsid, 'friendid': req.user.id } })
    if (aa && bb) {
        const fadd = { 
            'userid': paramsid,
            'friendid': req.user.id,
        }
        const padd = {
            'userid': req.user.id,
            'friendid': paramsid,
        }
        const q = await friend.create(fadd)
        const p = await friend.create(padd)
        await friendreq.destroy({ where: { 'userid': req.user.id, 'friendreqid': paramsid } })
        await pendings.destroy({ where: { 'userid': paramsid, 'friendid': req.user.id } })
        if (q && p) return res.status(200).json({ msg: 'accept fried succes' })
        else return res.status(400).json('Eror accept fried')
    } else {
        return res.status(400).json('empty')
    }
})

friendroure.get('/pending', verifytoken, async (req, res) => {
    const fr = await pendings.findAll({
        where: { "userid": req.user.id },
        include: [
            { as: 'pendings', model: users }
        ]
    })
    if (fr < 1) return res.status(400).json({ code: 400, msg: 'pending Empty' })
    // else return res.status(200).json({pendingdata:fr})
    else return res.status(200).json(fr)
})
friendroure.get('/checkpending/:id', verifytoken, async (req, res) => {
    const params = req.params.id
    const fr = await pendings.findAll({
        where: { "userid": req.user.id ,'friendid':params},
    })
    if (fr < 1) return res.status(400).json({ code: 400, msg: 'pending Empty' })
    // else return res.status(200).json({pendingdata:fr})
    else return res.status(200).json('Pending')
})
friendroure.delete('/pendingdelete/:id', verifytoken, async (req, res) => {
    const id = req.params.id
    const delpending = await pendings.destroy({ where: { 'userid': req.user.id, 'friendid': id } })
    const delfr = await friendreq.destroy({ where: { 'userid': id, 'friendreqid': req.user.id } })
    if (delpending && delfr) {
        return res.status(200).json({ msg: 'Succes delete user Pending' })
    } else {
        return res.status(400).json({ code: 400, msg: 'Failed delete user Pending' })
    }
})

friendroure.get('/friend', verifytoken, async (req, res) => {
    const fr = await friend.findAll({
        where: { 'userid': req.user.id },
        include: [
            {as: 'friend', model: users} 
<<<<<<< HEAD
        ]
=======
        ] 
>>>>>>> 3c62756 (Baru)
    })
    if (fr < 1) return res.status(400).json({ code: 400, msg: 'Friend Empty' })
    else return res.status(200).json(fr) 
})

friendroure.get('/checkfriend/:id', verifytoken, async (req, res) => {
    const params = req.params.id
    const fr = await friend.findAll({
        where: { 'userid': req.user.id,'friendid' :params},
    })
    if (fr < 1) return res.status(400).json({ code: 400, msg: 'Not Friend' })
    else return res.status(200).json('your Friend') 
})
friendroure.delete('/frienddelete/:id', verifytoken, async (req, res) => {
    const id = req.params.id
    const delpending = await friend.destroy({ where: { 'userid': req.user.id, 'friendid': id } })
    const delfr = await friend.destroy({ where: { 'userid': id, 'friendid': req.user.id } })
    if (delpending && delfr) {
        return res.status(200).json({ msg: 'Succes delete friends ' })
    } else {
        return res.status(400).json({ code: 400, msg: 'Failed delete Friends' })
    } 
}) 

module.exports = friendroure