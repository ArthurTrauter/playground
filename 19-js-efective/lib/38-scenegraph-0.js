// Ein Scenengraph ist eine Sammlung von Objekten, die eine Szene in einem grafischen programm
// beschreibt. Eine Szene enthält eine Sammlung aller Objekte die als Akteure bezeichnet werden.
// Akteure sind vorab geladene Bilder. Der Verweis auf die zugrundeliegende Grafikanzeige wird
// als Kontext bezeichnet

// Main Script
var Scene = require('./38-scenegraph-scene.js');
var SpaceShip = require('./38-scenegraph-spaceship.js');
var context = require('./38-scenegraph-context.js');

var images = {
  "spaceShip": {
    "type": "spaceShip",
    "width": 3,
    "height": 4
  }
};

var scene = new Scene(context, 10, 20, images);
var battleShip = new SpaceShip(scene, 2, 3);

battleShip.draw();
console.log(battleShip.width());
console.log(battleShip.height());
battleShip.left();
battleShip.right();
