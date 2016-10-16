var http = require('http');
var url = process.argv[2];
var concatStream = require('concat-stream');

http.get(url, function(res) {
	res.pipe(concatStream(function(data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}))
	res.on('error', function(err) {
		console.error("There has been an error: ", err);
	})
});


// write two lines to console
// first line is an integer representing the number of characters recieved
// second line the complete string of characters
