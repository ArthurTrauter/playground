(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _ex = 'direct_logs';
  let _opts = {
    routing: 'direct',
    persistent: false
  }
  let _topic = '';

  let _args = process.argv.slice(2);

  if (_args.length === 0) {
    console.log("Usage: 06-routing-receive.js [info] [warning] [error]");
    process.exit(1);
  }



  context.on('ready', function() {

    var pull = context.socket('SUB', _opts);

    _args.forEach(function(_severity) {
      pull.connect(_ex, _severity, function() {
        console.log("Starting subscriber (SUB) with Routing-Key %s ...", _severity);
      });
    });

    pull.on('data', function(msg) {
      console.log(" [x] Received %s", msg);
    });

  });



}());
