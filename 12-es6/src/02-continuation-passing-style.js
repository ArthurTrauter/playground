console.log('A');

identity('B', function step2 (result2) {
  console.log(result2);
  identity('C', function step3 (result3) {
    console.log(result3);
  });
  console.log('D');
});
console.log('E');

function identity(input, callback) {
  setTimeout(function () {
    callback(input);
  }, 0);
};

// Output: A E B D C
