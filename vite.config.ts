import { defineConfig } from "vite";
import solid from "solid-start";
import adapter from "solid-start-netlify";

export default defineConfig({
  plugins: [solid({ adapter: adapter() })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
