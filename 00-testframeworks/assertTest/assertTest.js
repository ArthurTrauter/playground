// Nachteil dieses Testframeworks ist der mangelnde Informationsgehalt der Testausgabe
// und die schlechte Struturierungsmöglichkeit der Tests. Aussderdem bricht der Test
// beim ersten gefundenen Fehler ab ohne die übrigen Tests auszuühren
// wird direkt im Node-Projekt verwendet um die Node-Sourcen auszutesten

var assert = require('assert');
var app = require('../src/app.js');

(function () {
   var result = app.add(1, 2);
   assert.equal(result, 2);
   console.log('result: ', result);
}());
