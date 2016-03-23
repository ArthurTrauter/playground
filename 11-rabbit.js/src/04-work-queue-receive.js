(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _q = 'events';
  let _opts = {
    persistent: true
  }



  context.on('ready', function() {

    var pull = context.socket('WORKER');
    pull.connect(_q, function() {
      console.log("Starting subscriber (WORKER)...");

      pull.on('data', function(msg) {
        let secs = msg.toString().split('.').length - 1;
        console.log('sekunden', secs);
        console.log(" [x] Received %s", msg);

        setTimeout(function() {
          console.log(" [x] Done");
          pull.ack(msg);
        }, secs * 1000);
      });
    });

  });



}());
