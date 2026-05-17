# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\safora_contact_form.spec.js >> Safora – Contact Us Form >> TC-CON-06 | Validation error shown when Email field is blank
- Location: test\safora_contact_form.spec.js:192:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: [class*="error"], [aria-invalid="true"], text=/required|email/i >> nth=0
Expected: visible
Error: Unexpected token "=" while parsing css selector "[class*="error"], [aria-invalid="true"], text=/required|email/i". Did you mean to CSS.escape it?

Call log:
  - Expect "toBeVisible" with timeout 4000ms
  - waiting for [class*="error"], [aria-invalid="true"], text=/required|email/i >> nth=0

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner:
    - generic [ref=e4]:
      - link "Safora - Industrial Safety Management System" [ref=e7] [cursor=pointer]:
        - /url: /en/
        - img "Safora - Industrial Safety Management System" [ref=e8]
      - navigation [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Home" [ref=e13] [cursor=pointer]:
              - /url: /en/
          - listitem [ref=e14]:
            - link "About Us" [ref=e15] [cursor=pointer]:
              - /url: /en/about.html
          - listitem [ref=e16]:
            - link "Features " [ref=e17] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e18]:
            - link "Blog" [ref=e19] [cursor=pointer]:
              - /url: /en/blog.html
          - listitem [ref=e20]:
            - link "Contact Us" [ref=e21] [cursor=pointer]:
              - /url: /en/contact.html
      - generic [ref=e22]:
        - generic "Language switcher" [ref=e23]:
          - link "EN" [ref=e24] [cursor=pointer]:
            - /url: /en/contact.html
          - link "SV" [ref=e25] [cursor=pointer]:
            - /url: /sv/kontakta-oss.html
        - link "Book a Demo" [ref=e27] [cursor=pointer]:
          - /url: https://cal.com/irusri
          - text: Book a Demo
          - generic [ref=e28]:
            - img [ref=e29]
            - img [ref=e31]
    - generic [ref=e35]:
      - link "Safora - Industrial Safety Management System" [ref=e38] [cursor=pointer]:
        - /url: /en/
        - img "Safora - Industrial Safety Management System" [ref=e39]
      - navigation [ref=e41]:
        - list [ref=e42]:
          - listitem [ref=e43]:
            - link "Home" [ref=e44] [cursor=pointer]:
              - /url: /en/
          - listitem [ref=e45]:
            - link "About Us" [ref=e46] [cursor=pointer]:
              - /url: /en/about.html
          - listitem [ref=e47]:
            - link "Features " [ref=e48] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e49]:
            - link "Blog" [ref=e50] [cursor=pointer]:
              - /url: /en/blog.html
          - listitem [ref=e51]:
            - link "Contact Us" [ref=e52] [cursor=pointer]:
              - /url: /en/contact.html
      - generic [ref=e53]:
        - generic "Language switcher" [ref=e54]:
          - link "EN" [ref=e55] [cursor=pointer]:
            - /url: /en/contact.html
          - link "SV" [ref=e56] [cursor=pointer]:
            - /url: /sv/kontakta-oss.html
        - link "Book a Demo" [ref=e58] [cursor=pointer]:
          - /url: https://cal.com/irusri
          - text: Book a Demo
          - generic [ref=e59]:
            - img [ref=e60]
            - img [ref=e62]
  - generic [ref=e66]:
    - generic [ref=e67]:
      - link "Safora - Industrial Safety Management System" [ref=e69] [cursor=pointer]:
        - /url: /en/
        - img "Safora - Industrial Safety Management System" [ref=e70]
      - button "Close menu" [ref=e72] [cursor=pointer]
    - paragraph [ref=e78]: Safora is a modern Industrial Safety Management System specifically designed for organizations that prioritize operational excellence and worker safety.
    - generic [ref=e80]:
      - link "Industrial safety management system dashboard screenshot" [ref=e82] [cursor=pointer]:
        - /url: /en/
        - img "Industrial safety management system dashboard screenshot" [ref=e83]
      - link "Workplace safety incident reporting interface" [ref=e85] [cursor=pointer]:
        - /url: /en/
        - img "Workplace safety incident reporting interface" [ref=e86]
      - link "Hazard management and risk assessment tools" [ref=e88] [cursor=pointer]:
        - /url: /en/
        - img "Hazard management and risk assessment tools" [ref=e89]
      - link "Safety inspection and audit management system" [ref=e91] [cursor=pointer]:
        - /url: /en/
        - img "Safety inspection and audit management system" [ref=e92]
      - link "Emergency response and contact management features" [ref=e94] [cursor=pointer]:
        - /url: /en/
        - img "Emergency response and contact management features" [ref=e95]
      - link "Industrial safety management system dashboard screenshot" [ref=e97] [cursor=pointer]:
        - /url: /en/
        - img "Industrial safety management system dashboard screenshot" [ref=e98]
    - generic:
      - generic:
        - navigation
    - generic [ref=e99]:
      - heading [level=4] [ref=e100]: Contact Info
      - list [ref=e101]:
        - listitem [ref=e102]:
          - img [ref=e104]
          - link [ref=e108] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Rådhusesplanaden+6F,+Umeå,+Sweden
            - text: Rådhusesplanaden 6 F, 903 28, Umeå, Sweden
        - listitem [ref=e109]:
          - img [ref=e111]
          - link [ref=e115] [cursor=pointer]:
            - /url: tel:+46730445855
            - text: +46 73 044 58 55
        - listitem [ref=e116]:
          - img [ref=e118]
          - link [ref=e122] [cursor=pointer]:
            - /url: mailto:info@safora.se
            - text: info@safora.se
    - generic [ref=e123]:
      - heading [level=4] [ref=e124]: Subscribe & Follow
      - list [ref=e125]:
        - listitem [ref=e126]:
          - link [ref=e127] [cursor=pointer]:
            - /url: https://x.com/IrusriGroup
            - generic [ref=e128]: 
        - listitem [ref=e129]:
          - link [ref=e130] [cursor=pointer]:
            - /url: https://www.instagram.com/irusrigroup_ab/
            - generic [ref=e131]: 
        - listitem [ref=e132]:
          - link [ref=e133] [cursor=pointer]:
            - /url: https://web.facebook.com/profile.php?id=61559106915519
            - generic [ref=e134]: 
        - listitem [ref=e135]:
          - link [ref=e136] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irusri/
            - generic [ref=e137]: 
        - listitem [ref=e138]:
          - link [ref=e139] [cursor=pointer]:
            - /url: https://irusri.se/
            - generic [ref=e140]: 
  - main [ref=e141]:
    - generic [ref=e147]:
      - heading "Contact Us" [level=1] [ref=e149]
      - navigation [ref=e151]:
        - list [ref=e152]:
          - listitem [ref=e153]:
            - text: 
            - link "Home" [ref=e155] [cursor=pointer]:
              - /url: /en/
          - listitem [ref=e156]: Contact Us
    - generic [ref=e158]:
      - generic [ref=e161]:
        - generic [ref=e162]:
          - img "Safora safety management icon" [ref=e163]
          - text: Global Branch
        - heading "Let’s Build a Safer Workplace Together." [level=2] [ref=e164]
        - paragraph [ref=e165]: Whether you're looking to reduce incidents, strengthen compliance, or digitize your safety operations, our team is ready to help.
      - img "Safora global office locations map" [ref=e170]
    - generic [ref=e175]:
      - generic [ref=e176]:
        - img [ref=e178]
        - generic [ref=e180]:
          - heading "Our Location" [level=5] [ref=e181]
          - link "Rådhusesplanaden 6 F, 903 28, Umeå, Sweden" [ref=e182] [cursor=pointer]:
            - /url: https://www.google.com/maps/search/?api=1&query=Rådhusesplanaden+6F,+Umeå,+Sweden
      - generic [ref=e183]:
        - img [ref=e185]
        - generic [ref=e188]:
          - heading "Opening Hour" [level=5] [ref=e189]
          - paragraph [ref=e190]:
            - text: Mon - Sat 10.00 - 18.00
            - text: Friday - Closed
      - generic [ref=e191]:
        - img [ref=e193]
        - generic [ref=e195]:
          - heading "Chat to Support" [level=5] [ref=e196]
          - generic [ref=e197]:
            - link "info@safora.se" [ref=e198] [cursor=pointer]:
              - /url: mailto:info@safora.se
            - link "business@irusri.com" [ref=e199] [cursor=pointer]:
              - /url: mailto:business@irusri.com
      - generic [ref=e200]:
        - img [ref=e202]
        - generic [ref=e206]:
          - heading "Call Us" [level=5] [ref=e207]
          - link "+46 73 044 58 55" [ref=e208] [cursor=pointer]:
            - /url: tel:467304458 55
    - generic [ref=e213]:
      - heading "Get In Touch" [level=3] [ref=e214]
      - paragraph [ref=e215]: Speak with a SAFORA specialist to explore how the platform can support your organization’s safety goals.
      - generic [ref=e217]:
        - textbox "Your Name" [ref=e220]: Jane Smith
        - textbox "Email Address" [ref=e223]
        - textbox "Phone Number" [ref=e226]
        - textbox "Your Message" [ref=e229]: Hello, I am interested in learning more about your safety management platform for our warehouse operations. Please get in touch.
        - iframe [ref=e236]:
          - generic [ref=f2e2]:
            - generic [ref=f2e3]:
              - checkbox "I'm not a robot" [ref=f2e7]
              - generic [ref=f2e11]: I'm not a robot
            - generic [ref=f2e15]: reCAPTCHA
        - button "Send Message" [active] [ref=e239] [cursor=pointer]
  - contentinfo [ref=e242]:
    - generic [ref=e243]:
      - generic [ref=e246]:
        - generic [ref=e248]:
          - link "Safora" [ref=e250] [cursor=pointer]:
            - /url: /en/
            - img "Safora" [ref=e251]
          - generic [ref=e252]:
            - paragraph [ref=e253]: Safora is an Industrial Safety Management System developed by Irusri Group AB to help organizations manage workplace safety effectively.
            - generic [ref=e254]:
              - link "Privacy Policy" [ref=e255] [cursor=pointer]:
                - /url: /en/privacy-policy.html
              - text: "|"
              - link "Terms of use" [ref=e256] [cursor=pointer]:
                - /url: /en/terms-of-use.html
        - generic [ref=e258]:
          - heading "Phone Number" [level=5] [ref=e259]
          - generic [ref=e260]:
            - link "+46 73 044 58 55" [ref=e264] [cursor=pointer]:
              - /url: tel:46730445855
            - heading "Email Address" [level=5] [ref=e265]
            - link "info@safora.se" [ref=e267] [cursor=pointer]:
              - /url: mailto:info@safora.se
        - generic [ref=e269]:
          - heading "Office Address" [level=5] [ref=e270]
          - generic [ref=e272]:
            - link "Rådhusesplanaden 6 F, 903 28, Umeå, Sweden" [ref=e274] [cursor=pointer]:
              - /url: https://www.google.com/maps/search/?api=1&query=Rådhusesplanaden+6F,+Umeå,+Sweden
            - heading "Follow Us" [level=5] [ref=e275]
            - generic [ref=e277]:
              - link "X (Twitter)" [ref=e278] [cursor=pointer]:
                - /url: https://x.com/IrusriGroup
                - generic [ref=e279]: 
              - link "Instagram" [ref=e280] [cursor=pointer]:
                - /url: https://www.instagram.com/irusrigroup_ab/
                - generic [ref=e281]: 
              - link "Facebook" [ref=e282] [cursor=pointer]:
                - /url: https://web.facebook.com/profile.php?id=61559106915519
                - generic [ref=e283]: 
              - link "LinkedIn" [ref=e284] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/irusri/
                - generic [ref=e285]: 
              - link "Irusri Website" [ref=e286] [cursor=pointer]:
                - /url: https://irusri.se/
                - generic [ref=e287]: 
      - paragraph [ref=e293]:
        - text: © 2026 Safora
        - img "Heart Icon" [ref=e294]
        - link "Irusri Website" [ref=e295] [cursor=pointer]:
          - /url: https://irusri.se/
          - img "Irusri AB" [ref=e296]
  - generic [ref=e297] [cursor=pointer]:
    - img [ref=e298]
    - text: 
  - generic:
    - generic: 👋 New Message
  - button "Chat 1" [ref=e300] [cursor=pointer]:
    - img "Chat" [ref=e302]
    - img [ref=e305]
    - generic [ref=e307]: "1"
