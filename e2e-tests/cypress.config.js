const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1366,
    viewportHeight: 900,
    fixturesFolder: 'cypress/e2e/fixtures'
  },
  fixturesFolder: false,
  video: false,
})
