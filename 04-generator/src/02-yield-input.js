var generatorFn = function*() {
  var i = yield 23;
  return i;
};

var gen = generatorFn();

// beim ersten Aufruf der Next funktion
// läuft diese bis zum yield. somit hat
// die Übergabe eines Wertes im ersten Aufruf
// der Yield.next Funktion keinen Effekt
// beim zweiten Aufruf wird das yield an dieser
// Stelle durch den übergenen Wert ersetzt
// und liefert damit ein gültiges Ergebnis
console.log(gen.next(72)); // value: 23
console.log(gen.next(42)); // value: 42
