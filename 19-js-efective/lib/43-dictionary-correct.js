// Zur Darstellung von Dictionaries sollten immer direkte
// Instanzen der klasse Object verwndet werden

var dict = {};

dict.alice = 32;
dict.bob = 34;
dict.chris = 62;

console.log(dict.bob);

var names = [];

for (var name in dict) {
  names.push(name);
}

console.log(names);
