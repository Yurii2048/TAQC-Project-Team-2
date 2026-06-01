# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-04.spec.ts >> TC-04 | Create News Form - Upload Image field validation >> should validate image formats and size restrictions
- Location: tests\TC-04.spec.ts:7:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//app-auth-modal').locator('//button[contains(@class, "greenStyle")]')
    - locator resolved to <button disabled type="submit" class="greenStyle" _ngcontent-ng-c4235776424="">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    5 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BaseComponent } from './BaseComponent';
  3  | 
  4  | export class SignInModalComponent extends BaseComponent {
  5  |   readonly emailInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly submitButton: Locator;
  8  |   readonly closeButton: Locator;
  9  |   readonly errorMessage: Locator;
  10 |   readonly forgotPasswordLink: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page.locator('//app-auth-modal'));
  14 | 
  15 |     this.emailInput        = this.locator('#email');
  16 |     this.passwordInput     = this.locator('#password');
  17 |     this.submitButton      = this.locator('//button[contains(@class, "greenStyle")]');
  18 |     this.closeButton       = this.locator('.close-button, .mat-dialog-close, button.close');
  19 |     this.errorMessage      = this.locator('.error-message, .alert-danger, .validation-error');
  20 |     this.forgotPasswordLink = this.getByText(/forgot password/i);
  21 |   }
  22 | 
  23 |   async fillEmail(email: string): Promise<void> {
  24 |     await this.emailInput.fill(email);
  25 |   }
  26 | 
  27 |   async fillPassword(password: string): Promise<void> {
  28 |     await this.passwordInput.fill(password);
  29 |   }
  30 | 
  31 |   async submit(): Promise<void> {
> 32 |     await this.submitButton.click();
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  33 |   }
  34 | 
  35 |   async signIn(email: string, password: string): Promise<void> {
  36 |     await this.fillEmail(email);
  37 |     await this.fillPassword(password);
  38 |     await this.submit();
  39 |   }
  40 | 
  41 |   async close(): Promise<void> {
  42 |     await this.closeButton.click();
  43 |     await this.waitUntilHidden();
  44 |   }
  45 | }
```