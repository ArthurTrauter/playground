var context = require('rabbit.js').createContext('amqp://localhost');

context.on('ready', function () {
  if (process.argv.length < 3) {
    console.log("housten we have to fiew parameters '%s'", process.argv.slice(2).join(' '));
    return context.close();
  }
  var msg = process.argv[2];
  console.log('Message: %s', msg);

  var pub = context.socket('PUB');
  pub.connect('events', function () {
    console.log("Starting publisher...");

    console.log(' [x] Write: %s', msg);
    pub.end(msg, 'utf8');
  });

  pub.on('close', function () {
    return context.close();
  })
});

context.on('end', function () {
  context.close();
});

context.on('error', console.warn);
