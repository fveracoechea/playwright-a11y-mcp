# Accessibility Audit Report

## 1. Executive Summary

- URL:
  https://prodtest3.prounlimited.com/wand/app/manager/index.html#/manager/engagement/sow/7502759/details
- Audit Timestamp (UTC): 2025-11-10T20:41:41.033Z
- Accessibility Score: 80.00
- Total Violations: 3
- Impact Distribution: Critical 1 (33%), Serious 2 (67%), Moderate 0 (0%), Minor 0 (0%)
- Total Affected Nodes: 11
- High-Level Themes: Missing alternative text for imagery, improper ARIA attribute usage
  reducing semantic clarity, and insufficient color contrast for table header text.

## 2. Score & Issue Overview

| Accessibility Score | Total Violations | Critical | Serious | Moderate | Minor | Total Affected Nodes |
| ------------------- | ---------------- | -------- | ------- | -------- | ----- | -------------------- |
| 80.00               | 3                | 1        | 2       | 0        | 0     | 11                   |

## 3. Detailed Violations

### Serious Violation: aria-prohibited-attr

- Help: Elements must only use permitted ARIA attributes
- Description: Ensure ARIA attributes are not prohibited for an element's role
- Impact: serious
- Affected Nodes: 7

| #   | Selector                                                                                                                                                       | HTML Snippet                                                                                                                                                                                                                                                | Failure Summary                                                                                       | Screenshot                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | .table-row:nth-child(1) > .name-cell > .name-with-icon[_ngcontent-ng-c126886621=""] > .download-icon-link[data-was="btn_download_file"][aria-label="Download"] | `<a _ngcontent-ng-c126886621="" data-was="btn_download_file" aria-label="Download" title="Download" class="download-icon-link">`                                                                                                                            | Fix all of the following: aria-label attribute cannot be used on a a with no valid role attribute.    | 81099a7b-1e13-4c3d-afdf-6e1ded588100.jpeg |
| 2   | .table-row:nth-child(2) > .name-cell > .name-with-icon[_ngcontent-ng-c126886621=""] > .download-icon-link[data-was="btn_download_file"][aria-label="Download"] | `<a _ngcontent-ng-c126886621="" data-was="btn_download_file" aria-label="Download" title="Download" class="download-icon-link">`                                                                                                                            | Fix all of the following: aria-label attribute cannot be used on a a with no valid role attribute.    | f11c36df-90b3-4f5e-a62b-0d7dd715fcd3.jpeg |
| 3   | span[aria-label="Estimated Budget Info"]                                                                                                                       | `<span _ngcontent-ng-c432517250="" mat-icon-button="" mattooltipclass="multi-line-tooltip" aria-label="Estimated Budget Info" tabindex="0" class="mat-tooltip-trigger" aria-describedby="cdk-describedby-message-ng-1-2" cdk-describedby-host="ng-1">`      | Fix all of the following: aria-label attribute cannot be used on a span with no valid role attribute. | af3edb7a-d5a2-459c-a419-0b740720fa53.jpeg |
| 4   | span[aria-label="Budget Information"]                                                                                                                          | `<span _ngcontent-ng-c432517250="" mat-icon-button="" mattooltipclass="multi-line-tooltip" aria-label="Budget Information" tabindex="0" class="mat-tooltip-trigger" aria-describedby="cdk-describedby-message-ng-1-3" cdk-describedby-host="ng-1">`         | Fix all of the following: aria-label attribute cannot be used on a span with no valid role attribute. | 51c20058-ca09-4eee-a16b-62f71b0ede00.jpeg |
| 5   | span[aria-label="Project Budget Information"]                                                                                                                  | `<span _ngcontent-ng-c432517250="" mat-icon-button="" mattooltipclass="multi-line-tooltip" aria-label="Project Budget Information" tabindex="0" class="mat-tooltip-trigger" aria-describedby="cdk-describedby-message-ng-1-4" cdk-describedby-host="ng-1">` | Fix all of the following: aria-label attribute cannot be used on a span with no valid role attribute. | 656aaed6-7a87-4b99-93b7-0bde9848f968.jpeg |
| 6   | span[aria-label="Invoiced & Committed Info"]                                                                                                                   | `<span _ngcontent-ng-c432517250="" mat-icon-button="" mattooltipclass="multi-line-tooltip" aria-label="Invoiced & Committed Info" tabindex="0" class="mat-tooltip-trigger" aria-describedby="cdk-describedby-message-ng-1-5" cdk-describedby-host="ng-1">`  | Fix all of the following: aria-label attribute cannot be used on a span with no valid role attribute. | 9d8a9328-128e-4378-bc17-9d66b7aee968.jpeg |
| 7   | span[aria-label="Available Funds Info"]                                                                                                                        | `<span _ngcontent-ng-c432517250="" mat-icon-button="" mattooltipclass="multi-line-tooltip" aria-label="Available Funds Info" tabindex="0" class="mat-tooltip-trigger" aria-describedby="cdk-describedby-message-ng-1-6" cdk-describedby-host="ng-1">`       | Fix all of the following: aria-label attribute cannot be used on a span with no valid role attribute. | 40a2ac72-5a71-4afa-8c99-4f3669f3fdaa.jpeg |

