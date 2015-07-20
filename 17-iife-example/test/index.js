'use strict';
var assert = require('assert');
var iifeExample = require('../lib');

describe('iife-example', function() {
  it('should have a valid returnvalue', function() {
    var wrapped = iifeExample([10, 20, 30, 40, 50]);
    var f = wrapped[0];
    assert(f(), 'a valid value, not undefined');
  });
});
