# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-07.spec.ts >> TC-07 | Create News Form - Cancel Button and Confirmation Modal >> should keep the form open with existing data when "Continue editing" is selected
- Location: tests\TC-07.spec.ts:33:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('app-warning-pop-up, .warning-text')
Expected: visible
Error: strict mode violation: locator('app-warning-pop-up, .warning-text') resolved to 2 elements:
    1) <app-warning-pop-up _nghost-ng-c1085927807="">…</app-warning-pop-up> aka locator('app-warning-pop-up')
    2) <div class="warning-text" _ngcontent-ng-c1085927807="">…</div> aka getByText('All created content will be lost. Do you still want to cancel news creating?')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('app-warning-pop-up, .warning-text')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link [ref=e6] [cursor=pointer]:
        - /url: .main-content
        - text: skip to the main content
      - banner [ref=e7]:
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                    - text: Eco news
                - listitem [ref=e17]:
                  - link [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                    - text: Events
                - listitem [ref=e19]:
                  - link [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                    - text: Places
                - listitem [ref=e21]:
                  - link [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                    - text: About us
                - listitem [ref=e23]:
                  - link [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                    - text: My space
                - listitem [ref=e25]:
                  - link [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
                    - text: UBS courier
            - menu [ref=e28]:
              - listitem [ref=e29] [cursor=pointer]:
                - img [ref=e30]
              - listitem [ref=e31] [cursor=pointer]:
                - img [ref=e32]
              - search [ref=e33] [cursor=pointer]:
                - img [ref=e34]
              - menu [ref=e35]:
                - option [ref=e36] [cursor=pointer]:
                  - generic [ref=e37]: En
                  - img [ref=e38]
              - menu [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: Yura
      - generic [ref=e42]:
        - main [ref=e46]:
          - generic [ref=e47]:
            - generic [ref=e48]:
              - heading [level=2] [ref=e49]: Create news
              - paragraph [ref=e51]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
            - generic [ref=e53]:
              - generic [ref=e54]:
                - generic [ref=e55]:
                  - generic [ref=e56]:
                    - heading [level=3] [ref=e57]: Title
                    - generic [ref=e58]: 17/170
                  - textbox [ref=e60]:
                    - /placeholder: e.g. Coffee takeaway with 20% discount
                    - text: Test Unique Title
                - generic [ref=e61]:
                  - heading [level=3] [ref=e62]: Pick tags for news
                  - paragraph [ref=e63]: Only 3 tags can be added
                  - generic [ref=e65]:
                    - button [ref=e66] [cursor=pointer]:
                      - generic [ref=e68]: News
                    - button [ref=e69] [cursor=pointer]:
                      - generic [ref=e71]: Events
                    - button [ref=e72] [cursor=pointer]:
                      - generic [ref=e74]: Education
                    - button [ref=e75] [cursor=pointer]:
                      - generic [ref=e77]: Initiatives
                    - button [ref=e78] [cursor=pointer]:
                      - generic [ref=e80]: Ads
                - generic [ref=e81]:
                  - generic [ref=e82]:
                    - heading [level=3] [ref=e83]: Source (optional)
                    - generic [ref=e84]: Please add the link of original article/news/post. Link must start with http(s)://
                  - textbox [ref=e86]:
                    - /placeholder: Link to external source
                - generic [ref=e87]:
                  - heading [level=3] [ref=e88]: Picture (optional)
                  - generic [ref=e89]:
                    - generic [ref=e92]:
                      - text: Drop your image here or
                      - generic [ref=e93]: browse
                      - button [ref=e94]
                    - generic [ref=e112]:
                      - button [ref=e113] [cursor=pointer]: Cancel
                      - button [ref=e114] [cursor=pointer]: Submit
                    - paragraph [ref=e115]: Upload only PNG or JPG. File size must be less than 10MB
              - generic [ref=e116]:
                - generic [ref=e117]:
                  - heading [level=3] [ref=e118]: Content
                  - paragraph [ref=e119]: Must be minimum 20 and maximum 63 206 symbols
                - generic [ref=e120]:
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - button [ref=e123] [cursor=pointer]:
                        - img [ref=e124]
                      - button [ref=e127] [cursor=pointer]:
                        - img [ref=e128]
                      - button [ref=e130] [cursor=pointer]:
                        - img [ref=e131]
                      - button [ref=e134] [cursor=pointer]:
                        - img [ref=e135]
                    - generic [ref=e139]:
                      - button [ref=e140] [cursor=pointer]:
                        - img [ref=e141]
                      - button [ref=e146] [cursor=pointer]:
                        - img [ref=e147]
                    - generic [ref=e151]:
                      - button [ref=e152] [cursor=pointer]:
                        - img [ref=e153]
                      - button [ref=e155] [cursor=pointer]:
                        - img [ref=e156]
                    - generic [ref=e158]:
                      - button [ref=e159] [cursor=pointer]:
                        - img [ref=e160]
                      - button [ref=e164] [cursor=pointer]:
                        - img [ref=e165]
                    - generic [ref=e166]:
                      - button [ref=e167] [cursor=pointer]:
                        - img [ref=e168]
                      - button [ref=e171] [cursor=pointer]:
                        - img [ref=e172]
                    - generic [ref=e175]:
                      - button [ref=e176] [cursor=pointer]:
                        - img [ref=e177]
                      - button [ref=e179] [cursor=pointer]:
                        - img [ref=e180]
                    - button [ref=e183] [cursor=pointer]:
                      - img [ref=e184]
                    - generic [ref=e190]:
                      - button [ref=e191] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e192]
                      - text: Small Normal Large Huge
                    - generic [ref=e196]:
                      - button [ref=e197] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e198]
                      - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                    - generic [ref=e201]:
                      - button [ref=e203] [cursor=pointer]:
                        - img [ref=e204]
                      - button [ref=e207] [cursor=pointer]:
                        - img [ref=e208]
                    - generic [ref=e258]:
                      - button [ref=e259] [cursor=pointer]:
                        - text: Sans Serif
                        - img [ref=e260]
                      - text: Sans Serif Serif Monospace
                    - button [ref=e265] [cursor=pointer]:
                      - img [ref=e266]
                    - button [ref=e268] [cursor=pointer]:
                      - img [ref=e269]
                    - generic [ref=e274]:
                      - button [ref=e275] [cursor=pointer]:
                        - img [ref=e276]
                      - button [ref=e280] [cursor=pointer]:
                        - img [ref=e281]
                      - button [ref=e285] [cursor=pointer]:
                        - img [ref=e286]
                    - button [ref=e300] [cursor=pointer]:
                      - img [ref=e301]
                  - generic [ref=e306]:
                    - paragraph [ref=e308]: Test content with 20 chars
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e309]: "Number of characters: 26"
              - generic [ref=e310]:
                - paragraph [ref=e311]: "Date: Jun 1, 2026"
                - paragraph [ref=e312]: "Author: Yura"
              - generic [ref=e313]:
                - button [active] [ref=e314] [cursor=pointer]: Cancel
                - button [ref=e315] [cursor=pointer]: Preview
                - button [disabled] [ref=e316]: Publish
        - contentinfo [ref=e318]:
          - generic [ref=e319]:
            - generic [ref=e320]:
              - link [ref=e322] [cursor=pointer]:
                - /url: "#/greenCity"
                - img [ref=e323]
              - navigation [ref=e324]:
                - menu [ref=e325]:
                  - listitem [ref=e326]:
                    - link [ref=e327] [cursor=pointer]:
                      - /url: "#/greenCity/news"
                      - text: Eco news
                  - listitem [ref=e328]:
                    - link [ref=e329] [cursor=pointer]:
                      - /url: "#/greenCity/events"
                      - text: Events
                  - listitem [ref=e330]:
                    - link [ref=e331] [cursor=pointer]:
                      - /url: "#/greenCity/places"
                      - text: Places
                  - listitem [ref=e332]:
                    - link [ref=e333] [cursor=pointer]:
                      - /url: "#/greenCity/about"
                      - text: About Us
                  - listitem [ref=e334]:
                    - link [ref=e335] [cursor=pointer]:
                      - /url: "#/greenCity/profile/1822"
                      - text: My Space
                  - listitem [ref=e336]:
                    - link [ref=e337] [cursor=pointer]:
                      - /url: "#/ubs"
                      - text: UBS Courier
                - menu [ref=e338]:
                  - listitem [ref=e339]:
                    - paragraph [ref=e340]: Follow us
                  - listitem [ref=e341]:
                    - link [ref=e342] [cursor=pointer]:
                      - /url: "#"
                      - img [ref=e343]
                    - link [ref=e344] [cursor=pointer]:
                      - /url: "#"
                      - img [ref=e345]
                    - link [ref=e346] [cursor=pointer]:
                      - /url: "#"
                      - img [ref=e347]
                    - link [ref=e348] [cursor=pointer]:
                      - /url: "#"
                      - img [ref=e349]
                    - link [ref=e350] [cursor=pointer]:
                      - /url: "#"
                      - img [ref=e351]
            - generic [ref=e352]: © Copyright 2026. Green City.
    - button [ref=e353] [cursor=pointer]:
      - img [ref=e354]
  - generic [ref=e355]: Welcome to the search window
  - generic [ref=e362]:
    - button "close" [ref=e363] [cursor=pointer]:
      - img "close" [ref=e364]
    - generic [ref=e365]:
      - generic [ref=e366]: All created content will be lost.
      - generic [ref=e367]: Do you still want to cancel news creating?
    - generic [ref=e368]:
      - button "Continue editing" [ref=e369] [cursor=pointer]
      - button "Yes, cancel" [ref=e370] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test.describe('TC-07 | Create News Form - Cancel Button and Confirmation Modal', () => {
  5  | 
  6  |   test('should close the form and redirect to news page when "Yes, cancel" is selected', async ({ authenticatedCreateNewsPage: form, page }) => {
  7  |     await allure.epic('Eco News');
  8  |     await allure.feature('Create News Form');
  9  |     await allure.story('TC-07 - Confirm Cancel');
  10 |     await allure.severity('normal');
  11 | 
  12 |     await test.step('Fill form fields and click Cancel', async () => {
  13 |       await form.fillTitle('Test');
  14 |       await form.fillMainText('Test content with 20 chars');
  15 |       await form.cancelButton.click();
  16 |     });
  17 | 
  18 |     await test.step('Verify confirmation modal text appears', async () => {
  19 |       await expect(form.confirmationModal).toBeVisible();
  20 |       
  21 |       const expectedMessage = 'All created content will be lost. Do you still want to cancel news creating?';
  22 |       await expect(form.confirmationModal).toContainText(expectedMessage);
  23 |     });
  24 | 
  25 |     await test.step('Click "Yes, cancel" and verify redirection to news page', async () => {
  26 |       await form.yesCancelButton.click();
  27 |       
  28 |       await page.waitForURL('**/news');
  29 |       expect(page.url()).toContain('/news');
  30 |     });
  31 |   });
  32 | 
  33 |   test('should keep the form open with existing data when "Continue editing" is selected', async ({ authenticatedCreateNewsPage: form }) => {
  34 |     await allure.epic('Eco News');
  35 |     await allure.feature('Create News Form');
  36 |     await allure.story('TC-07 - Continue Editing');
  37 |     await allure.severity('normal');
  38 | 
  39 |     const titleText = 'Test Unique Title';
  40 |     const contentText = 'Test content with 20 chars';
  41 | 
  42 |     await test.step('Fill form fields and click Cancel', async () => {
  43 |       await form.fillTitle(titleText);
  44 |       await form.fillMainText(contentText);
  45 |       await form.cancelButton.click();
  46 |     });
  47 | 
  48 |     await test.step('Click "Continue editing" and verify modal closes', async () => {
> 49 |       await expect(form.confirmationModal).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  50 |       await form.continueEditingButton.click();
  51 |       
  52 |       await expect(form.confirmationModal).not.toBeVisible();
  53 |     });
  54 | 
  55 |     await test.step('Verify that previously entered data remains intact', async () => {
  56 |       const actualTitle = await form.titleTextArea.inputValue();
  57 |       expect(actualTitle).toBe(titleText);
  58 | 
  59 |       const actualMainText = await form.mainTextInput.innerText();
  60 |       expect(actualMainText.trim()).toBe(contentText);
  61 |     });
  62 |   });
  63 | });
```