let filename = process.argv[2];

var fs = require('fs');

fs.readFile(filename,'utf8',(err,data) => {
    if(err){
        console.log('ERROR');
    }else{
        var lines = data.split("\n");
        console.log(lines.length-1);
    }
});


