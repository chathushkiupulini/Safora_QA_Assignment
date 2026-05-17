# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\safora_contact_form.spec.js >> Safora – Contact Us Form >> TC-CON-02 | Successful form submission with valid data
- Location: test\safora_contact_form.spec.js:125:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=/thank you|message received|we.ll be in touch|successfully/i')
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 8000ms
  - waiting for locator('text=/thank you|message received|we.ll be in touch|successfully/i')

```

```yaml
- banner:
  - link "Safora - Industrial Safety Management System":
    - /url: /en/
    - img "Safora - Industrial Safety Management System"
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: /en/
      - listitem:
        - link "About Us":
          - /url: /en/about.html
      - listitem:
        - link "Features ":
          - /url: "#"
      - listitem:
        - link "Blog":
          - /url: /en/blog.html
      - listitem:
        - link "Contact Us":
          - /url: /en/contact.html
  - link "EN":
    - /url: /en/contact.html
  - link "SV":
    - /url: /sv/kontakta-oss.html
  - link "Book a Demo":
    - /url: https://cal.com/irusri
    - text: Book a Demo
    - img
    - img
  - link "Safora - Industrial Safety Management System":
    - /url: /en/
    - img "Safora - Industrial Safety Management System"
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: /en/
      - listitem:
        - link "About Us":
          - /url: /en/about.html
      - listitem:
        - link "Features ":
          - /url: "#"
      - listitem:
        - link "Blog":
          - /url: /en/blog.html
      - listitem:
        - link "Contact Us":
          - /url: /en/contact.html
  - link "EN":
    - /url: /en/contact.html
  - link "SV":
    - /url: /sv/kontakta-oss.html
  - link "Book a Demo":
    - /url: https://cal.com/irusri
    - text: Book a Demo
    - img
    - img
- link "Safora - Industrial Safety Management System":
  - /url: /en/
  - img "Safora - Industrial Safety Management System"
- button "Close menu"
- paragraph: Safora is a modern Industrial Safety Management System specifically designed for organizations that prioritize operational excellence and worker safety.
- link "Industrial safety management system dashboard screenshot":
  - /url: /en/
  - img "Industrial safety management system dashboard screenshot"
- link "Workplace safety incident reporting interface":
  - /url: /en/
  - img "Workplace safety incident reporting interface"
- link "Hazard management and risk assessment tools":
  - /url: /en/
  - img "Hazard management and risk assessment tools"
- link "Safety inspection and audit management system":
  - /url: /en/
  - img "Safety inspection and audit management system"
- link "Emergency response and contact management features":
  - /url: /en/
  - img "Emergency response and contact management features"
- link "Industrial safety management system dashboard screenshot":
  - /url: /en/
  - img "Industrial safety management system dashboard screenshot"
- navigation
- main:
  - heading "Contact Us" [level=1]
  - navigation:
    - list:
      - listitem:
        - text: 
        - link "Home":
          - /url: /en/
      - listitem: Contact Us
  - img "Safora safety management icon"
  - text: Global Branch
  - heading "Let’s Build a Safer Workplace Together." [level=2]
  - paragraph: Whether you're looking to reduce incidents, strengthen compliance, or digitize your safety operations, our team is ready to help.
  - img "Safora global office locations map"
  - img
  - heading "Our Location" [level=5]
  - link "Rådhusesplanaden 6 F, 903 28, Umeå, Sweden":
    - /url: https://www.google.com/maps/search/?api=1&query=Rådhusesplanaden+6F,+Umeå,+Sweden
  - img
  - heading "Opening Hour" [level=5]
  - paragraph: Mon - Sat 10.00 - 18.00 Friday - Closed
  - img
  - heading "Chat to Support" [level=5]
  - link "info@safora.se":
    - /url: mailto:info@safora.se
  - link "business@irusri.com":
    - /url: mailto:business@irusri.com
  - img
  - heading "Call Us" [level=5]
  - link "+46 73 044 58 55":
    - /url: tel:467304458 55
  - heading "Get In Touch" [level=3]
  - paragraph: Speak with a SAFORA specialist to explore how the platform can support your organization’s safety goals.
  - textbox "Your Name": Jane Smith
  - textbox "Email Address": jane.smith@example.com
  - textbox "Phone Number"
  - textbox "Your Message": Hello, I am interested in learning more about your safety management platform for our warehouse operations. Please get in touch.
  - iframe
  - button "Send Message"
