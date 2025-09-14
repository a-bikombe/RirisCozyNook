import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
    webServer: {
        command: 'ng serve',
        port: 4200,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env['CI'],
    },
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