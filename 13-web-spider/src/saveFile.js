var fs = require('fs');
var path = require('path');

var mkdirp = require('mkdirp');

function saveFile(filename, contents, callback) {
  mkdirp(path.dirname(filename), function(err) {
    if (err) {
      return callback(err);
    }
    fs.writeFile(filename, contents, callback);
  });
};

module.exports = saveFile;
