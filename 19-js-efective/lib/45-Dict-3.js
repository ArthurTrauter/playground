// damit der Standardcode nicht jedes mal beim nachschlagen
// einer Eigenschaft eingesetzt werden muss, können wir dieses
// codemuster in den Dict-Konsturktor abstrahieren, der sämmtliche
// Techniken zum Erstellen stabiler Dictionaries in einer einzigen
// Datentypdefinition kapselt

// Zusätzlich wird hier aus gründen der besseren Portierbarkeit
// das Attribut __porto__ mit zu beachten. Die einfache implementierung
// siehe Script 45-hasOwnProperty-1

function Dict(elements) {
  this.elements = elements || {};
  this.hasSpecialProto = false;
  this.specialProto = undefined;
}

Dict.prototype.has = function(key) {
  if (key === "__proto__") {
    return this.hasSpecialProto;
  }
  return {}.hasOwnProperty.call(this.elements, key);
};

Dict.prototype.get = function(key) {
  if (key === "__proto__") {
    return this.specialProto;
  }
  return this.has(key) ? this.elements[key] : undefined;
};

Dict.prototype.set = function(key, val) {
  if (key === "__proto__") {
    this.hasSpecialProto = true;
    this.specialProto = val;
  } else {
    this.elements[key] = val;
  }
};

Dict.prototype.remove = function(key) {
  if (key === "__proto__") {
    this.hasSpecialProto = false;
    this.specialProto = undefined;
  } else {
    delete this.elements[key];
  }
};

module.exports = Dict;
