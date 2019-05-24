/* Reads 'folder', stores files with extension 'ext' in an array,
	then calls 'callback(err, data)' on this array
*/

var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, callback) {
	ext = '.' + ext;
	var result = new Array();
	
	fs.readdir(folder, function (ferr, flist) {
		if (ferr)
			return callback(ferr); // cannot read the directory
		
		flist.forEach(function (fname) {
				if (path.extname(fname) === ext) result.push(fname);
		})
		
		callback(null, result);
	})
}

/* Official solution
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/
