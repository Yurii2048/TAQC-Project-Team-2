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

  authenticatedCreateNewsPage: async ({ newsPage, header, signInModal, createNewsPage }, use) => {

    await newsPage.navigate();
    await header.clickSignIn();
    await signInModal.waitUntilVisible();
    await signInModal.signIn(LOGIN, PASSWORD);

    await header.userAvatarButton.waitFor({ state: 'visible', timeout: TIMEOUT });
    await newsPage.navigate();
    await newsPage.clickCreateNews();
    await createNewsPage.waitForFormReady();

    await use(createNewsPage);
  },
});

export { expect } from '@playwright/test';