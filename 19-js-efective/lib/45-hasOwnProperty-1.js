// damit der Standardcode nicht jedes mal beim nachschlagen
// einer Eigenschaft eingesetzt werden muss, können wir dieses
// codemuster in den Dict-Konsturktor abstrahieren, der sämmtliche
// Techniken zum Erstellen stabiler Dictionaries in einer einzigen
// Datentypdefinition kapselt

function Dict(elements) {
  this.elements = elements;
}

Dict.prototype.has = function(key) {
  return {}.hasOwnProperty.call(this.elements, key);
};

Dict.prototype.get = function(key) {
  return this.has(key) ? this.elements[key] : undefined;
};

Dict.prototype.set = function(key, val) {
  this.elements[key] = val;
};

Dict.prototype.remove = function(key) {
  delete this.elements[key];
};

module.exports = Dict;
