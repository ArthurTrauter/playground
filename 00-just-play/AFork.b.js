var fork = require('child_process').fork;

if (process.argv[2] && process.argv[2] === 'child') {
   var i,
       n = 1,
       results = 1;

   outerLoop: while (results <= 1000) {
      n += 1;
      for (var i = 2; i < Math.sqrt(n); i++) {
         if (n % i === 0) {
            continue outerLoop;
         }
      }
      process.send({"prime": n});
      results += 1;
   }
   process.exit();

} else {
   var child1 = fork(process.argv[1], ['child']);
   var child2 = fork(process.argv[1], ['child']);
   var child3 = fork(process.argv[1], ['child']);

   child1.on('message', function (data) {
      console.log(('child1: ' + data.prime));
   });
   child2.on('message', function (data) {
      console.log(('child2: ' + data.prime));
   });
   child3.on('message', function (data) {
      console.log(('child3: ' + data.prime));
   });
}
