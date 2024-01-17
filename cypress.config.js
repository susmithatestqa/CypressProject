
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  experimentalStudio:true,
  watchForFileChanges:false,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      
require('cypress-mochawesome-reporter/plugin')(on)

    },
  },
});
