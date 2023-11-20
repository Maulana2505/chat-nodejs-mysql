const express = require('express')
const app = express()
 const http = require('http').Server(app)
// const port = 4000
const server =http.listen(4000,()=>{
    console.log('Server running') 
})
module.exports = server; 