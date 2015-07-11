var basename = require('path').basename;

var amqp = require('amqplib');
var when = require('when');
var defer = when.defer;
var uuid = require('node-uuid');

var n;
try {
	if (process.argv.length < 3) throw Error('Too few args');
	n = parseInt(process.argv[2]);
	console.log(n);
} catch (error) {
	console.error(error);
	console.warn('Usage: %s number', basename(process.argv[1]));
	process.exit(1);
}

amqp.connect('amqp://marad010')
	.then(function (conn) {
		return when(conn.createChannel()
			.then(function (ch) {
				var answer = defer();
				var corrId = uuid();
				
				function maybeAnswer(msg) {
					if (msg.properties.correlationId === corrId) {
						answer.resolve(msg.content.toString());
					};
				};
				
				// aufbau einer Rückgabe Queue (exclusiv)
				var ok = ch.assertQueue('', { exclusive: true })
					.then(function (qok) {
						return qok.queue;
					});
				
				// lesen der Rückgabe Queue ohne Acknowledgement
				ok = ok
					.then(function (queue) {
						return ch.consume(queue, maybeAnswer, { noAck: true })
							.then(function () {
								return queue;
							});
					});
				
				// senden RPC Request an fixe rpc_queue mit zwei Properties
				// correlationId: um die zurückgelieferten Requests zuordnen zu können und
				// replyTo: enthält die Queue auf der die Antwort zurückzusenden ist
				ok = ok
					.then(function (queue) {
						console.log(" [x] Requesting fib(%d)", n);
						ch.sendToQueue('rpc_queue', new Buffer(n.toString()),
							{ correlationId: corrId, 
							  replyTo: queue });
						return answer.promise;
					});
					
				return ok.then(function (fibN) {
					console.log(' [.] Got %d', fibN);
				});
			}))
			.ensure(function () {
				conn.close();
			});
	})
	.then(null, console.warn);