// Verweise auf arguments sollten immer in einer Variable gespeichert werden
// da jede aufgerufene funktion eine eigene arguments variable besitzt.
// Um Fehler zu vermeiden sollte man arguments und sämtliche Verweise auf Arguments
// in lokalen variablen speichern
'use strict';

var it = values(1, 7, 9, 13, 5, 10, 21);

for (var i = 0, n = 8; i < n; i++) {
  console.log('Wert %s: %s', i, it.next());
}

function values() {
  var i = 0,
    n = arguments.length,
    args = arguments;

  var hasNext = function() {
    return i < n;
  }

  var next = function() {
    if (i >= n) {
      throw new Error('keine weiteren items vorhanden');
    }
    return args[i++];
  }

  return {
    hasNext: hasNext,
    next: next
  }
}
