const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

   baseUrl: 'https://www.amazon.in/',   //'https://www.flipkart.com',     
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
});
