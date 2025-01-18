import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),

			// modules
			'@core': path.resolve(__dirname, './src/modules/core'),
			'@auth': path.resolve(__dirname, './src/modules/auth'),
		},
	},
})
