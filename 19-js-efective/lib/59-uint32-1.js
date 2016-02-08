// Wächterobjekt

var Guard = require('./59-guard-0.js');

function Uint32() {
  Guard.call(this);
}

Uint32.prototype = Object.create(Guard.prototype);

Uint32.prototype.test = function(x) {
  return typeof x === "number" && x === (x >>> 0);
};

Uint32.prototype.toString = function() {
  return "uint32";
};

module.exports = new Uint32();
