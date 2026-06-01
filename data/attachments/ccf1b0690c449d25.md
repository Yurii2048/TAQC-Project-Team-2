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
          - link "Image green city logo":
            - /url: "#/greenCity"
            - link "Image green city logo"
          - generic [ref=e10]:
            - navigation [ref=e11]:
              - tablist [ref=e12]:
                - listitem [ref=e13]:
                  - link "Eco news" [ref=e14] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e15]:
                  - link "Events" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e17]:
                  - link "Places" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e19]:
                  - link "About us" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e21]:
                  - link "My space" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e23]:
                  - link "UBS courier" [ref=e24] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e26]:
              - listitem "site bookmark" [ref=e27] [cursor=pointer]:
                - img [ref=e28]
              - listitem "site notification" [ref=e29] [cursor=pointer]:
                - img [ref=e30]
              - search "site search" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
              - menu "language switcher" [ref=e33]:
                - option "english" [ref=e34] [cursor=pointer]:
                  - generic [ref=e35]: En
                  - img [ref=e36]
              - menu "profile options collapsed" [ref=e37]:
                - listitem [ref=e38] [cursor=pointer]: Yura
      - generic [ref=e39]:
        - generic "Tab To Main"
        - generic [ref=e40]:
          - main [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e46]:
                - heading "Create news" [level=2] [ref=e47]
                - paragraph [ref=e49]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - generic [ref=e53]:
                    - generic [ref=e54]:
                      - heading "Title" [level=3] [ref=e55]
                      - generic [ref=e56]: 0/170
                    - textbox [ref=e58]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                  - generic [ref=e59]:
                    - heading "Pick tags for news" [level=3] [ref=e60]
                    - paragraph [ref=e61]: Only 3 tags can be added
                    - generic [ref=e63]:
                      - button "News" [ref=e64] [cursor=pointer]:
                        - generic [ref=e66]: News
                      - button "Events" [ref=e67] [cursor=pointer]:
                        - generic [ref=e69]: Events
                      - button "Education" [ref=e70] [cursor=pointer]:
                        - generic [ref=e72]: Education
                      - button "Initiatives" [ref=e73] [cursor=pointer]:
                        - generic [ref=e75]: Initiatives
                      - button "Ads" [ref=e76] [cursor=pointer]:
                        - generic [ref=e78]: Ads
                  - generic [ref=e79]:
                    - generic [ref=e80]:
                      - heading "Source (optional)" [level=3] [ref=e81]
                      - generic [ref=e82]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e84]:
                      - /placeholder: Link to external source
                  - generic [ref=e85]:
                    - heading "Picture (optional)" [level=3] [ref=e86]
                    - generic [ref=e87]:
                      - generic [ref=e90]:
                        - text: Drop your image here or
                        - generic [ref=e91]: browse
                        - button "browse" [ref=e92]
                      - generic [ref=e93]:
                        - generic "Crop photo" [ref=e97]
                        - generic [ref=e110]:
                          - button "Cancel" [ref=e111] [cursor=pointer]
                          - button "Submit" [ref=e112] [cursor=pointer]
                      - paragraph [ref=e113]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - heading "Content" [level=3] [ref=e116]
                    - paragraph [ref=e117]: Must be minimum 20 and maximum 63 206 symbols
                  - paragraph
                - generic [ref=e118]:
                  - paragraph [ref=e119]: "Date: Jun 1, 2026"
                  - paragraph [ref=e120]: "Author: Yura"
                - generic [ref=e121]:
                  - button "Cancel" [ref=e122] [cursor=pointer]
                  - button "Preview" [ref=e123] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e124]
          - contentinfo [ref=e126]:
            - generic [ref=e127]:
              - generic [ref=e128]:
                - generic:
                  - link "GreenCity home":
                    - /url: "#/greenCity"
                    - img "GreenCity home"
                - navigation [ref=e129]:
                  - menu [ref=e130]:
                    - listitem [ref=e131]:
                      - link "Eco news" [ref=e132] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e133]:
                      - link "Events" [ref=e134] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e135]:
                      - link "Places" [ref=e136] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e137]:
                      - link "About Us" [ref=e138] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e139]:
                      - link "My Space" [ref=e140] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1822"
                    - listitem [ref=e141]:
                      - link "UBS Courier" [ref=e142] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e143]:
                    - listitem [ref=e144]:
                      - paragraph [ref=e145]: Follow us
                    - listitem [ref=e146]:
                      - link "Twitter link" [ref=e147] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e148]
                      - link "LinkedIn link" [ref=e149] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e150]
                      - link "Facebook link" [ref=e151] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e152]
                      - link "Instagram link" [ref=e153] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e154]
                      - link "YouTube link" [ref=e155] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e156]
              - generic [ref=e157]: © Copyright 2026. Green City.
    - button "chat" [ref=e158] [cursor=pointer]:
      - img "chat" [ref=e159]
  - generic [ref=e160]: Welcome to the search window
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