// Geordnete Collections (Reihenfolge der Wertpaare relevent)
// sollte als Array abgebildet werden

// Implementierung mit Array aus Objekten

function report(highScores) {
  var result = "";
  for (var i = 0, n = highScores.length; i < n; i++) {
    var score = highScores[i];
    result += (i + 1) + ". " + score.name + ": " + score.points + "\n";
  }
  return result;
}

var highScores = [{
  name: "hank",
  points: "1110100"
}, {
  name: "steve",
  points: "1064500"
}, {
  name: "billy",
  points: "1050200"
}];

console.log(report(highScores));
