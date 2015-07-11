
// MODUL einbinden
var myEmail = require('./globObjectsModul.js').email("arthur.trauter@mannheimer.de");
var util = require('util');

// globale Prameter __dirnamen und __filename
console.log("dirname %s, filename %s", __dirname, __filename);

// UTIL Funktionalität
util.log(util.format("dirname %s, filename %s", __dirname, __filename));
util.puts(util.format("dirname %s, filename %s", __dirname, __filename));
util.debug(util.format("dirname %s, filename %s", __dirname, __filename));
util.error(util.format("dirname %s, filename %s", __dirname, __filename));

console.log(myEmail);
util.error(myEmail);

// INSPECT
console.log(util.inspect(Buffer));

// INHERIT
var Parent = function () {};
Parent.prototype.doSomething = function () {
   console.log('Parent: do something');
};

var Child = function () {};
util.inherits(Child, Parent);
Child.prototype.doSomethingElse = function () {
   console.log('Child: do something else');
};

var child = new Child();
child.doSomething();
child.doSomethingElse();
