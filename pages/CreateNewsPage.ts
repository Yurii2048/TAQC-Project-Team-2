import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateNewsPage extends BasePage {

  // ── Form fields ────────────────────────────────────────────────────────
  readonly titleBlock: Locator;
  readonly titleName: Locator;
  readonly titleInput: Locator;
  readonly titleCounter: Locator;
  readonly titleTextArea: Locator;

  readonly tagsBlock: Locator;
  readonly tagButtons: Locator;
  readonly tagNews: Locator;
  readonly tagEvents: Locator;
  readonly tagEducation: Locator;
  readonly tagInitiatives: Locator;
  readonly tagAds: Locator;

  readonly imageBlock: Locator;
  readonly addImageButton: Locator;

  readonly sourceBlock: Locator;
  readonly sourcePlaceholder: Locator;

  readonly contentBlock: Locator;
  readonly mainTextInput: Locator;
  readonly mainTextCounter: Locator;

  readonly dateValue: Locator;
  readonly authorValue: Locator;

  readonly authorField: Locator;
  readonly dateField: Locator;
  readonly sourceInput: Locator;

  // ── Action buttons ─────────────────────────────────────────────────────
  readonly cancelButton: Locator;
  readonly previewButton: Locator;
  readonly publishButton: Locator;

  // ── Validation messages ────────────────────────────────────────────────
  readonly mainTextError: Locator;
  readonly titleError: Locator;

  constructor(page: Page) {
    super(page);

    // Title
    this.titleBlock   = page.locator('.form-container .title-block');
    this.titleName    = page.locator('.title-block h3');
    this.titleInput   = page.locator('.title-block label');
    this.titleCounter = page.locator('.title-block .field-info');
    this.titleTextArea = page.locator('.title-block textarea')

    // Tags
    this.tagsBlock      = page.locator('.form-container .tags-block');
    this.tagButtons     = page.locator('.tags-block .tag-button');
    this.tagNews        = page.locator('.tags-block .text').filter({ hasText: /^News$/i });
    this.tagEvents      = page.locator('.tags-block .text').filter({ hasText: /^Events$/i });
    this.tagEducation   = page.locator('.tags-block .text').filter({ hasText: /^Education$/i });
    this.tagInitiatives = page.locator('.tags-block .text').filter({ hasText: /^Initiatives$/i });
    this.tagAds         = page.locator('.tags-block .text').filter({ hasText: /^Ads$/i });

    // Image
    this.imageBlock     = page.locator('.form-container .image-block');
    this.addImageButton = page.locator('.image-block label');

    // Source
    this.sourceBlock       = page.locator('.form-container .source-block');
    this.sourcePlaceholder = page.locator('.source-block .field-info');

    // Main text — quill editor or textarea
    this.contentBlock    = page.locator('.form-container .textarea-wrapper');
    this.mainTextInput   = page.locator('.textarea-wrapper .ql-editor');
    this.mainTextCounter = page.locator('.textarea-wrapper .field-info');

    // Read-only fields

    this.dateValue = page.locator('.date p', {hasText: 'Date:'}).locator('span').nth(1);
    this.authorValue = page.locator('.date p', {hasText: 'Author:'}).locator('span').nth(1);


    this.authorField = page.locator('.form-container .date');
    this.dateField   = page.locator('.date span');
    this.sourceInput = page.getByPlaceholder(/http/i)
                         .or(page.locator('input[formcontrolname="source"]'));

    // Buttons
    this.cancelButton  = page.locator('.submit-buttons .tertiary-global-button');
    this.previewButton = page.locator('.submit-buttons .secondary-global-button');
    this.publishButton = page.locator('.submit-buttons .primary-global-button');

    // Errors
    this.mainTextError = page.locator('.main-text-error, [class*="text"] .error, mat-error')
                           .filter({ hasText: /minimum.*20|20.*minimum|63.?206/i });
    this.titleError    = page.locator('mat-error, .error').filter({ hasText: /title/i });
  }

  get url(): string {
    return '/#/greenCity/news/create-news';
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  // ── Title actions ────────────────────────────────────────────────────────

  async fillTitle(text: string): Promise<void> {
    await this.titleInput.fill(text);
  }

  async getTitleCounterText(): Promise<string> {
    return (await this.titleCounter.textContent()) ?? '';
  }

  async getTitleInputValue(): Promise<string> {
    return (await this.titleTextArea.inputValue()) ?? '';
  }

  async isTitleInvalid(): Promise<boolean> {
    const classes = (await this.titleTextArea.getAttribute('class')) ?? '';
    return classes.includes('ng-invalid');
  }

  async isTitleValid(): Promise<boolean> {
    const classes = (await this.titleTextArea.getAttribute('class')) ?? '';
    return classes.includes('ng-valid') && !classes.includes('ng-invalid');
  }

  async isTitleCounterOverLimit(): Promise<boolean> {
    const classes = (await this.titleCounter.getAttribute('class')) ?? '';
    return classes.includes('warning');
  }

  async blurTitleField(): Promise<void> {
    // Click another element to trigger touched/blur state on the Title field
    await this.mainTextInput.click();
  }

  // ── Tag actions ──────────────────────────────────────────────────────────

  async clickTag(tagName: 'News' | 'Events' | 'Education' | 'Initiatives' | 'Ads'): Promise<void> {
    const tagLocators = {
      News:        this.tagNews,
      Events:      this.tagEvents,
      Education:   this.tagEducation,
      Initiatives: this.tagInitiatives,
      Ads:         this.tagAds,
    };
    await tagLocators[tagName].click();
  }

  async getTagCount(): Promise<number> {
    return this.tagButtons.count();
  }

  async isTagSelected(tagName: string): Promise<boolean> {
    const tag = this.tagButtons.filter({ hasText: tagName });
    const classes = (await tag.getAttribute('class')) ?? '';
    return classes.includes('selected') || classes.includes('active') || classes.includes('checked');
  }

  // ── Main text actions ────────────────────────────────────────────────────

  async fillMainText(text: string): Promise<void> {
    await this.mainTextInput.click();
    // Clear first (triple-click selects all, then type replaces)
    await this.mainTextInput.press('Control+a');
    await this.mainTextInput.fill(text);
  }

  async fillMainTextByTyping(text: string): Promise<void> {
    await this.mainTextInput.click();
    await this.page.keyboard.press('Control+a');
    await this.page.keyboard.type(text);
  }

  async getMainTextCounterText(): Promise<string> {
    return (await this.mainTextCounter.textContent()) ?? '';
  }

  async getMainTextLength(): Promise<number> {
    // For quill editor, get text content
    const text = await this.mainTextInput.textContent();
    return (text ?? '').length;
  }

  // ── Source actions ───────────────────────────────────────────────────────

  async fillSource(url: string): Promise<void> {
    await this.sourceInput.fill(url);
  }

  // ── Author / Date getters ─────────────────────────────────────────────────

  async getAuthorValue(): Promise<string> {
    return (await this.authorField.inputValue().catch(() => this.authorField.textContent())) ?? '';
  }

  async getDateValueOld(): Promise<string> {
    return (await this.dateField.inputValue().catch(() => this.dateField.textContent())) ?? '';
  }

  async getDateValue(): Promise<string> {
    return await this.dateValue.innerText();
  }

  async isAuthorEditable(): Promise<boolean> {
    const input = this.page.locator('.date input, .date textarea');
    return await input.count() > 0;
  }

  async isDateEditable(): Promise<boolean> {
    const input = this.page.locator('.date input, .date textarea');
    return await input.count() > 0;
  }

  // ── Button actions ───────────────────────────────────────────────────────

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async clickPreview(): Promise<void> {
    await this.previewButton.click();
  }

  async clickPublish(): Promise<void> {
    await this.publishButton.click();
  }

  async isPublishEnabled(): Promise<boolean> {
    return this.publishButton.isEnabled();
  }

  async isPublishDisabled(): Promise<boolean> {
    return this.publishButton.isDisabled();
  }

  // ── Error getters ────────────────────────────────────────────────────────

  async getMainTextErrorText(): Promise<string> {
    return (await this.mainTextError.textContent()) ?? '';
  }

  async isMainTextErrorVisible(): Promise<boolean> {
    return this.mainTextError.isVisible();
  }

  // ── Visibility checks ────────────────────────────────────────────────────

  async isFormVisible(): Promise<boolean> {
    return this.publishButton.isVisible();
  }

  async waitForFormReady(): Promise<void> {
    await this.publishButton.waitFor({ state: 'visible' });
  }
}