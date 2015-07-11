var fs = require('fs');

var zielpfad = __dirname + '/files/b.txt';
var linkname = __dirname + '/files/link';

fs.link(zielpfad, linkname, function (err) {
  if (err) throw err;

  fs.lstat(linkname, function (err, stats) {
    if (err) throw err;
    if (stats.isSymbolicLink) {
      return console.log('Es ist ein Link');
    }
    return console.log('Es ist KEIN Link');
  });
});