```

# Test source

```ts
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
  134 |     await expect(successIndicator).toBeVisible({ timeout: 8000 });
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
> 203 |     await expect(errorMsg.first()).toBeVisible({ timeout: 4000 });
      |                                    ^ Error: expect(locator).toBeVisible() failed
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
  235 |     await page.keyboard.press('Tab');
  236 | 
  237 |     // Fill fields via keyboard focus order
  238 |     await page.keyboard.type(VALID_DATA.name);
  239 |     await page.keyboard.press('Tab');
  240 |     await page.keyboard.type(VALID_DATA.email);
  241 |     await page.keyboard.press('Tab');
  242 |     await page.keyboard.type(VALID_DATA.company);
  243 |     await page.keyboard.press('Tab');
  244 |     await page.keyboard.type(VALID_DATA.message);
  245 | 
  246 |     // Tab to submit and activate
  247 |     await page.keyboard.press('Tab');
  248 |     await page.keyboard.press('Enter');
  249 | 
  250 |     // Either a success message OR a validation message is shown (both are valid outcomes)
  251 |     const feedback = page.locator(
  252 |       'text=/thank you|message received|we.ll be in touch|successfully|required|error/i'
  253 |     );
  254 |     await expect(feedback.first()).toBeVisible({ timeout: 8000 });
  255 |   });
  256 | 
  257 |   // ── TC-CON-09: Mobile Viewport – Form Usability ────────────────────────────
  258 |   test('TC-CON-09 | Contact form is usable on mobile viewport (375px)', async ({ browser }) => {
  259 |     const context = await browser.newContext({
  260 |       viewport: { width: 375, height: 812 },
  261 |       userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  262 |     });
  263 |     const page = await context.newPage();
  264 | 
  265 |     await gotoContactPage(page);
  266 | 
  267 |     // Form must still be visible; no horizontal scroll
  268 |     const submitBtn = page.getByRole('button', { name: /submit|send|get in touch|contact us/i });
  269 |     await expect(submitBtn).toBeVisible();
  270 | 
  271 |     // Verify no horizontal overflow (scrollWidth should equal clientWidth)
  272 |     const hasHorizontalScroll = await page.evaluate(
  273 |       () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  274 |     );
  275 |     expect(hasHorizontalScroll, 'Page must not have horizontal scroll on mobile').toBe(false);
  276 | 
  277 |     await context.close();
  278 |   });
  279 | 
  280 | });
  281 | 
```