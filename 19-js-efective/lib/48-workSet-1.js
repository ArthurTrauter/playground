// Objekte sollten nicht während einer Aufzählung durch eine for...in Schleife geändert werden!!!

// Eine WorkSet Klasse soll als Dictionary dienen um den Überblich über die zurzeit im Arbeitssatz
// enthaltenen elemente zu behalten
var Dict = require('./45-hasOwnProperty-2.js');

function WorkSet() {
  this.entries = new Dict();
  this.count = 0;
}

WorkSet.prototype.isEmpty = function() {
  return this.count === 0;
};

WorkSet.prototype.add = function(key, val) {
  if (this.entries.has(key)) {
    return;
  }
  this.entries.set(key, val);
  this.count++;
};

WorkSet.prototype.get = function(key) {
  return this.entries.get(key);
};

WorkSet.prototype.remove = function(key) {
  if (!this.entries.has(key)) {
    return;
  }
  this.entries.remove(key);
  this.count--;
};

Dict.prototype.pick = function() {
  for (var key in this.elements) {
    if (this.elements.hasOwnProperty(key)) {
      if (this.has(key)) {
        return key;
      }
    }
    throw new Error("empty dictionary");
  }
};

WorkSet.prototype.pick = function() {
  return this.entries.pick();
};

module.exports = WorkSet;
