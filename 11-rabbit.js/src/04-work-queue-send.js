(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _msg = process.argv.slice(2).join(' ') || "Hello World!";
  let _q = 'events';
  let _opts = {
    persistent: true
  }



  context.on('ready', function() {

    var pub = context.socket('PUSH', _opts);
    pub.connect(_q, function() {
      console.log("Starting publisher (PUSH)...");

      pub.write(_msg, 'utf8');
    });

  });



  setTimeout(function() {
    context.close();
    process.exit(0);
  }, 1000);



}());
