var fs = require('fs'),
    path = require('path');

module.exports = function(pathToFiles, ext, callback) {
    fs.readdir(pathToFiles, function(err, files) {
        if (err) {
            return callback(err);
        }

        files = files.filter(function(file) {
            return path.extname(file) === "." + ext;
        });

        callback(null, files);
    });
}