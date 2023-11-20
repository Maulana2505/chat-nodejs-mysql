const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./public/imageprofile')
    },filename: (req,file,cb)=>{ 
        cb(null,file.originalname) 
    }
})

const upload= multer({
    storage : storage,
    // fileFilter : (req,file,cb)=>{
    //     const fileType = /jpeg|jpg|png|gif/
    //     const mimeType = fileType.test(file.mimetype)
    //     const extname = fileType.test(path.extname(file.originalname))
    // }
})

module.exports = upload
