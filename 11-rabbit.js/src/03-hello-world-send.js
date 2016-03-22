(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  context.on('ready', function() {

    var pub = context.socket('PUSH');
    pub.connect('events', function() {
      console.log("Starting publisher (PUSH)...");
      var q = 'hello';

      pub.write(q, 'utf8');
    });

  });

  setTimeout(function() {
    context.close();
    process.exit(0);
  }, 1000);


}());
