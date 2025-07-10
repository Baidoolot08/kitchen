import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react-simple-typewriter", "typewriter-effect", "lucide-react"],
  },
});
