const config = {
  timeout: 90000,
  use: {
    trace: 'on-first-retry',
    storageState: 'storageState.json'
  },
};

module.exports = config;
