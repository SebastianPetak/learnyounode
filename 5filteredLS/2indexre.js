var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3] // lacks '.'

fs.readdir(dir, 'utf8', function(e, data) {
    if (e) throw e
    data.forEach(function(file) {
	if (path.extname(file) == '.' + ext) {
	    console.log(file)
	}
    })
})
