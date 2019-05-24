var feedCat= require(process.argv[2])
var test = require('tape')

test('No chocolate for cats', function (t) {
	var food = 'fish'
	
	t.ok(feedCat(food) === 'yum')
	
	t.throws (function () {
		feedCat('chocolate')
	})
	
	t.end()
})
