var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var route = url.parse(req.url, true);
    var date = new Date(route.query.iso);
    var resCode = 404;
    var resHeaders = {};
    var response = null;

    if (req.method !== 'GET') {
        resCode = 400;
        resHeaders = { 'content-type': 'text/plain' };
        response = 'send me a GET\n';
    }

    if (route.pathname === '/api/parsetime') {
        resCode = 200;
        resHeaders = { 'content-type': 'application/json'};
        response = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    }
    if (route.pathname === '/api/unixtime') {
        resCode = 200;
        resHeaders = { 'content-type': 'application/json'};
        response = {
            'unixtime': date.getTime()
        };

    }

    res.writeHead(resCode, resHeaders);
    return res.end(JSON.stringify(response));
});

server.listen(Number(process.argv[2]));