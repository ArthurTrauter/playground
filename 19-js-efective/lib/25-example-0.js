(function() {
  'use strict';

  var buffer = {
    storage: [],
    add: function(a) {
      this.storage.push(a);
    },
    getConcat: function() {
      var result = this.storage.join("");
      this.storage = [];
      return result;
    }
  };

  try {
    var source = ["123", "-", "9876"];
    source.forEach(buffer.add);
    console.log('Versuch 1: ', buffer.getConcat());
  } catch (e) {
    console.log('Versuch 1 siehe folgender error: ', e);
  }

  var source = ["456", "-", "5432"];
  source.forEach(buffer.add, buffer);
  console.log('Versuch 2 mit buffer als opionalen Parameter: ', buffer.getConcat());

  var source = ["789", "-", "1098"];
  source.forEach(buffer.add.bind(buffer));
  console.log('Versuch 3 mit bind: ', buffer.getConcat());

}());
