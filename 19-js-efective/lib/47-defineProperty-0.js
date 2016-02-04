// Verunreinigungen (hinzufügen von Methoden) an das Object.prototype gibt
// uns eine sehr mächtiche Möglichkeit Objektfuntionalität zu erweitern.
// zwingt jedoch alle Anwendungen die Objekte nutzen sich in for...in Schleifen
// dagegen zu schützen. ES5 liefert jedoch mit der Methode Object.defineProperty
// eine Möglichkeit Eigenschaften (Methoden) mitsamt ihrer Metadaten zu
// definieren. Dadurch wird es möglich zusätzlich Eigenschaften zu definieren
// die in for...in Schleifen nicht sichtbar sind:

Object.defineProperty(Object.prototype, "allKeys", {
   value: function () {
      var result = [];
      for (var key in this) {
         // if (this.hasOwnProperty(key)) {
            result.push(key);
         // }
      }
      return result;
   },
   writable: true,
   enumerable: false,
   configurable: true
});

var obj = {
   a: "a",
   b: "b"
};

for (var value in obj) {
   // if (obj.hasOwnProperty(value)) {
      console.log(value);
   // }
}

console.log(obj.allKeys());
