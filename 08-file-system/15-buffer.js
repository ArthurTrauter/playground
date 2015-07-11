var bufferInt = new Buffer(10);
var bufferStr = new Buffer('Dies ist mein zweiter Buffer', 'utf8');
var array = [ 1, 3, 5, 7, 'abcd'];
var bufferArr = new Buffer(array);
var bufferBuf = new Buffer(bufferStr);

console.log(bufferArr);
console.log(bufferStr);
console.log(bufferBuf);
console.log(bufferInt);

console.log(Buffer.isBuffer(bufferInt));

console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('cp1141'));
console.log(Buffer.isEncoding('cp0500'));

console.log(Buffer.byteLength(bufferArr, 'utf8'));

var bufferCon = Buffer.concat([bufferArr, bufferBuf]);

console.log(Buffer.byteLength(bufferCon));

console.log(Buffer.compare(bufferStr, bufferBuf));
console.log(Buffer.compare(bufferStr, bufferArr));

console.log(bufferArr.length);

// toString und write
console.log(bufferInt.toString('utf8'));
bufferInt.write('Hallooo?', 0, 'utf8');
console.log(bufferInt.toString('utf8'));

console.log(bufferArr.toJSON());

// buffer fill
var bufferNew = Buffer(50);

bufferNew.write('whats up', 0, 'utf8');
bufferNew.fill('b');

console.log(bufferNew.toString('utf8'));
