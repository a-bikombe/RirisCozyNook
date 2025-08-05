import { test, expect } from '@playwright/test';

test('should display app title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a:has-text("Riri\'s Cozy Nook")')).toBeVisible();
});

/* test('loads crew data on deployed site', async ({ page }) => {
    await page.goto('https://riris-cozy-nook.vercel.app/about-me');

    await expect(page.getByRole('cell', { name: 'Milo', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Evan', exact: true })).toBeVisible();
});
 */
