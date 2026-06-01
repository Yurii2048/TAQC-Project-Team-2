# 🌿 GreenCity Test Automation

> 📊 **Allure Report (GitHub Pages):** https://yurii2048.github.io/TAQC-Project-Team-2/#

Automated UI test suite for the [GreenCity Web Application](https://www.greencity.cx.ua/#/greenCity), built with **Playwright + TypeScript**. The project follows the **Page Object Model** pattern with a component-based architecture and Allure reporting.

---

## Tech Stack

| Tool | Version |
|---|---|
| [Playwright](https://playwright.dev/) | `^1.59.1` |
| Node.js | `>=18` |
| TypeScript | `^5` |
| [Allure Playwright](https://allurereport.org/docs/playwright/) | `^3` |

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD: run tests + publish Allure to GitHub Pages
├── components/                  # Reusable UI components
│   ├── BaseComponent.ts
│   ├── HeaderComponent.ts
│   └── SignInModalComponent.ts
├── fixtures/
│   └── index.ts                 # Custom Playwright fixtures (auth, page setup)
├── pages/                       # Page Object classes
│   ├── BasePage.ts
│   ├── NewsPage.ts
│   └── CreateNewsPage.ts
├── tests/                       # Test specs (10 test cases)
│   ├── TC-01_spec.ts
│   ├── TC-02_spec.ts
│   ├── TC-03_spec.ts
│   ├── TC-04_spec.ts
│   ├── TC-05_spec.ts
│   ├── TC-06_spec.ts
│   ├── TC-07_spec.ts
│   ├── TC-08_spec.ts
│   ├── TC-09_spec.ts
│   └── TC-10_spec.ts
├── utils/
│   └── env.ts                   # Environment variable helpers
├── .env.example                 # Template for local credentials
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Prerequisites

- **Node.js** `>=18` — [download](https://nodejs.org/)
- **Java** `>=8` — required by the Allure CLI to generate the HTML report ([download](https://adoptium.net/))
- **Allure CLI** — install once globally:
  ```bash
  npm install -g allure-commandline
  ```

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Yurii2048/TAQC-Project-Team-2.git
cd TAQC-Project-Team-2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install --with-deps chromium
```

### 4. Configure credentials

Copy the example file and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```env
BASE_URL=https://www.greencity.cx.ua
USER=your_email@example.com
PASSWORD=your_password
HEADLESS=true
RETRIES=0
TIMEOUT=30000
```

> ⚠️ `.env` is git-ignored and will never be committed to the repository.

---

## Running Tests

### Run all tests

```bash
npm test
```

### Run a specific test file

```bash
npx playwright test tests/TC-01_spec.ts
```

### Run tests in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive Playwright UI)

```bash
npx playwright test --ui
```

---

## Allure Report

### Generate and open the report locally

```bash
# 1. Run tests — writes raw results to allure-results/
npm test

# 2. Generate the HTML report
allure generate allure-results --clean -o allure-report

# 3. Open the report in your browser
allure open allure-report
```

> **On failure:** screenshots are attached automatically (`screenshot: 'only-on-failure'`) and traces are saved on first retry (`trace: 'on-first-retry'`), both visible inside the Allure report.

---

## CI/CD — GitHub Actions

The workflow (`.github/workflows/playwright.yml`) triggers on every `push` and `pull_request` to `main`. It:

1. Installs dependencies and Playwright browsers
2. Runs the full test suite
3. Generates the Allure Report
4. Publishes it to **GitHub Pages** automatically

The live report is always available at:
**https://yurii2048.github.io/TAQC-Project-Team-2/#**

> To enable GitHub Pages on a fork: go to **Settings → Pages → Source → GitHub Actions**.

---

## .gitignore

```
# Playwright
node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
/playwright/.auth/
allure-results/
allure-report/
.env
```
