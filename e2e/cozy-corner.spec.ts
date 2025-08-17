import { test, expect } from '@playwright/test';
import { CozyCornerPage } from './pages/cozy-corner.po';

test.describe('Cozy Corner Page', () => {
	let cozyCorner: CozyCornerPage;

	test.beforeEach(async ({ page }) => {
		cozyCorner = new CozyCornerPage(page);
		await cozyCorner.goto();
	});

	test('should display the correct header', async () => {
		const headerText = await cozyCorner.getHeaderText();
		expect(headerText).not.toBeNull();
		expect(headerText?.length).toBeGreaterThan(0);
	});

	test('should display the Spotify playlist iframe', async () => {
		await expect(cozyCorner.spotifyIframe).toBeVisible();
	});

	test('should render at least one placeholder paragraph', async () => {
		const paragraphs = await cozyCorner.getParagraphs();
		expect(paragraphs.length).toBeGreaterThan(0);
		for (const text of paragraphs) {
			expect(text.length).toBeGreaterThan(0);
		}
	});
});
