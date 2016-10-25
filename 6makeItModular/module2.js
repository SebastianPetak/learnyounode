var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, mycallback) {
    fs.readdir(dir, 'utf8', function(e, data) {
	if (e) {
	    return mycallback(e);
	} else {
	    var correctFiles = [];
	    data.forEach(function(file) {
		if (path.extname(file) == '.' + ext) {
			correctFiles.push(file);
		}
	    })
	    return mycallback(null, correctFiles);
	}
    })
}