Why This Matters: Misapplied ARIA attributes can create conflicting or misleading semantics for
assistive technologies, causing incorrect announcements and user confusion. Over-specifying
labels on elements without appropriate roles undermines navigability and increases cognitive
load for screen reader users.

How to Fix:

- Remove `aria-label` from elements that are not interactive or do not expose a semantic role.
- Where a control is intended (e.g., icon button), use a semantic element (`button`) or add
  appropriate role plus keyboard support.
- For purely decorative or tooltip-triggering spans, rely on `aria-describedby` pointing to
  visible text or ensure the tooltip component supplies correct semantics.
- Replace anchor tags without `href` acting as buttons with `<button>` elements (and move label
  text or provide `aria-label` only when the button has no visible text).

Validation Checklist:

- [ ] Each interactive control uses a semantic element (`button`, `a[href]`).
- [ ] No `aria-label` present on generic spans lacking a role.
- [ ] Tooltip triggers expose discernible name via `aria-describedby`.
- [ ] No anchor elements without `href` used as buttons.

### Serious Violation: color-contrast

- Help: Elements must meet minimum color contrast ratio thresholds
- Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA
  minimum contrast ratio thresholds
- Impact: serious
- Affected Nodes: 3

| #   | Selector        | HTML Snippet                                                | Failure Summary                                                                                                                                                                                                  | Screenshot                                |
| --- | --------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | .th-name        | `<th _ngcontent-ng-c126886621="" class="th-name">Name</th>` | Fix any of the following: Element has insufficient color contrast of 4.49 (foreground color: #637a89, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1 | 493e1e6e-5c2c-450a-b8e9-3c4da61b8f1b.jpeg |
| 2   | th:nth-child(2) | `<th _ngcontent-ng-c126886621="">Type</th>`                 | Fix any of the following: Element has insufficient color contrast of 4.49 (foreground color: #637a89, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1 | 06a1cd25-51d6-44a6-9c15-9f81e0201fd3.jpeg |
| 3   | th:nth-child(3) | `<th _ngcontent-ng-c126886621="">Upload Date</th>`          | Fix any of the following: Element has insufficient color contrast of 4.49 (foreground color: #637a89, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1 | ebf8757b-c0e9-4ed4-8fa0-664eb2bfa2ff.jpeg |

Why This Matters: Low contrast text increases reading difficulty, especially for users with low
vision, color vision deficiencies, or using lower quality displays. Table headers are
navigational anchors; insufficient contrast slows comprehension and increases error rates.

How to Fix:

- Darken the foreground color from #637a89 toward a value ≥ #566976 (example) to surpass 4.5:1,
  or
- Increase font weight to semibold (if permitted) and slightly darken to ensure ≥4.5:1, or
- Introduce a subtle tinted header background (#f4f6f8) and darken text to #516473 to widen the
  ratio.
- Test revised palette with a contrast checker across normal and hover states.

Validation Checklist:

- [ ] Adjusted header text color >= 4.5:1 on white (or new background).
- [ ] All header states (default, hover, focus) maintain required ratio.
- [ ] No regression for adjacent interactive elements.
- [ ] Design tokens updated (not ad-hoc overrides).

Suggested Color Adjustments:

| Role                      | Current              | Proposed           | Contrast Rationale                              |
| ------------------------- | -------------------- | ------------------ | ----------------------------------------------- |
| Table Header Text         | #637a89              | #566976            | Darker tone exceeds 4.5:1 on #FFFFFF            |
| Table Header (alt option) | (#637a89 on #FFFFFF) | #516473 on #F4F6F8 | Combined shift increases luminance difference   |
| Focus State Text          | #637a89              | #445867            | Provides stronger differentiation + meets ratio |

### Critical Violation: image-alt

- Help: Images must have alternative text
- Description: Ensure <img> elements have alternative text or a role of none or presentation
- Impact: critical
- Affected Nodes: 1

| #   | Selector       | HTML Snippet                                                                                           | Failure Summary                                                                                                                                                                                                                                                                                                                                               | Screenshot                                |
| --- | -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1   | .profile-photo | `<img _ngcontent-ng-c2553650765="" class="profile-photo" src="/media/images/client/profile_gray.png">` | Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute Element's default semantics were not overridden with role="none" or role="presentation" | d5fb3d48-9c16-4722-810a-5cd52186ece6.jpeg |

Why This Matters: Without alternative text, screen reader users receive no meaningful
information or context about imagery that could convey identity, status, or function. This
creates an information gap and violates WCAG 1.1.1.

How to Fix:

- Add a concise `alt` attribute describing the image’s purpose (e.g., “Client profile
  placeholder” if meaningful).
- If purely decorative, add `alt=""` or `role="presentation"` to remove it from the
  accessibility tree.
- Ensure dynamic replacements also set appropriate alt text.
- Centralize image component logic to enforce alt requirements.

Validation Checklist:

- [ ] All `<img>` elements have `alt` or explicit `role="presentation"`.
- [ ] Decorative images use empty `alt=""`.
- [ ] No redundant phrases like “image of”.
- [ ] Re-checked with screen reader (JAWS/NVDA or VoiceOver) for correct announcement.

## 4. Color Contrast Analysis

Contrast Violations: 3 table header elements share identical styling (repeated pattern: header
text).  
Pattern Grouping:

- Table Header Text (Name, Type, Upload Date) — same color pair (#637a89 on #FFFFFF).  
  No link, inline code, syntax token, or navigation anchor contrast issues reported in this
  scan.

Suggested Palette Adjustments (see earlier table in color-contrast violation section).

## 5. Root Cause Analysis

| Area                    | Issue                                                      | Cause                                               | Recommended Action                                                     |
| ----------------------- | ---------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| Icon / Tooltip Triggers | Misapplied `aria-label` on non-semantic spans              | Reliance on generic spans with tooltip directives   | Replace with semantic buttons or add roles and proper naming strategy  |
| File Action Links       | Anchor elements acting as buttons without proper semantics | Using `<a>` without `href` for actions              | Convert to `<button>` components with accessible name                  |
| Table Headers           | Low contrast text                                          | Brand palette color too light at 12px normal weight | Adjust token for header text color or increase weight with color tweak |
| Profile Image           | Missing alt text                                           | Image component lacks alt enforcement               | Enforce alt attribute via shared image wrapper                         |

## 6. Prioritized Remediation Plan

| Priority | Task                                                                | Impact Addressed     | Effort | Notes                          |
| -------- | ------------------------------------------------------------------- | -------------------- | ------ | ------------------------------ |
| High     | Add alt (or `alt=""`) to profile image                              | image-alt (critical) | Low    | Single element; quick fix      |
| High     | Refactor anchor-as-button to real `<button>`                        | aria-prohibited-attr | Medium | Update component + styling     |
| High     | Remove/adjust invalid `aria-label` on spans & supply semantic roles | aria-prohibited-attr | Medium | Check tooltip directive API    |
| Medium   | Adjust table header text color token                                | color-contrast       | Low    | Token change & regression test |
| Medium   | Create lint rule / CI check for missing alt                         | image-alt            | Medium | Prevent regressions            |
| Low      | Document ARIA usage guidelines in dev docs                          | aria-prohibited-attr | Low    | Reinforces best practices      |

## 7. Testing & Verification Plan

1. Implement alt text changes and rerun audit to confirm removal of image-alt violation.
2. Replace non-semantic interactive spans/anchors; verify keyboard focus order and screen
   reader labels.
3. Update color token; confirm 4.5:1+ ratio using contrast checker (normal + focus states).
4. Rerun `a11y_audit_page` and `a11y_get_summary`; expect score increase and reduced violation
   count.
5. Conduct manual screen reader test (NVDA/Chrome) focusing on tooltips and header navigation.
6. Add automated lint / unit checks for image and button components.
7. Perform regression scan across related pages sharing components.

## 8. Developer Implementation Checklist

- [ ] Add descriptive or empty alt to `.profile-photo` image.
- [ ] Refactor anchor elements without `href` to `<button>`.
- [ ] Remove invalid `aria-label` attributes from generic spans or convert to semantic
      elements.
- [ ] Introduce/update design token for table header text color to meet contrast.
- [ ] Add component-level assertion or ESLint rule for required `alt` usage.
- [ ] Validate tooltip triggers expose accessible names via `aria-describedby`.
- [ ] Re-run automated audit and archive results.

## 9. Appendix

References:

- WCAG 2.1 Success Criterion 1.1.1 (Non-text Content)
- WCAG 2.1 Success Criterion 1.4.3 (Contrast (Minimum))
- WAI-ARIA Authoring Practices Guide
- Axe Core Documentation (aria-prohibited-attr, color-contrast, image-alt)

## 10. Final Notes

Addressing the critical image alt issue and normalizing semantic interactive elements will
yield the largest immediate accessibility gains. Follow with the color token adjustment to
eliminate all current contrast violations. Re-test after each batch of fixes; schedule a
follow-up full audit once remediation tasks marked complete to confirm improved score and
absence of regressions.

![screenshot](public/screenshots/9396c3bc-a4c5-4b4b-b97a-9239a44b4cd3.jpeg)
