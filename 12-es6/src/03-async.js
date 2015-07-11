var fs = require('fs');
var async = require('async');

var fileNames = ['foo.txt', 'bar.txt', 'baz.txt'];
var path = __dirname + '/../files/'
console.log(path + fileNames[1]);
async.map(fileNames,
  function (fileName, cb) {
    fs.readFile(path + fileName, { encoding: 'utf8'}, cb);
  },
  // Process the result
  function (error, textArray) {
    if (error) {
      return console.log(error);
    }
    console.log('TEXTS:\n' + textArray.join('\n----\n'));
  }
);
