import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NewsPage extends BasePage {
  readonly createNewsButton: Locator;
  readonly newsCards: Locator;
  readonly filterTags: Locator;

  constructor(page: Page) {
    super(page);
    this.createNewsButton = page.getByRole('link', { name: /create news/i })
                              .or(page.locator('.create-button, .add-news-btn'));
    this.newsCards       = page.locator('app-news-list-gallery-view, .news-card, app-eco-news-widget');
    this.filterTags      = page.locator('.filter-tag, .tags-list button');
  }

  get url(): string {
    return '/#/greenCity/news';
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  async clickCreateNews(): Promise<void> {
    await this.createNewsButton.click();
    await this.page.waitForURL(/create-news/);
  }

  async getNewsCardCount(): Promise<number> {
    return this.newsCards.count();
  }
}