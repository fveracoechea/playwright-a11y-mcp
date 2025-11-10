# Accessibility Audit Report

## 1. Executive Summary

- URL:
  https://prodtest3.prounlimited.com/wand/app/manager/index.html#/manager/engagement/sow/7502759/details
- Audit Timestamp (UTC): 2025-11-10T20:54:34.637Z
- Accessibility Score: 70.00
- Total Violations: 4
- Impact Distribution: Critical 2 (50%), Serious 2 (50%), Moderate 0 (0%), Minor 0 (0%)
- Total Affected Nodes: 6
- High-Level Themes: Missing text alternatives and accessible names, insufficient color
  contrast, missing language declaration.

## 2. Score & Issue Overview

| Accessibility Score | Total Violations | Critical | Serious | Moderate | Minor | Total Affected Nodes |
| ------------------- | ---------------- | -------- | ------- | -------- | ----- | -------------------- |
| 70.00               | 4                | 2        | 2       | 0        | 0     | 6                    |

## 3. Detailed Violations

### Critical Violation: image-alt

- Help: Images must have alternative text
- Description: Ensure <img> elements have alternative text or a role of none or presentation
- Impact: critical
- Affected Nodes: 1

| #   | Selector | HTML Snippet                                                | Failure Summary                                                                                                                                                                                                                                                                                                                                               | Screenshot                                |
| --- | -------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | #logo    | `<img id="logo" src="/media/images/logo-magnit-login.svg">` | Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's default semantics were not overridden with role="none" or role="presentation" | 3db1bad2-2aed-4954-b8e5-ebd455745bd4.jpeg |

Why This Matters: Without alternative text, screen reader users cannot perceive the purpose or
identity conveyed by the logo imagery, creating an information gap and violating WCAG 1.1.1
(Non-text Content).

How to Fix:

- Add a concise `alt` attribute (e.g., `alt="Company logo"`).
- If decorative only, set `alt=""` or `role="presentation"`.
- Ensure any dynamic/logo replacement code enforces alt presence.
- Centralize image component logic to require alt text.

Validation Checklist:

- [ ] Each `<img>` has meaningful alt or empty `alt=""` when decorative.
- [ ] No redundant wording like "image of".
- [ ] Logo conveys brand or is marked decorative intentionally.
- [ ] Screen reader test confirms correct announcement.

### Critical Violation: select-name

- Help: Select element must have an accessible name
- Description: Ensure select element has an accessible name
- Impact: critical
- Affected Nodes: 1

| #   | Selector  | HTML Snippet                                                                                                  | Failure Summary                                                                                                                                                                                                                                                                                                                                                                                                      | Screenshot                                |
| --- | --------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | #language | `<select id="language" class="language-select mid-gray" onchange="goToLanguage(this)" style="width: 155px;">` | Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's default semantics were not overridden with role="none" or role="presentation" | a540a4ad-8125-4704-bb0f-962dd29576ea.jpeg |

Why This Matters: Form controls without accessible names are announced generically (e.g.,
"combo box") by assistive technologies, forcing users to guess purpose and increasing error
risk (WCAG 4.1.2 Name, Role, Value).

How to Fix:

- Provide a visible `<label for="language">Language</label>`.
- If a visible label is not feasible, add `aria-label="Language selection"`.
- For grouped context text near the select, reference via `aria-labelledby` pointing to
  existing visible text.
- Ensure styling does not visually hide the label without alternative.

Validation Checklist:

- [ ] Select has a programmatic name (label, `aria-label`, or `aria-labelledby`).
- [ ] No duplicate or conflicting naming sources.
- [ ] Name announced correctly in screen reader (NVDA/VoiceOver).
- [ ] Focus outline preserved and visible.

### Serious Violation: color-contrast

- Help: Elements must meet minimum color contrast ratio thresholds
- Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA
  minimum contrast ratio thresholds
