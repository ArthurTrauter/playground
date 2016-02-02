// Daten werden im Konsturktor vorgehalten als lokale Variable ohne jemals als Instanzvariable definiert
// zu werden und können damit nur aus dem Konsturktor heraus refernziert werden. Ausserhalb des Konstruktors
// sind die Daten nicht mehr sichtbar. Nachteil ist das sämmtlich sich auf lokale Variablen
// beziehenden Methoden ebenfalls direkt am Kontruktor und nicht mit prototyp definiert werden
// müssen

function User(name, pwd) {
  this.toString = function() {
    return "[name " + name + "]";
  };
  this.checkPassword = function(password) {
    return pwd === password;
  };
}

var u = new User("trautear", "12345");

console.log(u);
console.log(u.toString());
console.log(u.checkPassword("12345"));
