var fs = require('fs');

var mkdirp = require('mkdirp');

exports = function saveFile(filename, contents, callback) {
  mkdirp(path.dirname(filename), function(err) {
    if (err) {
      return callback(err);
    }
    fs.writeFile(filename, contents, callback);
  });
};
