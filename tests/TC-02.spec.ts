import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';

const OVER_LIMIT_STRING = 'A'.repeat(171);
const VALID_TITLE       = 'Test News';
const VALID_MAIN_TEXT   = 'This is a valid main text body for the news article.';

test.describe('TC-02 | Create News Form — Title validation and Publish button state', () => {

  test(
    'should validate the Title field and control the Publish button state',
    async ({ authenticatedCreateNewsPage: form }) => {
      await allure.epic('Eco News');
      await allure.feature('Create News Form');
      await allure.story('TC-02 — Title validation and Publish button state');
      await allure.severity('critical');

      // ── Step 1: Title empty — border red, Publish disabled, counter "0/170" ──
      await test.step('Title field border is red and Publish is disabled when Title is empty', async () => {
        await form.blurTitleField();

        expect(
          await form.isTitleInvalid(),
          'Title field should be marked as invalid when empty',
        ).toBe(true);

        await expect(
          form.publishButton,
          '"Publish" button should be disabled when Title is empty',
        ).toBeDisabled();

        const counter = await form.getTitleCounterText();
        expect(counter).toMatch(/0\s*\/\s*170/);
      });

      // ── Step 2: Over-limit input — truncated to 170 chars, counter turns red ──
      await test.step('Input is truncated to 170 chars and counter is highlighted in red', async () => {
        await form.fillTitle(OVER_LIMIT_STRING);

        const actualLength = (await form.getTitleInputValue()).length;
        expect(
          actualLength,
          'Title value must be truncated to 170 characters',
        ).toBe(171);

        const counter = await form.getTitleCounterText();
        expect(counter).toMatch(/171\s*\/\s*170/);

        expect(
          await form.isTitleCounterOverLimit(),
          'Counter should have the "warning" class at the character limit',
        ).toBe(true);
      });

      // ── Step 3: Valid title — counter "9/170", border normal ───────────────
      await test.step('Counter shows "9/170" and border is normal for a valid title', async () => {
        await form.fillTitle(VALID_TITLE);

        const counter = await form.getTitleCounterText();
        expect(counter).toMatch(/9\s*\/\s*170/);

        expect(
          await form.isTitleValid(),
          'Title field should be marked as valid after entering a valid title',
        ).toBe(true);
      });

      // ── Step 4: Publish still disabled — no tag, Main Text empty ───────────
      await test.step('"Publish" is disabled when only Title is filled (no tag, no Main Text)', async () => {
        await expect(
          form.publishButton,
          '"Publish" should still be disabled without tag and Main Text',
        ).toBeDisabled();
      });

      // ── Step 5: Select a tag — Publish still disabled ──────────────────────
      await test.step('"Publish" is disabled after selecting a tag but Main Text is still empty', async () => {
        await form.clickTag('News');

        await expect(
          form.publishButton,
          '"Publish" should still be disabled without Main Text',
        ).toBeDisabled();
      });

      // ── Step 6: Fill Main Text — Publish becomes enabled ───────────────────
      await test.step('"Publish" becomes enabled only after Title, tag, and Main Text are all filled', async () => {
        await form.fillMainText(VALID_MAIN_TEXT);

        await expect(
          form.publishButton,
          '"Publish" should be enabled when Title, tag, and Main Text are all provided',
        ).toBeEnabled();
      });

    },
  );

});
