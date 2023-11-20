const express = require('express')
const bycrpt = require('bcrypt')
const post = require('../models/post.js')
const users = require('../models/user.js')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const verifytoken = require('../middleware/verifytoken.js')
const uploadpost = require('../middleware/imgpost.js')

const postroute = express.Router()


postroute.get('/getPost',verifytoken,async(req,res)=>{
    const posts = await post.findAll()
    if(post == null)return res.status(400).send('Post Empty')
    else return res.status(200).send(posts)
})
postroute.post('/post',uploadpost.single('imgpost'),verifytoken,async(req,res)=>{
    // const {description} = req.body
    const posts = await post.create({"imgpost" : req.file.filename,
     'description' : req.body.description,
     'userId':req.user.id})  
     console.log(req.file) 
     if(posts) return res.status(200).json('Post create')
     else res.status(200).json('Post not created')
})
postroute.get('/getPostuser',verifytoken,async(req,res)=>{
    const user = await post.findAll({where:{'userId':req.user.id}})
    if(!user)return res.status(400).json({msg:'Post Empty'})
    else return res.status(200).json(user)
})
module.exports = postroute