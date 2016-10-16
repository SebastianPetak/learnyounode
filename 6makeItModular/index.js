var myModule = require('./myModule.js');
var dirName = process.argv[2];
var ext = process.argv[3];

myModule(dirName, ext, function(err, files) {
	if (err) {
		console.error("An error has occured: ", err);
	} else {
		files.forEach(function(file) {
			console.log(file);
		})
	}
});
