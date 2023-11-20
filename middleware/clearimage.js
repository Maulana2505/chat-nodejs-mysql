const fs = require("fs")
const path = require('path')
const clearImage = (filePath) => {
    const fp = path.join(__dirname, '../public/imageprofile/'+filePath);
    fs.unlink(fp, (err) => console.log(err));
  };

module.exports = clearImage;