// Konstruktoraufruf ohne new führt zu undefined
function User(name, pwd) {
  this.name = name;
  this.pwd = pwd;
}

var u = User("Arthur", "password1");

console.log(u);

// Um dies zu verhindern gibt es die folgenden Möglichkeiten die Funktion ohne new aufrufbar zu machen
function User1(name, pwd) {
  if (!(this instanceof User1)) {
    return new User1(name, pwd);
  }
  this.name = name;
  this.pwd = pwd;
}

var u1 = User1("Arthur", "password1");
var u2 = new User1("Arthur", "password1");

console.log(u1);
console.log(u2);

// 2te. Möglichkeit
function User2(name, pwd) {
  var self = this instanceof User2 ? this : Object.create(User2.prototype);
  self.name = name;
  self.pwd = pwd;
  return self;
}

var u3 = User2("Arthur", "password1");
var u4 = new User2("Arthur", "password1");

console.log(u3);
console.log(u4);
