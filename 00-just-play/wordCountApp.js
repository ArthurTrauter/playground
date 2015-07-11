var wc = require('./wordCount.js'),
    util = require('util'),
    sentence = 'Wo viel Licht ist, ist auch viel Schatten.',
    wordCount = wc.wordCount(sentence);

util.puts(sentence);
for (var i in wordCount) {
   util.puts(wordCount[i] + ' x ' + i);
}

console.log(require.main.filename);
console.log(module.filename);
console.log(module.id);
console.log(module.loaded);
console.log(module.children);
