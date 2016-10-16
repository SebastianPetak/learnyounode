var http = require('http');
var count = 0;
var responses = [];
var concatStream = require('concat-stream');
// 3 urls as cml args
// print the data in the same order that the urls are provided

var request = function(url, number) {
	http.get(url, function(res) {
		res.pipe(concatStream(function(data) {
			count++
			data = data.toString();
			responses[number - 2] = data;
			if (count == 3) {
				responses.forEach(function(string) {
				console.log(string);
				})
			}
		})).on('error', console.error);
	})
}

for (var i = 2; i < 5; i++) {
	var iteration = i;
	request(process.argv[i], iteration);
}
