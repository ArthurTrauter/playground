var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-iname', 'A*'], {'cwd': '../'});

find.on('error', function (data) {
   console.log(data.toString());
})
find.stderr.on('data', function (data) {
   console.error('Error: ' + data.toString());
});
find.stdout.on('data', function (data) {
   console.log(data.toString());
});

find.stdout.on('exit', function (data) {
   console.log('onExit: ' + data);
})
