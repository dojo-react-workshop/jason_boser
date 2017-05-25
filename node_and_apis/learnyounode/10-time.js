const net = require('net');
const strftime = require('strftime');

const port = Number(process.argv[2]);

//write the date each time it's connected to and close the connection

const server = net.createServer((socket) => {
    socket.write(strftime('%Y-%m-%d %H:%M') + '\n');
    socket.end();
});

server.listen(port);