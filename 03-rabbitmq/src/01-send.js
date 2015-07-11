var amqp = require('amqplib');
var when = require('when');

amqp.connect('amqp://marad010')
   .then(function (conn) {
      return when(conn.createChannel()
         .then(function (ch) {
            var q = 'hello';
            var msg = 'Hallo Welt!';
            var ok = ch.assertQueue(q, {durable: false});

            return ok
               .then(function (_qok) {
                  ch.sendToQueue(q, new Buffer(msg));
                  console.log(" [x] Sent '%s'", msg);
                  return ch.close();
               });
      })).ensure(function () {
         conn.close();
      });
   })
   .then(null, console.warn);
