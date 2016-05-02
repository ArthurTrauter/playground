(function() {
  'use strict';

  var Bacon = require("baconjs").Bacon;



  var stream = Bacon.fromBinder(function(sink) {
    sink("first value");
    sink([new Bacon.Next("2nd"), new Bacon.Next("3rd")]);
    sink(new Bacon.Next(timeFunc(2000, "hallo", function() {
      return "This one will be evaluated lazily";
    })));
    sink(new Bacon.Error("oops, an error"));
    sink(new Bacon.End());
    return function() {
      // unsub functionality here, this one's a no-op
      console.log("Noop");

    };
  });

  stream.log();

  function timeFunc(time, value, cb) {
    setTimeout(function() {
      console.log("timeout %s / %s", time, value);
      cb(value);
    }, time);
  }


}());
