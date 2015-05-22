var net = require('net');

function format(val) {
    return (val < 10) ? '0' + val.toString() : val.toString();
}

var server = net.createServer(function (socket) {
    var date = new Date(),
        yr = date.getFullYear(),
        mon = format(date.getMonth() + 1),
        day = format(date.getDate()),
        hr = format(date.getHours()),
        min = format(date.getMinutes());

    socket.end(yr + "-" + mon + "-" + day + " " + hr + ":" + min + "\n");
});

server.listen(process.argv[2]);
