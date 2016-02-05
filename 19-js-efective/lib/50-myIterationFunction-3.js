// Iterationsmethoden wie forEach, map, filter oder eigene Funktionen wie in diesem Beispiel sind
// for-schleifen vorzuziehen. Und sind besonderst gut für Arrays geeignet auf grund der
// einfacheren Syntax

function takeWhile(a, pred) {
  var result = [];
  for (var i = 0, n = a.length; i < n; i++) {
    if (!pred(a[i], i)) {
      break;
    }
    result[i] = a[i];
  }
  return result;
}

var input = [1, 2, 4, 8, 16, 32, 64];
var prefix = takeWhile(input, function(n) {
  return n < 10;
});

console.log(prefix);
