// keine subklassen zur darstellung von dictionaries
// wie im folgendem Fall verwenden. Und auch keine Arrays.
// Da durch prototype pollution (hinzufügen von zusätzlichen
// methoden zum prototype) die funktionsweise gestört wird
function NaiveDict() {}

NaiveDict.prototype.count = function() {
  var i = 0;
  for (var name in this) {
    i++;
    // if (this.hasOwnProperty(name)) {
    //   i++;
    // }
  }
  return i;
};

NaiveDict.prototype.toString = function() {
  return "[object NaiveDict]";
};

var dict = new NaiveDict();

dict.alice = 34;
dict.bob = 24;
dict.chris = 62;

console.log(dict.count());

// Array Beispiel NO-GO

var dict = new Array();

dict.alice = 32;
dict.bob = 34;
dict.chris = 62;

console.log(dict.bob);

Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

var names = [];
for (var name in dict) {
  names.push(name);
}

console.log(names);
console.log(names.first());
console.log(names.last());
