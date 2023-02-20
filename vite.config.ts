import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		coverage: {
			provider: 'c8',
			reportsDirectory: '.tests/unit/coverage',
		},
		css: true,
		environment: 'happy-dom',
		globals: true,
		setupFiles: ['./src/tests/setupTests.ts'],
	},
});
