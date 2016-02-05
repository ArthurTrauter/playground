// Objekte sollten nicht während einer Aufzählung durch eine for...in Schleife geändert werden!!!

function Member(name) {
  this.name = name;
  this.friends = [];
}

Member.prototype.inNetwork = function(other) {
  var visited = {};
  var workset = {};

  workset[this.name] = this;

  for (var name in workset) {
    if (workset.hasOwnProperty(name)) {
      var member = workset[name];
      delete workset[name];
      if (name in visited) {
        continue;
      }
      visited[name] = member;
      if (member === other) { // Gefunden
        return true;
      }
      member.friends.forEach(function(friend) {
        workset[friend.name] = friend;
      });
    }
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
