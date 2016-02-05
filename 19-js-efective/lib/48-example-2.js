// Objekte sollten nicht während einer Aufzählung durch eine for...in Schleife geändert werden!!!
// Um dies zu verhindern kann man zur Steuerung ein Dictionary verwenden und damit die for...in
// Schleife durch eine while Schleife ersetzen!
// Alternativ lässt sich das Objekt durch ein Array ersetzen, doch damit bekommen wir eine
// deterministische Verarbeitung (Die Reihenfolge der Verarbeitung ist immer gleich)

var WorkSet = require('./48-workSet-1.js');

function Member(name) {
  this.name = name;
  this.friends = [];
}

Member.prototype.inNetwork = function(other) {
  var visited = {};
  var workset = new WorkSet();

  workset.add(this.name, this);

  while (!workset.isEmpty()) {
    var name = workset.pick();
    var member = workset.get(name);
    workset.remove(name);
    if (name in visited) {
      continue;
    }
    visited[name] = member;
    if (member === other) { // Gefunden
      return true;
    }
    member.friends.forEach(function(friend) {
      workset.add(friend.name, friend);
    });
  }
  return false;
};

var a = new Member("Alice");
var b = new Member("Bob");
var c = new Member("Carol");
var d = new Member("Dieter");
var e = new Member("Eli");
var f = new Member("Fatima");

a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

console.log(a.inNetwork(f));
