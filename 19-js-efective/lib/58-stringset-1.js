// Unterscheiden von Arrays und arrayähnlichen Objekten

function StringSet() {
  this.strings = [];
}

function addString(x) {
  this.strings.push(x);
}

StringSet.prototype.add = function(x) {
  if (typeof x === "string") {
    addString.call(this, x);
  } else if (Array.isArray(x)) {
    x.forEach(function(s) {
      addString.call(this, s);
    }, this);
  } else {
    for (var key in x) {
      if (x.hasOwnProperty(key)) {
        addString.call(this, key);
      }
    }
  }
};

StringSet.prototype.contains = function(s) {
  if (typeof s === "string") {
    var index = this.strings.indexOf(s);
    return index >= 0 ? true : false;
  }
};

module.exports = StringSet;
