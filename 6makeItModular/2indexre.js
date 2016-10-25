var module2 = require('./module2')
var path = require('path')
var fs = require('fs')

var dir = process.argv[2]
var ext = process.argv[3]

module2(dir, ext, callback);

function callback(e, files) {
    if (e) { throw  e } 
    else {
	files.forEach(function(file) {
	    console.log(file)
	})
    }
}
