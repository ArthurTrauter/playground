// Iterationsmethoden wie forEach, map, filter, eigene Funktionen oder every wie in diesem Beispiel
// sind for-schleifen vorzuziehen. Und sind besonderst gut für Arrays geeignet auf grund der
// einfacheren Syntax

// every ist eigentlich dafür gedacht zu prüfen ob in einer Liste alle elemente einem
// definierten Kriterium entsprechen. Dafür wird eine schleife durchlaufen und sobald ein element
// false ausgibt wird die schleife automatisch unterbrochen
//
// some funktionert auf die Gleiche weise. Es wird geprüft ob mindestens ein element in einer
// liste den übergebenen Kriterien entspricht. Sobald ein true gefunden wird wird die iteration
// der Liste unterbrochen und ein true zurückgegeben

function takeWhile(a, pred) {
  var result = [];

  a.every(function(x, i) {
    if (!pred(x)) {
      return false;
    }
    result[i] = x;
    return true;
  });
  return result;
}

var input = [1, 2, 4, 8, 16, 32, 64];
var prefix = takeWhile(input, function(n) {
  return n < 10;
});

console.log(prefix);
