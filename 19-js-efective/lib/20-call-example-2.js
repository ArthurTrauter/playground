// Methoden mit call aufrufen. Normalerweise verweist das this einer Methode
// auf das Objekt aus dem heraus diese aufgerufen worden ist. Es ist mit
// einem Call auch möglich ein abweichendes Objekt als Basis für den
// Methodenaufruf mitzugeben

var Table = require('./20-call-example-class.js');
var Table2 = require('./20-call-example-class-2.js');

var table1 = new Table();
var table2 = new Table();
var table3 = new Table2();
var table4 = new Table2();

console.log(table3);
table1.addEntry('name', 'Arthur');
table1.addEntry('vname', 'Trauter');
table1.addEntry('alter', 'jung');

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);
console.log('---------------------------');

table1.forEach(table2.addEntry, table2);

console.log('Tabelle1: ', table1.entries);
console.log('Tabelle2: ', table2.entries);
console.log('---------------------------');

table2.forEach(table3.addEntry, table3);

console.log('Tabelle2: ', table2.entries);
console.log('Tabelle3: ', table3.entries);
console.log('---------------------------');

table3.forEachEntry(table4.addEntry, table4);

console.log('Tabelle3: ', table3.entries);
console.log('Tabelle4: ', table4.entries);
console.log('---------------------------');
