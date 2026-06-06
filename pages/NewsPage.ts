import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class NewsPage extends BasePage {
  readonly createNewsButton: Locator;
  readonly newsCards: Locator;
  readonly filterTags: Locator;

  constructor(page: Page) {
    super(page);
    this.createNewsButton = page.getByRole('link', { name: /create news/i })
                              .or(page.locator('.create-button, .add-news-btn'));
    this.newsCards   = page.locator('app-news-list-gallery-view, app-eco-news-widget');
    this.filterTags  = page.locator('.filter-tag, .tags-list button');
  }

  get url(): string {
    return '/#/greenCity/news';
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  async open(): Promise<void> {
    await this.page.goto('/#/greenCity/news');
    await this.page.waitForLoadState('load');

    // скидаємо всі фільтри якщо є активні
    const activeFilter = this.page.locator('.filter-tag .tag-close, .eco-buttons-wrap .close');
    if (await activeFilter.count() > 0) {
      await activeFilter.first().click();
      await this.page.waitForLoadState('load');
    }
  }

  async clickCreateNews(): Promise<void> {
    await this.createNewsButton.click();
    await this.page.waitForURL(/create-news/);
  }

  async getNewsCardCount(): Promise<number> {
    return this.newsCards.count();
  }

  async waitForNewsList(): Promise<void> {
    await expect(this.newsCards.first()).toBeVisible({ timeout: 30000 });
  }

  async getFirstNewsCard(): Promise<Locator> {
    await this.waitForNewsList();
    return this.newsCards.first();
  }

  async openFirstNewsCard(): Promise<void> {
    await this.waitForNewsList();
    await this.newsCards.first().click();
  }
}