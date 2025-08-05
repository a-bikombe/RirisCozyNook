import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	use: {
		baseURL: 'http://localhost:4200',
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		headless: true,
		trace: 'off'
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		}
	],
});
