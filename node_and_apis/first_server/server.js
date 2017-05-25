var http = require('http');
var fs = require('fs');

//callback function runs every time we send an HTTP request to this server
var server = http.createServer(function(request, response) {
    
    fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) throw err;
            response.end(data);
        }
    );

    // console.log(request.method);
    // console.log(request.url);
    
    // response.write('<h1>Hello, World!</h1>');
    // response.end();

    // response.write('HI!');
    // response.end();

});

//tell the server to listen on port 8000
server.listen(8000, () => {
    console.log("listening on port 8000");
});