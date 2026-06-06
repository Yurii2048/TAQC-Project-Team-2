import * as allure from 'allure-js-commons';
import { test, expect } from '../fixtures/index';
import { NewsPage }        from '../pages/NewsPage';
import { CreateNewsPage }  from '../pages/CreateNewsPage';
import { PreviewNewsPage } from '../pages/PreviewNewsPage';

// ── Тестові дані (не в тесті — оголошені вище) ─────────────────────────────
const PREVIEW_TITLE   = 'Test Preview';
const PREVIEW_CONTENT = 'This is a test preview content';

test.describe('TC-08: Режим перегляду відображає введені дані коректно', () => {

  test('Превью показує заголовок, текст, дату, автора; кнопка повернення до редагування працює', async ({ authenticatedPage }) => {

    // ── Allure metadata ───────────────────────────────────────────────────────
    await allure.epic('GreenCity');
    await allure.feature('Eco News');
    await allure.story('Режим перегляду (Preview)');
    await allure.severity('normal');

    // ── ARRANGE ───────────────────────────────────────────────────────────────
    const newsPage    = new NewsPage(authenticatedPage);
    const createPage  = new CreateNewsPage(authenticatedPage);
    const previewPage = new PreviewNewsPage(authenticatedPage);

    await allure.step('Передумова: перейти до розділу Eco News та натиснути "Create News"', async () => {
      await newsPage.navigate();
      await newsPage.clickCreateNews();
    });

    // ── ACT ───────────────────────────────────────────────────────────────────
    await allure.step(`Крок 1: Ввести валідний заголовок "${PREVIEW_TITLE}"`, async () => {
      await createPage.fillTitle(PREVIEW_TITLE);
    });

    await allure.step(`Крок 2: Ввести валідний текст "${PREVIEW_CONTENT}"`, async () => {
      await createPage.fillMainText(PREVIEW_CONTENT);
    });

    await allure.step('Крок 3: Перевірити і натиснути "Preview"', async () => {
      await expect(createPage.previewButton).toBeEnabled();
      await createPage.clickPreview();
    });

    // ── ASSERT ────────────────────────────────────────────────────────────────
   await allure.step('Перевірка: режим перегляду відкрився — кнопка "Back to editing" видима', async () => {
  await expect.soft(previewPage.isBackToEditingVisible()).resolves.toBeTruthy();
});

await allure.step(
  `Перевірка: заголовок у превью відповідає введеному "${PREVIEW_TITLE}"`,
  async () => {
    await previewPage.expectTitle(PREVIEW_TITLE);
  }
);
    await allure.step(
      `Перевірка: заголовок у превью відповідає введеному "${PREVIEW_TITLE}"`,
      async () => {
      await previewPage.expectTitle(PREVIEW_TITLE);
    });

    await allure.step(`Перевірка: основний текст у превью відповідає введеному`, async () => {
      const content = await previewPage.getContent();
      expect(content).toContain(PREVIEW_CONTENT);
    });

    await allure.step('Перевірка: поточна дата відображається у превью', async () => {
      const date = await previewPage.getDate();
      expect(date.length).toBeGreaterThan(0);
    });

    await allure.step('Перевірка: ім\'я автора відображається у превью', async () => {
      const author = await previewPage.getAuthor();
      expect(author.length).toBeGreaterThan(0);
    });

    await allure.step('Перевірка: натиснути "Back to editing" → повернення до форми', async () => {
      await previewPage.clickBackToEditing();
      const url = await createPage.getCurrentUrl();
      expect(url).toContain('create-news');
    });
  });
});
