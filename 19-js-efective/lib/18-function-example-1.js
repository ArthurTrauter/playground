// funktion
function hello(username) {
  return 'hello, ' + username;
}
console.log(hello('Arthur'));

// Methode
var obj = {
  hello: function () {
    return 'hello, ' + this.username;
  },
  username: 'Max Mustermann'
};
console.log(obj.hello());

// This Bindung innerhalb der Methode verweist auf das gerade gebundene Objekt
var obj2 = {
  hello: obj.hello,
  username: 'Arthur Trauter'
};
console.log(obj2.hello());

// Konsturktor ist auch nur eine einfache Funktion die jedoch mit NEW aufgerufen wird
function User(name, passwordHash) {
  this.name = name;
  this.passwordHash = passwordHash;
}
var user = new User('trautear', 'asdfasdfasdfasdfasdf');
console.log('Objekt aus Konstruktor heraus user.name: ', user.name);
console.log('Das User objekt: ', user);
