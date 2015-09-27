var fs = require('fs');

var Bacon = require("baconjs").Bacon;

Bacon.sequentially(1000, ["B", "A", "C", "O", "N"]).log();

// Read directory
var directory = __dirname + "/../files";

var read = Bacon.fromNodeCallback(fs.readdir, directory)
  .flatMap(function (value) {
    console.log("flatMap1-value", value);
    return Bacon.fromArray(value);
  })
  .flatMap(function (value) {
    return console.log("flatMap2-value", value);
  });

read.onError(function (error) {
  return console.log("Reading failed", error);
});

// var files = read.onValue(function (value) {
//   return Bacon.fromArray(value);
// });

// read.onValue(function (value) {
//   return console.log("Read value", value);
// });
