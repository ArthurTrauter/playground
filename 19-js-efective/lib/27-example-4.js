// Versuch nr 1
"use strict";

function repeat(n, action) {
  for (var i = 0; i < n; i++) {
    action();
  }
}

function f(resolve, reject) {
  var r = randomIntInc(100, 1000);
  setTimeout(function(r) {
    console.log('Dieser Timeout dauert %s msec', r);
    resolve("aha");
  }, r, r);
}

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}


function benchmark() {
   var start = [],
     end = [],
     timings = [];

   start.push(Date.now());
   var p1 = new Promise(f);
   p1.then(function (val) {
      console.log(val);
   }).then(function () {
      end.push(Date.now());
   }).then(function () {
      for (var i = 0, n = start.length; i < n; i++) {
        timings[i] = end[i] - start[i];
      }
      console.log(timings);
   });
}

benchmark();
