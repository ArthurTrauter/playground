var amqp = require('amqplib');

function fib(n) {
	var a = 0, b = 1;
	for (var i = 0; i < n; i++) {
		var c = a + b;
		a = b;
		b = c;
	}
	return a; 
}

amqp.connect('amqp://marad010')
	.then(function (conn) {
		process.once('SIGINT', function () {
			conn.close();
		});
		
		return conn.createChannel()
			.then(function (ch) {
				var q = 'rpc_queue';
				var ok = ch.assertQueue(q, { durable: false });
				
				ok = ok
					.then(function () {
						ch.prefetch(1);
						return ch.consume(q, reply);
					});
				
				return ok
					.then(function () {
						console.log(' [x] Awaiting RPC requests');
					});
				
				function reply(msg) {
					var n = parseInt(msg.content.toString());
					console.log(' [.] fib(%d)', n);
					var response = fib(n);
					ch.sendToQueue(msg.properties.replyTo, 
						new Buffer(response.toString()), 
						{ correlationId: msg.properties.correlationId });
					ch.ack(msg);
				};
			});
	})
	.then(null, console.warn);