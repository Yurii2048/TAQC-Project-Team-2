import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage'

test.describe('Example test for greenCity', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.greencity.cx.ua/#/greenCity');        
    });

    // test('has title', async ({ page }) => {
    //     expect(await page.title()).toBe('GreenCity — Build Eco-Friendly Habits Today');
    // });

    test('check header visibility', async ({ page }) => {
        const basePage = new BasePage(page);
        
        const isHeaderVisible = await basePage.isHeaderVisible;
        await expect(isHeaderVisible).toBeTruthy();
    });
});