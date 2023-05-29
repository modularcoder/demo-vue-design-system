/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  publicDir: false,
  build: {
    outDir: 'dist/ui-core-next',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index-next.ts'),
      name: 'PexUICoreNext',
      formats: ['es', 'cjs'],
      fileName: 'ui-core-next',
    },
    rollupOptions: {
      external: ['vue', 'vue/macros'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'ui-core-next.css'
          return assetInfo.name
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      reportsDirectory: '.coverage',
      include: [
        'src/_api',
        'src/_components',
        'src/_componentsNext',
        'src/_composables',
        'src/_helpers',
      ],
      extension: ['.vue', '.ts'],
      exclude: [
        '**/*.stories.ts',
        '**/*.spec.ts',
        '**/*Types.ts',
        '**/index.ts',
      ],
      src: ['src'],
    },
    setupFiles: resolve(__dirname, 'src/_tests/setupTests.ts'),
  },
  plugins: [
    dts({
      outputDir: 'dist/ui-core-next/types',
      exclude: ['src/ignore'],
      clearPureImport: true,
      cleanVueFileName: true,
      staticImport: true,
      insertTypesEntry: false,
      copyDtsFiles: false,
      logDiagnostics: true,
      rollupTypes: false,
      // rollupTypes: true,
      // afterBuild: () => {
      //   fs.renameSync(
      //     'dist/ui-core-next/ui-core.d.ts',
      //     'dist/ui-core-next/ui-core-next.d.ts',
      //   )
      // },
    }),
    vue({
      reactivityTransform: true,
    }),
  ],
})
