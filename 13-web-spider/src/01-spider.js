var fs = require('fs');
var path = require('path');

var mkdirp = require('mkdirp');
var request = require('request');

var utilities = require('./utilities');
var getUrlFromArgs = require('./getUrlFromArgs');

function spider(url, callback) {
  var filename = __dirname + '/../files/';
  filename += utilities.urlToFilename(url);

  fs.stat(filename, function (err, stats) {
    if (err) {
      console.log('Downloading ' + url);
      request(url, function (err, response, body) {
        if (err) {
          callback(err);
        } else {
          mkdirp(path.dirname(filename), function (err) {
            if (err) {
              callback(err);
            } else {
              fs.writeFile(filename, body, function (err) {
                if (err) {
                  callback(err);
                } else {
                  callback(null, filename, true);
                }
              });
            }
          });
        }
      });
    } else {
      callback(null, filename, false);
    }
  });
};

spider(getUrlFromArgs(), function (err, filename, downloaded) {
  if (err) {
    return console.log(err);
  }
  if (downloaded) {
    return console.log('Completed the download of "' + filename + '"');
  }
  return console.log('"' + filename + '" was allready downloaded');
});
