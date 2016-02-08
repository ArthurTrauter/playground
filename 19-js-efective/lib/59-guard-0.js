// Wächterobjekt

function Guard() {}

Guard.prototype.guard = function(x) {
  if (!this.test(x)) {
    throw new TypeError("expected " + this);
  }
  return "OK";
};

Guard.prototype.or = function(other) {
  var result = Object.create(this);
  var self = this;

  result.test = function(x) {
    return self.test(x) || other.test(x);
  };

  var description = this + " or " + other;

  result.toString = function() {
    return description;
  };

  return result;
};

Guard.prototype.toString = function() {
  return "Main-Guard object";
};

module.exports = Guard;
