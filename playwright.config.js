const config = {
  timeout: 90000,
  use: {
    trace: 'on-first-retry',
    storageState: 'storageState.json',
    headless: true
  },
};

module.exports = config;
