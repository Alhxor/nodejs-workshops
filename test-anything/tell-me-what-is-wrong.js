var isCoolNumber = require(process.argv[2])
var assert = require('assert')

assert(isCoolNumber(42), "isCoolNumber(42) should be true")
