// Wächterobjekt

var Guard = require('./59-guard-0.js');
var uint32 = require('./59-uint32-1.js');

function ArrayLike() {
  Guard.call(this);
}

ArrayLike.prototype = Object.create(Guard.prototype);

ArrayLike.prototype.test = function(x) {
  return typeof x === "object" && x && uint32.test(x.length);
};

ArrayLike.prototype.toString = function() {
  return "array-like object";
};

module.exports = new ArrayLike();
