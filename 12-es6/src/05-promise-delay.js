
function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms); // (A)
  });
}

// using delay();
delay(5000)
  .then(function () { // (B)
    console.log('5 seconds have passed!');
  });
