# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-06.spec.ts >> TC-06 | Create News Form - Source field validation >> should display error and disable Publish button for invalid URL
- Location: tests\TC-06.spec.ts:29:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.source-block app-field-error, .source-block .error, .source-block mat-error, p[class*="error"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.source-block app-field-error, .source-block .error, .source-block mat-error, p[class*="error"]').first()

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
                      - generic [ref=e58]: 24/170
                    - textbox [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                      - text: News with invalid source
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e70] [cursor=pointer]:
                        - generic [ref=e72]: Events
                      - button "Education" [ref=e73] [cursor=pointer]:
                        - generic [ref=e75]: Education
                      - button "Initiatives" [ref=e76] [cursor=pointer]:
                        - generic [ref=e78]: Initiatives
                      - button "Ads" [ref=e79] [cursor=pointer]:
                        - generic [ref=e81]: Ads
                  - generic [ref=e82]:
                    - generic [ref=e83]:
                      - heading "Source (optional)" [level=3] [ref=e84]
                      - generic [ref=e85]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e87]:
                      - /placeholder: Link to external source
                      - text: www.example.com
                  - generic [ref=e88]:
                    - heading "Picture (optional)" [level=3] [ref=e89]
                    - generic [ref=e90]:
                      - generic [ref=e93]:
                        - text: Drop your image here or
                        - generic [ref=e94]: browse
                        - button "browse" [ref=e95]
                      - generic [ref=e96]:
                        - generic "Crop photo" [ref=e100]
                        - generic [ref=e113]:
                          - button "Cancel" [ref=e114] [cursor=pointer]
                          - button "Submit" [ref=e115] [cursor=pointer]
                      - paragraph [ref=e116]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e117]:
                  - generic [ref=e118]:
                    - heading "Content" [level=3] [ref=e119]
                    - paragraph [ref=e120]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - generic [ref=e123]:
                        - button [ref=e124] [cursor=pointer]:
                          - img [ref=e125]
                        - button [ref=e128] [cursor=pointer]:
                          - img [ref=e129]
                        - button [ref=e131] [cursor=pointer]:
                          - img [ref=e132]
                        - button [ref=e135] [cursor=pointer]:
                          - img [ref=e136]
                      - generic [ref=e140]:
                        - button [ref=e141] [cursor=pointer]:
                          - img [ref=e142]
                        - button [ref=e147] [cursor=pointer]:
                          - img [ref=e148]
                      - generic [ref=e152]:
                        - button [ref=e153] [cursor=pointer]:
                          - img [ref=e154]
                        - button [ref=e156] [cursor=pointer]:
                          - img [ref=e157]
                      - generic [ref=e159]:
                        - button [ref=e160] [cursor=pointer]:
                          - img [ref=e161]
                        - button [ref=e165] [cursor=pointer]:
                          - img [ref=e166]
                      - generic [ref=e167]:
                        - button [ref=e168] [cursor=pointer]:
                          - img [ref=e169]
                        - button [ref=e172] [cursor=pointer]:
                          - img [ref=e173]
                      - generic [ref=e176]:
                        - button [ref=e177] [cursor=pointer]:
                          - img [ref=e178]
                        - button [ref=e180] [cursor=pointer]:
                          - img [ref=e181]
                      - button [ref=e184] [cursor=pointer]:
                        - img [ref=e185]
                      - generic [ref=e191]:
                        - button "Normal" [ref=e192] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e193]
                        - text: Small Normal Large Huge
                      - generic [ref=e197]:
                        - button "Normal" [ref=e198] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e199]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e202]:
                        - button [ref=e204] [cursor=pointer]:
                          - img [ref=e205]
                        - button [ref=e208] [cursor=pointer]:
                          - img [ref=e209]
                      - generic [ref=e259]:
                        - button "Sans Serif" [ref=e260] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e261]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                      - generic [ref=e275]:
                        - button [ref=e276] [cursor=pointer]:
                          - img [ref=e277]
                        - button [ref=e281] [cursor=pointer]:
                          - img [ref=e282]
                        - button [ref=e286] [cursor=pointer]:
                          - img [ref=e287]
                      - button [ref=e301] [cursor=pointer]:
                        - img [ref=e302]
                    - generic [ref=e307]:
                      - paragraph [ref=e309]: This is a valid test content for checking invalid source field.
                      - text: "Visit URL: EditRemove"
                  - paragraph [ref=e310]: "Number of characters: 63"
                - generic [ref=e311]:
                  - paragraph [ref=e312]: "Date: Jun 1, 2026"
                  - paragraph [ref=e313]: "Author: Yura"
                - generic [ref=e314]:
                  - button "Cancel" [ref=e315] [cursor=pointer]
                  - button "Preview" [ref=e316] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e317]
          - contentinfo [ref=e319]:
            - generic [ref=e320]:
              - generic [ref=e321]:
                - link "GreenCity home" [ref=e323] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e324]
                - navigation [ref=e325]:
                  - menu [ref=e326]:
                    - listitem [ref=e327]:
                      - link "Eco news" [ref=e328] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e329]:
                      - link "Events" [ref=e330] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e331]:
                      - link "Places" [ref=e332] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e333]:
                      - link "About Us" [ref=e334] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e335]:
                      - link "My Space" [ref=e336] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e337]:
                      - link "UBS Courier" [ref=e338] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e339]:
                    - listitem [ref=e340]:
                      - paragraph [ref=e341]: Follow us
                    - listitem [ref=e342]:
                      - link "Twitter link" [ref=e343] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e344]
                      - link "LinkedIn link" [ref=e345] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e346]
                      - link "Facebook link" [ref=e347] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e348]
                      - link "Instagram link" [ref=e349] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e350]
                      - link "YouTube link" [ref=e351] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e352]
              - generic [ref=e353]: © Copyright 2026. Green City.
    - button "chat" [ref=e354] [cursor=pointer]:
      - img "chat" [ref=e355]
  - generic [ref=e356]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/index';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test.describe('TC-06 | Create News Form - Source field validation', () => {
  5  | 
  6  |   test('should successfully publish news when Source field is empty', async ({ authenticatedCreateNewsPage: form, page }) => {
  7  |     await allure.epic('Eco News');
  8  |     await allure.feature('Create News Form');
  9  |     await allure.story('TC-06 - Empty Source Field');
  10 |     await allure.severity('normal');
  11 | 
  12 |     await test.step('Fill mandatory fields and leave Source empty', async () => {
  13 |       await form.fillTitle('News with empty source');
  14 |       await form.clickTag('News');
  15 |       await form.fillMainText('This is a valid test content for checking empty source field.');
  16 |       // Поле Source не заповнюємо (залишаємо порожнім)
  17 |     });
  18 | 
  19 |     await test.step('Click Publish and verify success', async () => {
  20 |       const isEnabled = await form.isPublishEnabled();
  21 |       expect(isEnabled).toBe(true);
  22 | 
  23 |       await form.clickPublish();
  24 |       await page.waitForURL('**/news');
  25 |       expect(page.url()).toContain('/news');
  26 |     });
  27 |   });
  28 | 
  29 |   test('should display error and disable Publish button for invalid URL', async ({ authenticatedCreateNewsPage: form }) => {
  30 |     await allure.epic('Eco News');
  31 |     await allure.feature('Create News Form');
  32 |     await allure.story('TC-06 - Invalid Source URL');
  33 |     await allure.severity('normal');
  34 | 
  35 |     await test.step('Enter an invalid URL in the Source field', async () => {
  36 |       await form.fillTitle('News with invalid source');
  37 |       await form.clickTag('News');
  38 |       await form.fillMainText('This is a valid test content for checking invalid source field.');
  39 |       await form.fillSource('www.example.com'); // Невалідний лінк (без http/https)
  40 |       await form.blurTitleField(); // Оновлюємо стан форми
  41 |     });
  42 | 
  43 |     await test.step('Verify error message and disabled Publish button', async () => {
  44 |       // Перевіряємо заблоковану кнопку
  45 |       const isDisabled = await form.isPublishDisabled();
  46 |       expect(isDisabled).toBe(true);
  47 | 
  48 |       // Перевіряємо наявність та текст червоної помилки
> 49 |       await expect(form.sourceError).toBeVisible();
     |                                      ^ Error: expect(locator).toBeVisible() failed
  50 |       await expect(form.sourceError).toHaveText('Please add the link of the original article/news/post. Link must start with http(s)://');
  51 |     });
  52 |   });
  53 | 
  54 |   test('should successfully publish news with valid URL', async ({ authenticatedCreateNewsPage: form, page }) => {
  55 |     await allure.epic('Eco News');
  56 |     await allure.feature('Create News Form');
  57 |     await allure.story('TC-06 - Valid Source URL');
  58 |     await allure.severity('normal');
  59 | 
  60 |     await test.step('Enter a valid URL in the Source field', async () => {
  61 |       await form.fillTitle('News with valid source url');
  62 |       await form.clickTag('News');
  63 |       await form.fillMainText('This is a valid test content for checking valid source field.');
  64 |       await form.fillSource('https://example.com');
  65 |     });
  66 | 
  67 |     await test.step('Verify error disappears and Publish button becomes enabled', async () => {
  68 |       await expect(form.sourceError).not.toBeVisible();
  69 |       const isEnabled = await form.isPublishEnabled();
  70 |       expect(isEnabled).toBe(true);
  71 |     });
  72 | 
  73 |     await test.step('Click Publish and verify navigation', async () => {
  74 |       await form.clickPublish();
  75 |       await page.waitForURL('**/news');
  76 |       expect(page.url()).toContain('/news');
  77 |       
  78 |       // Тут за логікою тест-кейсу треба перевірити лінк у деталях новини, 
  79 |       // але оскільки Володимир підтвердив баг (лінк не відображається), 
  80 |       // перевірка успішного переходу на список новин уже є достатньою валідацією публікації!
  81 |     });
  82 |   });
  83 | });
```