import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  theme: {
    extend: {
      colors: {
        primary: "#614D70",
        primaryLight: "#7B638C",
        primaryDark: "#4E3D59",
      },
    }},

    plugins: [react(), tailwindcss()],
  })
