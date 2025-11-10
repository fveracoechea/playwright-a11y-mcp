# Accessibility Audit Report

Title: WCAG 2.1 A/AA Accessibility Audit  
URL: https://prodtest3.prounlimited.com/wand/app/manager/index.html#/manager/request-create/sow-request?reqId=36537467  
Scan
Timestamp (UTC): 2025-11-10T19:41:13.398Z  
Report Generated (UTC): 2025-11-10T19:41:13.398Z  
Tools: a11y_audit_page, a11y_get_summary (Playwright + Axe)  
Axe Tags: wcag2a, wcag2aa, wcag21a, wcag21aa  
Browser Context: Chromium (Desktop)  
Total Violations: 4 (Critical 2 / Serious 2 / Moderate 0 / Minor 0)  
Total Affected Nodes: 6  
Accessibility Score: 70.00

## 1. Executive Summary

The audited page scored 70.00 with 4 total violations affecting 6 nodes. Critical issues relate
to missing alternative text and missing accessible name on a form control; serious issues
include insufficient color contrast and a missing document language declaration. Thematically,
problems center on foundational semantics (language attribute, alt text), perceivability
(contrast), and form accessibility (labeling). Addressing these will improve screen reader
comprehension, text readability, and keyboard/form usability. No moderate or minor issues were
detected, indicating concentrated high-impact gaps suitable for focused remediation.

Impact Distribution (by violations):

- Critical: 2 (50%)
- Serious: 2 (50%)
- Moderate: 0 (0%)
- Minor: 0 (0%)

## 2. Score & Issue Overview

| Metric               | Value |
| -------------------- | ----- |
| Accessibility Score  | 70.00 |
| Total Violations     | 4     |
| Critical             | 2     |
| Serious              | 2     |
| Moderate             | 0     |
| Minor                | 0     |
| Total Affected Nodes | 6     |

## 3. Detailed Violations

### Critical Violation: image-alt

- Help: Images must have alternative text
- Description: Ensure <img> elements have alternative text or a role of none or presentation
- Impact: critical
- Affected Nodes: 1

| #   | Selector | HTML Snippet                                                | Failure Summary                                                   | Screenshot                                |
| --- | -------- | ----------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| 1   | #logo    | `<img id="logo" src="/media/images/logo-magnit-login.svg">` | Element lacks alt/aria labeling; no title or role="presentation". | d675d86d-3a15-493b-a415-1e90e21957b8.jpeg |

Why This Matters: Without alt text, assistive technologies cannot convey the image’s purpose,
harming branding recognition and navigation context for non-visual users.  
How to Fix: Add descriptive `alt="Magnit logo"` (if decorative, use `alt=""` and
`role="presentation"`). Ensure branding imagery distinguishes functional vs decorative use.  
Validation Checklist:

- [ ] Each meaningful img has non-empty alt
- [ ] Decorative images use empty alt + no redundant text
- [ ] No duplicated textual content in alt and adjacent text
- [ ] No misuse of title for primary alternative text

### Critical Violation: select-name

- Help: Select element must have an accessible name
- Description: Ensure select element has an accessible name
- Impact: critical
- Affected Nodes: 1

| #   | Selector  | HTML Snippet                                                                                                  | Failure Summary                                                                     | Screenshot                                |
| --- | --------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | #language | `<select id="language" class="language-select mid-gray" onchange="goToLanguage(this)" style="width: 155px;">` | Missing implicit/explicit label; no aria-label/aria-labelledby/title/role override. | 9b04bd59-5a34-4786-9f23-02d5a753625f.jpeg |

Why This Matters: A form control without an accessible name is announced generically (“combo
box”) leaving users guessing its purpose; this impedes language selection and workflow
comprehension.  
How to Fix: Add a visible `<label for="language">Language</label>` or apply
`aria-label="Language selection"` if a visual label cannot be added. Prefer explicit label over
aria for clarity.  
Validation Checklist:

