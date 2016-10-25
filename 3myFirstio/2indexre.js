var fs = require('fs')

var readableFile = fs.readFileSync(process.argv[2], 'utf8')

console.log(readableFile.split('\n').length -1);
