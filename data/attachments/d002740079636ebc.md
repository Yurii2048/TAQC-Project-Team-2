# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC-04.spec.ts >> TC-04 | Create News Form - Upload Image field validation >> should validate image formats and size restrictions
- Location: tests\TC-04.spec.ts:7:7

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\maxgu\TAQC-Project-Team-2\utils\assets\valid-image.png'
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
                      - generic [ref=e307]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e308]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e309]:
                  - paragraph [ref=e310]: "Date: Jun 1, 2026"
                  - paragraph [ref=e311]: "Author: Yura"
                - generic [ref=e312]:
                  - button "Cancel" [ref=e313] [cursor=pointer]
                  - button "Preview" [ref=e314] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e315]
          - contentinfo [ref=e317]:
            - generic [ref=e318]:
              - generic [ref=e319]:
                - link "GreenCity home" [ref=e321] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e322]
                - navigation [ref=e323]:
                  - menu [ref=e324]:
                    - listitem [ref=e325]:
                      - link "Eco news" [ref=e326] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e327]:
                      - link "Events" [ref=e328] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e329]:
                      - link "Places" [ref=e330] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e331]:
                      - link "About Us" [ref=e332] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e333]:
                      - link "My Space" [ref=e334] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e335]:
                      - link "UBS Courier" [ref=e336] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e337]:
                    - listitem [ref=e338]:
                      - paragraph [ref=e339]: Follow us
                    - listitem [ref=e340]:
                      - link "Twitter link" [ref=e341] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e342]
                      - link "LinkedIn link" [ref=e343] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e344]
                      - link "Facebook link" [ref=e345] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e346]
                      - link "Instagram link" [ref=e347] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e348]
                      - link "YouTube link" [ref=e349] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e350]
              - generic [ref=e351]: © Copyright 2026. Green City.
    - button "chat" [ref=e352] [cursor=pointer]:
      - img "chat" [ref=e353]
  - generic [ref=e354]: Welcome to the search window
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
      |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\maxgu\TAQC-Project-Team-2\utils\assets\valid-image.png'
  270 |   }
  271 | }
```