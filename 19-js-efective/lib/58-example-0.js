// Unterscheiden von Arrays und arrayähnlichen Objekten

function BitVector() {
   this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

BitVector.prototype.enable = function (x) {
   if (typeof x === "number") {
      enableBit.call(this, x);
   } else {
      x.forEach(function (i) {
         enableBit.call(this, i);
      }, this);
   }
};

BitVector.prototype.bitAt = function (x) {
   if (typeof x === "number") {
      return this.data[x];
   }
   return;
};

function enableBit(x) {
   if (x <= this.data.length) {
      this.data[x] = 1;
   }
}

var bits = new BitVector();

bits.enable([4, 5, 11]);

console.log(bits.bitAt(4));
console.log(bits.bitAt(5));
console.log(bits.bitAt(11));
console.log(bits.bitAt(17));
console.log(bits.bitAt(22));
