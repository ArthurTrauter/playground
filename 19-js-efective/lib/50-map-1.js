// Iterationsmethoden wie forEach, map und filter sind for-schleifen vorzuziehen. Und sind
// besonderst gut für Arrays geeignet auf grund der einfacheren Syntax

var input = [
  "ich bin ein Berliner     ",
  "    und ich ein eingefleischter Hamburger",
  "   Kölle alaf    "
];

var trimmed = [];
for (var i = 0, n = input.length; i < n; i++) {
  trimmed.push(input[i].trim());
}

console.log(trimmed);

trimmed = [];
input.forEach(function(_input) {
  trimmed.push(_input.trim());
});

console.log(trimmed);

// Schöner ist das ganze mit map
trimmed = [];
trimmed = input.map(function(_input) {
  return _input.trim();
});

console.log(trimmed);