- Impact: serious
- Affected Nodes: 3

| #   | Selector     | HTML Snippet                                                                                                  | Failure Summary                                                                                                                                                                                                  | Screenshot                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | #language    | `<select id="language" class="language-select mid-gray" onchange="goToLanguage(this)" style="width: 155px;">` | Fix any of the following: Element has insufficient color contrast of 4.49 (foreground color: #637a89, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1 | 5cd1d114-f417-4ea9-8ab7-0ea287b0b9f8.jpeg |
| 2   | #user > span | `<span class="mid-gray">Please log in to your account below</span>`                                           | Fix any of the following: Element has insufficient color contrast of 4.49 (foreground color: #637a89, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1 | 3f6fa8d7-8c10-4476-840c-fd565bdd49aa.jpeg |
| 3   | #footer2     | `<footer id="footer2">`                                                                                       | Fix any of the following: Element has insufficient color contrast of 2.9 (foreground color: #7f94ae, background color: #f6f7f9, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1  | 5714cff7-d299-4ce6-b911-595ad898058f.jpeg |

Why This Matters: Insufficient color contrast reduces legibility for users with low vision or
color vision deficiencies. Text acting as instructional or navigational anchors (form prompt,
footer, selection control context) must meet 4.5:1 to ensure perceivability (WCAG 1.4.3
Contrast Minimum).

How to Fix:

