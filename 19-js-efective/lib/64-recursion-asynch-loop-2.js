// Für asynchrone Schleifen sollen rekursive Aufrufe verwendet werden
// Fehler wenn Funktionen synchron zu oft sich selbst aufrufen

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
  cb(i);
}

function countdown1(n) {

  function tryNext(i) {
    if (i === 0) {
      return;
    }
    // count(i, function(x) {
    //   tryNext(x - 1);
    // });
    setTimeout(function(x) {
      console.log(x);
      tryNext(x - 1);
    }, 10, i);
  }

  tryNext(n);
}

countdown1(6000);
