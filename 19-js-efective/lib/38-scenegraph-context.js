// Ein Scenengraph ist eine Sammlung von Objekten, die eine Szene in einem grafischen programm
// beschreibt. Eine Szene enthält eine Sammlung aller Objekte die als Akteure bezeichnet werden.
// Akteure sind vorab geladene Bilder. Der Verweis auf die zugrundeliegende Grafikanzeige wird
// als Kontext bezeichnet

// Beispielhafter Context als Canvas Ersatz zu testzwecken
module.exports = {
  x: 0,
  y: 0,
  drawImage: function(image, x, y) {
    console.log("drawImage %s mit Koordinaten x: %s und y: %s", image, x, y);
  },
  clearRect: function(a, b, x, y) {
    this.x = x;
    this.y = y;
    console.log("Neue context size - x: %s und y: %s", this.x, this.y);
  }
};
