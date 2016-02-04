// damit der Standardcode nicht jedes mal beim nachschlagen
// einer Eigenschaft eingesetzt werden muss, können wir dieses
// codemuster in den Dict-Konsturktor abstrahieren, der sämmtliche
// Techniken zum Erstellen stabiler Dictionaries in einer einzigen
// Datentypdefinition kapselt

// Siehe hier ein main-script zum testen dieser implementierung

var Dict = require('./45-hasOwnProperty-1.js');
var ProtoDict = require('./45-hasOwnProperty-2.js');

var dict = new Dict({
  alice: 34,
  bob: 24,
  chris: 18
});

console.log(dict.has("alice"));
console.log(dict.get("bob"));
console.log(dict.has("toString"));

var pDict = new ProtoDict();

console.log("Has proto? ", pDict.has("__proto__"));
