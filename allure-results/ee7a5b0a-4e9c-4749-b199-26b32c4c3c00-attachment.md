# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-04.spec.ts >> TC-04 | Create News Form - Upload Image field validation >> should validate image formats and size restrictions
- Location: tests\TC-04.spec.ts:7:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/#/greenCity/news", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class NewsPage extends BasePage {
  5  |   readonly createNewsButton: Locator;
  6  |   readonly newsCards: Locator;
  7  |   readonly filterTags: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     super(page);
  11 |     this.createNewsButton = page.getByRole('link', { name: /create news/i })
  12 |                               .or(page.locator('.create-button, .add-news-btn'));
  13 |     this.newsCards       = page.locator('app-news-list-gallery-view, .news-card, app-eco-news-widget');
  14 |     this.filterTags      = page.locator('.filter-tag, .tags-list button');
  15 |   }
  16 | 
  17 |   get url(): string {
  18 |     return '/#/greenCity/news';
  19 |   }
  20 | 
  21 |   async navigate(): Promise<void> {
> 22 |     await this.page.goto(this.url);
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  23 |   }
  24 | 
  25 |   async clickCreateNews(): Promise<void> {
  26 |     await this.createNewsButton.click();
  27 |     await this.page.waitForURL(/create-news/);
  28 |   }
  29 | 
  30 |   async getNewsCardCount(): Promise<number> {
  31 |     return this.newsCards.count();
  32 |   }
  33 | }
```