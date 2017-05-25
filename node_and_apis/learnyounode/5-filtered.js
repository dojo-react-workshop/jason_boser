const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let targetExtension = "." + process.argv[3];

fs.readdir(directory,(err,list) => {
    if(err){
        console.log('ERROR');
    }else{
        let results = list.filter((filename) => {
            return path.extname(filename) === targetExtension;
        });
        for(let i=0; i<results.length; i++){
            console.log(results[i]);
        }
    }
});


