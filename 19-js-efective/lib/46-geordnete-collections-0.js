// Geordnete Collections (Reihenfolge der Wertpaare relevent)
// sollte als Array abgebildet werden

// folgende Implementierung könnte in unterschiedlichen
// Umgebungen zu verschiedenen Abfolge der Ausgabe führen
function report(highScores) {
  var result = "";
  var i = 1;
  for (var name in highScores) {
    if (highScores.hasOwnProperty(name)) {
      result += i + ". " + name + ": " + highScores[name] + "\n";
      i++;
    }
  }
  return result;
}

var highScores = {
  hank: 1110100,
  steve: 1064500,
  billy: 1050200
};

console.log(report(highScores));
