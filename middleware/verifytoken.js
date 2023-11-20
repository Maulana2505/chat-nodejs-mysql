const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js')
function verifytoken(req,res,next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        // jwt.verify(token, process.env.SECRET_KEY);
        const decodedd = jwt.verify(token, 'secretabis');
        req.user = decodedd;
        next();
    } catch (error) {
        res.status(400).json({ message: "Authentication failed!" });
    }
}
module.exports = verifytoken;