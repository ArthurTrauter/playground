(function() {
  'use strict';

  var Bacon = require("baconjs").Bacon;

  var sourceObj = [{
    subattr: ["eins", "zwei", "drei"]
  }, {
    subattr: ["vier", "fünf"]
  }, {
    subattr: ["sechs"]
  }];

  var tempTime = [1000, 1500, 500, 3000, 750, 2000];



  var read = Bacon.fromArray(sourceObj)

  .flatMap(function(value) {
    console.log("flatMap1-value", value);
    var subValues = value.subattr;
    return Bacon.fromArray(subValues)

    .flatMap(function(value) {
      console.log("flatMap2-value", value);
      var time = tempTime.shift();
      return Bacon.fromCallback(timeFunc, time, value);
    });
  });


  read.onError(function(error) {
    return console.log("Reading failed", error);
  });

  read.onValue(function(value) {
    return console.log("onValue", value);
  });

  function timeFunc(time, value, cb) {
    setTimeout(function() {
      console.log("timeout %s / %s", time, value);
      cb(value);
    }, time);
  }

}());
