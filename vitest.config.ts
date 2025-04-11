import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig(async () => {
  const tsconfigPaths = (await import("vite-tsconfig-paths")).default

  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: "jsdom",
      globals: true,
      css: false,
      setupFiles: ["./vitest.setup.ts"],
    },
  }
})
