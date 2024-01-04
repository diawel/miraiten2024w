import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    base: process.env.VITE_PUBLIC_URL,
    server: {
      proxy: {
        '/cms': 'https://fundesign.jp/miraiten2024w',
      },
    },
  })
}
