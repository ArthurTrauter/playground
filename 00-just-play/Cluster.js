var cluster = require('cluster');

if (cluster.isMaster) {
   cluster.setupMaster({ silent: true });

   setTimeout(cluster.disconnect, 2000);

   cluster.on('exit', function () {
      console.log('Worker wurden nach 10000ms beendet');
   });

   cluster.fork();
   cluster.fork();
}

if (cluster.isWorker) {
   var http = require('http');
   http.createServer(function (req, res) {
      console.log('Worker ' + cluster.worker.id);
      res.end('Worker ' + cluster.worker.id);
   }).listen(8080);
}
