let filename = process.argv[2];

var fs = require('fs');

var buffer = fs.readFileSync(filename);
var text = buffer.toString();
var lines = text.split("\n");

console.log(lines.length-1);
