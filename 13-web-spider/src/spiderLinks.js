var utilities = require('./utilities');
var spider = require('./03-spider-sequential-iteration');

exports = function spiderLinks(currentUrl, body, nesting, callback) {
  if (nesting === 0) {
    return process.nextTick(callback);
  }
  var links = utilities.getPageLinks(currentUrl, body);

  function iterate(index) {
    if (index === link.index) {
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
}
