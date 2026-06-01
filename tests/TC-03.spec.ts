import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';

const VALID_TITLE     = 'Test';
const VALID_MAIN_TEXT = 'Test content with 20 chars';
const MAX_TAGS        = 3;

test.describe('TC-03 | Create News Form — Tag selection (1 to 3 tags)', () => {

  test(
    'should allow selecting 1–3 tags and block selection of a 4th tag',
    async ({ authenticatedCreateNewsPage: form, page }) => {
      await allure.epic('Eco News');
      await allure.feature('Create News Form');
      await allure.story('TC-03 — Tag selection limits');
      await allure.severity('critical');

      // ── Step 1: Select one tag and publish ─────────────────────────────
      await test.step('Select one tag ("News"), fill required fields, and publish', async () => {
        await form.clickTag('News');

        const selectedCount = await form.getSelectedTagCount();
        expect(selectedCount, 'Exactly 1 tag should be selected').toBe(1);

        await form.fillTitle(VALID_TITLE);
        await form.fillMainText(VALID_MAIN_TEXT);

        await expect(
          form.publishButton,
          '"Publish" should be enabled with title, tag, and main text filled',
        ).toBeEnabled();

        await form.clickPublish();
        // await page.waitForURL(/news/, { timeout: 10_000 });
      });

      // ── Step 2: Open Create News form again ────────────────────────────
      await test.step('Open the "Create News" form again', async () => {
        await form.navigate();
      });

      // ── Step 3: Select three tags and verify ───────────────────────────
      await test.step('Select three tags ("News", "Events", "Education") and verify all are selected', async () => {
        // await form.clickTag('News');
        await form.clickTag('Events');
        await form.clickTag('Education');

        const selectedCount = await form.getSelectedTagCount();
        expect(selectedCount, 'Exactly 3 tags should be selected').toBe(MAX_TAGS);

        expect(
          await form.isTagSelected('News'),
          '"News" tag should be selected',
        ).toBe(true);

        expect(
          await form.isTagSelected('Events'),
          '"Events" tag should be selected',
        ).toBe(true);

        expect(
          await form.isTagSelected('Education'),
          '"Education" tag should be selected',
        ).toBe(true);
      });

      // ── Step 4: Attempt to select a 4th tag — must be blocked ──────────
      await test.step('Attempt to select a 4th tag ("Initiatives") — it must remain unselected', async () => {
        await form.clickTag('Initiatives');

        const selectedCount = await form.getSelectedTagCount();
        expect(
          selectedCount,
          'Selected tag count must not exceed 3 after attempting to add a 4th tag',
        ).toBe(MAX_TAGS);

        expect(
          await form.isTagSelected('Initiatives'),
          '"Initiatives" tag must NOT be selected (4th tag blocked)',
        ).toBe(false);
      });

      // ── Step 5: Publish with three tags and verify ─────────────────────
      await test.step('Fill required fields, publish, and verify the news is published with 3 tags', async () => {
        await form.fillTitle(VALID_TITLE);
        await form.fillMainText(VALID_MAIN_TEXT);

        await expect(
          form.publishButton,
          '"Publish" should be enabled',
        ).toBeEnabled();

        await form.clickPublish();
        await page.waitForURL(/news/, { timeout: 10_000 });
      });
    },
  );

});
