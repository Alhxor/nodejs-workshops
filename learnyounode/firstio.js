var fs = require('fs')

rfile = fs.readFileSync(process.argv[2])
var lines = rfile.toString().split('\n').length - 1

console.log(lines)
