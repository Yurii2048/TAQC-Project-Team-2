import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';

test.describe('TC-06 | Create News Form - Source field validation', () => {

  test('should successfully publish news when Source field is empty', async ({ authenticatedCreateNewsPage: form, page }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-06 - Empty Source Field');
    await allure.severity('normal');

    await test.step('Fill mandatory fields and leave Source empty', async () => {
      await form.fillTitle('News with empty source');
      await form.clickTag('News');
      await form.fillMainText('This is a valid test content for checking empty source field.');
    });

    await test.step('Click Publish and verify success', async () => {
      const isEnabled = await form.isPublishEnabled();
      expect(isEnabled).toBe(true);

      await form.clickPublish();
      await page.waitForURL('**/news');
      expect(page.url()).toContain('/news');
    });
  });

  test('should disable Publish button for invalid URL', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-06 - Invalid Source URL');
    await allure.severity('normal');

    await test.step('Enter an invalid URL in the Source field', async () => {
      await form.fillTitle('News with invalid source');
      await form.clickTag('News');
      await form.fillMainText('This is a valid test content for checking invalid source field.');
      await form.fillSource('www.example.com'); // Невалідний лінк
      await form.blurTitleField();
    });

    await test.step('Verify Publish button remains disabled', async () => {
      // Головна бізнес-перевірка: форма не пускає невалідний лінк
      const isDisabled = await form.isPublishDisabled();
      expect(isDisabled).toBe(true);
    });
  });

  test('should successfully send valid URL to backend on publish', async ({ authenticatedCreateNewsPage: form, page }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-06 - Valid Source URL Backend Verification');
    await allure.severity('normal');

    await test.step('Enter a valid URL in the Source field', async () => {
      await form.fillTitle(`News with valid source link ${Date.now()}`);
      await form.clickTag('News');
      await form.fillMainText('This is a valid test content for checking valid source field.');
      await form.fillSource('https://example.com');
    });

    await test.step('Verify Publish button becomes enabled', async () => {
      const isEnabled = await form.isPublishEnabled();
      expect(isEnabled).toBe(true);
    });

    await test.step('Click Publish and catch backend API response', async () => {
      const responsePromise = page.waitForResponse(response => 
        response.url().includes('/econews') && response.request().method() === 'POST'
      );

      await form.clickPublish();

      const response = await responsePromise;
      
      expect(response.status()).toBeLessThan(300);

      const requestData = JSON.parse(response.request().postData() || '{}');
      expect(requestData.source).toBe('https://example.com');
    });
  });
});