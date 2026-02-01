import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        emptyOutDir: true, // Clean docs before build
    }
})
