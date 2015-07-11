var fs = require('fs');

var filename = __dirname + '/files/03-hallo.txt';

console.time('createWriteStream');

var options = { flags: 'w',
                encoding: 'utf8',
                fd: null,
                mode: 0o666
              };

var writeStreamObject = fs.createWriteStream(filename, options);

console.timeEnd('createWriteStream');
console.log(writeStreamObject);
