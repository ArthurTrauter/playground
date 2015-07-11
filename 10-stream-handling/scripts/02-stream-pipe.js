var fs = require('fs');
var zlib = require('zlib');

var filename = __dirname + '/../files/input.txt';
var newfile = __dirname + '/../files/input.txt.gz';

var read = fs.createReadStream(filename);
var zip  = zlib.createGzip();
var write = fs.createWriteStream(newfile);

read
  .pipe(zip)
  .pipe(write)
  // .pipe(process.stdout)
  .on('error', function (err) {
    console.log('error:', err.message);
  })
  .on('finish', function () {
    console.log('done compressing');
  });
