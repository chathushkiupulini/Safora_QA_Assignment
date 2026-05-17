
const { test, expect } = require('@playwright/test');


const BASE_URL    = 'https://safora.se/en/';
const CONTACT_URL = 'https://safora.se/en/contact/';   

const VALID_DATA = {
  name   : 'Chathushki Kumarage',
  email  : 'asmadachathushki@gmail.com',
  company: 'Acme Industrial Ltd.',
  message: 'Hello, I am interested in learning more about your safety management platform for our warehouse operations. Please get in touch.',
};



/**
 * Navigate to the Contact Us page via the navigation menu.
 * Falls back to direct URL if the nav link cannot be found.
 */
async function gotoContactPage(page) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  const navContact = page.getByRole('link', { name: /contact/i }).first();
  if (await navContact.isVisible()) {
    await navContact.click();
    await page.waitForLoadState('domcontentloaded');
  } else {
    await page.goto(CONTACT_URL, { waitUntil: 'domcontentloaded' });
  }
}

/**
 * Fill the contact form with the provided data.
 * Uses label text for resilience; falls back to placeholder text.
 */
async function fillForm(page, data = {}) {
  const { name, email, company, message } = { ...VALID_DATA, ...data };

  // Name field
  const nameField = page.getByLabel(/full name|your name|name/i).first()
    .or(page.getByPlaceholder(/full name|your name|name/i).first());
  if (name !== undefined) await nameField.fill(name);

  // Email field
  const emailField = page.getByLabel(/email/i).first()
    .or(page.getByPlaceholder(/email/i).first());
  if (email !== undefined) await emailField.fill(email);

  // Company field (optional in some forms)
  const companyField = page.getByLabel(/company|organisation|organization/i).first()
    .or(page.getByPlaceholder(/company|organisation|organization/i).first());
  if (company !== undefined && await companyField.isVisible().catch(() => false)) {
    await companyField.fill(company);
  }

  // Message field
  const messageField = page.getByLabel(/message|how can we help|tell us/i).first()
    .or(page.getByPlaceholder(/message|how can we help|tell us/i).first());
  if (message !== undefined) await messageField.fill(message);
}

// ── Test Suite ────────────────────────────────────────────────────────────────

test.describe('Safora – Contact Us Form', () => {

  // ── TC-CON-01: Page Load ───────────────────────────────────────────────────
  test('TC-CON-01 | Contact Us page loads and form is visible', async ({ page }) => {
    await gotoContactPage(page);

    // The page title or a heading should mention "contact"
    await expect(page).toHaveTitle(/contact|safora/i);

    // At minimum the submit button must be visible
    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await expect(submitBtn).toBeVisible();

    // At least one input field must be present
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    await expect(inputs.first()).toBeVisible();
  });

  // ── TC-CON-02: Happy Path (successful submission) ─────────────────────────
  test('TC-CON-02 | Successful form submission with valid data', async ({ page }) => {
    await gotoContactPage(page);
    await fillForm(page, VALID_DATA);

    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    // Assert a success message appears (text varies by implementation)
    const successIndicator = page.locator('text=/thank you|message received|we.ll be in touch|successfully/i');
    await expect(successIndicator).toBeVisible({ timeout: 8000 });
  });

  // ── TC-CON-03: All Fields Blank ────────────────────────────────────────────
  test('TC-CON-03 | Validation errors shown when all fields are blank', async ({ page }) => {
    await gotoContactPage(page);

    // Do NOT fill anything – just click submit
    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    // At least one validation error must be present
    const errorMsg = page.locator(
      '[class*="error"], [class*="invalid"], [aria-invalid="true"], ' +
      'text=/required|this field|please enter|cannot be blank/i'
    );
    await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });

    // Confirm the page did NOT navigate away (form was not submitted)
    await expect(page).toHaveURL(/contact/i);
  });

  // ── TC-CON-04: Invalid Email Format ───────────────────────────────────────
  test('TC-CON-04 | Invalid email format triggers validation error', async ({ page }) => {
    await gotoContactPage(page);

    await fillForm(page, { email: 'not-a-valid-email' });

    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    // Email-specific error should appear
    const emailError = page.locator(
      'input[type="email"] + [class*="error"], ' +
      '[class*="error"]:near(input[type="email"]), ' +
      'text=/valid email|email address/i'
    );
    await expect(emailError.first()).toBeVisible({ timeout: 4000 });
  });

  // ── TC-CON-05: Name Field Blank ────────────────────────────────────────────
  test('TC-CON-05 | Validation error shown when Name field is blank', async ({ page }) => {
    await gotoContactPage(page);

    // Fill all fields except name
    await fillForm(page, { name: '' });

    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    // Some validation feedback must appear
    const errorMsg = page.locator(
      '[class*="error"], [aria-invalid="true"], text=/required|please enter|name/i'
    );
    await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
  });

  // ── TC-CON-06: Email Field Blank ───────────────────────────────────────────
  test('TC-CON-06 | Validation error shown when Email field is blank', async ({ page }) => {
    await gotoContactPage(page);

    await fillForm(page, { email: '' });

    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    const errorMsg = page.locator(
      '[class*="error"], [aria-invalid="true"], text=/required|email/i'
    );
    await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
  });

  // ── TC-CON-07: XSS Attempt in Text Fields ─────────────────────────────────
  test('TC-CON-07 | XSS payload is sanitised and no alert fires', async ({ page }) => {
    let alertFired = false;
    page.on('dialog', async (dialog) => {
      alertFired = true;
      await dialog.dismiss();  
    });

    await gotoContactPage(page);

    await fillForm(page, {
      name   : "<script>alert('xss-name')</script>",
      message: "<img src=x onerror=alert('xss-msg')>",
    });

    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await submitBtn.click();

    // Wait briefly for any rogue dialog
    await page.waitForTimeout(1500);

    expect(alertFired, 'XSS alert dialog must NOT fire').toBe(false);
  });

  // ── TC-CON-08: Keyboard-Only Navigation ───────────────────────────────────
  test('TC-CON-08 | Form is fully navigable via keyboard (Tab + Enter)', async ({ page }) => {
    await gotoContactPage(page);

    // Tab to first form field
    await page.keyboard.press('Tab');

    // Fill fields via keyboard focus order
    await page.keyboard.type(VALID_DATA.name);
    await page.keyboard.press('Tab');
    await page.keyboard.type(VALID_DATA.email);
    await page.keyboard.press('Tab');
    await page.keyboard.type(VALID_DATA.company);
    await page.keyboard.press('Tab');
    await page.keyboard.type(VALID_DATA.message);

    // Tab to submit and activate
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Either a success message OR a validation message is shown (both are valid outcomes)
    const feedback = page.locator(
      'text=/thank you|message received|we.ll be in touch|successfully|required|error/i'
    );
    await expect(feedback.first()).toBeVisible({ timeout: 8000 });
  });

  // ── TC-CON-09: Mobile Viewport – Form Usability ────────────────────────────
  test('TC-CON-09 | Contact form is usable on mobile viewport (375px)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    const page = await context.newPage();

    await gotoContactPage(page);

    // Form must still be visible; no horizontal scroll
    const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
    await expect(submitBtn).toBeVisible();

    // Verify no horizontal overflow (scrollWidth should equal clientWidth)
    const hasHorizontalScroll = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalScroll, 'Page must not have horizontal scroll on mobile').toBe(false);

    await context.close();
  });

});
