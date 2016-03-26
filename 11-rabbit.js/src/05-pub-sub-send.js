// Publish / Subscribe Pattern
//
// Eine Nachricht wird vielen unterschiedlichen Empfängern zugeordnet. Dazu wird ein Exchange
// definiert. Dieser muss einenen speziellen Exchange-Typ definieren
//
// fanout-exchange (ausschwärmen): published alle empfangenen messages an alle ihm bekannten queues
// ohne acknowledgement
(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _msg = process.argv.slice(2).join(' ') || "Hello World!";
  let _ex = 'logs';
  let _opts = {
    routing: 'fanout'
  }
  let _topic = '*';



  context.on('ready', function() {

    var pub = context.socket('PUB', _opts);
    pub.connect(_ex, function() {
      console.log("Starting publisher (PUB)...");

      pub.publish(_topic, new Buffer(_msg), 'utf8');
      console.log("Message writen", _msg);
    });

  });



  context.on('error', function(err) {
    console.log(err);
  });



  setTimeout(function() {
    context.close();
    process.exit(0);
  }, 500);



}());
