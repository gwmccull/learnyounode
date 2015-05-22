var fs = require('fs'),
    path = require('path'),
    pathToFiles = process.argv[2],
    ext = '.' + process.argv[3];

fs.readdir(pathToFiles, function(err, files) {
    files.reduce(function(prev, curr, index, arr) {
        if (path.extname(curr) === ext) {
            prev.push(curr);
            console.log(curr);
        }

        return prev;
    }, []);
});