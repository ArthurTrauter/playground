// Ein Scenengraph ist eine Sammlung von Objekten, die eine Szene in einem grafischen programm
// beschreibt. Eine Szene enthält eine Sammlung aller Objekte die als Akteure bezeichnet werden.
// Akteure sind vorab geladene Bilder. Der Verweis auf die zugrundeliegende Grafikanzeige wird
// als Kontext bezeichnet

function Scene(context, width, height, images) {
  this.context = context;
  this.width = width;
  this.height = height;
  this.images = images;
  this.actors = [];
}

Scene.prototype.register = function(actor) {
  this.actors.push(actor);
};

Scene.prototype.unregister = function(actor) {
  var _index = this.actors.indexOf(actor);
  if (_index >= 0) {
    this.actors.splice(_index, 1);
  }
};

Scene.prototype.draw = function() {
  this.context.clearRect(0, 0, this.width, this.height);
  for (var a = this.actors, i = 0, n = a.length; i < n; i++) {
    a[i].draw();
  }
};

module.exports = Scene;
