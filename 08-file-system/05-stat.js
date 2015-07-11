var fs = require('fs');

var file = 'files/03-hallo.txt';

fs.stat(file, function (err, stats) {
  if (err) throw err;
  console.log('birthtime: ', stats.birthtime);

  if (stats.isFile) {
    console.log('it is a file');
  } else {
    console.log('no it is not a file');
  }

  // directory
  console.log(stats.isCharacterDevice());
  console.log(stats.isBlockDevice());
  console.log(stats.isFIFO());
  console.log(stats.isDirectory());
  console.log(stats.isSocket());
});
