import * as allure from 'allure-js-commons';
import { test } from '../fixtures/index';
import { expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { NewsDetailPage } from '../pages/NewsDetailPage';

test('TC-09.2 Non-author cannot see Edit news button', async ({ browser }) => {

  const title = `TC-09 negative ${Date.now()}`;
  const content = 'Check edit button hidden for other user';

  // ───────── AUTHOR CONTEXT ─────────
  const context1 = await browser.newContext({
    baseURL: 'https://www.greencity.cx.ua',
  });
  const page1 = await context1.newPage();

  const loginPage1 = new LoginPage(page1);
  const newsPage1 = new NewsPage(page1);
  const createNews1 = new CreateNewsPage(page1);

  await loginPage1.login(
    process.env.AUTHOR_LOGIN!,
    process.env.AUTHOR_PASSWORD!,
  );

  await newsPage1.open();
  await newsPage1.clickCreateNews();

  await createNews1.titleInput.fill(title);
  await createNews1.fillMainText(content);
  await createNews1.selectTag('News');
  await createNews1.publishButton.click(); // ← було createNews

  await newsPage1.waitForNewsList();       // ← було newsPage
  await newsPage1.openFirstNewsCard();     // ← було newsPage

  const url = page1.url();

  // ───────── OTHER USER CONTEXT ─────────
  const context2 = await browser.newContext({
    baseURL: 'https://www.greencity.cx.ua',
  });
  const page2 = await context2.newPage();

  const loginPage2 = new LoginPage(page2);
  const newsDetail2 = new NewsDetailPage(page2);

  await loginPage2.login(
    process.env.USER_LOGIN!,
    process.env.USER_PASSWORD!,
  );

  await page2.goto(url);

  await newsDetail2.waitForLoaded();

  // assert hidden
  await newsDetail2.expectEditNewsButtonHidden();
});