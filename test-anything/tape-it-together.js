var test = require('tape')
var fancify = require(process.argv[2])

test('fancify should wrap strings in ~*~', function (t) {
	var s = "Hello"
	var wrapper = "~*~"
	
	t.ok(fancify(s) === wrapper + s + wrapper)
	t.ok(fancify(s, true) === wrapper + s.toUpperCase() + wrapper)
	t.ok(fancify(s, false, '!') === wrapper.replace('*', '!') + s + wrapper.replace('*', '!'))
	t.ok(fancify(s, true, '!') === wrapper.replace('*', '!') + s.toUpperCase() + wrapper.replace('*', '!'))
	t.end()
})
