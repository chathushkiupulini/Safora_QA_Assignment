# safora-qa-assignment
 
Playwright automation for the Safora.se Contact Us form — QA Engineering Intern Assignment.
 
---
 
## 📁 Project Structure
 
```
safora-qa-assignment/
├── safora_contact_form.spec.js   # Playwright test suite (Part 2)
├── playwright-report/            # Generated after running tests
├── package.json
└── README.md
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) >= 16
- npm >= 8
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/your-username/safora-qa-assignment.git
cd safora-qa-assignment
 
# 2. Install dependencies
npm init -y
npm install --save-dev @playwright/test
 
# 3. Install Playwright browsers
npx playwright install chromium
```
 
---
 
## ▶️ Running the Tests
 
### Run all tests (headless)
```bash
npx playwright test safora_contact_form.spec.js
```
 
### Run in headed mode (watch the browser)
```bash
npx playwright test safora_contact_form.spec.js --headed
```
 
### Run a single test by name
```bash
npx playwright test -g "TC-CON-02" --headed
```
 
### Run with HTML report
```bash
npx playwright test safora_contact_form.spec.js --reporter=html
```
 
### View the HTML report
```bash
npx playwright show-report
```
 
