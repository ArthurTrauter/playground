(function() {
  'use strict';

  function Table() {
    this.entries = {};
  }

  Table.prototype.addEntry = function(key, value) {
    this.entries[key] = value;
  }

  Table.prototype.forEachEntry = function (f, thisArg) {
    var aKeys = Object.keys(this.entries);
    aKeys.map(function (sKey) {
      var sValue = this.entries[sKey];
      f.call(thisArg, sKey, sValue);
    }, this);
  }

  module.exports = Table;
}());
