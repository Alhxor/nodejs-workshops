var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback(n, cb) should run cb n times', function (t) {
	var n = 5
	t.plan(n)
	repeatCallback(n, function () {
		t.pass('cb called')
	})
})
