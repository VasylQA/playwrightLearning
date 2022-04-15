const config = {
  timeout: 20000,
  use: {
    trace: 'on-first-retry',
    storageState: 'storageState.json',
    headless: true
  },
};

module.exports = config;
