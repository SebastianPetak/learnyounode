var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'POST') {
		req.pipe(map(function(chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res);
	}
}).listen(port);

// http server that recieves only POST requests
// convert incoming POST body characters to upper-case and return to client
// first arg is port
