var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var findUrl =  'http://driverdan.com';
if (process.argv.length > 2) {
  findUrl = process.argv[2];
}

function httpGet(url) {
  return new Promise(
    function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            // Success
            resolve(this.responseText);
          } else {
            reject(new Error(this.statusText));
          }
        }
      }
      request.onerror = function () {
        reject(new Error('XMLHttpRequest Error: ' + this.statusText));
      };
      request.open('GET', url);
      request.send();
    });
};

httpGet(findUrl)
  .then(
    function (value) {
      console.log('Contents: ' + value);
    },
    function (reason) {
      console.error('Something went wrong', reason);
    });
