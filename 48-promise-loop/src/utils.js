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
	}

})();