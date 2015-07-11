var fs = require('fs');

var oldFile = __dirname + "/files/a.txt";
var newFile = __dirname + "/files/b.txt";

fs.rename(oldFile, newFile, function (err) {
  if (err) {
    return console.log(err);
  }
});

fs.stat(newFile, function (err, stats) {
  if (err) {
    return console.log(err);
  }
  console.log('stats: ' + JSON.stringify(stats));
});
