// arguments.callee rekursive selbstaufrufe anonymer funktionen
var factorial = function(n) {
  return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
};

console.log(factorial(5));

function factorial1(n) {
  return (n <= 1) ? 1 : (n * factorial1(n - 1));
}

console.log(factorial1(5));
