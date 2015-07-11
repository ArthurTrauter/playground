var xhr = require('./00-xhr-functions.js');

var fileUrls = [
  'http://example.com/file1.txt',
  'http://example.com/file2.txt'
];

var promisedTexts = fileUrls.map(xhr.httpGet);

Promise.all(promisedTexts)
  .then(function(values) {
    values.forEach(function(value) {
      console.log(value);
    });
    console.log(values);
  })
  .catch(function(reason) {
    console.log(reason);
  });
