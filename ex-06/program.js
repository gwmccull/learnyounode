var mod = require('./module'),
    pathToFiles = process.argv[2],
    ext = process.argv[3];

mod(pathToFiles, ext, function(err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(function(file) {
        console.log(file);
    });
});