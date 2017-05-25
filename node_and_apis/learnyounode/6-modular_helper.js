const fs = require('fs');
const path = require('path');

module.exports = (directory,extension,callback) => {

    let targetExtension = "." + extension;
    let results = [];

    fs.readdir(directory,(err,list) => {
        if(err){
            callback(err);
        }else{
            results = list.filter((filename) => {
                return path.extname(filename) === targetExtension;
            });
            callback(null,results);
        }
    });


}