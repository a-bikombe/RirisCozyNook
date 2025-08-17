import { test, expect } from '@playwright/test';
import { FavoritesPage } from './pages/favorites.po';

test.describe('Favorites Page', () => {
	let favorites: FavoritesPage;

	test.beforeEach(async ({ page }) => {
		favorites = new FavoritesPage(page);
		await favorites.goto();
	});

	test('should display the correct page title', async () => {
		await expect(favorites.title).toHaveText(/favorites/i);
	});

	test('should display all hall of fame cards', async () => {
		const cardTitles = await favorites.getCardTitles();
		expect(cardTitles).toEqual([
			'Song',
			'Album',
			'Movie',
			'TV Show',
			'Game'
		]);
	});

	test('should show dialog with correct items when clicking Colors button', async () => {
		await favorites.openDialogByButton('Colors');
		await expect(favorites.dialog).toBeVisible();
		const items = await favorites.getDialogItems();
		expect(items.length).toBeGreaterThan(0);
	});

	test('should show dialog with correct items when clicking Animals button', async () => {
		await favorites.openDialogByButton('Animals');
		await expect(favorites.dialog).toBeVisible();
		const items = await favorites.getDialogItems();
		expect(items.length).toBeGreaterThan(0);
	});

	test('should show dialog with correct items when clicking Foods button', async () => {
		await favorites.openDialogByButton('Foods');
		await expect(favorites.dialog).toBeVisible();
		const items = await favorites.getDialogItems();
		expect(items.length).toBeGreaterThan(0);
	});

	test('should show dialog with correct items when clicking Snacks button', async () => {
		await favorites.openDialogByButton('Snacks');
		await expect(favorites.dialog).toBeVisible();
		const items = await favorites.getDialogItems();
		expect(items.length).toBeGreaterThan(0);
	});

	test('should show dialog with correct items when clicking Musical Artists button', async () => {
		await favorites.openDialogByButton('Musical Artists');
		await expect(favorites.dialog).toBeVisible();
		const items = await favorites.getDialogItems();
		expect(items.length).toBeGreaterThan(0);
	});

	test('should list additional songs, albums, movies, tv shows, and games', async () => {
		expect(await favorites.getSongList()).toBeInstanceOf(Array);
		expect(await favorites.getAlbumList()).toBeInstanceOf(Array);
		expect(await favorites.getMovieList()).toBeInstanceOf(Array);
		expect(await favorites.getTvShowList()).toBeInstanceOf(Array);
		expect(await favorites.getGameList()).toBeInstanceOf(Array);
	});
});
