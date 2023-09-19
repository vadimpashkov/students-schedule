import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: 'index.html',
		host: '192.168.1.91',
		port: 8080,
	},
	plugins: [react()],
});
