var request = require('request');

var saveFile = require('./saveFile');

exports = function download(url, filepath, callback) {
  console.log('Downloading', url);
  request(url, function(err, response, body) {
    if (err) {
      return callback(err);
    }
    saveFile(filename, body, function(err) {
      console.log('Downloaded and saved: ', url);
      if (err) {
        return callback(err);
      }
      callback(null, body);
    });
  });
}
