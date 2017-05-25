var http = require('http');
var fs = require('fs');
var port = 8000;

var server = http.createServer((req,res) => {
    let nextWindow = ""; 
    let doneWithRes = false;

    if(req.url === '/'){
        nextWindow = './index.html'
    }else if(req.url === '/ninjas'){
        nextWindow = './ninjas.html';
        res.writeHead(302,{Location:'https://en.wikipedia.org/wiki/Ninja'});
        res.end();
        doneWithRes = true;
    }else if(req.url === '/dojos/new'){
        nextWindow = './dojos.html';
    }

    if(nextWindow === ""){
        res.end("<h1>We're sorry, but the URL requested is not available.");
    }else{
        fs.readFile(nextWindow, 'utf8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

server.listen(port,() => {
    console.log("Listening on port " + port);
})