(function() {
	"use strict"

	var Queue = require("./02-queue-class.js");
	var aValues = [5, 4, 3, 2, 1];
	var iCounter = 0;

	var fnPromiseFkt = 
	aValues.forEach(function(iValue) {
		Queue.addPromise(function() {
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

	Queue.execPromiseStack()
	
	.then(function() {
		console.log("done");
	})
	
	.catch(function(e) {
		console.error("ERROR", e);
	});
})();