var findPattern = require('./03-findPattern.js');
var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();

findPattern(
  ['fileA.txt', 'fileC.txt', 'fileB.json'], /hello \w+/g
);
events.on('fileread', function (file) {
  console.log(file + ' was read');
});
events.on('found', function (file, match) {
  console.log('Matched "' + match + '" in file ' + file);
});
events.on('error', function (err) {
  console.log('Error emitted: ' + err.message);
});
