// damit das promise funktioniert müssen die Promisefunctions innerhalb des .then
// sämtliche asynchrone Vorgänge kapseln!

(function() {
  'use strict';

  let fileUrls = [
    'http://example.com/file1.txt'
  ];

  let promisedUrls = fileUrls.map(function(value) {
    console.log(value);
    return Promise.resolve(value);
  });

  console.log('before promise.all', promisedUrls);

  Promise.all(promisedUrls)

  // asynchrone function innerhalb des body und sofortiges return des Data ohne Promise
  // folgendes then wird sofort ausgeführt
  .then(function(data) {
    console.log('then-1   0000', data);
    setTimeout(function(data) {
      console.log('then-1-a 2000', data);
      return Promise.resolve(data);
    }, 2000, data);

    return data;
  })

  // asynchrone function innerhalb des body und sofortiges return des Data mit Promise
  // folgendes then wird sofort ausgeführt
  .then(function(data) {
    console.log('then-2   0000', data);
    setTimeout(function(data) {
      console.log('then-2-a 1500', data);
      return Promise.resolve(data);
    }, 1500, data);

    return Promise.resolve(data);
  })

  // Promise kapselt return.
  // folgendes then wird erst nach promise resolve ausgeführt
  .then(function(data) {
    console.log('then-3   0000', data);
    return new Promise(function(resolve) {
      setTimeout(function(data, resolve) {
        console.log('then-3-a 1000', data);
        return resolve(data);
      }, 1000, data, resolve);
    });
  })

  .then(function(data) {
    console.log('then-4   0000', data);
  })

  .catch(function(err) {
    console.error('catch', err);
  });

}());
