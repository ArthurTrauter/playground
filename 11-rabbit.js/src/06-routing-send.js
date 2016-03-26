// MQ Routing Pattern
//
// Eine Erweiterung des PUB-SUB-Patterns. Nun lassen sich alle Messages nicht nur Wahllos den einzelnen
// Queues verteilen sondern per Routing-Key jeweils den passenden Queues zuordnen. Wenn man nur einen
// key nimmt und sämtichen Queues zuordnet erreicht man wieder ein fanout scenario (PUB-SUB-Pattern)
//
// direct-exchange (ausschwärmen): published alle empfangenen messages per Routing-Key an die
// entsprechende des keys zugeordneten Queues
(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _ex = 'direct_logs';
  let _opts = {
    routing: 'direct'
  }

  let _args = process.argv.slice(2);
  let _msg = _args.slice(1).join(' ') || "Hello World!";
  let _severity = (_args.length > 0) ? _args[0] : 'info';



  context.on('ready', function() {

    var pub = context.socket('PUB', _opts);
    pub.connect(_ex, function() {
      console.log("Starting publisher (PUB)...");

      pub.publish(_severity, new Buffer(_msg), 'utf8');
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
