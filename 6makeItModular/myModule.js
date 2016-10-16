var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
	fs.readdir(dirname, function(err, files) {
		if (err) {
			callback(err);
		} else {
			var sortedFiles = [];
			files.forEach(function(file) {
				if (path.extname(file) == '.' + ext) {
					sortedFiles.push(file);
				}
			})
			callback(null, sortedFiles);
		}
	})
};
