// create new directory and a new file
// append text to new file
// read file, delete file, delete directory
var fs = require('fs');

var directory = __dirname + '/files/new';
var newFileName = "/newFile.txt";

fs.mkdir(directory, '777', function (err) {
  if (err) throw err;

  fs.writeFile(directory + newFileName, 'Hier steht was drin\n', 'utf8', function (err) {
    if (err) throw err;

    var textString = 'Dies ist ein neuer Absatz indiesem grandiosen File';

    fs.appendFile(directory + newFileName, textString, function (err) {
      if (err) throw err;

      fs.readFile(directory + newFileName, 'utf8', function (err, data) {
        if (err) throw err;

        console.log(data);

        fs.unlink(directory + newFileName, function (err) {
          if (err) throw err;

          fs.rmdir(directory, function (err) {
            if (err) throw err;

            console.log('directory ' + directory + ' deleted!');
          });
        });
      });
    });
  });
});
