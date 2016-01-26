// Beispiel für Funktionen höherer Ordnung
var aIndex = 'a'.charCodeAt(0);
var alphabet = '';
for (var i = 0; i < 26; i++) {
  alphabet += String.fromCharCode(aIndex + i);
}
console.log(alphabet);

var digits = '';
for (var i = 0; i < 10; i++) {
  digits += i;
}
console.log(digits);

var random = '';
for (var i = 0; i < 8; i++) {
  random += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
}
console.log(random);

// Alternative mit callback alse funktion höherer Ordnung gelöst!
function buildString(n, callback) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += callback(i);
  }
  return result;
}
console.log(buildString(26, function(index) {
  return String.fromCharCode(aIndex + index);
}));
console.log(buildString(10, function(index) {
  return index;
}));
console.log(buildString(8, function(index) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
}));
