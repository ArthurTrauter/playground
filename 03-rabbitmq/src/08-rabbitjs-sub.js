var context = require('rabbit.js')
  .createContext('amqp://marad010');

context.on('ready', function() {
  process.once('SIGINT', function() {
    context.close();
  })
  var sub = context.socket('SUB');
  sub.connect('events', function() {
    console.log('Subscriber is connected... to close push CTRL+C');

    sub.setEncoding('utf8');
    sub.on('data', function(note) {
      console.log('Nachricht: %s', note);
    });
  });
});

context.on('error', function(err) {
  if (err) {
    throw err;
  }
});
