(function(){
	"use stict";

	var Utils = require('./utils.js');

	console.log("start");
	// And below is a sample usage of this promiseWhile function
	var iCounter = 0,
		iStopCond = 10;

	Utils.promiseWhileLoop(function() {
		// Condition for stopping
		console.log('condition check: ' + (iCounter < iStopCond));
		return iCounter < iStopCond;
	}, function() {
		// Action to run, should return a promise
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				iCounter++;
				console.log(iCounter);
				resolve();
			}, 250);
		});
	})
	
	.then(function() {
		console.log("Done");
	});

})();