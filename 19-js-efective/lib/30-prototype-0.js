// prototype Objektattribut
// getPrototype() liefert den Prototypen einer Instans ES5
// __proto__ liefert ebenfalls einen Prototyp einer Instans vor ES5

function User(name, pwd) {
  this.name = name;
  this.pwd = pwd;
}

User.prototype.toString = function() {
  return "[User ] " + this.name + "]";
};

User.prototype.checkPassword = function(password) {
  return this.pwd === password;
};

var u = new User("trautear", "abcd1");

console.log(u);
console.log(u.checkPassword("abcd1"));
console.log(u.checkPassword("abcd2"));

console.log("getPrototypeOf ", Object.getPrototypeOf(u) === User.prototype);

console.log("__proto__ ", u.__proto__ === User.prototype);
