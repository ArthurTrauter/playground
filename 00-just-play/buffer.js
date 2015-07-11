var myBuffer = new Buffer('Hello World'),
    yourBuffer = new Buffer(11);
myBuffer.write('World Hello World');
console.log(myBuffer.length);
console.log(myBuffer.toString());
myBuffer.copy(yourBuffer);
console.log(Buffer.concat([myBuffer, yourBuffer]).toString());
