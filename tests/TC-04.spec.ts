import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';
import path from 'path';
import fs from 'fs';

test.describe('TC-04 | Create News Form - Upload Image field validation', () => {
  const assetsDir = path.resolve(process.cwd(), 'utils/assets');
  const validPngPath = path.join(assetsDir, 'valid-image.png');
  const invalidGifPath = path.join(assetsDir, 'invalid-format.gif');
  const largeJpegPath = path.join(assetsDir, 'large-image.jpeg');

  test.beforeAll(() => {
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }
    fs.writeFileSync(validPngPath, 'fake png content');
    fs.writeFileSync(invalidGifPath, 'fake gif content');
    
    // Створюємо файл ~11 МБ для перевірки ліміту
    const bigBuffer = Buffer.alloc(11 * 1024 * 1024);
    fs.writeFileSync(largeJpegPath, bigBuffer);
  });

  test('should upload valid PNG successfully', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-04 - Valid PNG');
    await allure.severity('normal');

    await test.step('Upload a valid PNG file and verify no errors', async () => {
      await form.uploadImage(validPngPath);
      await expect(form.imageErrorMessage).not.toBeVisible();
    });
  });

  test('should show error for invalid GIF format', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-04 - Invalid Format');
    await allure.severity('normal');

    await test.step('Upload a GIF file and verify error message', async () => {
      await form.uploadImage(invalidGifPath);
      await expect(form.imageErrorMessage).toBeVisible();
      await expect(form.imageErrorMessage).toHaveText('Upload only PNG or JPG. File size must be less than 10MB');
    });
  });

  test('should show error for image larger than 10MB', async ({ authenticatedCreateNewsPage: form }) => {
    await allure.epic('Eco News');
    await allure.feature('Create News Form');
    await allure.story('TC-04 - Large File');
    await allure.severity('normal');

    await test.step('Upload a large JPEG file and verify error message', async () => {
      await form.uploadImage(largeJpegPath);
      await expect(form.imageErrorMessage).toBeVisible();
      await expect(form.imageErrorMessage).toHaveText('Upload only PNG or JPG. File size must be less than 10MB');
    });
  });
});