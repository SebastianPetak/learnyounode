var http = require('http');
var url = require('url');
var port = process.argv[2];

/*function getTime(query) {
	var re = new RegExp(/\d\d:\d\d:\d\d/);
	var time = query.match(re);
	var timeArray = time[0].split(':');
	// hours are off by 5 due to my timezone
	// query object i receive is 5 hours ahead of expected response
	var hoursArray = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
					'12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
					'24'];
	return JSON.stringify({"hour": Number(hoursArray[timeArray[0] - 5]), "minute": Number(timeArray[1]), "second": Number(timeArray[2])});
}*/

function getTime(query) {
	var time = new Date(query);
	return JSON.stringify({"hour": time.getHours(), "minute": time.getMinutes(), "second": time.getSeconds()});
}

function getUnixEpochTime(query) {
	var time = new Date(query);
	return JSON.stringify({"unixtime": time.getTime()});
}

var server = http.createServer(function(req, res) {
	// req object has url property we use to route the req
	// parse the url and query string with url.parse(req.url, true)
	var parsedURL = url.parse(req.url, true);
	res.writeHead(200, {'Content-Type' : 'application/json'});
	
	if (parsedURL.pathname == '/api/parsetime') {
		res.end(getTime(parsedURL.query.iso));
	}
	
	if (parsedURL.pathname == '/api/unixtime') {
		res.end(getUnixEpochTime(parsedURL.query.iso));
	}

}).listen(port);
