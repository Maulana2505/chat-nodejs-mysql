const express = require('express')
const bycrpt = require('bcrypt')
const users = require('../models/user.js')
const jwt = require('jsonwebtoken')
const verifytoken = require('../middleware/verifytoken.js')
const clearImage = require('../middleware/clearimage.js')
const post = require('../models/post.js')
const upload = require('../middleware/imgprofile.js')
const multer = require('multer')
const userroute = express.Router()
const fs = require("fs")
const follow = require('../models/follow.js')
var path = require('path')
const friend = require('../models/friends.js')
const friendreq = require('../models/friendrequest.js')
const pending = require('../models/pending.js')
const user = require('../models/user.js')
const { Op } = require('sequelize')

userroute.get('/',(req,res)=>{
    res.send('testerr')
})
userroute.get('/getuser',verifytoken,async(req,res)=>{
    const user = await users.findOne({where:{"id":req.user.id}})
    if(!user) return res.json({msg : 'user not found'})
    else res.json(user)
})
userroute.post('/crateUser',async(req,res)=>{
    const {username,email,password} = req.body
    const usernamealready = await users.findOne({where:{username}})
    const emailalready = await users.findOne({where:{email}})
    if(usernamealready && emailalready) res.status(400).json({msg:'Email and Username Already exist'})
    else if(usernamealready) return res.status(400).json({msg:'username Already exist'})
    else if(emailalready) return res.status(400).json({msg:'Email Already exist'})
    else{
        const newusers = new users({username,email,password})
        const salt = await bycrpt.genSaltSync(10);
        newusers.password = await bycrpt.hashSync(newusers.password,salt);
        newusers.save().then(res.status(200).json({msg:'User Created'}))
    }
})
 
userroute.post('/login',async(req,res)=>{
    const {username , password} = req.body
    const checkusername = await users.findOne({where:{username}})
    if(!checkusername) return res.status(400).json('Username not found!')
    const vup = await bycrpt.compare(password,checkusername.password)
    if (!vup) return res.status(400).json('Invalid Password!')
    else{
        const token = jwt.sign({id:checkusername.id},'secretabis');
        res.status(200).json({msg : "Succes Login",id:checkusername.id,token : token});
      }
})

userroute.get('/finduser/:username',verifytoken,async(req,res)=>{
    const paramuser = req.params.username
    const usernamealready = await users.findOne({where:{"username":paramuser}})
    const query = await users.findAll({where:{"username":{[Op.like]:'%'+paramuser+'%'}},include:[
        {model:friend,where:{friendid:req.user.id},required:false},
        {model:friendreq,where:{friendreqid:req.user.id},required:false},
        {model:pending,where:{friendid:req.user.id},required:false}
        // {model:friendreq},
    ]})
    // if(paramuser.valueOf(usernamealready.username)) return res.json( "you")
    if(query<1) return res.status(404).json({msg : 'User not Found!'})
    else return res.status(200).json(query)
})
 
userroute.get('/profile',verifytoken,async(req,res)=>{
    const user = await users.findOne({where:{"id":req.user.id},include:[
        // {as:'post',model:post},
        // {as:'follow',model:follow},
        // {as:'following',model:following},
        // {as:'friend',model:friend},
        // {as:'friendreq',model:friendreq},
        // {as:'pending',model:pending}
    ]})
    res.status(200).send(user)
})
userroute.put('/updateprofile',upload.single('imgprofile'),verifytoken,async(req,res)=>{
    const form = JSON.parse(JSON.stringify(req.body))
    const user =await users.findOne({where:{id:req.user.id}})
    if(user.imgprofile == null){
        const upim = await user.update({"imgprofile": req.file.filename,'username' :req.body.username})
        console.log(req.file)
        if(upim) {
            res.status(200).json({msg : "Profile succes update"}); 
        } 
        else return res.status(400).json('Profile Not Update!')
    }else{
        clearImage(user.imgprofile)
        const upim = await user.update({"imgprofile": req.file.filename,'username' :req.body.username})
        console.log(req.file)
        if(upim) {
            res.status(200).json({msg:'Profile Update!'}) 
        } 
        else return res.status(400).json({msg:'Profile Not Update!'})
    } 
}) 

userroute.delete('/deletephotoprofile',verifytoken,async(req,res)=>{
    const user =await users.findOne({where:{id:req.user.id}})
    if(user.imgprofile !== null){
        clearImage(user.imgprofile)
        await user.update({"imgprofile": null})
        res.json("Succes delete photo profile")
    }else{ 
        res.json("Photo profile null")
    }
}) 
module.exports = userroute
  