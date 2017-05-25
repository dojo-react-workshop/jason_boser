var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/client')));
app.set('views',path.join(__dirname + '/client/views'));
app.set('view engine','ejs');

require('./server/config/routes.js')(app);

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})