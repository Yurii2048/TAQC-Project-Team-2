# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-04.spec.ts >> TC-04 | Create News Form - Upload Image field validation >> should validate image formats and size restrictions
- Location: tests\TC-04.spec.ts:26:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input#upload')

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
                      - generic [ref=e58]: 0/170
                    - textbox [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
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
                      - generic [ref=e94]:
                        - button "Cancel" [ref=e95] [cursor=pointer]
                        - button "Submit" [ref=e96] [cursor=pointer]
                      - paragraph [ref=e97]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e98]:
                  - generic [ref=e99]:
                    - heading "Content" [level=3] [ref=e100]
                    - paragraph [ref=e101]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e102]:
                    - generic [ref=e103]:
                      - generic [ref=e104]:
                        - button [ref=e105] [cursor=pointer]:
                          - img [ref=e106]
                        - button [ref=e109] [cursor=pointer]:
                          - img [ref=e110]
                        - button [ref=e112] [cursor=pointer]:
                          - img [ref=e113]
                        - button [ref=e116] [cursor=pointer]:
                          - img [ref=e117]
                      - generic [ref=e121]:
                        - button [ref=e122] [cursor=pointer]:
                          - img [ref=e123]
                        - button [ref=e128] [cursor=pointer]:
                          - img [ref=e129]
                      - generic [ref=e133]:
                        - button [ref=e134] [cursor=pointer]:
                          - img [ref=e135]
                        - button [ref=e137] [cursor=pointer]:
                          - img [ref=e138]
                      - generic [ref=e140]:
                        - button [ref=e141] [cursor=pointer]:
                          - img [ref=e142]
                        - button [ref=e146] [cursor=pointer]:
                          - img [ref=e147]
                      - generic [ref=e148]:
                        - button [ref=e149] [cursor=pointer]:
                          - img [ref=e150]
                        - button [ref=e153] [cursor=pointer]:
                          - img [ref=e154]
                      - generic [ref=e157]:
                        - button [ref=e158] [cursor=pointer]:
                          - img [ref=e159]
                        - button [ref=e161] [cursor=pointer]:
                          - img [ref=e162]
                      - button [ref=e165] [cursor=pointer]:
                        - img [ref=e166]
                      - generic [ref=e172]:
                        - button "Normal" [ref=e173] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e174]
                        - text: Small Normal Large Huge
                      - generic [ref=e178]:
                        - button "Normal" [ref=e179] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e180]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e183]:
                        - button [ref=e185] [cursor=pointer]:
                          - img [ref=e186]
                        - button [ref=e189] [cursor=pointer]:
                          - img [ref=e190]
                      - generic [ref=e240]:
                        - button "Sans Serif" [ref=e241] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e242]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e247] [cursor=pointer]:
                        - img [ref=e248]
                      - button [ref=e250] [cursor=pointer]:
                        - img [ref=e251]
                      - generic [ref=e256]:
                        - button [ref=e257] [cursor=pointer]:
                          - img [ref=e258]
                        - button [ref=e262] [cursor=pointer]:
                          - img [ref=e263]
                        - button [ref=e267] [cursor=pointer]:
                          - img [ref=e268]
                      - button [ref=e282] [cursor=pointer]:
                        - img [ref=e283]
                    - generic [ref=e288]:
                      - generic [ref=e289]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e290]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e291]:
                  - paragraph [ref=e292]: "Date: Jun 1, 2026"
                  - paragraph [ref=e293]: "Author: Yura"
                - generic [ref=e294]:
                  - button "Cancel" [ref=e295] [cursor=pointer]
                  - button "Preview" [ref=e296] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e297]
          - contentinfo [ref=e299]:
            - generic [ref=e300]:
              - generic [ref=e301]:
                - link "GreenCity home" [ref=e303] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e304]
                - navigation [ref=e305]:
                  - menu [ref=e306]:
                    - listitem [ref=e307]:
                      - link "Eco news" [ref=e308] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e309]:
                      - link "Events" [ref=e310] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e311]:
                      - link "Places" [ref=e312] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e313]:
                      - link "About Us" [ref=e314] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e315]:
                      - link "My Space" [ref=e316] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e317]:
                      - link "UBS Courier" [ref=e318] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e319]:
                    - listitem [ref=e320]:
                      - paragraph [ref=e321]: Follow us
                    - listitem [ref=e322]:
                      - link "Twitter link" [ref=e323] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e324]
                      - link "LinkedIn link" [ref=e325] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e326]
                      - link "Facebook link" [ref=e327] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e328]
                      - link "Instagram link" [ref=e329] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e330]
                      - link "YouTube link" [ref=e331] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e332]
              - generic [ref=e333]: © Copyright 2026. Green City.
    - button "chat" [ref=e334] [cursor=pointer]:
      - img "chat" [ref=e335]
  - generic [ref=e336]: Welcome to the search window