- [ ] Each form control has visible label or programmatic name
- [ ] Label text succinctly reflects control purpose
- [ ] `for` attribute matches control `id`
- [ ] No reliance solely on placeholder for naming

### Serious Violation: color-contrast

- Help: Elements must meet minimum color contrast ratio thresholds
- Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA
  minimum contrast ratio thresholds
- Impact: serious
- Affected Nodes: 3

| #   | Selector     | HTML Snippet                                                                                                  | Failure Summary                                                | Screenshot                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| 1   | #language    | `<select id="language" class="language-select mid-gray" onchange="goToLanguage(this)" style="width: 155px;">` | Contrast 4.49 vs required 4.5 (foreground #637a89 on #ffffff). | a8cf05e1-0636-4939-83e3-abd3576f0297.jpeg |
| 2   | #user > span | `<span class="mid-gray">Please log in to your account below</span>`                                           | Contrast 4.49 vs required 4.5 (#637a89 on #ffffff).            | e03703ac-6625-4017-9194-90182349b290.jpeg |
| 3   | #footer2     | `<footer id="footer2">`                                                                                       | Contrast 2.9 vs required 4.5 (#7f94ae on #f6f7f9).             | dcab0ab1-cc39-4e30-82e2-95a7493762c0.jpeg |

Why This Matters: Insufficient contrast reduces legibility for users with low vision, color
vision deficiencies, or on low-quality displays—impacting comprehension of instructions and
navigation.  
How to Fix: Darken foreground colors (#637a89 → ~#526a7b) and adjust footer text (#7f94ae →
~#4f6780) or lighten backgrounds. Verify recalculated ratios ≥4.5:1 for normal text.  
Validation Checklist:

- [ ] All normal text ≥4.5:1 contrast
- [ ] Footer small text re-tested after color change
- [ ] No introduced contrast regressions elsewhere
- [ ] Brand palette adjustments documented

### Serious Violation: html-has-lang

- Help: <html> element must have a lang attribute
- Description: Ensure every HTML document has a lang attribute
- Impact: serious
- Affected Nodes: 1

| #   | Selector | HTML Snippet | Failure Summary                           | Screenshot                                |
| --- | -------- | ------------ | ----------------------------------------- | ----------------------------------------- |
| 1   | html     | `<html>`     | Missing `lang` attribute on root element. | 9f3362ec-0541-438b-9d6f-fb0da9d77686.jpeg |

Why This Matters: Screen readers apply incorrect pronunciation, voice selection, and
hyphenation without a declared document language, degrading comprehension for multilingual
users.  
How to Fix: Add `<html lang="en">` (or accurate locale like `en-US`). Ensure dynamic language
changes update `lang`.  
Validation Checklist:

- [ ] Root `<html>` has correct primary language
- [ ] No conflicting meta language declarations
- [ ] Language changes propagate for localized views
- [ ] QA verification in at least one screen reader

## 4. Detailed Violations Summary

(Refer to section 3 for full node tables; all critical and serious nodes are retained.)

## 5. Explanation Blocks

The “Why This Matters”, “How to Fix”, and “Validation Checklist” have been embedded per
violation to avoid duplication and to provide targeted guidance. Common remediation themes:
semantic labeling (alt, lang, form labels), visual contrast adjustments, and ensuring assistive
technology discoverability.

## 6. Color Contrast Analysis

Affected Text Patterns:

- General body/instructional text: 2 nodes (#language control text, #user > span)
- Footer informational text: 1 node (#footer2) No link, inline code, or syntax highlight
  selectors identified among violations.

Candidate Palette Adjustments: | Role | Current | Proposed | Contrast Rationale | | ---- |
------- | -------- | ------------------ | | Body instructional text | #637a89 on #ffffff |
#526a7b | Raises ratio above 4.5 while preserving brand hue. | | Select control text | #637a89
on #ffffff | #526a7b | Aligns with body text for consistency & compliance. | | Footer small
text | #7f94ae on #f6f7f9 | #4f6780 | Increases contrast from 2.9 to >4.5:1 for small text. |

## 7. Root Cause Analysis

| Area        | Issue               | Cause                                   | Recommended Action                                      |
| ----------- | ------------------- | --------------------------------------- | ------------------------------------------------------- |
| Images      | Missing alt text    | Omitted attribute in template           | Establish lint rule / component contract requiring alt. |
| Forms       | Unlabeled select    | Lack of explicit label binding          | Add `<label>` and enforce in design system.             |
| Document    | No lang attribute   | HTML scaffold oversight                 | Update base layout; add automated CI check.             |
| Text Styles | Low contrast colors | Palette chosen without contrast testing | Integrate contrast tokens and design review gate.       |

## 8. Prioritized Remediation Plan

| Priority | Task                                   | Impact Addressed                 | Effort | Notes                                     |
| -------- | -------------------------------------- | -------------------------------- | ------ | ----------------------------------------- |
| High     | Add alt to logo (`alt="Magnit"`)       | image-alt (critical)             | Low    | Simple template edit.                     |
| High     | Add label for language select          | select-name (critical)           | Low    | Minimal markup change.                    |
| High     | Add `lang="en"` to root html           | html-has-lang (serious)          | Low    | Single attribute.                         |
| Medium   | Adjust text color tokens for body      | color-contrast (serious)         | Medium | Palette + regression tests.               |
| Medium   | Adjust footer text color or background | color-contrast (serious)         | Medium | May require design approval.              |
| Low      | Add automated a11y linting in CI       | All categories future prevention | Medium | Introduce axe-core script / ESLint rules. |

## 9. Suggested Color Adjustments

(Provided because color-contrast violation exists.) | Element | Current Pair | Proposed Pair |
Estimated Contrast Gain | | ------- | ------------ | ------------- | ----------------------- |
| Body & Select Text | #637a89 / #ffffff | #526a7b / #ffffff | From 4.49 → ~5.3 | | Footer Text
| #7f94ae / #f6f7f9 | #4f6780 / #f6f7f9 | From 2.9 → ~4.8 |

## 10. Testing & Verification Plan

1. Implement semantic fixes (alt, label, lang) in staging branch.
2. Adjust color variables/tokens; rebuild theme.
3. Run automated axe scan locally (same tags) to confirm zero critical/serious.
4. Manually test in NVDA and VoiceOver: image announced, select labeled, language pronunciation
   OK.
5. Verify contrast with tooling (e.g. axe DevTools or manual contrast checker).
6. Regression test visual branding acceptance with design sign-off.
7. Add CI script to fail on reintroduced listed violations.
8. Schedule re-audit post-deployment and log results in accessibility tracker.

## 12. Developer Implementation Checklist

| Item                                   | Status  |
| -------------------------------------- | ------- |
| Add alt attribute to logo image        | Pending |
| Add explicit label for language select | Pending |
| Add lang attribute to root html        | Pending |
| Update color tokens for body text      | Pending |
| Update footer text color/background    | Pending |
| Integrate automated axe scan into CI   | Pending |
| Screen reader verification session     | Pending |
| Post-deployment re-audit               | Pending |

## 13. Appendix

References:

- WCAG 2.1 SC 1.4.3 Contrast (Minimum)
- WCAG 2.1 SC 3.1.1 Language of Page
- WCAG 2.1 SC 1.1.1 Non-text Content
- WCAG 2.1 SC 1.3.1 Info and Relationships (form labeling relevance)
- ARIA Authoring Practices Guide (form controls, labeling)
- Axe Core Documentation (rule: image-alt, color-contrast, html-has-lang, select-name)

## 14. Final Notes

Fast wins (alt text, lang attribute, select label) will immediately eliminate all critical
violations and raise the score substantially. Contrast adjustments will finalize perceivability
improvements. Re-test after implementing all High and Medium priority tasks; trigger re-audit
if branding palette changes or new form components are introduced. Focus on embedding
preventive checks (CI axe scan + design contrast review) for sustained compliance.
