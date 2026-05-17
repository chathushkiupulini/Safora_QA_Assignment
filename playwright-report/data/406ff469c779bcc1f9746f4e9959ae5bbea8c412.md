# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\safora_contact_form.spec.js >> Safora – Contact Us Form >> TC-CON-08 | Form is fully navigable via keyboard (Tab + Enter)
- Location: test\safora_contact_form.spec.js:231:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=/thank you|message received|we.ll be in touch|successfully|required|error/i').first()
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 8000ms
  - waiting for locator('text=/thank you|message received|we.ll be in touch|successfully|required|error/i').first()
    - waiting for" https://safora.se/en/blog.html" navigation to finish...
    - navigated to "https://safora.se/en/blog.html"

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
    - /url: /en/blog.html
  - link "SV":
    - /url: /sv/blogg.html
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
  - heading "Blog" [level=1]
  - navigation:
    - list:
      - listitem:
        - text: 
        - link "Home":
          - /url: /en/
      - listitem: Blog
  - textbox "Search"
  - button:
    - img
  - navigation:
    - list:
      - listitem: "1"
      - listitem:
        - link "2":
          - /url: "#"
      - listitem:
        - link "→":
          - /url: "#"
  - article:
    - link "What is a Safety Management System":
      - /url: /en/blog/what-is-a-safety-management-system.html
      - img "What is a Safety Management System"
    - text: By
    - link "Erik Andersson":
      - /url: /en/blog/what-is-a-safety-management-system.html
    - link "April 20, 2026":
      - /url: /en/blog/what-is-a-safety-management-system.html
    - heading "What is a Safety Management System" [level=3]:
      - link "What is a Safety Management System":
        - /url: /en/blog/what-is-a-safety-management-system.html
    - paragraph: "What is a Safety Management System? The Complete Guide to SMS Success Picture this: Your team is rushing to meet a deadline when someone takes a shortcut around a safety protocol. Minutes later, you'r..."
    - link "Continue Reading":
      - /url: /en/blog/what-is-a-safety-management-system.html
      - text: Continue Reading
      - img
      - img
  - article:
    - link "Using Safora to build a proactive safetyculture":
      - /url: /en/blog/using-safora-to-build-a-proactive-safetyculture.html
      - img "Using Safora to build a proactive safetyculture"
    - text: By
    - link "Johan Nilsson":
      - /url: /en/blog/using-safora-to-build-a-proactive-safetyculture.html
    - link "April 7, 2026":
      - /url: /en/blog/using-safora-to-build-a-proactive-safetyculture.html
    - heading "Using Safora to build a proactive safetyculture" [level=3]:
      - link "Using Safora to build a proactive safetyculture":
        - /url: /en/blog/using-safora-to-build-a-proactive-safetyculture.html
    - paragraph: "Top 5 Ways Safora Builds a Proactive Safety Culture That Actually Works Picture this: It's Monday morning, and instead of reviewing last week's incident reports, you're looking at data that shows pote..."
    - link "Continue Reading":
      - /url: /en/blog/using-safora-to-build-a-proactive-safetyculture.html
      - text: Continue Reading
      - img
      - img
  - article:
    - link "How Safora supports hazard identification and riskassessment workflows":
      - /url: /en/blog/how-safora-supports-hazard-identification-and-riskassessment-workflows.html
      - img "How Safora supports hazard identification and riskassessment workflows"
    - text: By
    - link "Johan Nilsson":
      - /url: /en/blog/how-safora-supports-hazard-identification-and-riskassessment-workflows.html
    - link "April 6, 2026":
      - /url: /en/blog/how-safora-supports-hazard-identification-and-riskassessment-workflows.html
    - heading "How Safora supports hazard identification and riskassessment workflows" [level=3]:
      - link "How Safora supports hazard identification and riskassessment workflows":
        - /url: /en/blog/how-safora-supports-hazard-identification-and-riskassessment-workflows.html
    - paragraph: Top 6 Ways Safora Revolutionizes Hazard Identification and Risk Assessment Workflows You know that sinking feeling when you're trying to track down safety data scattered across spreadsheets, emails, a...
    - link "Continue Reading":
      - /url: /en/blog/how-safora-supports-hazard-identification-and-riskassessment-workflows.html
      - text: Continue Reading
      - img
      - img
  - article:
    - link "Why Safora stands out from generic safetychecklist tools":
      - /url: /en/blog/why-safora-stands-out-from-generic-safetychecklist-tools.html
      - img "Why Safora stands out from generic safetychecklist tools"
    - text: By
    - link "Erik Andersson":
      - /url: /en/blog/why-safora-stands-out-from-generic-safetychecklist-tools.html
    - link "April 6, 2026":
      - /url: /en/blog/why-safora-stands-out-from-generic-safetychecklist-tools.html
    - heading "Why Safora stands out from generic safetychecklist tools" [level=3]:
      - link "Why Safora stands out from generic safetychecklist tools":
        - /url: /en/blog/why-safora-stands-out-from-generic-safetychecklist-tools.html
    - paragraph: Why Safora Beats Generic Safety Checklist Tools Every Time You know that sinking feeling when you're trying to use a "one-size-fits-all" safety checklist for your manufacturing plant, construction sit...
    - link "Continue Reading":
      - /url: /en/blog/why-safora-stands-out-from-generic-safetychecklist-tools.html
      - text: Continue Reading
      - img
      - img
  - article:
    - link "what is hazard":
      - /url: /en/blog/what-is-hazard.html
      - img "what is hazard"
    - text: By
    - link "Emma Karlsson":
      - /url: /en/blog/what-is-hazard.html
    - link "April 3, 2026":
      - /url: /en/blog/what-is-hazard.html
    - heading "what is hazard" [level=3]:
      - link "what is hazard":
        - /url: /en/blog/what-is-hazard.html
    - paragraph: What is a Hazard? The Complete Guide to Understanding and Managing Workplace Risks You walk into your workplace every day, but have you ever stopped to think about the invisible dangers lurking around...
    - link "Continue Reading":
      - /url: /en/blog/what-is-hazard.html
      - text: Continue Reading
      - img
      - img
  - article:
    - link "why Industrial Safety is important":
      - /url: /en/blog/why-industrial-safety-is-important.html
      - img "why Industrial Safety is important"
    - text: By
    - link "Sofia Lindström":
      - /url: /en/blog/why-industrial-safety-is-important.html
    - link "April 3, 2026":
      - /url: /en/blog/why-industrial-safety-is-important.html
    - heading "why Industrial Safety is important" [level=3]:
      - link "why Industrial Safety is important":
        - /url: /en/blog/why-industrial-safety-is-important.html
    - paragraph: "Why Industrial Safety Matters: 5 Critical Reasons You Can't Ignore Picture this: You're running a manufacturing facility, and everything's humming along perfectly. Production targets are being met, wo..."
    - link "Continue Reading":
      - /url: /en/blog/why-industrial-safety-is-important.html
      - text: Continue Reading
      - img
      - img
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
- text: 👋 New Message
- button "Chat 1":
  - img "Chat"
  - img
  - text: "1"
```

# Test source

```ts
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
> 254 |     await expect(feedback.first()).toBeVisible({ timeout: 8000 });
      |                                    ^ Error: expect(locator).toBeVisible() failed
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