- contentinfo:
  - link "Safora":
    - /url: /en/
    - img "Safora"
  - paragraph: Safora is an Industrial Safety Management System developed by Irusri Group AB to help organizations manage workplace safety effectively.
  - link "Privacy Policy":
    - /url: /en/privacy-policy.html
  - text: "|"
  - link "Terms of use":
    - /url: /en/terms-of-use.html
  - heading "Phone Number" [level=5]
  - link "+46 73 044 58 55":
    - /url: tel:46730445855
  - heading "Email Address" [level=5]
  - link "info@safora.se":
    - /url: mailto:info@safora.se
  - heading "Office Address" [level=5]
  - link "Rådhusesplanaden 6 F, 903 28, Umeå, Sweden":
    - /url: https://www.google.com/maps/search/?api=1&query=Rådhusesplanaden+6F,+Umeå,+Sweden
  - heading "Follow Us" [level=5]
  - link "X (Twitter)":
    - /url: https://x.com/IrusriGroup
    - text: 
  - link "Instagram":
    - /url: https://www.instagram.com/irusrigroup_ab/
    - text: 
  - link "Facebook":
    - /url: https://web.facebook.com/profile.php?id=61559106915519
    - text: 
  - link "LinkedIn":
    - /url: https://www.linkedin.com/company/irusri/
    - text: 
  - link "Irusri Website":
    - /url: https://irusri.se/
    - text: 
  - paragraph:
    - text: © 2026 Safora
    - img "Heart Icon"
    - link "Irusri Website":
      - /url: https://irusri.se/
      - img "Irusri AB"
- img
- text:  👋 New Message
- button "Chat 1":
  - img "Chat"
  - img
  - text: "1"
