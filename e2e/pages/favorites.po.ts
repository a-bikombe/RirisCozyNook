import { Page, Locator } from '@playwright/test';

export class FavoritesPage {
	readonly page: Page;
	readonly title: Locator;
	readonly hallOfFame: Locator;
	readonly songCard: Locator;
	readonly albumCard: Locator;
	readonly movieCard: Locator;
	readonly tvShowCard: Locator;
	readonly gameCard: Locator;
	readonly dialog: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.locator('h2');
		this.hallOfFame = page.locator('.hall-of-fame');
		this.songCard = page.locator('.hall-of-fame > section').nth(0);
		this.albumCard = page.locator('.hall-of-fame > section').nth(1);
		this.movieCard = page.locator('.hall-of-fame > section').nth(2);
		this.tvShowCard = page.locator('.hall-of-fame > section').nth(3);
		this.gameCard = page.locator('.hall-of-fame > section').nth(4);
		this.dialog = page.locator('dialog.dialog');
	}

	async goto() {
		await this.page.goto('/favorites');
	}

	async openDialogByButton(label: string) {
		await this.page.getByRole('button', { name: label }).click();
	}

	async getDialogItems() {
		return this.dialog.locator('ul.list li').allTextContents();
	}

	async getCardTitles() {
		return this.hallOfFame.locator('h3').allTextContents();
	}

	async getSongList() {
		return this.songCard.locator('ol.list li').allTextContents();
	}

	async getAlbumList() {
		return this.albumCard.locator('ol.list li').allTextContents();
	}

	async getMovieList() {
		return this.movieCard.locator('ol.list li').allTextContents();
	}

	async getTvShowList() {
		return this.tvShowCard.locator('ol.list li').allTextContents();
	}

	async getGameList() {
		return this.gameCard.locator('ol.list li').allTextContents();
	}
}
