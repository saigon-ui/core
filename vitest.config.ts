import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __DEV__: true,
  },
  plugins: [react()],
  test: {
    include: ["**/*.spec.tsx"],
    includeSource: ["./src"],
    setupFiles: ["./.vitest/vitest.setup.ts"],
    environment: "jsdom",
    browser: {
      enabled: false,
      name: "chromium",
      provider: "playwright", // https://playwright.dev
      providerOptions: {},
    },
  },
});
