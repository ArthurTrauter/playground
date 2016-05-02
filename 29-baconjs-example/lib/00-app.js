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
    console.log("flatMap2-value", value);
    return directory + '/' + value;
  })
  .flatMap(function (value) {
    return Bacon.fromNodeCallback(fs.readFile, value, 'utf8');
  })
  .reduce([], function (seed, value) {
     console.log("reduce4-value", JSON.parse(value));
     seed.push(JSON.parse(value));
     return seed;
  })
  .flatMap(function (value) {
     return console.log("flatMap5-value", value);
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
