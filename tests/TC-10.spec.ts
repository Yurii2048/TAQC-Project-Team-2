import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/index';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { NewsDetailPage } from '../pages/NewsDetailPage';

const INITIAL_TITLE = 'TC-10 Початковий заголовок новини';
const INITIAL_CONTENT = 'TC-10 Початковий текст новини для перевірки редагування.';
const INITIAL_TAG = 'News';

const EDITED_TITLE = 'TC-10 Оновлений заголовок після редагування';
const EDITED_CONTENT = 'TC-10 Оновлений текст після редагування новини автором.';
const EDITED_TAG = 'Events';

test.describe('TC-10: редагування новини', () => {

  test('оновлює заголовок, текст і тег; дата не змінюється', async ({ authenticatedPage }) => {
    test.setTimeout(90000);

    const newsPage = new NewsPage(authenticatedPage);
    const createPage = new CreateNewsPage(authenticatedPage);
    const detailPage = new NewsDetailPage(authenticatedPage);

    await allure.epic('GreenCity');
    await allure.feature('Eco News');
    await allure.story('Edit news');
    await allure.severity('critical');

    // ───────────────────────── ARRANGE ─────────────────────────

    await allure.step('Відкрити список новин', async () => {
      await newsPage.open();
    });

    await allure.step('Створити новину', async () => {
      await newsPage.clickCreateNews();
      await createPage.setTitle(INITIAL_TITLE);
      await createPage.selectTag(INITIAL_TAG);
      await createPage.fillMainText(INITIAL_CONTENT);
      await createPage.clickPublish();
      await authenticatedPage.waitForTimeout(2000);
      await newsPage.open();
      await newsPage.waitForNewsList();
    });

    // ───────────────────────── ACT ─────────────────────────

    await allure.step('Відкрити створену новину', async () => {
      await newsPage.openFirstNewsCard();
      await detailPage.waitForLoaded();
    });

    const originalDate = await detailPage.getDate();

    await allure.step('Натиснути Edit', async () => {
      await detailPage.clickEditNews();
    });

    await allure.step('Оновити заголовок', async () => {
      await createPage.setTitle(EDITED_TITLE);
    });

    await allure.step('Оновити текст', async () => {
      await createPage.clearMainText();
      await createPage.fillMainText(EDITED_CONTENT);
    });

    await allure.step('Оновити тег', async () => {
      await createPage.selectTag(EDITED_TAG as any);
    });

    await allure.step('Зберегти зміни (Edit)', async () => {
      await detailPage.clickSubmit();
      await authenticatedPage.waitForTimeout(2000);
      await detailPage.waitForLoaded();
    });

    // ───────────────────────── ASSERT ─────────────────────────

    await allure.step('Повторно відкрити новину', async () => {
      await authenticatedPage.reload();
      await detailPage.waitForLoaded();
    });

    await allure.step('Перевірка заголовка', async () => {
      expect(await detailPage.getTitle()).toContain(EDITED_TITLE);
    });

    await allure.step('Перевірка контенту', async () => {
      expect(await detailPage.getContent()).toContain(EDITED_CONTENT);
    });

    await allure.step('Перевірка дати (не змінилась)', async () => {
      expect(await detailPage.getDate()).toBe(originalDate);
    });
  });
});