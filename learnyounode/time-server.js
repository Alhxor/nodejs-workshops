var net = require('net')

var server = net.createServer(listener)
server.listen(process.argv[2])

function listener(socket) {
	var date = new Date()
	
	var month = formatNumber(date.getMonth() + 1)
	var day = formatNumber(date.getDate())
	var hours = formatNumber(date.getHours())
	var minutes = formatNumber(date.getMinutes())

	var current = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n'
	socket.end(current)
}

function formatNumber(num) {
	return (num < 10 ? '0' + num : num)
}


/* Official solution
var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/