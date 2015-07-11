var basename = require('path').basename;

var amqp = require('amqplib');
var all = require('when').all;

var severities = process.argv.slice(2);
if (severities.length < 1) {
	console.warn('Usage: %s [info] [warning] [error]', basename(process.argv[1]));
	process.exit(1);
}

amqp.connect('amqp://marad010')
	.then(function (conn) {
		process.once('SIGINT', function () {
			conn.close();
		});
		
		return conn.createChannel()
			.then(function (ch) {
				var ex = 'direct_logs';
				var ok = ch.assertExchange(ex, 'direct', {durable: false});
				
				ok = ok
					.then(function () {
						return ch.assertQueue('', {exclusive: true});
					});
				
				ok = ok
					.then(function (qok) {
						var queue = qok.queue;
						return all(severities.map(function (sev) {
							ch.bindQueue(queue, ex, sev);
						}))
							.then(function () {
								return queue;
							});
					});
					
				ok = ok
					.then(function (queue) {
						return ch.consume(queue, logMessage, {noAck: true});
					});
					
				return ok
					.then(function () {
						console.log(' [*] Waiting for logs. The exit press CTRL+C');
					});
					
				function logMessage(msg) {
					console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
					console.log(msg.toString());
				};
			});
	})
	.then(null, console.warn);