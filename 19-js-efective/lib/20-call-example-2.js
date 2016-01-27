// Methoden mit call aufrufen. Normalerweise verweist das this einer Methode
// auf das Objekt aus dem heraus diese aufgerufen worden ist. Es ist mit
// einem Call auch möglich ein abweichendes Objekt als Basis für den
// Methodenaufruf mitzugeben

var Table = require('./20-call-example-class.js');

var table1 = new Table();
var table2 = new Table();

table1.addEntry('name', 'Arthur');
table1.addEntry('vname', 'Trauter');
table1.addEntry('alter', 'jung');

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);

table1.forEach(table2.addEntry, table2);

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);