```

# Test source

```ts
  34  | //    page URL differs (e.g. /en/contact/).
  35  | //  • Field selectors are based on common label text via
  36  | //    getByLabel() for resilience; fall back to getByPlaceholder()
  37  | //    if the site uses placeholder-only inputs.
  38  | //  • Expected success / error text strings may need adjustment
  39  | //    to match the live site's exact copy.
  40  | // ============================================================
  41  | 
  42  | const { test, expect } = require('@playwright/test');
  43  | 
  44  | // ── Configuration ─────────────────────────────────────────────────────────────
  45  | 
  46  | const BASE_URL    = 'https://safora.se/en/';
  47  | const CONTACT_URL = 'https://safora.se/en/contact/';   // adjust if needed
  48  | 
  49  | const VALID_DATA = {
  50  |   name   : 'Jane Smith',
  51  |   email  : 'jane.smith@example.com',
  52  |   company: 'Acme Industrial Ltd.',
  53  |   message: 'Hello, I am interested in learning more about your safety management platform for our warehouse operations. Please get in touch.',
  54  | };
  55  | 
  56  | // ── Shared helpers ────────────────────────────────────────────────────────────
  57  | 
  58  | /**
  59  |  * Navigate to the Contact Us page via the navigation menu.
  60  |  * Falls back to direct URL if the nav link cannot be found.
  61  |  */
  62  | async function gotoContactPage(page) {
  63  |   await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  64  | 
  65  |   const navContact = page.getByRole('link', { name: /contact/i }).first();
  66  |   if (await navContact.isVisible()) {
  67  |     await navContact.click();
  68  |     await page.waitForLoadState('domcontentloaded');
  69  |   } else {
  70  |     await page.goto(CONTACT_URL, { waitUntil: 'domcontentloaded' });
  71  |   }
  72  | }
  73  | 
  74  | /**
  75  |  * Fill the contact form with the provided data.
  76  |  * Uses label text for resilience; falls back to placeholder text.
  77  |  */
  78  | async function fillForm(page, data = {}) {
  79  |   const { name, email, company, message } = { ...VALID_DATA, ...data };
  80  | 
  81  |   // Name field
  82  |   const nameField = page.getByLabel(/full name|your name|name/i).first()
  83  |     .or(page.getByPlaceholder(/full name|your name|name/i).first());
  84  |   if (name !== undefined) await nameField.fill(name);
  85  | 
  86  |   // Email field
  87  |   const emailField = page.getByLabel(/email/i).first()
  88  |     .or(page.getByPlaceholder(/email/i).first());
  89  |   if (email !== undefined) await emailField.fill(email);
  90  | 
  91  |   // Company field (optional in some forms)
  92  |   const companyField = page.getByLabel(/company|organisation|organization/i).first()
  93  |     .or(page.getByPlaceholder(/company|organisation|organization/i).first());
  94  |   if (company !== undefined && await companyField.isVisible().catch(() => false)) {
  95  |     await companyField.fill(company);
  96  |   }
  97  | 
  98  |   // Message field
  99  |   const messageField = page.getByLabel(/message|how can we help|tell us/i).first()
  100 |     .or(page.getByPlaceholder(/message|how can we help|tell us/i).first());
  101 |   if (message !== undefined) await messageField.fill(message);
  102 | }
  103 | 
  104 | // ── Test Suite ────────────────────────────────────────────────────────────────
  105 | 
  106 | test.describe('Safora – Contact Us Form', () => {
  107 | 
  108 |   // ── TC-CON-01: Page Load ───────────────────────────────────────────────────
  109 |   test('TC-CON-01 | Contact Us page loads and form is visible', async ({ page }) => {
  110 |     await gotoContactPage(page);
  111 | 
  112 |     // The page title or a heading should mention "contact"
  113 |     await expect(page).toHaveTitle(/contact|safora/i);
  114 | 
  115 |     // At minimum the submit button must be visible
  116 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  117 |     await expect(submitBtn).toBeVisible();
  118 | 
  119 |     // At least one input field must be present
  120 |     const inputs = page.locator('input[type="text"], input[type="email"], textarea');
  121 |     await expect(inputs.first()).toBeVisible();
  122 |   });
  123 | 
  124 |   // ── TC-CON-02: Happy Path (successful submission) ─────────────────────────
  125 |   test('TC-CON-02 | Successful form submission with valid data', async ({ page }) => {
  126 |     await gotoContactPage(page);
  127 |     await fillForm(page, VALID_DATA);
  128 | 
  129 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  130 |     await submitBtn.click();
  131 | 
  132 |     // Assert a success message appears (text varies by implementation)
  133 |     const successIndicator = page.locator('text=/thank you|message received|we.ll be in touch|successfully/i');
> 134 |     await expect(successIndicator).toBeVisible({ timeout: 8000 });
      |                                    ^ Error: expect(locator).toBeVisible() failed
  135 |   });
  136 | 
  137 |   // ── TC-CON-03: All Fields Blank ────────────────────────────────────────────
  138 |   test('TC-CON-03 | Validation errors shown when all fields are blank', async ({ page }) => {
  139 |     await gotoContactPage(page);
  140 | 
  141 |     // Do NOT fill anything – just click submit
  142 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  143 |     await submitBtn.click();
  144 | 
  145 |     // At least one validation error must be present
  146 |     const errorMsg = page.locator(
  147 |       '[class*="error"], [class*="invalid"], [aria-invalid="true"], ' +
  148 |       'text=/required|this field|please enter|cannot be blank/i'
  149 |     );
  150 |     await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
  151 | 
  152 |     // Confirm the page did NOT navigate away (form was not submitted)
  153 |     await expect(page).toHaveURL(/contact/i);
  154 |   });
  155 | 
  156 |   // ── TC-CON-04: Invalid Email Format ───────────────────────────────────────
  157 |   test('TC-CON-04 | Invalid email format triggers validation error', async ({ page }) => {
  158 |     await gotoContactPage(page);
  159 | 
  160 |     await fillForm(page, { email: 'not-a-valid-email' });
  161 | 
  162 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  163 |     await submitBtn.click();
  164 | 
  165 |     // Email-specific error should appear
  166 |     const emailError = page.locator(
  167 |       'input[type="email"] + [class*="error"], ' +
  168 |       '[class*="error"]:near(input[type="email"]), ' +
  169 |       'text=/valid email|email address/i'
  170 |     );
  171 |     await expect(emailError.first()).toBeVisible({ timeout: 4000 });
  172 |   });
  173 | 
  174 |   // ── TC-CON-05: Name Field Blank ────────────────────────────────────────────
  175 |   test('TC-CON-05 | Validation error shown when Name field is blank', async ({ page }) => {
  176 |     await gotoContactPage(page);
  177 | 
  178 |     // Fill all fields except name
  179 |     await fillForm(page, { name: '' });
  180 | 
  181 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  182 |     await submitBtn.click();
  183 | 
  184 |     // Some validation feedback must appear
  185 |     const errorMsg = page.locator(
  186 |       '[class*="error"], [aria-invalid="true"], text=/required|please enter|name/i'
  187 |     );
  188 |     await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
  189 |   });
  190 | 
  191 |   // ── TC-CON-06: Email Field Blank ───────────────────────────────────────────
  192 |   test('TC-CON-06 | Validation error shown when Email field is blank', async ({ page }) => {
  193 |     await gotoContactPage(page);
  194 | 
  195 |     await fillForm(page, { email: '' });
  196 | 
  197 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  198 |     await submitBtn.click();
  199 | 
  200 |     const errorMsg = page.locator(
  201 |       '[class*="error"], [aria-invalid="true"], text=/required|email/i'
  202 |     );
  203 |     await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
  204 |   });
  205 | 
  206 |   // ── TC-CON-07: XSS Attempt in Text Fields ─────────────────────────────────
  207 |   test('TC-CON-07 | XSS payload is sanitised and no alert fires', async ({ page }) => {
  208 |     let alertFired = false;
  209 |     page.on('dialog', async (dialog) => {
  210 |       alertFired = true;
  211 |       await dialog.dismiss();   // dismiss if one somehow appears
  212 |     });
  213 | 
  214 |     await gotoContactPage(page);
  215 | 
  216 |     await fillForm(page, {
  217 |       name   : "<script>alert('xss-name')</script>",
  218 |       message: "<img src=x onerror=alert('xss-msg')>",
  219 |     });
  220 | 
  221 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  222 |     await submitBtn.click();
  223 | 
  224 |     // Wait briefly for any rogue dialog
  225 |     await page.waitForTimeout(1500);
  226 | 
  227 |     expect(alertFired, 'XSS alert dialog must NOT fire').toBe(false);
  228 |   });
  229 | 
  230 |   // ── TC-CON-08: Keyboard-Only Navigation ───────────────────────────────────
  231 |   test('TC-CON-08 | Form is fully navigable via keyboard (Tab + Enter)', async ({ page }) => {
  232 |     await gotoContactPage(page);
  233 | 
  234 |     // Tab to first form field
```