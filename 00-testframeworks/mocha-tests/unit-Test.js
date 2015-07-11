var assert = require('assert');

var calc = require('../src/app.js');

describe('Calculator', function () {
   it('should add 1 and 2 and return 3', function () {
      var result = calc.add(1, 2);
      assert.equal(result, 3);
   });
});
