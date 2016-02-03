// Man sollte einen Status nicht an einen Prototyp hängen sondern in den einzelnen Instanzen
// platzieren. Der Prototyp un die darin definierten Methoden sollten zustandslos sein

// Fehlerhafte Implementierung

function Tree(n) {
  this.value = n;
}

Tree.prototype = {
  children: [], // Dies sollte ein Instanz-status sein
  addChild: function(x) {
    this.children.push(x);
  }
};

var left = new Tree(2);
left.addChild(1);
left.addChild(3);

var right = new Tree(6);
right.addChild(5);
right.addChild(7);

var top = new Tree(4);
top.addChild(left);
top.addChild(right);

console.log("left ", left.children);
console.log("right ", right.children);
console.log("top ", top.children);
