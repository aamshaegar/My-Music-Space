import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/websocket": "http://localhost:8091",
      "/chat": "http://localhost:8091",
      "/chatrooms":"http://localhost:8091",
      "/app":"http://localhost:8091",
      "/api":"http://localhost:8094"
    }  
  },
  plugins: [react()],
})