- Darken foreground grays (#637a89 → #566976 or #516473) OR lighten background surfaces.
- Increase font weight only if color alone cannot achieve ratio (still must meet 4.5:1).
- Validate all interactive/focus states maintain required ratio (hover/focus styles).
- Update design tokens rather than inline styles for consistency.

Validation Checklist:

- [ ] Revised color tokens meet ≥4.5:1 (normal text at 12px).
- [ ] Hover/focus states meet ratio.
- [ ] No regressions in adjacent UI components.
- [ ] Palette changes documented and propagated.

Suggested Color Adjustments:

| Role               | Current            | Proposed           | Contrast Rationale                                   |
| ------------------ | ------------------ | ------------------ | ---------------------------------------------------- |
| Standard Body Text | #637a89 on #FFFFFF | #566976 on #FFFFFF | Darker tone achieves ≥4.5:1                          |
| Footer Text        | #7f94ae on #F6F7F9 | #566976 on #F6F7F9 | Darkening foreground increases ratio above threshold |
| Prompt / Help Text | #637a89 on #FFFFFF | #516473 on #FFFFFF | Slight extra darkening for comfortable margin        |

### Serious Violation: html-has-lang

- Help: <html> element must have a lang attribute
- Description: Ensure every HTML document has a lang attribute
- Impact: serious
- Affected Nodes: 1

| #   | Selector | HTML Snippet | Failure Summary                                                             | Screenshot                                |
| --- | -------- | ------------ | --------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | html     | `<html>`     | Fix any of the following: The <html> element does not have a lang attribute | 11f8c06c-2fd7-4ef4-b540-c8a231659b32.jpeg |

Why This Matters: The primary language enables screen readers to apply correct pronunciation
rules and braille translation. Missing language metadata can lead to mispronunciation,
comprehension issues, and violates WCAG 3.1.1 Language of Page.

How to Fix:

- Add `lang="en"` (or appropriate locale) to `<html>`.
- If dynamic localization exists, ensure server-side or client-side sets `lang` reliably.
- Avoid empty or incorrect language codes.

Validation Checklist:

- [ ] `<html lang>` present and valid BCP 47 code.
- [ ] Language switch updates `lang` attribute if localization active.
- [ ] Automated test checks for presence of `lang` on root element.

## 4. Color Contrast Analysis

Contrast Violations: 3 elements (body/prompt text & footer text) show insufficient
foreground/background pairings.

Pattern Grouping:

- Prompt/Help Text (#637a89 on #FFFFFF)
- Footer Text (#7f94ae on #F6F7F9)
- Select Control Text (#637a89 on #FFFFFF)

No link, inline code, syntax token, or navigation anchor contrast issues detected.

Suggested Palette Adjustments (see table under color-contrast violation).

## 5. Root Cause Analysis

| Area         | Issue                         | Cause                                 | Recommended Action                                     |
| ------------ | ----------------------------- | ------------------------------------- | ------------------------------------------------------ |
| Images       | Missing alt text              | Absent enforcement in image component | Enforce alt requirement via shared wrapper & lint rule |
| Form Control | No accessible name on select  | Label omitted for design layout       | Add visible label or aria-label; refactor markup       |
| Global HTML  | Missing language declaration  | Omitted base template attribute       | Add `lang` to root template; test on build             |
| Text Styling | Low contrast body/footer text | Palette gray too light at small size  | Adjust foreground tokens; verify across states         |

## 6. Prioritized Remediation Plan

| Priority | Task                                                              | Impact Addressed              | Effort | Notes                      |
| -------- | ----------------------------------------------------------------- | ----------------------------- | ------ | -------------------------- |
| High     | Add descriptive or empty alt to logo image                        | image-alt                     | Low    | Single element quick patch |
| High     | Provide accessible name for language select (label or aria-label) | select-name                   | Low    | Minimal DOM addition       |
| Medium   | Add `lang` attribute to `<html>`                                  | html-has-lang                 | Low    | Template update            |
| Medium   | Update grayscale text tokens for contrast                         | color-contrast                | Low    | Token-level change         |
| Low      | Implement lint rule for required alt & labels                     | image-alt, select-name        | Medium | Prevent regressions        |
| Low      | Document language/contrast standards in dev docs                  | html-has-lang, color-contrast | Low    | Educate team               |

## 7. Testing & Verification Plan

1. Add `alt` attribute and rerun audit (expect image-alt removed).
2. Add label or aria-label for select; verify naming via screen reader.
3. Add `lang` attribute; inspect DOM and run locale-specific SR test.
4. Adjust color tokens; verify 4.5:1+ in contrast checker for all states.
5. Rerun `a11y_audit_page` and `a11y_get_summary`; confirm score improvement and fewer
   violations.
6. Implement lint rules, run CI to ensure enforcement.
7. Perform manual NVDA/Chrome test focusing on form control, language start announcement, and
   contrast readability.

## 8. Developer Implementation Checklist

- [ ] Add appropriate `alt` or `alt=""` to `#logo` image.
- [ ] Add visible `<label>` or `aria-label` for `#language` select.
- [ ] Insert valid `lang` attribute on `<html>` root.
- [ ] Update grayscale text color tokens for sufficient contrast.
- [ ] Add lint/ESLint rule enforcing `<img>` alt attribute.
- [ ] Add automated check for form controls with accessible names.
- [ ] Re-run accessibility audit and archive updated results.

## 9. Appendix

References:

- WCAG 2.1 Success Criterion 1.1.1 (Non-text Content)
- WCAG 2.1 Success Criterion 1.4.3 (Contrast (Minimum))
- WCAG 2.1 Success Criterion 3.1.1 (Language of Page)
- WCAG 2.1 / ARIA: 4.1.2 (Name, Role, Value) for accessible form control naming
- WAI-ARIA Authoring Practices Guide
- Axe Core Documentation (image-alt, select-name, color-contrast, html-has-lang)

## 10. Final Notes

Prioritize remediation of missing alt text and accessible form control naming to remove
critical barriers. Immediately follow with adding `lang` to ensure correct linguistic
interpretation, then address color contrast tokens for legibility improvements. After
implementing high and medium priority fixes, re-run audits to validate score increase and
absence of regressions; schedule follow-up full scan post-release.

![screenshot](public/screenshots/9396c3bc-a4c5-4b4b-b97a-9239a44b4cd3.jpeg)
