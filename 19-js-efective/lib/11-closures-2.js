// Closures example
function box() {
  var val = undefined;
  return {
    set: function (newVal) { val = newVal; },
    get: function () { return val; },
    type: function () { return typeof val; }
  };
}

var b = box();
console.log(b.type());
b.set(98.6);
console.log(b.get());
console.log(b.type());
