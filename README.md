# safora-qa-assignment

Playwright automation for the Safora.se Contact Us form — QA Engineering Intern Assignment.

---

## 📁 Project Structure

```
SAFORA_QA_ASSIGNMENT/
│
├── test/
│   └── safora_contact_form.spec.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


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

---

## 🧪 Test Cases Covered

| Test ID | Description |
|---|---|
| TC-CON-01 | Contact Us page loads and form is visible |
| TC-CON-02 | Successful form submission with valid data |
| TC-CON-03 | Validation errors shown when all fields are blank |
| TC-CON-04 | Invalid email format triggers validation error |
| TC-CON-05 | Validation error shown when Name field is blank |
| TC-CON-06 | Validation error shown when Email field is blank |
| TC-CON-07 | XSS payload is sanitised and no alert fires |
| TC-CON-08 | Form is fully navigable via keyboard (Tab + Enter) |
| TC-CON-09 | Contact form is usable on mobile viewport (375px) |

---



## 🛠️ Built With

- [Playwright](https://playwright.dev/) — End-to-end testing framework
- JavaScript (Node.js)
- Target: [https://safora.se/en/](https://safora.se/en/)


