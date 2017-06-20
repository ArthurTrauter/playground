(function() {
	"use strict"

	var Utils = require("./utils.js");
	var aValues = [5, 4, 3, 2, 1];
	var iCounter = 0;

	aValues.forEach(function(iValue) {
		Utils.addPromise(function() {
			// Action to run, should return a promise
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					iCounter++;
					console.log(iCounter, iValue);
					resolve();
				}, 250);
			});
		});
	});
	console.log('before exec length: ' + Utils.getPSLength());
	Utils.execPromiseStack()
	
	.then(function() {
		console.log("done");
	})
	
	.catch(function(e) {
		console.error("ERROR", e);
	});
})();