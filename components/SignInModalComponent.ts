import { Page, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class SignInModalComponent extends BaseComponent {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly closeButton: Locator;
  readonly errorMessage: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    super(page.locator('//app-auth-modal'));

    this.emailInput        = this.locator('#email');
    this.passwordInput     = this.locator('#password');
    this.submitButton      = this.locator('//button[contains(@class, "greenStyle")]');
    this.closeButton       = this.locator('.close-button, .mat-dialog-close, button.close');
    this.errorMessage      = this.locator('.error-message, .alert-danger, .validation-error');
    this.forgotPasswordLink = this.getByText(/forgot password/i);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }

  async close(): Promise<void> {
    await this.closeButton.click();
    await this.waitUntilHidden();
  }
}