// Versuch nr 1
"use strict";

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

var p1 = new Promise(function(resolve, reject) {
  var r = randomIntInc(100, 1000);
  setTimeout(function(r) {
    console.log('Dieser Timeout dauert %s msec', r);
    resolve("aha");
  }, r, r );
});

p1.then(function (val) {
   console.log(val);
});
