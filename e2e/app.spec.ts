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
