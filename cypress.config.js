const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9enbzh',
  reporter: 'cypress-mochawesome-reporter', //html reports
  e2e: {
    setupNodeEvents(on, config) {
    
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
