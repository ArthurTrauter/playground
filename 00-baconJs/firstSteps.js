var Bacon = require('baconjs');
var fs = require('fs');
var path = require('path');

var arr = ['a','b','c', new Bacon.Error('Es brennt!')];

// 1.
// Bacon.fromCallback(function (cb) {
//    setTimeout(function () {
//       cb("Bacon!")
//    }, 1000);
// }).log();

// 2.
// var bacon = Bacon.constant('bacon');
// var fcbStream1 = Bacon.fromCallback(function (a, b, cb) {
//    cb(a + ' ' + b);
// }, bacon, 'rules').log();

// 3. failed
// var obj = {
//    myMethode: function (str) {
//       return new Buffer(str);
//    }
// }
//
// var fcbStream = Bacon.fromCallback(obj, 'myMethode', 'Hello bacon!');
// fcbStream.onError(function (error) { console.log("3.Fehler: " + error); });
// fcbStream.onValue(function (value) { console.log("3: " + value); });

// 4.
// var read = Bacon.fromNodeCallback(fs.readFile, 'index.html');
// read.onError(function (error) { console.log("Reading faild: " + error); });
// read.onValue(function (value) { console.log("Read contents: " + value); });

// 4.1. 
// var read = Bacon.fromNodeCallback(fs.realpath, './');
// read.onError(function (error) { console.log("Reading faild: " + error); });
// read.onValue(function (value) { console.log("Read contents: " + value); });

// 5. failed
var polling = Bacon.fromPoll(1000, function () {
   return "hallo: " + new Date().getTime();
});
polling.take(5).log();

// 6.
// Bacon.fromArray(arr).log();

// 7.
// Bacon.interval(1000, "a").take(10).log();

// 7.1.
Bacon.interval(1000).map(function () { return new Date().getTime(); }).take(5).log();

// 8.
// Bacon.sequentially(2000, arr).log();

// 9.
// Bacon.repeatedly(500, arr).take(20).log();

// 10.
// Bacon.never().log();

// 11.
// Bacon.later(3000, "uiuiuiuiiii").log();

// 12. failed ???
// new Bacon.EventStream(subscribe);
// property.changes
// property.toEventStream()
// new Bacon.Bus()
// Bacon.Error

// 13. Entweder die Values oder der Error??!?
var stream = Bacon.fromBinder(function (sink) {
   sink('first value');
   sink([new Bacon.Next('2nd'), new Bacon.Next('3rd')]);
   sink(new Bacon.Next(function () {
      return "This one will be evaluated lazily";
   }));
   sink(new Bacon.Error("oops, an error"));
   sink(new Bacon.End());
   return function () {

   }
});
stream.log();
