import { Page, Locator } from '@playwright/test';

export class CozyCornerPage {
	readonly page: Page;
	readonly header: Locator;
	readonly spotifyIframe: Locator;
	readonly paragraphs: Locator;

	constructor(page: Page) {
		this.page = page;
		this.header = page.locator('header h2');
		this.spotifyIframe = page.locator('iframe[src*="open.spotify.com/embed/playlist"]');
		this.paragraphs = page.locator('section.flex.row article p');
	}

	async goto() {
		await this.page.goto('/cozy-corner');
	}

	async getHeaderText() {
		return this.header.textContent();
	}

	async getParagraphs() {
		return this.paragraphs.allTextContents();
	}

	async isSpotifyIframeVisible() {
		return this.spotifyIframe.isVisible();
	}
}
