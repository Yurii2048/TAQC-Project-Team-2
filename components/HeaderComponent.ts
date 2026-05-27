import { Page, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  readonly logoLink: Locator;
  readonly signInButton: Locator;
  readonly userAvatarButton: Locator;
  readonly createNewsButton: Locator;
  readonly ecoNewsLink: Locator;
  readonly languageSwitcher: Locator;

  // User dropdown items
  readonly userDropdown: Locator;
  readonly profileMenuItem: Locator;
  readonly signOutMenuItem: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-header'));

    this.logoLink         = this.locator('.logo-link, .header-logo');
    this.signInButton     = this.locator('.header_navigation-menu-right-list > .header_sign-in-link');
    this.userAvatarButton = this.locator('.header_navigation-menu-right-list > .nav-global-button');
    this.createNewsButton = this.getByRole('link', { name: /create news/i });
    this.ecoNewsLink      = this.getByRole('link', { name: /eco.?news/i });
    this.languageSwitcher = this.locator('.language-switcher, .lang-switcher');

    this.userDropdown     = page.locator('.user-menu-dropdown, .header-dropdown');
    this.profileMenuItem  = this.userDropdown.getByRole('link', { name: /profile/i });
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