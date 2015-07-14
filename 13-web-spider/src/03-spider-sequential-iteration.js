var fs = require('fs');

var utilities = require('./utilities');
var download = require('./download');
var spiderLinks = require('./spiderLinks');
var getUrlFromArgs = require('./getUrlFromArgs');

exports = function spider(url, nesting, callback) {
  var filename = utilities.urlToFilename(url);
  fs.readFile(filename, 'utf8', function(err, body) {
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err);
      }
      download(url, filename, function(err) {
        if (err) {
          return callback(err);
        }
        spiderLinks(url, body, nesting, callback);
      });
    }
    spiderLinks(url, body, nesting, callback);
  });
};

spider(getUrlFromArgs(), function(err, filename, downloaded) {
  if (err) {
    return console.log(err);
  }
  if (downloaded) {
    return console.log('Completed the download of "' + filename + '"');
  }
  return console.log('"' + filename + '" was allready downloaded');
});
