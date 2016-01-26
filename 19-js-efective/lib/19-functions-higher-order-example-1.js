// Funktionen häherer Ordnung sind Funktionen die andere Funktionen als Argument übernehmen oder
// als Ergebnis Funktionen zurückgeben. Callback-Funktionen

// Beispiel-Sort
var arr = [3, 1, 4, 1, 5, 9];

function compareNumbers(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

console.log(arr.sort(compareNumbers));

// Beispiel uppercase
var names = ['Arthur', 'Irina', 'Tim', 'Lina'];
var upper = names.map(function(name) {
  return name.toUpperCase();
});
console.log(upper);
