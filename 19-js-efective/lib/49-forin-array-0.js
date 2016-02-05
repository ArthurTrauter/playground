// for...in Schleifen sind für Objekte sehr nützlich. Doch für Arrays sind sie eher weniger
// geeignet da sie über Schlüsselwerte iterieren (bei den Arrays sind es die indizies) und
// nicht wie erwartet über die Array-Werte

var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var score in scores) {
  if (scores.hasOwnProperty(score)) {
    total += score;
  }
}
var mean = total / scores.length;

console.log("mean mit for...in Schleife ", mean); // 17636.571428571428

total = 0;
for (var i = 0, n = scores.length; i < n; i++) {
  total += scores[i];
}

var mean = total / scores.length;

console.log("mean mit for Schleife      ", mean); // 88
