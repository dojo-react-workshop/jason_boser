const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

const server = http.createServer((request,response) => {
    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);