var fs = require('fs');

var utilities = require('./utilities');
var download = require('./download');
var getUrlFromArgs = require('./getUrlFromArgs');

var spider = function(url, nesting, callback) {
  console.log(' [x] spider', url  );
  var filename = __dirname + '/../files/';
  filename += utilities.urlToFilename(url);

  fs.readFile(filename, 'utf8', function(err, body) {
    console.log('hier0', url, body == undefined);
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err);
      }
      console.log('hier1', url, body == undefined);
      return download(url, filename, function(err, body) {
        if (err) {
          return callback(err);
        }
        console.log('hier2', url, body == undefined);
        spiderLinks(url, body, nesting, callback);
      });
    }
    console.log('hier3', url, body == undefined);
    spiderLinks(url, body, nesting, callback);
  });
};

function spiderLinks(currentUrl, body, nesting, callback) {
console.log(' [x] spiderLinks');
  if (nesting === 0) {
    return process.nextTick(callback);
  }
  // console.log('vor links', currentUrl);
  var links = utilities.getPageLinks(currentUrl, body);

  console.log('links.length: %s', links.length);

  function iterate(index) {
    if (index === links.length) {
      console.log('------------------ FERTIG ------------------');
      return callback(null, currentUrl, false);
    }
    console.log('links[index]', links[index], index, nesting);
    spider(links[index], nesting - 1, function(err) {
      if (err) {
        return callback(err);
      }
      iterate(index + 1);
    });
  }
  iterate(0);
};

spider(getUrlFromArgs(), 1, function(err, filename, downloaded) {
  if (err) {
    return console.log(err);
  }
  if (downloaded) {
    return console.log('Completed the download of "' + filename + '"');
  }
  return console.log('"' + filename + '" was allready downloaded');
});
