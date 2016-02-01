(function() {
  'use strict';

  // var async = require('async');

  function repeat(n, action) {
    for (var i = 0; i < n; i++) {
      action();
    }
  }

  function benchmark() {
    var start = [],
      end = [],
      timings = [];

    repeat(10, function() {
      start.push(Date.now());
      f();
      end.push(Date.now());
    });

    for (var i = 0, n = start.length; i < n; i++) {
      timings[i] = end[i] - start[i];
    }

    return timings;
  }

  function f() {
    var r = randomIntInc(100, 1000);
    setTimeout(function(r) {
      console.log('Dieser Timeout dauert %s msec', r);
    }, r, r);
  }

  function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  console.log(benchmark());

}());
