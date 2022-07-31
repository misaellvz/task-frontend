import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    base_url: 'http://localhost:3000',
    username: process.env.CYPRESS_AUTH0_USERNAME,
    password: process.env.CYPRESS_AUTH0_PASSWORD,
  },
});
