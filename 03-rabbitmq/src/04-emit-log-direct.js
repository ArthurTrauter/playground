var amqp = require('amqplib');
var when = require('when');

var args = process.argv.slice(2);
var severity = (args.length > 0) ? args[0] : 'info';
var msg = args.slice(1).join(' ') || 'Hallo Welt!';

amqp.connect('amqp://marad010')
	.then(function (conn) {
		return when(conn.createChannel()
			.then(function (ch) {
				var ex = 'direct_logs';
				var ok = ch.assertExchange(ex, 'direct', {durable: false});
				
				return ok
					.then(function () {
						ch.publish(ex, severity, new Buffer(msg));
						console.log(" [x] Sent %s: '%s'", severity, msg);
						return ch.close();
					});
			}))
			.ensure(function () {
				conn.close();
			});
	})
	.then(null, console.warn);