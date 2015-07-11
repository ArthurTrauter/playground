var prom = require('./00-promise-fkt.js');
var maxLoop = require('./00-maxloop.js');

var generatorFn = function*(num) {
  var ms = 800;
  while (num-- > 0) {
    yield prom.promiseFkt(ms += 200);
  };
};

// A: erstelle eine Generator Funktion
// B: aufruf der resume funktion mit Übergabe des ersten promises
//    generiert durch die generator funktion
// C: neue Funktion bekommt ein Promise übergeben
// D: wenn das promise erfüllt ist wird
// E: das Ergebnis ausgegeben und anschließextend
// F: der Generator um ein neues promise gebeten
// G: solange der generator weitere promises erzeugen kann
// H: wird die resume funktion weiterhin rekursiv aufgerufen
function async(generatorFn) {
  var gen = generatorFn(maxLoop); // A
  var resume = function(promise) { // C
    return promise.then(function(text) { // D
      console.log(text); // E
      var next = gen.next(text); // F
      if (!next.done) { // G
        return resume(next.value); // H
      }
    });
  };
  return resume(gen.next().value); // B
};

async(generatorFn);
