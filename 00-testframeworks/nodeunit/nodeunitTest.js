var calc = require('../src/app.js');

exports.testAddition = function (test) {
   var result = calc.add(1, 2);
   test.equal(result, 3);
   test.done();
};
