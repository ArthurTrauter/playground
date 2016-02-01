// Versuch nr 1
"use strict";

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

var a = "UHU";
var p1 = new Promise(f);

p1.then(function (val) {
   console.log(val);
});
