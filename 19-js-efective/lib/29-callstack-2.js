// arguments.callee, arguments.caller und caller funktionseigenschaft sollten
// vermieden werden!
// 
// callstack versuch mit caller funktionseigenschaft
function getCallStack() {
  var stack = [];
  for (var f = getCallStack.caller; f; f = f.caller) {
    stack.push(f);
  }
  return stack;
}

function f1() {
  return getCallStack();
}

function f2() {
  return f1();
}

var trace = f2();
console.log(trace);

// Bei rekursiven Funktionen führt der Aufruf der getCallStack zu einer Endlosschleife
function fEndlos(n) {
  return n === 0 ? getCallStack() : fEndlos(n - 1);
}
console.log(fEndlos(1));
