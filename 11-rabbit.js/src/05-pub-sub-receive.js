(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _ex = 'logs';
  let _opts = {
    routing: 'fanout',
    persistent: false
  }
  let _topic = '';



  context.on('ready', function() {

    var pull = context.socket('SUB');
    pull.connect(_ex, _topic, function() {
      console.log("Starting subscriber (SUB)...");

      pull.on('data', function(msg) {
        let secs = msg.toString().split('.').length - 1;
        console.log('sekunden', secs);
        console.log(" [x] Received %s", msg);

        setTimeout(function() {
          console.log(" [x] Done");
          // pull.ack(msg);
        }, secs * 1000);
      });
    });

  });



}());
