const config = {
  timeout: 20000,
  use: {
    trace: 'on-first-retry',
    storageState: 'storageState.json',
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  reporter: [
    ['line'],
    ['junit', { outputFile: 'results.xml' }]
  ],
};

module.exports = config;
