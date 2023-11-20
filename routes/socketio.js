const verifytoken = require('../middleware/verifytoken.js')
const server = require('../middleware/host.js')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require("socket.io")(http)

const iosoc= io.on("connection", (socket) => {
    console.log(socket.id+"connected")
    // socket.on()

})

module.exports = iosoc