'use strict';

function wrapElements(a) {
  var result = [],
    i, n;

  for (i = 0, n = a.length; i < n; i++) {
    console.log('a');
    (function(j) {
      result[i] = function() {
        console.log('b');
        return a[j];
      };
    }(i));
  }
  console.log('c', result);
  return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log('wrapElements reply: ', f());

module.exports = wrapElements;
