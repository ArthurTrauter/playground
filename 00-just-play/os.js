var os = require('os');

var Monitor = function () {
   this.hostname = os.hostname();
   this.sysInfo = 'on a ' + os.type() + ' ' + os.platform() + ' ' + os.arch()
                  + ' System with ' + os.cpus().length + ' CPUs';
   this.totalmem = os.totalmem() / 1048576 ;
   this.uptime;
   this.freemem;
   this.load;
}

Monitor.prototype.setUptime = function () {
   var sec = os.uptime();
   var hrs = Math.floor(sec / 3600),
       min = Math.floor((sec - hrs * 3600) / 60),
       sec = (sec - hrs * 3600 - min * 60);
       this.uptime = hrs + ':' + min + ':' + sec;
};

Monitor.prototype.setFreemem = function () {
   this.freemem = this.formatNumber(os.freemem() / 1048576);
};

Monitor.prototype.setLoad = function () {
   this.load = this.formatNumber(os.loadavg()[0]);
};

Monitor.prototype.formatNumber = function (num) {
   return Math.round(num * 100) / 100;
};

Monitor.prototype.clearScreen = function () {
   for (var i = 0; i < process.stdout.rows; i++) {
      console.log('\r\n');
   }
};

Monitor.prototype.update = function () {
   this.setUptime();
   this.setFreemem();
   this.setLoad();
   return this;
};

Monitor.prototype.output = function () {
   this.clearScreen();
   console.log(this.hostname);
   console.log(this.sysInfo);
   console.log('Uptime: ' + this.uptime);
   console.log('Freemem: ' + this.freemem + ' MB of ' + this.totalmem + ' MB');
   console.log('Load: ' + this.load);
};

var sysMon = new Monitor();
setInterval(function () {sysMon.update().output()}, 2000);
