import { test as base, expect, Page } from '@playwright/test';

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
  authenticatedPage: Page;
  authenticatedCreateNewsPage: CreateNewsPage;
};

export const test = base.extend<GreenCityFixtures>({

  // ─────────────────────────────
  // PAGES
  // ─────────────────────────────

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

  // ─────────────────────────────
  // AUTH FIXTURE (STABLE VERSION)
  // ─────────────────────────────

  authenticatedPage: async ({ page, header, signInModal }, use) => {

    const newsPage = new NewsPage(page);

    // 1. Відкрити застосунок
    await newsPage.navigate();
    await page.waitForLoadState('domcontentloaded');

    // 2. Відкрити логін
    await header.clickSignIn();

    // 3. Авторизація
    await signInModal.waitUntilVisible();
    await signInModal.signIn(LOGIN, PASSWORD);

    // 4. Перевірка що юзер залогінений
    await header.userAvatarButton.waitFor({
      state: 'visible',
      timeout: TIMEOUT,
    });

    // 5. Віддати control тесту
    await use(page);
  },

  // ─────────────────────────────
  // CREATE NEWS (AUTH FLOW)
  // ─────────────────────────────

  authenticatedCreateNewsPage: async (
    { page, newsPage, header, signInModal },
    use
  ) => {

    const createNewsPage = new CreateNewsPage(page);

    await newsPage.navigate();
    await page.waitForLoadState('domcontentloaded');

    await header.clickSignIn();
    await signInModal.waitUntilVisible();
    await signInModal.signIn(LOGIN, PASSWORD);

    await header.userAvatarButton.waitFor({
      state: 'visible',
      timeout: TIMEOUT,
    });

    await newsPage.navigate();
    await newsPage.clickCreateNews();

    await expect(createNewsPage.titleInput).toBeVisible({ timeout: 15000 });

    await use(createNewsPage);
  },
});

export { expect } from '@playwright/test';