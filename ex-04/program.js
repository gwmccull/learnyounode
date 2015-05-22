var fs = require('fs');

var buffer = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) {
        throw err;
    }

    var strings = data.split('\n');

    console.log(strings.length - 1);
});

