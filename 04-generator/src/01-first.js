var maxLoop = require('./00-maxloop.js');

var generatorFn = function*(max) {
  var i = 0;

  while (i < max) {
    yield i++;
  };
};

var gen = generatorFn(maxLoop);

// for (var i = 0; i < 12; i++) {
//   console.log(gen.next());
// };

var done = false;

while (!done) {
  var ret = gen.next();
  console.log(ret);
  done = ret.done;
};
