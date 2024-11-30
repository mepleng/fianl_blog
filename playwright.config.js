const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './todsob',
  use: {
    headless: true, // Run in headless mode by default
  },
  reporter: [
    ['list'], // Prints the test results to the console
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // Generates an HTML report
  ],
});