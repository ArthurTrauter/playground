// Funktion mit this
function hello() {
  "use strict";
  return 'hello, ' + this.username;
}
var obj1 = {
  hello: hello,
  username: 'Bob Bello'
};

var obj2 = {
  hello: hello,
  username: 'Biff Tannen'
};

console.log(obj1.hello());
console.log(obj2.hello());
console.log(hello());