```

# Test source

```ts
  169 |   }
  170 | 
  171 |   // ── Main text actions ────────────────────────────────────────────────────
  172 | 
  173 |   async fillMainText(text: string): Promise<void> {
  174 |     await this.mainTextInput.click();
  175 |     // Clear first (triple-click selects all, then type replaces)
  176 |     await this.mainTextInput.press('Control+a');
  177 |     await this.mainTextInput.fill(text);
  178 |   }
  179 | 
  180 |   async fillMainTextByTyping(text: string): Promise<void> {
  181 |     await this.mainTextInput.click();
  182 |     await this.page.keyboard.press('Control+a');
  183 |     await this.page.keyboard.type(text);
  184 |   }
  185 | 
  186 |   async getMainTextCounterText(): Promise<string> {
  187 |     return (await this.mainTextCounter.textContent()) ?? '';
  188 |   }
  189 | 
  190 |   async getMainTextLength(): Promise<number> {
  191 |     // For quill editor, get text content
  192 |     const text = await this.mainTextInput.textContent();
  193 |     return (text ?? '').length;
  194 |   }
  195 | 
  196 |   // ── Source actions ───────────────────────────────────────────────────────
  197 | 
  198 |   async fillSource(url: string): Promise<void> {
  199 |     await this.sourceInput.fill(url);
  200 |   }
  201 | 
  202 |   // ── Author / Date getters ─────────────────────────────────────────────────
  203 | 
  204 |   async getAuthorValue(): Promise<string> {
  205 |     return (await this.authorField.inputValue().catch(() => this.authorField.textContent())) ?? '';
  206 |   }
  207 | 
  208 |   async getDateValueOld(): Promise<string> {
  209 |     return (await this.dateField.inputValue().catch(() => this.dateField.textContent())) ?? '';
  210 |   }
  211 | 
  212 |   async getDateValue(): Promise<string> {
  213 |     return await this.dateValue.innerText();
  214 |   }
  215 | 
  216 |   async isAuthorEditable(): Promise<boolean> {
  217 |     const input = this.page.locator('.date input, .date textarea');
  218 |     return await input.count() > 0;
  219 |   }
  220 | 
  221 |   async isDateEditable(): Promise<boolean> {
  222 |     const input = this.page.locator('.date input, .date textarea');
  223 |     return await input.count() > 0;
  224 |   }
  225 | 
  226 |   // ── Button actions ───────────────────────────────────────────────────────
  227 | 
  228 |   async clickCancel(): Promise<void> {
  229 |     await this.cancelButton.click();
  230 |   }
  231 | 
  232 |   async clickPreview(): Promise<void> {
  233 |     await this.previewButton.click();
  234 |   }
  235 | 
  236 |   async clickPublish(): Promise<void> {
  237 |     await this.publishButton.click();
  238 |   }
  239 | 
  240 |   async isPublishEnabled(): Promise<boolean> {
  241 |     return this.publishButton.isEnabled();
  242 |   }
  243 | 
  244 |   async isPublishDisabled(): Promise<boolean> {
  245 |     return this.publishButton.isDisabled();
  246 |   }
  247 | 
  248 |   // ── Error getters ────────────────────────────────────────────────────────
  249 | 
  250 |   async getMainTextErrorText(): Promise<string> {
  251 |     return (await this.mainTextError.textContent()) ?? '';
  252 |   }
  253 | 
  254 |   async isMainTextErrorVisible(): Promise<boolean> {
  255 |     return this.mainTextError.isVisible();
  256 |   }
  257 | 
  258 |   // ── Visibility checks ────────────────────────────────────────────────────
  259 | 
  260 |   async isFormVisible(): Promise<boolean> {
  261 |     return this.publishButton.isVisible();
  262 |   }
  263 | 
  264 |   async waitForFormReady(): Promise<void> {
  265 |     await this.publishButton.waitFor({ state: 'visible' });
  266 |   }
  267 | 
  268 |   async uploadImage(filePath: string): Promise<void> {
> 269 |     await this.fileInput.setInputFiles(filePath);
      |     ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  270 |   }
  271 | }
```