var fs = require('fs')
var lines = undefined
//var filename = '860_words_rus.txt' // process.argv[2]
var filename = process.argv[2]
//console.log(process.argv)

function countNewLines(cback) {
	fs.readFile(filename, function doneReading(err, buff) {
		lines = buff.toString().split('\n').length - 1
		cback()
	})
}

function logNumber() {
	console.log(lines)
}

countNewLines(logNumber)
