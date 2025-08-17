import { test, expect } from '@playwright/test';
import { AppPage } from './pages/app.po';
import { AboutMePage } from './pages/about-me.po';

test('App navigation and about me flow', async ({ page }) => {
    const app = new AppPage(page);
    const aboutMe = new AboutMePage(page);

    await app.navigateToHomePage();

    await expect(app.headerLink).toBeVisible();
    await app.clickNavLink('About Me');
    await expect(aboutMe.header).toContainText('I like music');
    await aboutMe.openFunFacts();
    await expect(page.locator('dialog', { hasText: 'Fun Facts' })).toBeVisible();
});

test('Home page loads with correct title and navigation links', async ({ page }) => {
    const app = new AppPage(page);

    await app.navigateToHomePage();

    await expect(page).toHaveTitle(/Riris Cozy Nook/i);
    await expect(app.headerLink).toBeVisible();
    await expect(app.navLinks.filter({ hasText: 'About Me' })).toBeVisible();
    await expect(app.navLinks.filter({ hasText: 'Projects' })).toBeVisible();
});

test('About Me page displays fun facts dialog and closes it', async ({ page }) => {
    const app = new AppPage(page);
    const aboutMe = new AboutMePage(page);

    await app.navigateToHomePage();
    await app.clickNavLink('About Me');
    await aboutMe.openFunFacts();

    const dialog = page.locator('dialog', { hasText: 'Fun Facts' });
    await expect(dialog).toBeVisible();

    await page.locator('dialog[open] button[aria-label="Close"]').click();
    await expect(dialog).not.toBeVisible();
});

test('Navigation to Projects page works', async ({ page }) => {
    const app = new AppPage(page);

    await app.navigateToHomePage();
    await app.clickNavLink('Projects');

    await expect(page).toHaveURL(/.*projects/i);
    await expect(page.locator('h1')).toContainText(/Projects/i);
});
