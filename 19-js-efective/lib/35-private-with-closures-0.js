// Daten werden im Konsturktor vorgehalten als lokale Variable ohne jemals als Instanzvariable definiert
// zu werden und können damit nur aus dem Konsturktor heraus refernziert werden. Ausserhalb des Konstruktors
// sind die Daten nicht mehr sichtbar. Nachteil ist das sämmtlich sich auf lokale Variablen
// beziehenden Methoden ebenfalls direkt am Kontruktor und nicht mit prototyp definiert werden
// müssen

function User(name, pwd) {
  var _name = name;

  this.toString = function() {
    return "[name " + name + "], [_name " + _name + "]";
  };
  this.checkPassword = function(password) {
    return pwd === password;
  };
}

var u = new User("trautear", "12345");

console.log("object-u      ", u);
console.log("toString      ", u.toString());
console.log("checkPassword ", u.checkPassword("12345"));
console.log("extern call u._name ", u._name);
