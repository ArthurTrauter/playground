var exec = require('child_process').exec,
    cmd  = 'find /c/dev/projects/tmp-project/js -iname "node*"';

exec(cmd, function (err, stdout, stderr) {
   if (err) throw err;

   console.log(stdout);
   console.error(stderr);
});
