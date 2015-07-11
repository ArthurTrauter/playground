
var ar1 = [1, 2, 5, 9];
var wert = { 'erster': 3 };

var ar2 = ar1.map(addOne, wert);

function addOne(value) {
	this.erster ++;
	console.log("value %s - this %s", value, JSON.stringify(wert));
	return value + this.erster;
};

console.log("Aus alt '%s' mach neu '%s'", ar1, ar2);