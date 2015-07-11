// file-descriptor

// Anpassen der Größe der übergebenen Datei

var fs = require('fs');

var file = __dirname + '/files/03-hallo.txt';
var newFile = __dirname + '/files/03-';

fs.truncate(file, '12', function (err) {
  if (err) throw err;
});

// TRUNCATE generiert keine neuen Dateien
//
// function createNewFile(argument) {
//   var fileName = newFile + argument;
//   fs.truncate(fileName, '0', function (err) {
//     if (err) throw err;
//   });
//   fs.stat('fileName', function (err, stats) {
//     if (err) throw err;
//     console.log(JSON.stringify(stats));
//   });
// }
//
// createNewFile('created.txt');
