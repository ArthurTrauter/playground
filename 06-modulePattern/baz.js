var Baz = function () {};

Baz.prototype.log = function () {
  console.log('baz!');
};

module.exports.Baz = new Baz();
