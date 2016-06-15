var xhr = require('./00-xhr-functions.js');

var myUrls = [
  'http://driverdan.com',
  'http://google.com'
];

xhr.httpGet(myUrls.shift())
  .then(function(value) {
    console.log('my first value %s', value);
    return xhr.httpGet(myUrls.shift());
  })
  .then(function(value) {
    console.log('my second value %s', value);
  })
  .catch(function(reason) {
    console.log('something went wrong: %s', reason);
  });

let a = 'b'
