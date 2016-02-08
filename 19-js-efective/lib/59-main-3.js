// Plausi

var uint32 = require('./59-uint32-1.js');
var arrayLike = require('./59-arrayLike-2.js');

// var x = 12345;
var a = {
  1: "abcd",
  2: "efg",
  3: "hijk",
  length: 3
};

// console.log(uint32.guard(a));
// console.log(arrayLike.guard(a));
console.log(uint32.or(arrayLike).guard(a));
