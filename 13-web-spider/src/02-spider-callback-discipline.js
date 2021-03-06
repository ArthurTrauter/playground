var fs = require('fs');

var download = require('./download');
var utilities = require('./utilities');
var getUrlFromArgs = require('./getUrlFromArgs');

function spider(url, callback) {
  var filename = __dirname + '/../files/';
  filename += utilities.urlToFilename(url);

  fs.stat(filename, function(err, stats) {
    if (err == null) {
      return callback(null, filename, false);
    }
    download(url, filename, function(err) {
      if (err) {
        return callback(err);
      }
      callback(null, filename, true);
    });
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
