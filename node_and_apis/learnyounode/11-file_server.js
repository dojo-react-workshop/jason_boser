const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const filename = process.argv[3];

const server = http.createServer((request,response) => {
    let source = fs.createReadStream(filename);
    source.pipe(response);
});

server.listen(port);