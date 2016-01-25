// named functions

// Funktionsdeklaration
function double(x) {
   return x * 2;
}

// benannter Funktionsausdruck (named function)
var f1 = function double(x) {
   return x * 2;
}

// annonyme Funktion
var f2 = function(x) {
   return x * 2;
}

console.log("double(3) ", double(3));
console.log("f1(3)     ", f1(3));
console.log("f2(3)     ", f2(3));
