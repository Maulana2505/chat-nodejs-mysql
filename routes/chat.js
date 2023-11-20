const express = require('express');
const verifytoken = require('../middleware/verifytoken');
const chatroute = express.Router()
const users = require('../models/user.js')
const chat = require('../models/chat.js');
const { Op, QueryTypes, Model, where, Sequelize } = require("sequelize");
const { db } = require('../database/db.js');
const friend = require('../models/friends.js');
const user = require('../models/user.js');
const e = require('express');
chatroute.get('/chat', verifytoken, async (req, res) => {
    const datamassage = await users.findAll({
        where: {
            'id': req.user.id,
        },
        
        attributes: ['id','username' ]
        , include: [{
            model: friend, attributes: ['userid', 'friendid', [db.literal("(SELECT COUNT(*) from chats as m where m.senderid=friends.userid and m.receiverid=friends.friendid or m.senderid=friends.friendid and m.receiverid=friends.userid)"), 'chatcount']],
            on: { 
            
                '$friends.userid$': req.user.id 
            },
            include: [ 
                {
                    model: user, as: 'friend', attributes:
                        ['id', 'username', 'imgprofile',],    
                },
                {
                    model: chat, 
                    on: {
                        [Op.or]: [{
                            [Op.and]: [
                                { '$friends.chats.senderid$': req.user.id },
                                { receiverid: db.fn('lower', db.col('friends.friendid')) }
                            ]
                        }, {
                            [Op.and]: [
                                { '$friends.chats.senderid$': db.fn('lower', db.col('friends.friendid')) },
                                { receiverid: req.user.id }
                            ],
                        }]
                    },
                    where : { '$friends.chats.id$': {[Op.gte]:0}},

                }],
        }],
        order: [[db.fn('lower', db.col('friends.chats.createdAt', 'DESC'))]]
    })
    if (datamassage) {
        return res.status(200).json(datamassage)
    }else{
        return res.status(400).json("Null")
    }
})

chatroute.post('/sendmassage/:id', verifytoken, async (req, res) => {
    const paramsid = req.params.id
    const { massage } = req.body
    const massagedata = {
        'senderid': req.user.id,
        'receiverid': paramsid,
        'massage': massage
    }
    const ss = await chat.create(massagedata) 
    // if(ss)
    res.status(200).json({ data: ss })
    // else return res.status(400).json('sss')
})
module.exports = chatroute