// prüfen der Objekteigenschaften mit hasOwnProperty

var dict = {};

console.log("alice" in dict);
console.log("bob" in dict);
console.log("chris" in dict);
console.log("toString" in dict);
console.log("valueOf" in dict);

console.log("");

// Verhindern von falschausgaben methoden sind keine
// objektparameter
console.log(dict.hasOwnProperty("alice"));
console.log(dict.hasOwnProperty("bob"));
console.log(dict.hasOwnProperty("chris"));
console.log(dict.hasOwnProperty("toString"));
console.log(dict.hasOwnProperty("valueOf"));

console.log("");

// Überschreiben der Objektmethode hasOwnProperty möglich!
dict.hasOwnProperty = function(a) {
  return "verarscht... " + a;
};

console.log(dict.hasOwnProperty("alice")); // führt zu Fehlern

// um sich dagegen abzusichern
var hasOwn = {}.hasOwnProperty;

console.log(hasOwn.call(dict, "alice"));
