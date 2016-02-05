// "undefined" sollte als nicht vorhanden behandelt werden

// Anstatt arguments auf arguments.length abzufragen bietet sich oft die truthiness-Prüfung
// an die u.a. undefined prüft

function Element(width, height) {
  this.width = width || 320;
  this.height = width || 240;
}

// Achtung 0 wird auch als false gesehen
var c = new Element(0, 0);

console.log(c.width); // 320
console.log(c.height); // 240

// Um 0-Werte oder Leerzeichen ebenfalls korrekt prüfen zu können muss eine ausführliche
// Prüfung auf undefined erfolgen

function Element1(width, height) {
  this.width = width === undefined ? 320 : width;
  this.height = height === undefined ? 240 : height;
}

var d = new Element1(0, 0);

console.log(d.width); // 0
console.log(d.height); // 0
