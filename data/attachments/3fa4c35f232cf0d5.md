# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-06.spec.ts >> TC-06 | Create News Form - Source field validation >> should successfully send valid URL to backend on publish
- Location: tests\TC-06.spec.ts:49:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
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
          - main "news list" [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e49]:
                - heading "Eco news" [level=1] [ref=e50]
                - img "my-event" [ref=e57] [cursor=pointer]
                - link "Create news" [ref=e58] [cursor=pointer]:
                  - /url: "#/greenCity/news/create-news"
                  - generic [ref=e60]: Create news
              - generic [ref=e61]:
                - generic [ref=e64]:
                  - generic [ref=e65]: Filter by
                  - generic "filter by items" [ref=e66]:
                    - button "News" [ref=e67] [cursor=pointer]:
                      - generic [ref=e69]: News
                    - button "Events" [ref=e71] [cursor=pointer]:
                      - generic [ref=e73]: Events
                    - button "Education" [ref=e74] [cursor=pointer]:
                      - generic [ref=e76]: Education
                    - button "Initiatives" [ref=e77] [cursor=pointer]:
                      - generic [ref=e79]: Initiatives
                    - button "Ads" [ref=e80] [cursor=pointer]:
                      - generic [ref=e82]: Ads
                - separator [ref=e83]
              - generic [ref=e84]:
                - heading "3931 items found" [level=2] [ref=e87]
                - generic [ref=e89]:
                  - button "table view" [pressed] [ref=e90]:
                    - emphasis [ref=e91]: 
                  - button "list view" [ref=e92] [cursor=pointer]:
                    - emphasis [ref=e93]: 
              - list "news list" [ref=e95]:
                - listitem [ref=e96]:
                  - link "user added image News News with valid source link 1780328654080 This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e97] [cursor=pointer]:
                    - /url: "#/greenCity/news/12440"
                    - generic [ref=e99]:
                      - img "user added image" [ref=e100]
                      - generic [ref=e101]:
                        - list [ref=e102]:
                          - generic [ref=e103]: News
                        - generic [ref=e104]:
                          - heading "News with valid source link 1780328654080" [level=3] [ref=e106]
                          - paragraph [ref=e109]: This is a valid test content for checking valid source field.
                        - generic [ref=e110]:
                          - paragraph [ref=e111]:
                            - img "date of creation" [ref=e112]
                            - generic [ref=e113]: Jun 1, 2026
                          - paragraph [ref=e114]:
                            - img "created by" [ref=e115]
                            - generic [ref=e116]: Yura
                          - generic [ref=e117]:
                            - paragraph [ref=e118]:
                              - img "comments" [ref=e119]
                              - generic [ref=e120]: "0"
                            - paragraph [ref=e121]:
                              - img "likes" [ref=e122]
                              - generic [ref=e123]: "0"
                - listitem [ref=e126]:
                  - link "user added image News News with valid source link 1780328625002 This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e127] [cursor=pointer]:
                    - /url: "#/greenCity/news/12439"
                    - generic [ref=e129]:
                      - img "user added image" [ref=e130]
                      - generic [ref=e131]:
                        - list [ref=e132]:
                          - generic [ref=e133]: News
                        - generic [ref=e134]:
                          - heading "News with valid source link 1780328625002" [level=3] [ref=e136]
                          - paragraph [ref=e139]: This is a valid test content for checking valid source field.
                        - generic [ref=e140]:
                          - paragraph [ref=e141]:
                            - img "date of creation" [ref=e142]
                            - generic [ref=e143]: Jun 1, 2026
                          - paragraph [ref=e144]:
                            - img "created by" [ref=e145]
                            - generic [ref=e146]: Yura
                          - generic [ref=e147]:
                            - paragraph [ref=e148]:
                              - img "comments" [ref=e149]
                              - generic [ref=e150]: "0"
                            - paragraph [ref=e151]:
                              - img "likes" [ref=e152]
                              - generic [ref=e153]: "0"
                - listitem [ref=e156]:
                  - link "user added image News News with empty source This is a valid test content for checking empty source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e157] [cursor=pointer]:
                    - /url: "#/greenCity/news/12438"
                    - generic [ref=e159]:
                      - img "user added image" [ref=e160]
                      - generic [ref=e161]:
                        - list [ref=e162]:
                          - generic [ref=e163]: News
                        - generic [ref=e164]:
                          - heading "News with empty source" [level=3] [ref=e166]
                          - paragraph [ref=e169]: This is a valid test content for checking empty source field.
                        - generic [ref=e170]:
                          - paragraph [ref=e171]:
                            - img "date of creation" [ref=e172]
                            - generic [ref=e173]: Jun 1, 2026
                          - paragraph [ref=e174]:
                            - img "created by" [ref=e175]
                            - generic [ref=e176]: Yura
                          - generic [ref=e177]:
                            - paragraph [ref=e178]:
                              - img "comments" [ref=e179]
                              - generic [ref=e180]: "0"
                            - paragraph [ref=e181]:
                              - img "likes" [ref=e182]
                              - generic [ref=e183]: "0"
                - listitem [ref=e186]:
                  - link "user added image News News with valid source link 1780328389209 This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e187] [cursor=pointer]:
                    - /url: "#/greenCity/news/12437"
                    - generic [ref=e189]:
                      - img "user added image" [ref=e190]
                      - generic [ref=e191]:
                        - list [ref=e192]:
                          - generic [ref=e193]: News
                        - generic [ref=e194]:
                          - heading "News with valid source link 1780328389209" [level=3] [ref=e196]
                          - paragraph [ref=e199]: This is a valid test content for checking valid source field.
                        - generic [ref=e200]:
                          - paragraph [ref=e201]:
                            - img "date of creation" [ref=e202]
                            - generic [ref=e203]: Jun 1, 2026
                          - paragraph [ref=e204]:
                            - img "created by" [ref=e205]
                            - generic [ref=e206]: Yura
                          - generic [ref=e207]:
                            - paragraph [ref=e208]:
                              - img "comments" [ref=e209]
                              - generic [ref=e210]: "0"
                            - paragraph [ref=e211]:
                              - img "likes" [ref=e212]
                              - generic [ref=e213]: "0"
                - listitem [ref=e216]:
                  - link "user added image News News with valid source link 1780328355399 This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e217] [cursor=pointer]:
                    - /url: "#/greenCity/news/12436"
                    - generic [ref=e219]:
                      - img "user added image" [ref=e220]
                      - generic [ref=e221]:
                        - list [ref=e222]:
                          - generic [ref=e223]: News
                        - generic [ref=e224]:
                          - heading "News with valid source link 1780328355399" [level=3] [ref=e226]
                          - paragraph [ref=e229]: This is a valid test content for checking valid source field.
                        - generic [ref=e230]:
                          - paragraph [ref=e231]:
                            - img "date of creation" [ref=e232]
                            - generic [ref=e233]: Jun 1, 2026
                          - paragraph [ref=e234]:
                            - img "created by" [ref=e235]
                            - generic [ref=e236]: Yura
                          - generic [ref=e237]:
                            - paragraph [ref=e238]:
                              - img "comments" [ref=e239]
                              - generic [ref=e240]: "0"
                            - paragraph [ref=e241]:
                              - img "likes" [ref=e242]
                              - generic [ref=e243]: "0"
                - listitem [ref=e246]:
                  - link "user added image News News with valid source link 1780328326661 This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e247] [cursor=pointer]:
                    - /url: "#/greenCity/news/12435"
                    - generic [ref=e249]:
                      - img "user added image" [ref=e250]
                      - generic [ref=e251]:
                        - list [ref=e252]:
                          - generic [ref=e253]: News
                        - generic [ref=e254]:
                          - heading "News with valid source link 1780328326661" [level=3] [ref=e256]
                          - paragraph [ref=e259]: This is a valid test content for checking valid source field.
                        - generic [ref=e260]:
                          - paragraph [ref=e261]:
                            - img "date of creation" [ref=e262]
                            - generic [ref=e263]: Jun 1, 2026
                          - paragraph [ref=e264]:
                            - img "created by" [ref=e265]
                            - generic [ref=e266]: Yura
                          - generic [ref=e267]:
                            - paragraph [ref=e268]:
                              - img "comments" [ref=e269]
                              - generic [ref=e270]: "0"
                            - paragraph [ref=e271]:
                              - img "likes" [ref=e272]
                              - generic [ref=e273]: "0"
                - listitem [ref=e276]:
                  - link "user added image News News with empty source This is a valid test content for checking empty source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e277] [cursor=pointer]:
                    - /url: "#/greenCity/news/12434"
                    - generic [ref=e279]:
                      - img "user added image" [ref=e280]
                      - generic [ref=e281]:
                        - list [ref=e282]:
                          - generic [ref=e283]: News
                        - generic [ref=e284]:
                          - heading "News with empty source" [level=3] [ref=e286]
                          - paragraph [ref=e289]: This is a valid test content for checking empty source field.
                        - generic [ref=e290]:
                          - paragraph [ref=e291]:
                            - img "date of creation" [ref=e292]
                            - generic [ref=e293]: Jun 1, 2026
                          - paragraph [ref=e294]:
                            - img "created by" [ref=e295]
                            - generic [ref=e296]: Yura
                          - generic [ref=e297]:
                            - paragraph [ref=e298]:
                              - img "comments" [ref=e299]
                              - generic [ref=e300]: "0"
                            - paragraph [ref=e301]:
                              - img "likes" [ref=e302]
                              - generic [ref=e303]: "0"
                - listitem [ref=e306]:
                  - link "user added image News News with valid source url This is a valid test content for checking valid source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e307] [cursor=pointer]:
                    - /url: "#/greenCity/news/12433"
                    - generic [ref=e309]:
                      - img "user added image" [ref=e310]
                      - generic [ref=e311]:
                        - list [ref=e312]:
                          - generic [ref=e313]: News
                        - generic [ref=e314]:
                          - heading "News with valid source url" [level=3] [ref=e316]
                          - paragraph [ref=e319]: This is a valid test content for checking valid source field.
                        - generic [ref=e320]:
                          - paragraph [ref=e321]:
                            - img "date of creation" [ref=e322]
                            - generic [ref=e323]: Jun 1, 2026
                          - paragraph [ref=e324]:
                            - img "created by" [ref=e325]
                            - generic [ref=e326]: Yura
                          - generic [ref=e327]:
                            - paragraph [ref=e328]:
                              - img "comments" [ref=e329]
                              - generic [ref=e330]: "0"
                            - paragraph [ref=e331]:
                              - img "likes" [ref=e332]
                              - generic [ref=e333]: "0"
                - listitem [ref=e336]:
                  - link "user added image News News with empty source This is a valid test content for checking empty source field. date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e337] [cursor=pointer]:
                    - /url: "#/greenCity/news/12432"
                    - generic [ref=e339]:
                      - img "user added image" [ref=e340]
                      - generic [ref=e341]:
                        - list [ref=e342]:
                          - generic [ref=e343]: News
                        - generic [ref=e344]:
                          - heading "News with empty source" [level=3] [ref=e346]
                          - paragraph [ref=e349]: This is a valid test content for checking empty source field.
                        - generic [ref=e350]:
                          - paragraph [ref=e351]:
                            - img "date of creation" [ref=e352]
                            - generic [ref=e353]: Jun 1, 2026
                          - paragraph [ref=e354]:
                            - img "created by" [ref=e355]
                            - generic [ref=e356]: Yura
                          - generic [ref=e357]:
                            - paragraph [ref=e358]:
                              - img "comments" [ref=e359]
                              - generic [ref=e360]: "0"
                            - paragraph [ref=e361]:
                              - img "likes" [ref=e362]
                              - generic [ref=e363]: "0"
                - listitem [ref=e366]:
                  - link "user added image News Valid Test Title for TC05 This is a valid test content date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e367] [cursor=pointer]:
                    - /url: "#/greenCity/news/12431"
                    - generic [ref=e369]:
                      - img "user added image" [ref=e370]
                      - generic [ref=e371]:
                        - list [ref=e372]:
                          - generic [ref=e373]: News
                        - generic [ref=e374]:
                          - heading "Valid Test Title for TC05" [level=3] [ref=e376]
                          - paragraph [ref=e379]: This is a valid test content
                        - generic [ref=e380]:
                          - paragraph [ref=e381]:
                            - img "date of creation" [ref=e382]
                            - generic [ref=e383]: Jun 1, 2026
                          - paragraph [ref=e384]:
                            - img "created by" [ref=e385]
                            - generic [ref=e386]: Yura
                          - generic [ref=e387]:
                            - paragraph [ref=e388]:
                              - img "comments" [ref=e389]
                              - generic [ref=e390]: "0"
                            - paragraph [ref=e391]:
                              - img "likes" [ref=e392]
                              - generic [ref=e393]: "0"
                - listitem [ref=e396]:
                  - link "user added image News Valid Test Title for TC05 This is a valid test content date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e397] [cursor=pointer]:
                    - /url: "#/greenCity/news/12430"
                    - generic [ref=e399]:
                      - img "user added image" [ref=e400]
                      - generic [ref=e401]:
                        - list [ref=e402]:
                          - generic [ref=e403]: News
                        - generic [ref=e404]:
                          - heading "Valid Test Title for TC05" [level=3] [ref=e406]
                          - paragraph [ref=e409]: This is a valid test content
                        - generic [ref=e410]:
                          - paragraph [ref=e411]:
                            - img "date of creation" [ref=e412]
                            - generic [ref=e413]: Jun 1, 2026
                          - paragraph [ref=e414]:
                            - img "created by" [ref=e415]
                            - generic [ref=e416]: Yura
                          - generic [ref=e417]:
                            - paragraph [ref=e418]:
                              - img "comments" [ref=e419]
                              - generic [ref=e420]: "0"
                            - paragraph [ref=e421]:
                              - img "likes" [ref=e422]
                              - generic [ref=e423]: "0"
                - listitem [ref=e426]:
                  - link "user added image News Valid Test Title for TC05 This is a valid test content date of creation Jun 1, 2026 created by Yura comments 0 likes 0" [ref=e427] [cursor=pointer]:
                    - /url: "#/greenCity/news/12429"
                    - generic [ref=e429]:
                      - img "user added image" [ref=e430]
                      - generic [ref=e431]:
                        - list [ref=e432]:
                          - generic [ref=e433]: News
                        - generic [ref=e434]:
                          - heading "Valid Test Title for TC05" [level=3] [ref=e436]
                          - paragraph [ref=e439]: This is a valid test content
                        - generic [ref=e440]:
                          - paragraph [ref=e441]:
                            - img "date of creation" [ref=e442]
                            - generic [ref=e443]: Jun 1, 2026
                          - paragraph [ref=e444]:
                            - img "created by" [ref=e445]
                            - generic [ref=e446]: Yura
                          - generic [ref=e447]:
                            - paragraph [ref=e448]:
                              - img "comments" [ref=e449]
                              - generic [ref=e450]: "0"
                            - paragraph [ref=e451]:
                              - img "likes" [ref=e452]
                              - generic [ref=e453]: "0"
              - progressbar [ref=e457]:
                - img [ref=e459]
                - generic [ref=e462]:
                  - img [ref=e464]
                  - img [ref=e467]
                  - img [ref=e470]
          - contentinfo [ref=e473]:
            - generic [ref=e474]:
              - generic [ref=e475]:
                - link "GreenCity home" [ref=e477] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e478]
                - navigation [ref=e479]:
                  - menu [ref=e480]:
                    - listitem [ref=e481]:
                      - link "Eco news" [ref=e482] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e483]:
                      - link "Events" [ref=e484] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e485]:
                      - link "Places" [ref=e486] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e487]:
                      - link "About Us" [ref=e488] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e489]:
                      - link "My Space" [ref=e490] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e491]:
                      - link "UBS Courier" [ref=e492] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e493]:
                    - listitem [ref=e494]:
                      - paragraph [ref=e495]: Follow us
                    - listitem [ref=e496]:
                      - link "Twitter link" [ref=e497] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e498]
                      - link "LinkedIn link" [ref=e499] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e500]
                      - link "Facebook link" [ref=e501] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e502]
                      - link "Instagram link" [ref=e503] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e504]
                      - link "YouTube link" [ref=e505] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e506]
              - generic [ref=e507]: © Copyright 2026. Green City.
    - button "chat" [ref=e508] [cursor=pointer]:
      - img "chat" [ref=e509]
  - generic [ref=e510]: Welcome to the search window
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
  16 |     });
  17 | 
  18 |     await test.step('Click Publish and verify success', async () => {
  19 |       const isEnabled = await form.isPublishEnabled();
  20 |       expect(isEnabled).toBe(true);
  21 | 
  22 |       await form.clickPublish();
  23 |       await page.waitForURL('**/news');
  24 |       expect(page.url()).toContain('/news');
  25 |     });
  26 |   });
  27 | 
  28 |   test('should disable Publish button for invalid URL', async ({ authenticatedCreateNewsPage: form }) => {
  29 |     await allure.epic('Eco News');
  30 |     await allure.feature('Create News Form');
  31 |     await allure.story('TC-06 - Invalid Source URL');
  32 |     await allure.severity('normal');
  33 | 
  34 |     await test.step('Enter an invalid URL in the Source field', async () => {
  35 |       await form.fillTitle('News with invalid source');
  36 |       await form.clickTag('News');
  37 |       await form.fillMainText('This is a valid test content for checking invalid source field.');
  38 |       await form.fillSource('www.example.com'); // Невалідний лінк
  39 |       await form.blurTitleField();
  40 |     });
  41 | 
  42 |     await test.step('Verify Publish button remains disabled', async () => {
  43 |       // Головна бізнес-перевірка: форма не пускає невалідний лінк
  44 |       const isDisabled = await form.isPublishDisabled();
  45 |       expect(isDisabled).toBe(true);
  46 |     });
  47 |   });
  48 | 
  49 |   test('should successfully send valid URL to backend on publish', async ({ authenticatedCreateNewsPage: form, page }) => {
  50 |     await allure.epic('Eco News');
  51 |     await allure.feature('Create News Form');
  52 |     await allure.story('TC-06 - Valid Source URL Backend Verification');
  53 |     await allure.severity('normal');
  54 | 
  55 |     await test.step('Enter a valid URL in the Source field', async () => {
  56 |       await form.fillTitle(`News with valid source link ${Date.now()}`);
  57 |       await form.clickTag('News');
  58 |       await form.fillMainText('This is a valid test content for checking valid source field.');
  59 |       await form.fillSource('https://example.com');
  60 |     });
  61 | 
  62 |     await test.step('Verify Publish button becomes enabled', async () => {
  63 |       const isEnabled = await form.isPublishEnabled();
  64 |       expect(isEnabled).toBe(true);
  65 |     });
  66 | 
  67 |     await test.step('Click Publish and catch backend API response', async () => {
  68 |       // Налаштовуємо перехоплення POST-запиту на створення новини
> 69 |       const responsePromise = page.waitForResponse(response => 
     |                                    ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  70 |         response.url().includes('/econews') && response.request().method() === 'POST'
  71 |       );
  72 | 
  73 |       await form.clickPublish();
  74 | 
  75 |       // Очікуємо відповідь сервера
  76 |       const response = await responsePromise;
  77 |       
  78 |       // Перевіряємо, що сервер відповів успішно (код 200 або 201)
  79 |       expect(response.status()).toBeLessThan(300);
  80 | 
  81 |       // Перевіряємо, що в тілі запиту на сервер дійсно пішов наш лінк джерела
  82 |       const requestData = JSON.parse(response.request().postData() || '{}');
  83 |       expect(requestData.source).toBe('https://example.com');
  84 |     });
  85 |   });
  86 | });
```