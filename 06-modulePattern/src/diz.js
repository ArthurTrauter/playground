var Diz = function () {
  this.suffix = '-suffix';
};

Diz.prototype.log = function (prefix) {
  console.log(prefix + "diz!" + this.suffix);
};

module.exports = new Diz();
