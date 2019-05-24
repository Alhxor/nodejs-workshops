var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
	response.setEncoding('utf8') // receive data in string format
	
	var fulldata = '';
	response.on('data', function (data) {
		fulldata += data
	})
	
	response.on('end', function (end) {
		console.log(fulldata.length)
		console.log(fulldata)
	})
})

/* Official solution
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/