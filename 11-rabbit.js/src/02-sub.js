var context = require('rabbit.js').createContext('amqp://localhost');

context.on('ready', function () {
  process.on('SIGINT', function () {
    context.close();
  });

  var sub = context.socket('SUB');
  sub.connect('events', function () {
    console.log("Starting subscriber (consumer)...");

    // sub.on('data', function (msg) {
    //   console.log(' [x] Received: %s', msg.toString('utf8'));
    // });
    sub.on('readable', function () {
      var buf = sub.read();
      console.log('houston we have an answer from quick.orange.rabit: %s', buf.toString('utf8'));
    });
  });
});

context.on('error', console.warn);
