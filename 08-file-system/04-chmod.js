var fs = require('fs');

var file = __dirname + '/files/04-chmod.txt';
var mode = process.argv[2];

if (!mode) {
  mode = '764';
};

console.log(mode);

fs.chmod(file, mode, function (err) {
  if (err) throw err;
});
