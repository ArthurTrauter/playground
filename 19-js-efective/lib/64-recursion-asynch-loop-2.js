// Für asynchrone Schleifen sollen rekursive Aufrufe verwendet werden
// Fehler wenn Funktionen synchron zu oft sich selbst aufrufen da dadurch der Eventstack über
// läuft und dadurch das Programm hart endet
//
// Einen asynchronen Funktionsaufruf erhält man indem man einen synchronen funktionsaufruf mit
// folgenden Funktionen startet:
// - process.nextTick(function () { callbach(); });
// - setImmediate(function () { callback(); });

// function countdown(n) {
//   if (n === 0) {
//     return "done";
//   } else {
//     return countdown(n - 1);
//   }
// }

// countdown(100000);

function count(i, cb) {
  // console.log(i);
  // i--;
  process.nextTick(function() { // THATS IT! Es Funzt. Asynchroner Aufruf des callbacks!
    cb(i);
  });
  // console.log("count---- nach callback ", i);
  return;
}

function countdown1(n) {
  var startNr = n;

  function tryNext(i) {
    // console.log("tryNext--- vor count", i);
    if (i === 0) {
      console.log("done", startNr);
      return;
    }
    count(i, function(x) {
      // console.log("callback--- vor tryNext", i);
      return tryNext(x - 1);
    });
    // setTimeout(function(x) {
    //   console.log(x);
    //   tryNext(x - 1);
    // }, 10, i);
  }

  tryNext(n);
}

countdown1(10000000);
