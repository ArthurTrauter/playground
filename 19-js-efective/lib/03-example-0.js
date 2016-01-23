// implizite Typumwandlung

// Objekte zu Strings
console.log("the Math object: " + Math);

// toString
console.log('Math.toString() ', Math.toString());

// valueOf Ojekte zu Zahlen
console.log('J + object', "J" + { toString: function () { return "S"; }});
console.log('2 * object', 2 * { valueOf: function () { return 3 }});

// valueOf vor toString
var obj = {
  toString: function () {
    return "[object MyObject]";
  },
  valueOf: function () {
    return 10;
  }
};
console.log('"object: " + obj ', "object: " + obj);

// EMPFEHLUNG: valueOf vermeiden solange nicht unbedingt notwendig
