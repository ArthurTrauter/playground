"use strict"

var a = new Set();

a.add(1);
a.add("zufälliger text");
a.add("foo");

console.log(a.has(1));
console.log(a.delete("foo"));
console.log(a.size);

console.log(a.add(1));

for (let i of a) {
  console.log(i);
};

// Überführen eines Sets in einen Array mit
// es6 mitteln: Array.from oder [...mySet]
console.log(b);
