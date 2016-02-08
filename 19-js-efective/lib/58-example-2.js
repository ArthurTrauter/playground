// Unterscheiden von Arrays und arrayähnlichen Objekten

var StringSet = require('./58-stringset-1.js');

var set = new StringSet();

set.add("hamlet");
set.add(["hamlet1", "hamlet2"]);
set.add({
  "hamlet3": 1,
  "hamlet4": 1,
  "hamlet5": 1
});

console.log(set.contains("hamlet"));
console.log(set.contains("hamlet2"));
console.log(set.contains("hamlet4"));
console.log(set.contains("gibtsnet"));
