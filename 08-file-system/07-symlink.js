var fs = require('fs');

var zieldatei = __dirname + "/files/03-hallo.txt";
var symlinkName = __dirname + "/links/03-hallo-link.txt";

fs.symlink(zieldatei, symlinkName, function (err) {
  if (err) throw err;
  fs.lstat(symlinkName, function (err) {
    if (err) throw err;
    return console.log('ein echter symlink');
  });
});
