exports = function getUrlFromArgs() {
  if (process.argv.length > 2) {
    return process.argv[2];
  }
  console.log('Url Übergabeparameter fehlt');
  process.exit(1);
};
