# Playwright TypeScript Testing Framework

### A foundational project structure for automated web application testing using Playwright and TypeScript. Built around Page Object Model (POM) and a Component-based architecture, this setup is designed to scale cleanly as your test suite grows.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Yurii2048/TAQC-Project-Team-2

cd TAQC-Project-Team-2
```

### 2. Install dependencies

```bash
npm install

npx playwright install
```

### 3. Configure environment

```bash
cp .env.example .env
```

Open `.env` and fill in your credentials:

```
BASE_URL=
HEADLESS=true
RETRIES=0
TIMEOUT=30000
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run specific test file

```bash
npm test tests/example.spec.ts
```

### Open HTML report

```bash
npx playwright show-report
```

## Project Structure

```
TAQC-Project-Team-2/
|
├── fixtures/                     # Playwright fixtures
│     └── example.ts          
├── components/                   # UI Components
│     └── baseComponent.ts          
├── pages/                        # Page Objects
│     └── basePage.ts          
├── tests/                        # Test files
│     └── example.spec.ts
├── utils/                        # Helpers (env, etc.)
│     └── env.ts
├── .env.example
├── .gitignore 
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```
