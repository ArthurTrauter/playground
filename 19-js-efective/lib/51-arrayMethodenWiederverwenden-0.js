// Generische Arraymethoden wie z.B. forEach können für Array ähnliche Objekte verwendet werden
// siehe Beispiel

// function highlight() {
//   [].forEach.call(arguments, function(widget) {
//     widget.setBackground("yellow");
//   });
// }

// Hier ein beispiel für ein Array-like Objekt. Einzigste Voraussetzung ist ein Objekt das
// ein korrektes Attribut length im Integertype und einen Index im Integertype besitzt

var arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

var result = [].map.call(arrayLike, function(s) {
  return s.toUpperCase();
});
console.log(result);

// STRINGS verhalten sich auch wie Arrays und besitzen das Attribut length
var result = [].map.call("hallo", function(s) {
  return s.toUpperCase();
});
console.log(result);
