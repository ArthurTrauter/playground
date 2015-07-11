var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.httpGet = function(url) {
  // console.log(url);
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(new Error(this.status + ' / ' + this.statusText));
        }
      }
    };
    request.onerror = function() {
      reject(new Error('XMLHttpRequest Error: ' + this.statusText));
    };
    request.open('GET', url);
    request.send();
  })
};

// module.exports = httpGet;
