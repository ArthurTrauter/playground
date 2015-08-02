(function() {
  'use strict';

  var it = values(1, 7, 9, 13, 5, 10, 21);

  for (var i = 0, n = 7; i < n; i++) {
    console.log('Wert %s: %s', i, it.next());
  }

  function values() {
    var i = 0,
      n = arguments.length,
      args = arguments;

    return {
      hasNext: function() {
        return i < n;
      },
      next: function() {
        if (i >= n) {
          throw new Error('keine weiteren items vorhanden');
        }
        return args[i++];
      }
    }
  }

}());
