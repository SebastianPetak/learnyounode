fs = require('fs');
path = process.argv[2];

var linecount = fs.readFile(path, function(err, data) {
	if (err) {
		console.error("There has been an error: ", err);
	} else {
		var lines = data.toString().split('\n').length - 1;
		console.log(lines);
	}
});
