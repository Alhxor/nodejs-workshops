var mymodule = require('./filtered-ls-module.js');

mymodule(process.argv[2], process.argv[3], function (err, data) {
	if (err)
		return console.error(err);
	
	data.forEach(function (fname) {
		console.log(fname);
	})
})

/* Official solution
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
