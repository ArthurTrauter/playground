var amqp = require('amqplib');

amqp.connect('amqp://marad010')
   .then(function (conn) {
      process.once('SIGINT', function () {
         conn.close();
      });
      return conn.createChannel()
         .then(function (ch) {
            var q = 'task_queue';
            var ok = ch.assertQueue(q, {durable: true});

            ok = ok
               .then(function () {
                  ch.consume(q, doWork, {noAck: false});
                  console.log(" [*] Waiting for messages. To exit press CTRL+C");
               });
            return ok;

            function doWork (msg) {
               var body = msg.content.toString();
               console.log(" [x] Received '%s'", body);
               var secs = body.split('.').length - 1;
               setTimeout(function () {
                  console.log(" [x] Done");
                  ch.ack(msg);
               }, secs * 1000);
            }
         });
   })
   .then(null, console.warn);
