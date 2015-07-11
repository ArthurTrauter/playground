var Person = function (name) {
  this.name = name;
};

Person.prototype.whatsYourName = function () {
  console.log('My name is ' + this.name);
};

module.exports = Person;
