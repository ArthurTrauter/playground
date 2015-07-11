var xhr = require('./00-xhr-functions.js');

var myUrl = 'http://example.com';
// var myUrl = 'http://driverdan.com';

if (process.argv.length > 2) {
  myUrl = process.argv[2];
};

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    promise.then(resolve);
    setTimeout(function() {
      reject(new Error('Timeout after ' + ms + ' ms'));
    }, ms);
  });
};

timeout(5000, xhr.httpGet(myUrl))
  .then(function(value) {
    console.log('Contents: ' + value);
  })
  .catch(function(reason) {
    console.error('Error or timeout', reason);
  });
