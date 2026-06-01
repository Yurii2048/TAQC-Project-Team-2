import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';

test.describe('TC-05 | Create News Form - Main Text (Content) field validation', () => {

  test('should disable Publish button when text is too short (10 chars)', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-05 - Main Text Too Short');
    await allure.severity('normal');

    await test.step('Enter 10 characters in Main Text and "Test" in Title', async () => {
      await form.fillTitle('Test');
      await form.fillMainText('Short text'); 
      await form.blurTitleField(); 
    });

    await test.step('Verify Publish button remains disabled', async () => {
      const isDisabled = await form.isPublishDisabled();
      expect(isDisabled).toBe(true);
    });
  });

  test('should truncate text to 63206 characters when limit is exceeded', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-05 - Main Text Max Limit Truncation');
    await allure.severity('normal');

    const longText = 'a'.repeat(63207);

    await test.step('Enter 63207 characters into Main Text field', async () => {
      await form.fillMainText(longText);
    });

    await test.step('Verify that text is truncated to 63206 characters', async () => {
      const actualLength = await form.getMainTextLength();
      expect(actualLength).toBe(63206);
    });
  });

  test('should successfully publish news with valid text length (25 chars)', async ({ authenticatedCreateNewsPage: form, page }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-05 - Valid Main Text and Publish');
    await allure.severity('normal');

    await test.step('Enter valid Title, Tags and 25 characters in Main Text', async () => {
      await form.fillTitle('Valid Test Title for TC05');
      await form.clickTag('News');
      await form.fillMainText('This is a valid test content');
    });

    await test.step('Verify Publish button becomes enabled', async () => {
      const isEnabled = await form.isPublishEnabled();
      expect(isEnabled).toBe(true);
    });

    await test.step('Click Publish and verify success', async () => {
      await form.clickPublish();
      await page.waitForURL('**/news');
      expect(page.url()).toContain('/news');
    });
  });
});