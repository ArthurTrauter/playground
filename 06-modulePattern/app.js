// simple module
require('./hello');

// global function (nicht praktikabel)
require('./foo.js');
foo();

// export an anonymous function
var bar = require('./bar.js');
bar();

// export named function
var fiz = require('./fiz.js').fiz;
fiz();

// export an anonymous object
var buz = require('./buz.js');
buz.log();

// export a named object
var baz = require('./baz.js').Baz;
baz.log();

// export an anonymous prototype
var Doo = require('./doo.js');
var doo = new Doo();
doo.log();

// export a named prototype
var Qux = require('./qux.js').Qux;
var qux = new Qux();
qux.log();

// named exports - one module, many exported things
// anonymous exports - simpler client interface

// export an anonymous object - call methode with paramter
var diz = require('./diz.js');
diz.log('prefix:');

// export an anonymous prototype - prototype with parameter
var Person = require('./person.js');
var irina = new Person('Irina');
var arthur = new Person('Arthur');
irina.whatsYourName();
arthur.whatsYourName();

// export a pure object with function
var jbo = require('./jbo.js');
jbo.log();
