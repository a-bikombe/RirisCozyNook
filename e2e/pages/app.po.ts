import { Locator, Page } from '@playwright/test';

export class AppPage {
    readonly page: Page;
    readonly headerLink: Locator;
    readonly navLinks: Locator;
    readonly footerText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerLink = page.locator('header h1 a');
        this.navLinks = page.locator('nav a');
        this.footerText = page.locator('footer p');
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async clickNavLink(label: string) {
        await this.page.locator('nav a', { hasText: label }).click();
    }

    async getFooterText(): Promise<string | null> {
        return this.footerText.textContent();
    }
}
