var timeHelper = function (dateObj) {
   return dateObj.getHours() + ':' + dataObj.getMinutes();
}

var TimeTracker = function () {
   this._date;
   this._startTime;
   this._endTime;
   this._task;
}

TimeTracker.prototype = {
   get date() { return this._date; },
   set date (date) { this._date = date; return this; },
   get startTime() { return this._startTime; },
   set startTime (startTime) { this._startTime = startTime; return this; },
   get endTime() { return this._endTime; },
   set endTime (endTime) { this._endTime = endTime; return this; }
};

Object.defineProperty(TimeTracker.prototype, "task", {
   get: function () { return this._task; }
   set: function (task) { this._task = task; return this; }
});

TimeTracker.prototype.start = function (task) {
   var now = new Date();
   this.date = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear();
   this.startTime = timeHelper(now);
   this.task = task;
};

TimeTracker.prototype.end = function () {
   var now = new Date();
   this.endtime = timeHelper(now);
};

TimeTracker.prototype.toString = function () {
   var result = this.date + ' ';
   result += this.startTime + ' ';
   result += this.endTime + ' ';
   result += this.task;
   return result;
};

module.exports = TimeTracker;
