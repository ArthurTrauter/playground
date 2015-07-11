var fs = require('fs');
var winston = require('winston');

winston.level = 'info';

var directory = __dirname + '/files';

fs.watch(directory, function (event, filename) {
  winston.info('event: ', event);

  if (filename) {
    winston.info('filename providet: ' + filename);
  } else {
    winston.info('filename not providet!');
  }

});
