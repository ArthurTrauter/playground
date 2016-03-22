(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  context.on('ready', function() {

    var pull = context.socket('PULL');
    pull.connect('events', function() {
      console.log("Starting subscriber (PULL)...");

      pull.on('data', function(msg) {
        console.log(" [x] Received %s", msg);
      });
    });

  });

}());
