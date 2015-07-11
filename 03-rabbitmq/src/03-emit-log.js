var amqp = require('amqplib');
var when = require('when');

amqp.connect('amqp://marad010')
	.then(function (conn) {
		return when(conn.createChannel()
			.then(function (ch) {
				var ex = 'logs'; // exchange name
				var msg = process.argv.slice(2).join(' ') || 'info: Hello World!';
				var ok = ch.assertExchange(ex, 'fanout', {durable: false});
				
				return ok
					.then(function () {
						ch.publish(ex, '', new Buffer(msg));
						console.log(" [x] Sent '%s'", msg);
						return ch.close();
					});
			}))
			.ensure(function () {
				conn.close();
			});
	})
	.then(null, console.warn);