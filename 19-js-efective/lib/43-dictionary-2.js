// keine Arrays zur Darstellung von Dictionaries
// wie im folgendem Fall verwenden. 
// Da durch prototype pollution (hinzufügen von zusätzlichen
// methoden zum prototype) die funktionsweise gestört wird

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
