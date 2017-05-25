var http = require('http');
var bufferList = require('bl');

http.get(process.argv[2],(response) => {
    
    response.pipe(bufferList((err,data) => {
        let text = data.toString();

        console.log(text.length);//character count
        console.log(text);//text
    }))

})