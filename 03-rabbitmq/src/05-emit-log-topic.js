var amqp = require('amqplib');
var when = require('when');

var args = process.argv.slice(2);
var key = (args.length > 0) ? args[0] : 'info';
var msg = args.slice(1).join(' ') || 'Hallo Welt!';

amqp.connect('amqp://marad010')
	.then(function (conn) {
		return when(conn.createChannel()
			.then(function (ch) {
				var ex = 'topic_logs';
				var ok = ch.assertExchange(ex, 'topic', { durable: false });
				
				return ok
					.then(function () {
						ch.publish(ex, key, new Buffer(msg));
						console.log(" [x] Send: %s: '%s'", key, msg);
						return ch.close();
					});
			}))
			.ensure(function () {
				conn.close();
			});
	})
	.then(null, console.warn);