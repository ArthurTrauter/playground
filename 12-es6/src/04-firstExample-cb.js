var fs = require('fs');

fs.readFile(__dirname + '/../files/config.json',
  function (error, text) {
    if (error) {
      console.error('Error while reading config file');
    } else {
      try {
        var obj = JSON.parse(text);
        console.log(JSON.stringify(obj, null, 4));
      } catch (e) {
        console.error('Invalid JSON in file');
      }
    }
  });
