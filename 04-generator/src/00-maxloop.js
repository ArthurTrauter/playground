function getMaxLoopFromArgs() {
  var maxLoop = 3;
  if (process.argv.length > 2) {
    maxLoop = process.argv[2];
  }
  return maxLoop;
};

module.exports = getMaxLoopFromArgs();
