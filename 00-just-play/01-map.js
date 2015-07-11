"use strict";

var a = new Map();

a.set("hund", "woof");
a.set("katze", "miow");
a.set("maus", "peep");

console.log(a.get("vogel"));
console.log(a.has("katze"));
console.log(a.delete("hund"));
console.log(a.size);

for (let value of a) {
  console.log(value[0] + " macht " + value[1]);
};
