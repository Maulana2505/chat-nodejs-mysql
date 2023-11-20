const express = require('express')
const users = require('../models/user.js')
const verifytoken = require('../middleware/verifytoken.js')
const follow = require('../models/follow.js')
const user = require('../models/user.js')
const following = require('../models/following.js')

const followroute = express.Router()

followroute.post('/follow/:id', verifytoken, async (req, res, next) => {
    const curid = req.params.id
    const userfind = await users.findOne({ where: { id: curid } })
    const us = await users.findOne({ where: { id: req.user.id } })
    const foluser = await follow.findOne({ where: { 'userId': req.user.id, 'followId': userfind.id } })
    if (foluser) return res.status(400).json('you have followed ' + userfind.username)
    else {
        const follwo = {
            'userId': req.user.id,
            'followId': userfind.id,
            'username': userfind.username,
            'imgprofile': userfind.imgprofile,
        }
        const followin = {
            'userId': userfind.id,
            'followingId': us.id,
            'username': us.username,
            'imgprofile': us.imgprofile, 
        }
        const q = await follow.create(follwo);
        const z = await following.create(followin)
        if (q && z) return res.status(200).json("Your Follow " + userfind.username)
        else return res.status(400).json("erorr")
    }
})

followroute.delete('/unfollow/:id', verifytoken, async (req, res) => {
    const curid = req.params.id
    const userfind = await users.findOne({ where: { id: curid } })
    const us = await users.findOne({ where: { id: req.user.id } })
    const q = await follow.destroy({ where: { 'userId': us.id, 'followId': userfind.id } });
    const z = await following.destroy({ where: { 'userId': userfind.id, 'followingId': us.id } })
    if (q && z) return res.status(400).json('you unfollowed ' + userfind.username)
    //     const follwo = { 
    //         'userId':req.user.id, 
    //         'followId': userfind.id,
    //         'username':userfind.username, 
    //         'imgprofile':userfind.imgprofile,
    //     }
    //     const followin={
    //         'userId':userfind.id,
    //         'followingId': us.id,
    //         'username':us.username,
    //         'imgprofile':us.imgprofile,
    //     }
    else {
        return res.status(200).json("Your unFollow " + userfind.username)
    }

})
module.exports = followroute;