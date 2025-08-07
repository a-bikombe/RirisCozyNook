import { Locator, Page } from '@playwright/test';

export class AboutMePage {
    readonly page: Page;
    readonly header: Locator;
    readonly personalityList: Locator;
    readonly funFactsButton: Locator;
    readonly skillsHobbiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('header h2');
        this.personalityList = page.locator('main ul.list li');
        this.funFactsButton = page.locator('button', { hasText: 'Fun Facts' });
        this.skillsHobbiesButton = page.locator('button', { hasText: 'My Skills and Hobbies' });
    }

    async openFunFacts() {
        await this.funFactsButton.click();
    }

    async openSkillsHobbies() {
        await this.skillsHobbiesButton.click();
    }
}
