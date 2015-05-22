var fs = require('fs'),
    http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });

    var readable = fs.createReadStream(process.argv[3]);
    readable.pipe(res);
    readable.on('end', function() { res.end() });
});

server.listen(process.argv[2]);