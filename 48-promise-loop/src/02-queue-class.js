(function(){

	var myQueue = function() {
		console.log('initialized');
		this.aPromiseStack = [];
	};

	myQueue.prototype.addPromise = function(fn, mySpecialValue) {
		console.log('addPromise ', mySpecialValue);
		this.aPromiseStack.push(fn);
	};

	myQueue.prototype.execPromiseStack = function() {
		console.log('execPromiseStack ' + this.aPromiseStack.length);
		return this.aPromiseStack.length && this.aPromiseStack.shift()()

		.then(function() {
			return this.execPromiseStack();
		}.bind(this));
	};

	module.exports = new myQueue();

})();