var http = require('http')
var url = process.argv.slice(2, 5)
var output = new Array()

getUrl(url, 0)

function getUrl(list, ind){
	http.get(list[ind], collectData).on('error', console.error)
}

function collectData(response) {
	response.setEncoding('utf8')
	var fulldata = ''
	
	response.on('data', function (data) {
		fulldata += data
	})
	response.on('end', function() {
		output.push(fulldata)
		if (output.length < url.length)
			getUrl(url, output.length)
		else
			output.forEach(function (line) {
				console.log(line)
			})
	})
}


/* Official solution
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/