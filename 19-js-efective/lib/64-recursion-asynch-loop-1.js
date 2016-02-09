// Für asynchrone Schleifen sollen rekursive Aufrufe verwendet werden
// Fehler wenn Funktionen synchron zu oft sich selbst aufrufen

function countdown(n) {
  if (n === 0) {
    return "done";
  } else {
    return setTimeout(function(x) {
      console.log(x);
      countdown(x - 1);
    }, 10, n);
  }
}

countdown(100000);
