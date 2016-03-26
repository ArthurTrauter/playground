// MQ Topic Pattern
//
// Eine Erweiterung des PUB-SUB-Patterns. Nun lassen sich alle Messages nicht nur Wahllos den einzelnen
// Queues verteilen (fanout) oder per festen Routing-Key-Parameter abgreifen (direct) sondern per
// Token-Key mit mehrfachen Zuordnungskriterien jeweils den passenden Queues zuordnen. Die Queus
// bekommen Topics mit Wildcards;
//
// * (genau ein topic parameter)
// # (keines oder beliebig viele topic parameter)
//
// topic-parameter werden per . getrennt notiert
//
// topic-exchange: published alle empfangenen messages per topic-Key an die
// entsprechende des keys zugeordneten Queues
//
// topic-key wird beim senden an die publish function übergeben. beim empfänger wird der
// topic-key samt wildcards beim binding durch die connect-funktion definiert
(function() {
  'use strict';

  var context = require('rabbit.js').createContext('amqp://localhost');

  let _ex = 'topic_logs';
  let _opts = {
    routing: 'topic'
  }

  let _args = process.argv.slice(2);
  let _msg = _args.slice(1).join(' ') || "Hello World!";
  let _severity = (_args.length > 0) ? _args[0] : 'anonymous.info';



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
