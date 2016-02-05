// Iterationsmethoden wie forEach sind for-schleifen vorzuziehen. Und sind besonderst gut für
// Arrays geeignet auf grund der einfacheren Syntax
// (Wiederholung: for...in Schleifen eignen sich für Objekt-Durchläufe bei dennen die
// Objekteigenschaften während der Iteration nicht verändert werden. Für anzupassende Objekte
// sollte man while-Schleifen oder for-schleifen verwenden)

var players = [{
  score: 10
}, {
  score: 20
}, {
  score: 5
}];

for (var i = 0, n = players.length; i < n; i++) {
  players[i].score++;
}

console.log(players);

players.forEach(function(p) {
  p.score++;
});

console.log(players);
