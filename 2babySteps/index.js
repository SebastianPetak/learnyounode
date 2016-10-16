var sum = function() {
	var numbers = process.argv.slice(2, process.argv.length);
	return total = numbers.reduce(function(a, b) {
		return Number(a) + Number(b);
	});
};

console.log(sum());
