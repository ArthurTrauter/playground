var fs = require('fs');

var utilities = require('./utilities');
var download = require('./download');
var getUrlFromArgs = require('./getUrlFromArgs');

var spider = function (url, nesting, callback) {
  var filename = __dirname + '/../files/';
  console.log(url);
  filename += utilities.urlToFilename(url);

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

function spiderLinks(currentUrl, body, nesting, callback) {
  if (nesting === 0) {
    return process.nextTick(callback);
  }
  var links = utilities.getPageLinks(currentUrl, body);

  function iterate(index) {
    if (index === links.length) {
      return callback();
    }
    spider(links[index], nesting--, function(err) {
      if (err) {
        return callback(err);
      }
      iterate(index++);
    });
  }
  iterate(0);
};

spider(getUrlFromArgs(), 10, function(err, filename, downloaded) {
  if (err) {
    return console.log(err);
  }
  if (downloaded) {
    return console.log('Completed the download of "' + filename + '"');
  }
  return console.log('"' + filename + '" was allready downloaded');
});
