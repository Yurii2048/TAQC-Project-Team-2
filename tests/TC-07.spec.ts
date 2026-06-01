import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';

test.describe('TC-07 | Create News Form - Cancel Button and Confirmation Modal', () => {

  test('should close the form and redirect to news page when "Yes, cancel" is selected', async ({ authenticatedCreateNewsPage: form, page }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-07 - Confirm Cancel');
    await allure.severity('normal');

    await test.step('Fill form fields and click Cancel', async () => {
      await form.fillTitle('Test');
      await form.fillMainText('Test content with 20 chars');
      await form.cancelButton.click();
    });

    await test.step('Verify confirmation modal text appears', async () => {
      await expect(form.confirmationModal).toBeVisible();
      
      const expectedMessage = 'All created content will be lost. Do you still want to cancel news creating?';
      await expect(form.confirmationModal).toContainText(expectedMessage);
    });

    await test.step('Click "Yes, cancel" and verify redirection to news page', async () => {
      await form.yesCancelButton.click();
      
      await page.waitForURL('**/news');
      expect(page.url()).toContain('/news');
    });
  });

  test('should keep the form open with existing data when "Continue editing" is selected', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-07 - Continue Editing');
    await allure.severity('normal');

    const titleText = 'Test Unique Title';
    const contentText = 'Test content with 20 chars';

    await test.step('Fill form fields and click Cancel', async () => {
      await form.fillTitle(titleText);
      await form.fillMainText(contentText);
      await form.cancelButton.click();
    });

    await test.step('Click "Continue editing" and verify modal closes', async () => {
      await expect(form.confirmationModal).toBeVisible();
      await form.continueEditingButton.click();
      
      await expect(form.confirmationModal).not.toBeVisible();
    });

    await test.step('Verify that previously entered data remains intact', async () => {
      const actualTitle = await form.titleTextArea.inputValue();
      expect(actualTitle).toBe(titleText);

      const actualMainText = await form.mainTextInput.innerText();
      expect(actualMainText.trim()).toBe(contentText);
    });
  });
});