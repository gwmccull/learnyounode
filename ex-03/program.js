var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var strings = buffer.toString().split('\n');

console.log(strings.length - 1);