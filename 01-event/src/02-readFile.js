var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');

emitter.on('start_read', function (file_name) {
   console.log("started readeing file... \n\n");
   fs.readFile(__dirname + file_name, 'utf8', function (err, data) {
      if (err) {
         emitter.emit('error', 'from_read');
      } else {
         console.log("done reading file... \n");
         emitter.emit('print_content', data);
      }
   });
});

emitter.on('print_content', function (data) {
   console.log("printing content of file... \n");
   console.log(data);
   emitter.emit('done');
});

emitter.on('error', function (type) {
   console.log("faced error while " + type);
   emitter.emit('done');
});

emitter.on('done', function () {
   console.log("ok its done!");
});

emitter.emit('start_read', '/../files/input.txt');
