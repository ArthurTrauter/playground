(function(){

	module.exports.promiseWhileLoop = function(fnCondition, fnAction) {
		console.log('promiseWhileLoop');
		return new Promise(function(fnResolve, fnReject) {
			var loop = function() {
				if (!fnCondition()) return fnResolve();

				return Promise.resolve(fnAction())
					.then(loop)
					.catch(fnReject);
			};
			process.nextTick(loop);
			// return fnResolve();
		});
	};

	var aPromiseStack = [];

	module.exports.addPromise = function(fn, mySpecialValue) {
		console.log('addPromise ', mySpecialValue);
		aPromiseStack.push(fn);
	};

	module.exports.execPromiseStack = function() {
		console.log('execPromiseStack ' + aPromiseStack.length);
		return aPromiseStack.length && aPromiseStack.shift()()

		.then(function() {
			return this.execPromiseStack();
		}.bind(this));
	};

	module.exports.getPSLength = function() {
		return aPromiseStack.length;
	};

})();