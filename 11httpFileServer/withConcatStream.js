// This solution doesn't work

var http = require('http');
var fs = require('fs');
var concatStream = require('concat-stream');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res) {
	var readStream = fs.createReadStream(file);
	readStream.on('open', function(data) {
		readStream.pipe(concatStream(function(data) {
			data.pipe(res);
		}))
	})
}).listen(port);
