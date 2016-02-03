// Beispiele mit this

function CSVReader(separators) {
  this.separators = separators || [","];
  this.regexp = new RegExp(this.separators.map(function(sep) {
    console.log(sep);
    return "\\" + sep[0];
  }).join("|"));
}

// Fehler im Bind vom This
CSVReader.prototype.read = function(str) {
  var lines = str.trim().split(/\n/);
  return lines.map(function(line) {
    return line.split(this.regexp); // Dies ist ein falsches this
  });
};

// Übergabe des This über zusätzlichen parameter in der map-function
CSVReader.prototype.read1 = function(str) {
  var lines = str.trim().split(/\n/);
  return lines.map(function(line) {
    return line.split(this.regexp);
  }, this); // überträgt die äußere Bindung an den Callback
};

// Übergabe des This über Variable mit lokalem Gültigkeitsbereich
CSVReader.prototype.read2 = function(str) {
  var lines = str.trim().split(/\n/);
  var self = this; // Verweis auf die äußere this-Bindung
  return lines.map(function(line) {
    return line.split(self.regexp);
  });
};

// Bindung des this über die BIND-Methode
var reader = new CSVReader();
CSVReader.prototype.read3 = function(str) {
  var lines = str.trim().split(/\n/);
  return lines.map(function(line) {
    return line.split(this.regexp);
  }.bind(this)); // bind-methode ab ES5
};

console.log(reader.read("a,b,c\nd,e,f\n"));
console.log(reader.read1("a,b,c\nd,e,f\n"));
console.log(reader.read2("a,b,c\nd,e,f\n"));
console.log(reader.read3("a,b,c\nd,e,f\n"));
