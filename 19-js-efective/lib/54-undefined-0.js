// "undefined" sollte als nicht vorhanden behandelt werden

// nicht initialisierte Variable
var x;
console.log(x);

// nicht vorhandne Eigenschaft
var obj = {};
console.log(obj.x);

// funktion mit nicht definiertem Returnwert
function f() {
  return;
}
console.log(f());

// funktionsparameter ohne echte Argumente
function f(x) {
  return x;
}
console.log(f());
