import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "axios"],
          "ui-libs": [
            "@radix-ui/react-slot",
            "lucide-react",
            "framer-motion",
            "react-toastify",
          ],
          state: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
