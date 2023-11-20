const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./public/imgpost')
    },filename: (req,file,cb)=>{
        cb(null, file.originalname)
    }
})

const uploadpost= multer({
    storage : storage,  
    // fileFilter : (req,file,cb)=>{
    //     const fileType = /jpeg|jpg|png|gif/
    //     const mimeType = fileType.test(file.mimetype)
    //     const extname = fileType.test(path.extname(file.originalname))
    // }
})

module.exports = uploadpost 