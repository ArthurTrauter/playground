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

	module.exports.waitForPromise = function(oPromise, iMs) {
		while (!oPromise.pending) {
			syncWait(iMs);
		}
	};

	/* blödsinn -> dadurch wird der js stack blockiert */
	function syncWait(iMs) {
		var start = Date.now(),
			now = start;
		while (now - start < iMs) {
			now = Date.now();
		}
	}

	/* blödsinn -> dadurch wird der js stack blockiert */
	module.exports.waitForPromiseSimple = function(oPromise) {
		while (!oPromise.pending) {
			setTimeout(function() {
				console.log("ich will auch mal drankommen");
			}, 0);
		}
		return oPromise;
	};

	module.exports.waitForPromiseThird = function(oPromise) {
		while (!oPromise.pending) {
			new Promise(function(res, rej) {
				waitForPromiseThird(oPromise);
			});
		};
		return oPromise;
	}

})();