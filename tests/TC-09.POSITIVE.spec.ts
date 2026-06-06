import * as allure from 'allure-js-commons'; 
import { test } from '../fixtures/index';
import { expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { NewsDetailPage } from '../pages/NewsDetailPage';

test('TC-09.1 Author can see Edit news button', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const newsPage = new NewsPage(page);
  const createNews = new CreateNewsPage(page);
  const newsDetail = new NewsDetailPage(page);

  const title = `TC-09 positive ${Date.now()}`;
  const content = 'Check edit button visible for author';

  // 1. login as author
  await loginPage.login(
    process.env.AUTHOR_LOGIN!,
    process.env.AUTHOR_PASSWORD!,
  );

  // 2. create news
  await newsPage.open();
  await newsPage.clickCreateNews();

  await createNews.titleInput.fill(title);
  await createNews.fillMainText(content);
  await createNews.selectTag('News');
  await createNews.publishButton.click();

  await newsPage.waitForNewsList();
  await newsPage.openFirstNewsCard();
  await newsDetail.waitForLoaded();

  // 4. assert
  await newsDetail.expectEditNewsButtonVisible();
});