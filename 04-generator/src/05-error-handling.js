function* throwErrorFunction() {
  yield 'aha';
};

function callErrorFunction(throwErrorFunction) {

  var gen = throwErrorFunction();
  console.log(gen.next());
  gen.throw('oha ein error');
};

try {
  callErrorFunction(throwErrorFunction);
} catch (e) {
  console.log('im Error catcher: ', e);
}
