var amqp = require('amqplib');

amqp.connect('amqp://marad010')
   .then(function (conn) {
      process.once('SIGINT', function () {
         conn.close();
      });
      return conn.createChannel()
         .then(function (ch) {
            var q = 'hello';
            var ok = ch.assertQueue(q, {durable: false});

            ok = ok
               .then(function (_qok) {
                  return ch.consume(q, function (msg) {
                     console.log(" [X] Received '%s'", msg.content.toString());
                  }, {noAck: true});
               });

            return ok.then(function (_consumeOk) {
               console.log(' [*] Waiting for messages. To exit press CTRL+C');
            });
         });
   })
   .then(null, console.warn);
