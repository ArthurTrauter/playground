// for .. in schleife
var dict = {
  alice: 43,
  bob: 42,
  chris: 19
};
var people = [];

for (var name in dict) {
  if (dict.hasOwnProperty(name)) {
    people.push(name + ": " + dict[name]);
  }
}

console.log(people);
