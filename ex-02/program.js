var total = 0;

for (var ii = 2; ii < process.argv.length; ii++) {

    total += Number(process.argv[ii]);
}

console.log(total);
