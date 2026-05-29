import { Page, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  readonly signInButton: Locator;
  readonly userAvatarButton: Locator;
  readonly ecoNewsLink: Locator;
  readonly userDropdown: Locator;
  readonly signOutMenuItem: Locator;

  constructor(page: Page) {
    super(page.locator('app-header'));

    this.signInButton     = this.locator('.header_navigation-menu-right-list > .header_sign-in-link');
    this.userAvatarButton = this.locator('.header_navigation-menu-right-list > .nav-global-button');
    this.ecoNewsLink      = this.getByRole('link', { name: /eco.?news/i });

    this.userDropdown     = page.locator('.user-menu-dropdown, .header-dropdown');
    this.signOutMenuItem  = this.userDropdown.getByRole('button', { name: /sign out/i })
                              .or(this.userDropdown.getByText(/sign out/i));
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

  async clickEcoNews(): Promise<void> {
    await this.ecoNewsLink.click();
  }

  async openUserMenu(): Promise<void> {
    await this.userAvatarButton.click();
    await this.userDropdown.waitFor({ state: 'visible' });
  }

  async signOut(): Promise<void> {
    await this.openUserMenu();
    await this.signOutMenuItem.click();
  }

  async isUserLoggedIn(): Promise<boolean> {
    return this.userAvatarButton.isVisible();
  }
  
}