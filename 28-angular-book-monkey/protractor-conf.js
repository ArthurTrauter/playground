exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/e2e/templates/*spec.js'],
  capabilities: {
    'browserName': 'firefox'
  }
};
