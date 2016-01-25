// error example fixable with iife

function wrapElementsFaulty(a) {
  var result = [],
    i,
    n;

  for (var i = 0; i < a.length; i++) {
    result[i] = function() {
      return a[i];
    };
  }
  return result;
}

function wrapElements(a) {
  var result = [];

  for (var i = 0; i < a.length; i++) {
    (function(j) {
      result[i] = function() {
        return a[j];
      };
    }(i));
  }
  return result;
}

var wrappedFaulty = wrapElementsFaulty([10, 20, 30, 40, 50]);
var fFaulty = wrappedFaulty[0];
console.log("Faulty: ", fFaulty());

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log("Correct: ", f());
