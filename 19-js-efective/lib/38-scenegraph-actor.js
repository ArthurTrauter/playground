// Ein Scenengraph ist eine Sammlung von Objekten, die eine Szene in einem grafischen programm
// beschreibt. Eine Szene enthält eine Sammlung aller Objekte die als Akteure bezeichnet werden.
// Akteure sind vorab geladene Bilder. Der Verweis auf die zugrundeliegende Grafikanzeige wird
// als Kontext bezeichnet

function Actor(scene, x, y) {
  this.scene = scene;
  this.x = x;
  this.y = y;
  scene.register(this);
}

Actor.prototype.moveTo = function(x, y) {
  this.x = x;
  this.y = y;
  this.scene.draw();
};

Actor.prototype.exit = function() {
  this.scene.unregister(this);
  this.scene.draw();
};

Actor.prototype.draw = function() {
  var image = this.scene.images[this.type];
  this.scene.context.drawImage(image, this.x, this.y);
};

Actor.prototype.width = function() {
  return this.scene.images[this.type].width;
};

Actor.prototype.height = function() {
  return this.scene.images[this.type].height;
};

module.exports = Actor;
