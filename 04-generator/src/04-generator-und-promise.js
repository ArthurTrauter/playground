var prom = require('./00-promise-fkt.js');
var maxLoop = require('./00-maxloop.js');

var generatorFn = function*(num) {
  var ms = 800;
  while (num-- > 0) {
    yield prom.promiseFkt(ms += 200);
  };
};

function async(generatorFn) {
  var gen = generatorFn(maxLoop);
  var resume = function(promise) {
    return promise.then(function(text) {
      console.log(text);
      var next = gen.next(text);
      if (!next.done) {
        return resume(next.value);
      }
    });
  };
  return resume(gen.next().value);
};

async(generatorFn);
