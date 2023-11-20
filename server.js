const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const db = require('./database/db.js')
const app = express()
const ftp = require('basic-ftp')
const api = require('./api.js')
const server = require('./middleware/host.js')
const iosoc = require('./routes/socketio.js')
const http = require('http').Server(app)
const io = require("socket.io")(http)
var path = require('path')
const { Socket } = require('socket.io')
var corsOption = {
    origin: "http://localhost:4000"
}

app.get('/homes', (req, res) => {
    var option = {
        root: path.join(__dirname)
    }
    var filename = './index.html'
    res.sendFile(filename, option)
})
app.use(cors(corsOption))
db.connetdb()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/', api)
app.use('/imgprofile', express.static('./public/imageprofile'))
app.use('/imgpost', express.static('./public/imgpost'))
var user = []
io.on("connection", (socket) => {
    console.log("connected");
    console.log(socket.id,"connected");
    socket.on('setup', (id) => {
        // socket.broadcast.emit('online user', id)
        console.log("user ",id)
    });
    socket.on("messages",(msg) =>{
        console.log(msg);
    });
    socket.on("online",(id)=>{
        console.log(id,"online")
    })
});
http.listen(server)


