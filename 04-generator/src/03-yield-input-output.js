function* generatorFn() {
  var sum = yield [1, 2, 3];
  var factor = 2;
  return sum * factor;
};

var gen = generatorFn();

var arr = gen.next().value;
console.log('array:  ', arr);

setTimeout(function() {
  var sum = arr.reduce(function(x, y) {
    return x + y;
  });
  console.log('summe:  ', sum);

  var result = gen.next(sum).value;
  console.log('result: %s (%s * 2)', result, sum);
}, 1000);
