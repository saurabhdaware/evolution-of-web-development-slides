import { defineConfig } from "abell";
import react from "@vitejs/plugin-react";

export default defineConfig({
  abell: {
    esbuild: {
      loader: "jsx",
    },
  },
  plugins: [
    react(),
  ],
});