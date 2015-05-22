var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        res.writeHead(400, { 'content-type': 'text/plain' });
        return res.end('send me a POST\n');
    }

    res.writeHead(200, { 'content-type': 'text/plain' });

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res);
});

server.listen(Number(process.argv[2]));