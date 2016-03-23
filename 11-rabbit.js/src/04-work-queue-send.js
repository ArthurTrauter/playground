// Work Queue Pattern
// 
// Jeder Task wurde immer nur einem Worker zugeordnet. Es können mehrere Worker
// auf eine Queue horchen und bedienen sich sobald sie eine Nachricht in der Queue
// entdecken die nicht bereits von einem anderen Worker allociert wurde.
// Eine Nachricht wird aus der Queue ausgetragen wenn der worker die msg aknowledged!
// Damit sich ein Worker mit allokieren und bearbeiten von Nachrichten übernimmt und
// evtl. weitere verfügbare Worker nichts zu tun haben, kann der prefetch-parameter
// gesetzt werden. Dieser definiert wieviele Messages gleichzeitig von einem Worker
// allokiert werden dürfen
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
  }, 500);



}());
