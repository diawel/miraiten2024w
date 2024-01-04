import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const base = '/miraiten2024w'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    base,
    server: {
      proxy: {
        [base + '/cms']: 'https://fundesign.jp',
      },
    },
  })
}
