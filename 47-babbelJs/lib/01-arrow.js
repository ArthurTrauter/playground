"use strict";

var a = function a() {};
var a = function a(b) {
  return b;
};

console.log("a('hallo')", a("hallo"));

var double = [1, 2, 3].map(function (num) {
  return num + 2;
});

console.log("double", double);