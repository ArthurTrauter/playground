var fs = require('fs');
var util = require('util');

var filename = __dirname + '/files/03-hallo.txt';

fs.access(filename, fs.F_OK, function (err) {
  console.error(err ? 'not visible' : 'i see');
});

fs.access(filename, fs.W_OK | fs.R_OK, function (err) {
  console.error(err ? 'not readable/writable' : 'i can read and write');
});

fs.access(filename, fs.X_OK, function (err) {
  console.error(err ? 'not executable' : 'run!');
});
