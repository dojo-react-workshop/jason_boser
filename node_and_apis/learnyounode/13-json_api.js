'use strict'

const http = require('http');
const urlMod = require('url');

const port = Number(process.argv[2]);

const server = http.createServer((request,response) => {
    let parsedURL = urlMod.parse(request.url,true);
    let isoTime = parsedURL.query.iso;
    let date = new Date(isoTime);

    if(parsedURL.pathname === '/api/parsetime'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.end(JSON.stringify({
            'hour':date.getHours(),
            'minute':date.getMinutes(),
            'second':date.getSeconds()
        }));
    }

    if(parsedURL.pathname === '/api/unixtime'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.end(JSON.stringify({
            'unixtime':date.getTime()
        }));
    }

});

server.listen(port);