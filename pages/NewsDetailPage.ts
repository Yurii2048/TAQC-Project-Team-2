import { Page, Locator, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BasePage } from './BasePage';

export class NewsDetailPage extends BasePage {

  private readonly newsTitle =
    this.page.locator('.news-title-container .news-title');

  private readonly newsContent =
    this.page.locator('.news-text, .quill-wrapper .ql-editor');

  private readonly newsDate =
    this.page.locator('.news-info-date').first();

  // ✔ АДАПТОВАНО ПІД ТВОЄ HTML
  private readonly editNewsButton =
    this.page.locator('div.edit-news');

  private readonly submitButton =
    this.page.getByRole('button', { name: 'Edit', exact: true });

  constructor(page: Page) {
    super(page);
  }

  // ===== CORE =====

  async waitForLoaded(): Promise<void> {
    await this.newsTitle.waitFor({ state: 'visible', timeout: 60000 });
  }

  async getTitle(): Promise<string> {
    return await allure.step('Отримати заголовок новини', async () => {
      return (await this.newsTitle.textContent())?.trim() ?? '';
    });
  }

  async getContent(): Promise<string> {
    return await allure.step('Отримати текст новини', async () => {
      return (await this.newsContent.textContent())?.trim() ?? '';
    });
  }

  async getDate(): Promise<string> {
    return await allure.step('Отримати дату публікації новини', async () => {
      await this.newsDate.waitFor({ state: 'visible', timeout: 15000 });
      return (await this.newsDate.textContent())?.trim() ?? '';
    });
  }

  // ===== TC-09 ASSERTIONS (ВАЖЛИВО) =====

  async expectEditNewsButtonVisible(): Promise<void> {
    await allure.step('Перевірити що Edit news ВИДИМИЙ', async () => {
      await expect(this.editNewsButton).toBeVisible();
    });
  }

  async expectEditNewsButtonHidden(): Promise<void> {
    await allure.step('Перевірити що Edit news НЕ ВИДИМИЙ', async () => {
      await expect(this.editNewsButton).toBeHidden();
    });
  }

  // ===== ACTIONS =====

  async clickEditNews(): Promise<void> {
    await allure.step('Натиснути Edit news', async () => {
      await this.editNewsButton.waitFor({ state: 'visible' });
      await this.editNewsButton.click();
    });
  }

  async clickSubmit(): Promise<void> {
    await allure.step('Натиснути Submit', async () => {
      await this.submitButton.waitFor({ state: 'visible' });
      await this.submitButton.click();
    });
  }
}