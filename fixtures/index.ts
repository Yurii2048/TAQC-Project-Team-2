import { test as base } from '@playwright/test';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { SignInModalComponent } from '../components/SignInModalComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { LOGIN, PASSWORD, TIMEOUT } from '../utils/env';

type GreenCityFixtures = {
  newsPage: NewsPage;
  createNewsPage: CreateNewsPage;
  signInModal: SignInModalComponent;
  header: HeaderComponent;
  /** Authenticated createNewsPage — navigates to form already logged in */
  authenticatedCreateNewsPage: CreateNewsPage;
};

export const test = base.extend<GreenCityFixtures>({
  newsPage: async ({ page }, use) => {
    await use(new NewsPage(page));
  },

  createNewsPage: async ({ page }, use) => {
    await use(new CreateNewsPage(page));
  },

  signInModal: async ({ page }, use) => {
    await use(new SignInModalComponent(page));
  },

  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },

  /**
   * Opens the news page, signs in via header, then navigates to Create News.
   * Use this fixture for tests that require an authenticated session.
   */
  authenticatedCreateNewsPage: async ({ page }, use) => {
    const newsPage = new NewsPage(page);
    const header = new HeaderComponent(page);
    const signInModal = new SignInModalComponent(page);
    const createNewsPage = new CreateNewsPage(page);

    // Navigate to news and sign in
    await newsPage.navigate();
    await header.clickSignIn();
    await signInModal.waitUntilVisible();
    await signInModal.signIn(LOGIN, PASSWORD);

    // Wait until the user avatar appears (means we're logged in)
    await header.userAvatarButton.waitFor({ state: 'visible', timeout: TIMEOUT });

    // Go to the Create News form
    await newsPage.navigate();
    await newsPage.clickCreateNews();
    await createNewsPage.waitForFormReady();

    await use(createNewsPage);
  },
});

export { expect } from '@playwright/test';