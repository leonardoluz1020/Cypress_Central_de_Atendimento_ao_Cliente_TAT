import { defineConfig } from "cypress";

export default defineConfig(
  {
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },  {
    "pluginsFile": false,
    "viewportHeight": 880,
    "viewportWidth": 1280
  });
