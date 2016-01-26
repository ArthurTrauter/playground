// Methoden mit call aufrufen. Normalerweise verweist das this einer Methode auf das Objekt
// aus dem heraus diese aufgerufen worden ist. Es ist mit einem Call auch möglich ein
// abweichendes Objekt als Basis für den Methodenaufruf mitzugeben.
var table1 = {
  entries: [],
  addEntry: function(key, value) {
    this.entries.push({
      key: key,
      value: value
    });
  },
  forEach: function(f, thisArg) {
    var entries = this.entries;
    for (var i = 0, n = entries.length; i < n; i++) {
      console.log('ENTRIES ', entries);
      var entry = entries[i];
      f.call(thisArg, entry.key, entry.value, i);
      console.log(i);
    }
  }
};

var table2 = {
  entries: [],
  addEntry: function(key, value) {
    this.entries.push({
      key: key,
      value: value
    });
  },
  forEach: function(f, thisArg) {
    var entries = this.entries;
    for (var i = 0, n = entries.length; i < n; i++) {
      console.log('ENTRIES ', entries);
      var entry = entries[i];
      f.call(thisArg, entry.key, entry.value, i);
      console.log(i);
    }
  }
};

table1.addEntry('name', 'Arthur');
table1.addEntry('vname', 'Trauter');
table1.addEntry('alter', 'jung');

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);

table1.forEach(table2.addEntry, table2);

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);
