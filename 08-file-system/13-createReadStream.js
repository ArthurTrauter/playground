var fs = require('fs');

var filename = __dirname + '/files/03-hallo.txt';

var options = { flags: 'r',
                encoding: 'utf8',
                fd: null,
                mode: 0o666,
                autoClose: true
              };

var readStreamObject = fs.createReadStream(filename, options);

console.log(readStreamObject);
