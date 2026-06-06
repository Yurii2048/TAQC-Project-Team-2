import { Page } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BaseComponent } from './BaseComponent';

export class CancelModalComponent extends BaseComponent {
  // Всі локатори — відносно root (app-modal-cancel)
  private readonly yesCancelButton    = this.locator('button.primary-global-button');
  private readonly continueEditButton = this.locator('button.secondary-global-button');
  private readonly messageText        = this.locator('p');

  constructor(page: Page) {
    super(page, page.locator('app-modal-cancel'));
  }

  // isVisible() та waitUntilVisible() — успадковані з BaseComponent через root

  async getMessageText(): Promise<string> {
    return await allure.step('Modal Cancel: отримати текст повідомлення', async () => {
      return (await this.messageText.textContent())?.trim() ?? '';
    });
  }

  async clickYesCancel(): Promise<void> {
    await allure.step('Modal Cancel: натиснути "Yes, cancel"', async () => {
      await this.yesCancelButton.waitFor({ state: 'visible' });
      await this.yesCancelButton.click();
    });
  }

  async clickContinueEditing(): Promise<void> {
    await allure.step('Modal Cancel: натиснути "Continue editing"', async () => {
      await this.continueEditButton.waitFor({ state: 'visible' });
      await this.continueEditButton.click();
    });
  }
}
