import { Page, Locator } from '@playwright/test';
 
export abstract class BaseComponent {
  protected readonly page: Page;
  protected readonly root: Locator;
 
  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
  }
 
  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }
 
  async waitUntilVisible(timeout?: number): Promise<void> {
    await this.root.waitFor({ state: 'visible', timeout });
  }
 
  async waitUntilHidden(timeout?: number): Promise<void> {
    await this.root.waitFor({ state: 'hidden', timeout });
  }
 
  protected locator(selector: string): Locator {
    return this.root.locator(selector);
  }
 
  protected getByRole(
    role: Parameters<Locator['getByRole']>[0],
    options?: Parameters<Locator['getByRole']>[1]
  ): Locator {
    return this.root.getByRole(role, options);
  }
 
  protected getByText(text: string | RegExp, options?: { exact?: boolean }): Locator {
    return this.root.getByText(text, options);
  }
 
  protected getByPlaceholder(text: string): Locator {
    return this.root.getByPlaceholder(text);
  }
}
 


