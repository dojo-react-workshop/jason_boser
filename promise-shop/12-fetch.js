'use strict' 
require('es6-promise');
var qio = require('q-io/http');

qio.read("http://localhost:1337")
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()