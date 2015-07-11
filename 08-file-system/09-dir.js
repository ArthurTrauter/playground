var fs = require('fs');
var fse = require('fs-extra');

var directory = __dirname + '/files/new';
var newFileName = "/newFile.txt";

fs.mkdir(directory, '777', function (err) {
  if (err) throw err;

  fs.writeFile(directory + newFileName, 'Hier steht was drin', 'utf8', 'mode=777', 'flag=w', function (err) {
    if (err) throw err;
    console.log('file is written');

    fs.readdir(directory, function (err, files) {
      if (err) throw err;

      if (files) {
        console.log('files is true', files.length);

        for (var i = 0; i < files.length; i++) {
          console.log(i + '. ' + files[i]);
        }
      } else {
        console.log('no files found');
      }

      fse.remove(directory, function (err) {
        if (err) throw err;
        console.log('success: directory recursivly deleted');
      });
      // fs.rmdir(directory, function (err) {
      //   if (err) throw err;
      // });
    });
  });

});
