var fs = require('fs');

var linkname = __dirname + '/links/03-hallo-link.txt';

fs.readlink(linkname, function (err, linkString) {
  if (err) throw err;
  return console.log(linkString);
});
