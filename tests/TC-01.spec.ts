import { test, expect } from '../fixtures/index';
import * as allure from 'allure-js-commons';


export const EXPECTED_TAGS = ['News', 'Events', 'Education', 'Initiatives', 'Ads'] as const;
export type TagName = typeof EXPECTED_TAGS[number];


test.describe('TC-01 | Create News Form — fields presence and order', () => {

  test(
    'should display all required fields in the correct order',
    async ({ authenticatedCreateNewsPage: form }) => {
      await allure.epic('Eco News');
      await allure.feature('Create News Form');
      await allure.story('TC-01 — Form fields validation');
      await allure.severity('critical');

      // ── Step 1: Verify the Title field ─────────────────────────────────
      await test.step('Title field is visible with counter "0/170"', async () => {
        await expect(form.titleInput).toBeVisible();
        const counter = await form.getTitleCounterText();
        expect(counter).toMatch(/0\s*\/\s*170/);
      });

      // ── Step 2: Verify all 5 tag buttons ───────────────────────────────
      await test.step('Tag buttons are present (News, Events, Education, Initiatives, Ads)', async () => {
        const tagCount = await form.getTagCount();
        expect(tagCount).toBeGreaterThanOrEqual(EXPECTED_TAGS.length);

        for (const tag of EXPECTED_TAGS) {
          const tagLocator = form.tagButtons.filter({ hasText: tag });
          await expect(tagLocator, `Tag "${tag}" should be visible`).toBeVisible();
        }
      });

      // ── Step 3: Verify Add Image button ────────────────────────────────
      await test.step('"Add Image" button or upload field is visible', async () => {
        await expect(form.addImageButton).toBeVisible();
      });

      // ── Step 4: Verify Main Text field ─────────────────────────────────
      await test.step('Main Text field is visible with character counter', async () => {
        await expect(form.mainTextInput).toBeVisible();
        const counter = await form.getMainTextCounterText();
        expect(counter).toMatch(/63\s*[,.]?\s*206|63206/);
      });

      // ── Step 5: Verify Author field (pre-filled, non-editable) ─────────
      await test.step('Author field is pre-filled and non-editable', async () => {
        await expect(form.authorValue).toBeVisible();
        const isEditable = await form.isAuthorEditable();
        expect(isEditable, 'Author field should NOT be editable').toBe(false);
      });

      // ── Step 6: Verify Date field (pre-filled, non-editable) ───────────
      await test.step('Date field is pre-filled with the current date and non-editable', async () => {
        await expect(form.dateValue).toBeVisible();

        const dateValue = (await form.getDateValue()).trim();

        const expectedDate = new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });

        expect(dateValue).toBe(expectedDate);

        const isEditable = await form.isDateEditable();
        expect(isEditable, 'Date field should NOT be editable').toBe(false);
      });

      // ── Step 7: Verify Source field ─────────────────────────────────────
      await test.step('Source field is visible with correct placeholder', async () => {
        await expect(form.sourceBlock).toBeVisible();
        expect(form.sourcePlaceholder).toContainText('Link must start with http(s)://');
      });

      // ── Step 8: Verify action buttons ──────────────────────────────────
      await test.step('"Cancel", "Preview", and "Publish" buttons are visible', async () => {
        await expect(form.cancelButton,  '"Cancel" button should be visible').toBeVisible();
        await expect(form.previewButton, '"Preview" button should be visible').toBeVisible();
        await expect(form.publishButton, '"Publish" button should be visible').toBeVisible();
      });

      // ── Step 9: Verify fields are displayed in the correct order ────────
      await test.step('All fields are displayed in the correct order: Title → Tags → Add Image → Main Text → Author → Date → Source', async () => {
        const orderedElements = [
          { name: 'Title',     locator: form.titleInput },
          { name: 'Tags',      locator: form.tagButtons.first() },
          { name: 'Add Image', locator: form.addImageButton },
          { name: 'Main Text', locator: form.mainTextInput },
          { name: 'Author',    locator: form.authorValue },
          { name: 'Date',      locator: form.dateValue },
          { name: 'Source',    locator: form.sourceBlock },
        ];

        const positions: { name: string; y: number }[] = [];

        for (const { name, locator } of orderedElements) {
          const box = await locator.boundingBox();
          expect(box, `"${name}" element must be present in the DOM`).not.toBeNull();
          positions.push({ name, y: box!.y });
        }

        for (let i = 0; i < positions.length - 1; i++) {
          const current = positions[i];
          const next    = positions[i + 1];
          expect(
            current.y,
            `"${current.name}" (y=${current.y}) must appear above "${next.name}" (y=${next.y})`
          ).toBeLessThan(next.y);
        }
      });

    }
  );

});
