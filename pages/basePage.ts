import { Page, Locator } from "@playwright/test";


export class BasePage {
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByRole('banner');
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async isHeaderVisible(): Promise<boolean> {
        return await this.header.isVisible();
    }
}