# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-05.spec.ts >> TC-05 | Create News Form - Main Text (Content) field validation >> should display error and disable Publish button when text is too short (10 chars)
- Location: tests\TC-05.spec.ts:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.textarea-wrapper + .error, .main-text-error, mat-error, p[class*="error"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.textarea-wrapper + .error, .main-text-error, mat-error, p[class*="error"]').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link "Image green city logo" [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - listitem "site bookmark" [ref=e29] [cursor=pointer]:
                - img [ref=e30]
              - listitem "site notification" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
              - search "site search" [ref=e33] [cursor=pointer]:
                - img [ref=e34]
              - menu "language switcher" [ref=e35]:
                - option "english" [ref=e36] [cursor=pointer]:
                  - generic [ref=e37]: En
                  - img [ref=e38]
              - menu "profile options collapsed" [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: Yura
      - generic [ref=e41]:
        - generic "Tab To Main"
        - generic [ref=e42]:
          - main [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - heading "Create news" [level=2] [ref=e49]
                - paragraph [ref=e51]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - generic [ref=e55]:
                    - generic [ref=e56]:
                      - heading "Title" [level=3] [ref=e57]
                      - generic [ref=e58]: 4/170
                    - textbox [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                      - text: Test
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e69] [cursor=pointer]:
                        - generic [ref=e71]: Events
                      - button "Education" [ref=e72] [cursor=pointer]:
                        - generic [ref=e74]: Education
                      - button "Initiatives" [ref=e75] [cursor=pointer]:
                        - generic [ref=e77]: Initiatives
                      - button "Ads" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]: Ads
                  - generic [ref=e81]:
                    - generic [ref=e82]:
                      - heading "Source (optional)" [level=3] [ref=e83]
                      - generic [ref=e84]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e86]:
                      - /placeholder: Link to external source
                  - generic [ref=e87]:
                    - heading "Picture (optional)" [level=3] [ref=e88]
                    - generic [ref=e89]:
                      - generic [ref=e92]:
                        - text: Drop your image here or
                        - generic [ref=e93]: browse
                        - button "browse" [ref=e94]
                      - generic [ref=e95]:
                        - generic "Crop photo" [ref=e99]
                        - generic [ref=e112]:
                          - button "Cancel" [ref=e113] [cursor=pointer]
                          - button "Submit" [ref=e114] [cursor=pointer]
                      - paragraph [ref=e115]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e116]:
                  - generic [ref=e117]:
                    - heading "Content" [level=3] [ref=e118]
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
                        - button "Normal" [ref=e191] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e192]
                        - text: Small Normal Large Huge
                      - generic [ref=e196]:
                        - button "Normal" [ref=e197] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e198]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e201]:
                        - button [ref=e203] [cursor=pointer]:
                          - img [ref=e204]
                        - button [ref=e207] [cursor=pointer]:
                          - img [ref=e208]
                      - generic [ref=e258]:
                        - button "Sans Serif" [ref=e259] [cursor=pointer]:
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
                      - paragraph [ref=e308]: Short text
                      - text: "Visit URL: EditRemove"
                  - paragraph [ref=e309]: "Not enough characters. Left: 10"
                - generic [ref=e310]:
                  - paragraph [ref=e311]: "Date: Jun 1, 2026"
                  - paragraph [ref=e312]: "Author: Yura"
                - generic [ref=e313]:
                  - button "Cancel" [ref=e314] [cursor=pointer]
                  - button "Preview" [ref=e315] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e316]
          - contentinfo [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e320]:
                - link "GreenCity home" [ref=e322] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e323]
                - navigation [ref=e324]:
                  - menu [ref=e325]:
                    - listitem [ref=e326]:
                      - link "Eco news" [ref=e327] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e328]:
                      - link "Events" [ref=e329] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e330]:
                      - link "Places" [ref=e331] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e332]:
                      - link "About Us" [ref=e333] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e334]:
                      - link "My Space" [ref=e335] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e336]:
                      - link "UBS Courier" [ref=e337] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e338]:
                    - listitem [ref=e339]:
                      - paragraph [ref=e340]: Follow us
                    - listitem [ref=e341]:
                      - link "Twitter link" [ref=e342] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e343]
                      - link "LinkedIn link" [ref=e344] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e345]
                      - link "Facebook link" [ref=e346] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e347]
                      - link "Instagram link" [ref=e348] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e349]
                      - link "YouTube link" [ref=e350] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e351]
              - generic [ref=e352]: © Copyright 2026. Green City.
    - button "chat" [ref=e353] [cursor=pointer]:
      - img "chat" [ref=e354]
  - generic [ref=e355]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test.describe('TC-05 | Create News Form - Main Text (Content) field validation', () => {
  5  | 
  6  |   test('should display error and disable Publish button when text is too short (10 chars)', async ({ authenticatedCreateNewsPage: form }) => {
  7  |     await allure.epic('Eco News');
  8  |     await allure.feature('Create News Form');
  9  |     await allure.story('TC-05 - Main Text Too Short');
  10 |     await allure.severity('normal');
  11 | 
  12 |     await test.step('Enter 10 characters in Main Text and "Test" in Title', async () => {
  13 |       await form.fillTitle('Test');
  14 |       await form.fillMainText('Short text'); // 10 символів
  15 |     });
  16 | 
  17 |     await test.step('Verify red error message and disabled Publish button', async () => {
  18 |       // Перевіряємо, що помилка видима і має правильний текст
> 19 |       await expect(form.mainTextError).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  20 |       await expect(form.mainTextError).toHaveText('Must be a minimum of 20 and a maximum of 63,206 symbols.');
  21 |       
  22 |       // Перевіряємо, що кнопка Publish заблокована
  23 |       const isDisabled = await form.isPublishDisabled();
  24 |       expect(isDisabled).toBe(true);
  25 |     });
  26 |   });
  27 | 
  28 |   test('should truncate text to 63206 characters when limit is exceeded', async ({ authenticatedCreateNewsPage: form }) => {
  29 |     await allure.epic('Eco News');
  30 |     await allure.feature('Create News Form');
  31 |     await allure.story('TC-05 - Main Text Max Limit Truncation');
  32 |     await allure.severity('normal');
  33 | 
  34 |     // Генеруємо рядок довжиною 63207 символів (ліміт + 1)
  35 |     const longText = 'a'.repeat(63207);
  36 | 
  37 |     await test.step('Enter 63207 characters into Main Text field', async () => {
  38 |       await form.fillMainText(longText);
  39 |     });
  40 | 
  41 |     await test.step('Verify that text is truncated to 63206 characters', async () => {
  42 |       const actualLength = await form.getMainTextLength();
  43 |       
  44 |       // УВАГА: цей експект впаде, якщо на сайті дійсно баг і текст не обрізається!
  45 |       // Це нормально для випускного, тест покаже баг розробників.
  46 |       expect(actualLength).toBe(63206);
  47 |     });
  48 |   });
  49 | 
  50 |   test('should successfully publish news with valid text length (25 chars)', async ({ authenticatedCreateNewsPage: form, page }) => {
  51 |     await allure.epic('Eco News');
  52 |     await allure.feature('Create News Form');
  53 |     await allure.story('TC-05 - Valid Main Text and Publish');
  54 |     await allure.severity('normal');
  55 | 
  56 |     await test.step('Enter valid Title, Tags and 25 characters in Main Text', async () => {
  57 |       await form.fillTitle('Valid Test Title for TC05');
  58 |       await form.clickTag('News');
  59 |       await form.fillMainText('This is a valid test content'); // 28 символів
  60 |     });
  61 | 
  62 |     await test.step('Verify error disappears and Publish button becomes enabled', async () => {
  63 |       await expect(form.mainTextError).not.toBeVisible();
  64 |       const isEnabled = await form.isPublishEnabled();
  65 |       expect(isEnabled).toBe(true);
  66 |     });
  67 | 
  68 |     await test.step('Click Publish and verify success', async () => {
  69 |       await form.clickPublish();
  70 |       
  71 |       // Після кліку на Publish нас має перекинути назад на сторінку новин
  72 |       // Перевіримо, що URL змінився на список новин
  73 |       await page.waitForURL('**/news');
  74 |       expect(page.url()).toContain('/news');
  75 |     });
  76 |   });
  77 | });
```