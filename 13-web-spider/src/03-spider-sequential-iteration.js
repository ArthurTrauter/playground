var fs = require('fs');

var utilities = require('./utilities');
var download = require('./download');
var getUrlFromArgs = require('./getUrlFromArgs');

var spider = function(url, nesting, callback) {
  var filename = __dirname + '/../files/';
  filename += utilities.urlToFilename(url);

  fs.readFile(filename, 'utf8', function(err, body) {
    console.log('hier0');
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err);
      }
      console.log('hier1');
      return download(url, filename, function(err) {
        if (err) {
          return callback(err);
        }
        console.log('hier2');
        spiderLinks(url, body, nesting, callback);
      });
    }
    console.log('hier3');
    spiderLinks(url, body, nesting, callback);
  });
};

function spiderLinks(currentUrl, body, nesting, callback) {
  if (nesting === 0) {
    return process.nextTick(callback);
  }
  // console.log('vor links', currentUrl);
  var links = utilities.getPageLinks(currentUrl, body);

  console.log('links.length: %s', links.length);

  function iterate(index) {
    if (index === links.length) {
      return callback(null, currentUrl, false);
    }
    console.log('links[index]', links[index]);
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
