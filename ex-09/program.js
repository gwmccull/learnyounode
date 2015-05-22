var http = require('http'),
    bl = require('bl');

var isAsyncComplete = [],
    asyncData = [];

for (var ii = 2; ii < process.argv.length; ii++) {
    isAsyncComplete[ii - 2] = false;

    fetchData(process.argv[ii], ii - 2);
}

function fetchData(url, index) {
    http.get(url, function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }

            data = data.toString();
            isAsyncComplete[index] = true;
            asyncData[index] = data;

            isFetchComplete();
        }));
    });
}

function isFetchComplete() {
    //console.log("asyncData", asyncData);
    for (var ii = 0; ii < isAsyncComplete.length; ii++) {
        if (!isAsyncComplete[ii]) {
            return;
        }
    }
    for (var jj = 0; jj < asyncData.length; jj++) {
        console.log(asyncData[jj]);
    }
}