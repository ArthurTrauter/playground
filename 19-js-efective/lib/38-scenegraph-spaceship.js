// Ein Scenengraph ist eine Sammlung von Objekten, die eine Szene in einem grafischen programm
// beschreibt. Eine Szene enthält eine Sammlung aller Objekte die als Akteure bezeichnet werden.
// Akteure sind vorab geladene Bilder. Der Verweis auf die zugrundeliegende Grafikanzeige wird
// als Kontext bezeichnet
var Actor = require('./38-scenegraph-actor.js');

function SpaceShip(scene, x, y) {
  Actor.call(this, scene, x, y);
  this.points = 0;
}

// VERERBUNG des prototyps von Actor durch object.create()
SpaceShip.prototype = Object.create(Actor.prototype);

SpaceShip.prototype.type = "spaceShip";

SpaceShip.prototype.scorePoint = function() {
  this.points++;
};

SpaceShip.prototype.left = function() {
  this.moveTo(Math.max(this.x - 1, 0), this.y);
};

SpaceShip.prototype.right = function() {
  var maxWidth = this.scene.width - this.width();
  this.moveTo(Math.min(this.x + 1, maxWidth), this.y);
};

module.exports = SpaceShip;
