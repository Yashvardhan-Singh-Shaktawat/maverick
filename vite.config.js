import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Automatically sync team images from Downloads to public directory
function syncImages() {
  const downloadsDir = 'C:/Users/HP/Downloads'
  const publicDir = path.resolve(__dirname, 'public')
  const filesToCopy = [
    '2-1-768x768.webp',
    'Upasana-Goel.png',
    '1-1.webp',
    'Chloe.webp',
    '4-4.webp',
    '4-4.png',
    '3-1.webp',
    '5-1-e1756122890608.webp',
    '5-1.webp',
    '5-2.webp',
    '1-2.webp',
    'Untitled-design-53.webp',
    'Untitled-design-53.png',
    'Untitled-design-49.webp',
    'Untitled-design-49.png',
    '1-3.webp',
    '1-3.png',
    '2-4.webp',
    '2-4.png',
    '3-2.webp',
    '3-2.png',
    '4-5.webp',
    '4-5.png',
    'Strategy.png',
    'Strategy.webp',
    'Creative.png',
    'Creative.webp',
    'Acquisition.png',
    'Acquisition.webp',
    'Conversion.png',
    'Conversion.webp',
    'university.webp',
    'university.png',
    'target.webp',
    'target.png'
  ]

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  filesToCopy.forEach(file => {
    const src = path.join(downloadsDir, file)
    const dest = path.join(publicDir, file)
    try {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest)
        console.log(`[Vite Image Sync] Successfully copied ${file} to public/`)
      }
    } catch (err) {
      console.error(`[Vite Image Sync] Failed copying ${file}:`, err.message)
    }
  })
}

// Run immediately on config evaluation
syncImages()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'image-sync-plugin',
      configureServer() {
        syncImages()
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
})
