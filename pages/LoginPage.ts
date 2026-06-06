import { Page } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';

export class LoginPage extends BasePage {
  private readonly header = new HeaderComponent(this.page);

  // ✔ ЗМІНЕНО: Email → LOGIN
  private readonly loginInput    = this.page.locator('#email');
  private readonly passwordInput = this.page.locator('#password');

  private readonly signInSubmit =
    this.page.getByRole('button', { name: 'Sign in', exact: true });

  private readonly modalOverlay =
    this.page.locator('app-sign-in');

  constructor(page: Page) {
    super(page);
  }

  async openLoginModal(): Promise<void> {
    await allure.step('Відкрити форму логіну', async () => {
      await this.header.clickSignInWithStep();
      await this.modalOverlay.waitFor({ state: 'visible' });
    });
  }

  async fillCredentials(login: string, password: string): Promise<void> {
    await allure.step('Заповнити LOGIN/Password', async () => {
      await this.loginInput.fill(login);
      await this.passwordInput.fill(password);
    });
  }

  async submit(): Promise<void> {
    await allure.step('Натиснути Sign In', async () => {
      await this.signInSubmit.click();
    });
  }

  async waitForLoginSuccess(): Promise<void> {
    await this.modalOverlay.waitFor({
      state: 'hidden',
      timeout: 15_000,
    });
  }

  async login(login: string, password: string): Promise<void> {
    await allure.step('Авторизація користувача', async () => {
      await this.page.goto('/#/greenCity/news');
      await this.page.waitForLoadState('domcontentloaded');
      await this.openLoginModal();
      await this.fillCredentials(login, password);
      await this.submit();
      await this.waitForLoginSuccess();
    });
  }
}