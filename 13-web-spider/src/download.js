var request = require('request');

var saveFile = require('./saveFile');

function download(url, filepath, callback) {
  console.log('Downloading', url);
  request(url, function(err, response, body) {
    if (err) {
      return callback(err);
    }
    saveFile(filepath, body, function(err) {
      console.log('Downloaded and saved: ', url);
      if (err) {
        return callback(err);
      }
      callback(null, body);
    });
  });
};

module.exports = download;
