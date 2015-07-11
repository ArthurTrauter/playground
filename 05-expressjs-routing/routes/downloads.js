var fs = require('fs');
var path = require('path');

var mime = require('mime');
var express = require('express');
var router = express.Router();

var cb0 = function (req, res, next) {
  console.log('you are in the download-area...');
  next();
};

router.get('/', cb0, function (req, res) {
  res.send('you are in downloads root');
});

router.get('/*', cb0, function (req, res) {
  var file = __dirname + '/files' + req.url;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  console.log(filename, mimetype);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  fs.stat(file, function (err, stat) {
    if (err) {
      console.log(JSON.stringify(err));
      return res.sendStatus(404);
    }

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
  });

  // res.sendFile(file);
});

// router.get('/report*', cb0, function (req, res) {
//   res.download('/report-2015.txt', 'report-2015.txt', function (err) {
//     if (err) {
//       return console.log(err);
//     }
//   });
//   res.sendStatus(404);
// });

module.exports = router;
