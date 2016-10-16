var net = require('net');
var port = process.argv[2];

function fillInteger(num) {
	return (num < 10 ? '0' : '') + num;
}

function getDate() {
	var d = new Date;
	return d.getFullYear() + '-'
	+ fillInteger(d.getMonth() + 1) + '-'
	+ fillInteger(d.getDate()) + ' '
	+ fillInteger(d.getHours()) + ':'
	+ fillInteger(d.getMinutes());
}

var server = net.createServer(function (socket) {
	//socket handling logic
	socket.write(getDate() + '\n');
	socket.end();
	// or socket.end(data);
})
server.listen(port);



// first arg == listen to TCP connection on port
// each connection write current date YYY-MM-DD hh:mm \n
// 2 integer filled
