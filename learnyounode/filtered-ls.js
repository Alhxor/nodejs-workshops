var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, flist) {
	if (err) return console.error(err);
	flist.forEach(function (fname) {
		if (path.extname(fname) === ext) console.log(fname)
	})
})


//console.log(process.argv)
/*
fs.readdir(process.argv[2], function (err, list) {
	if (err) return console.error(err);
	var filtered = filterFiles(list, process.argv[3]);
	for (i = 0; i < filtered.length; i++) {
		console.log(filtered[i]);
	}
});

function filterFiles(list, ext) {
	return list.filter(function filterByExt(name) {
		return (path.extname(name).replace('.', '') === ext);
	})
}
*/