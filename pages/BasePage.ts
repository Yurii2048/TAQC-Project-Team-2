import { Page, Locator, expect } from '@playwright/test';
 
export abstract class BasePage {
  readonly page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
 
  abstract get url(): string;
 
  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }
 
  async waitForPageReady(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
 
  async assertOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(this.url));
  }
 
  getCurrentUrl(): string {
    return this.page.url();
  }
}
 