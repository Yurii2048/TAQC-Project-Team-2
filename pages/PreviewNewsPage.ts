import { Page, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BasePage } from './BasePage';

export class PreviewNewsPage extends BasePage {
  private readonly previewTitle =
    this.page.locator('.news-title.word-wrap');

  private readonly previewContent =
    this.page.locator('.news-text-content');

  private readonly previewDate =
    this.page.locator('.news-info-date');

  private readonly previewAuthor =
    this.page.locator('.news-info-author');

  private readonly backToEditingButton = this.page
    .getByRole('button', { name: /back to editing/i })
    .or(this.page.getByRole('link', { name: /back to editing/i }));

  constructor(page: Page) {
    super(page);
  }

  // =========================
  // GETTERS (читання даних)
  // =========================

  async getTitle(): Promise<string> {
    return await allure.step('Preview: отримати заголовок', async () => {
      await expect(this.previewTitle).toBeVisible({ timeout: 15000 });
      return (await this.previewTitle.innerText()).trim();
    });
  }

  async getContent(): Promise<string> {
    return await allure.step('Preview: отримати текст новини', async () => {
      await expect(this.previewContent).toBeVisible({ timeout: 15000 });
      return (await this.previewContent.innerText()).trim();
    });
  }

  async getDate(): Promise<string> {
    return await allure.step('Preview: отримати дату', async () => {
      await expect(this.previewDate).toBeVisible({ timeout: 15000 });
      return (await this.previewDate.innerText()).trim();
    });
  }

  async getAuthor(): Promise<string> {
    return await allure.step('Preview: отримати автора', async () => {
      await expect(this.previewAuthor).toBeVisible({ timeout: 15000 });
      return (await this.previewAuthor.innerText()).trim();
    });
  }

  // =========================
  // ASSERTIONS (перевірки)
  // =========================

  async expectTitle(expectedTitle: string): Promise<void> {
    await allure.step('Preview: перевірити заголовок', async () => {
      await expect(this.previewTitle).toBeVisible({ timeout: 15000 });
      await expect(this.previewTitle).toHaveText(expectedTitle);
    });
  }

  // =========================
  // ACTIONS (дії)
  // =========================

  async isBackToEditingVisible(): Promise<boolean> {
    return await allure.step(
      'Preview: перевірити видимість кнопки Back to editing',
      async () => {
        return await this.backToEditingButton.isVisible();
      }
    );
  }

  async clickBackToEditing(): Promise<void> {
    await allure.step(
      'Preview: натиснути кнопку Back to editing',
      async () => {
        await this.backToEditingButton.click();
      }
    );
  }
}