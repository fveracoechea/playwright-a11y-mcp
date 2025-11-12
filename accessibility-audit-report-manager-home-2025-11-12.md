# Accessibility Audit Report

> URL: https://prodtest3.prounlimited.com/wand/app/manager/index.html#/manager/home  
> Date (UTC): 2025-11-12  
> Standard: WCAG 2.1 AA  
> Browser: Chromium Desktop  
> Total Violations: 6  
> Total Affected Nodes: 46  
> Score: 60.00

## 1. Executive Summary

- Accessibility Score: 60.00
- Total Violations: 6 (Critical: 2, Serious: 4, Moderate: 0, Minor: 0)
- Impact Distribution: Critical 33%, Serious 67%, Moderate 0%, Minor 0%
- High-Level Themes:
  - Missing accessible names on interactive elements (buttons, ARIA listboxes)
  - Unlabeled imagery used for status and action semantics
  - Insufficient color contrast for status badges and secondary text
  - Nested interactive regions (expansion panel headers with focusable descendants)
  - Scrollable region lacking keyboard focus affordance

## 2. Score & Issue Overview

| Metric | Value |
|--------|-------|
| Accessibility Score | 60.00 |
| Total Violations | 6 |
| Critical | 2 |
| Serious | 4 |
| Moderate | 0 |
| Minor | 0 |
| Total Affected Nodes | 46 |
| Impact % Critical | 33% |
| Impact % Serious | 67% |
| Impact % Moderate | 0% |
| Impact % Minor | 0% |

## 3. Detailed Violations

### Critical Violation: button-name
- Help: Buttons must have discernible text
- Description: Ensure buttons have discernible text
- Impact: critical
- Affected Nodes: 10

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | .action-item-row.fl-gap-4.fl-item-center:nth-child(1) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger reject-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 2 | .action-item-row.fl-gap-4.fl-item-center:nth-child(1) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger approve-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 3 | .action-item-row.fl-gap-4.fl-item-center:nth-child(2) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger reject-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 4 | .action-item-row.fl-gap-4.fl-item-center:nth-child(2) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger approve-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 5 | .action-item-row.fl-gap-4.fl-item-center:nth-child(3) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger reject-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 6 | .action-item-row.fl-gap-4.fl-item-center:nth-child(3) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger approve-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 7 | .action-item-row.fl-gap-4.fl-item-center:nth-child(4) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger reject-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 8 | .action-item-row.fl-gap-4.fl-item-center:nth-child(4) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger approve-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 9 | .expanding-row > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger reject-btn mat-icon-button ..."> | Missing discernible text / accessible name |
| 10 | .expanding-row > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"] | <button ... class="mat-focus-indicator mat-tooltip-trigger approve-btn mat-icon-button ..."> | Missing discernible text / accessible name |

Screenshots:
![screenshot](public/screenshots/73dff963-821f-4f47-a40e-a82e01dddb70.jpeg)
![screenshot](public/screenshots/a146a46a-0b69-4ff9-9acf-14ca0ed1a00a.jpeg)
![screenshot](public/screenshots/0b4a38be-2fab-42db-a86f-0a20230e2ec4.jpeg)
![screenshot](public/screenshots/110fc7c1-9683-4e79-b983-4d779050c475.jpeg)
![screenshot](public/screenshots/3c386e3e-fba2-4ecf-a38e-29df6194fc96.jpeg)
![screenshot](public/screenshots/1e4574a9-7a2b-49e5-87a3-cb1736099e41.jpeg)
![screenshot](public/screenshots/a5e35887-f0cc-4c79-8336-2ed98a1cb789.jpeg)
![screenshot](public/screenshots/c63573fa-9a9a-44bc-88ec-f7734e1fb3b6.jpeg)
![screenshot](public/screenshots/bdd2f205-b169-4686-870a-734bdfb8ccfb.jpeg)
![screenshot](public/screenshots/3a9ead98-23d6-478d-92ee-3c4fb15aad74.jpeg)

**Why This Matters:** Screen reader users rely on button labels to understand available actions; unlabeled icon buttons create ambiguity and force guesswork.
**How to Fix:** Provide meaningful labels using `aria-label` or visible text spans; ensure tooltip-only text is not the sole accessible name; consider adding `<span class="visually-hidden">Approve</span>` inside buttons.
**Validation Checklist:**
- [ ] Each button exposes non-empty accessible name
- [ ] Name matches visual/icon intent (Approve/Reject)
- [ ] No duplicate labels causing confusion
- [ ] Tooltip not sole source of accessible name
- [ ] Icon decorative marked with `aria-hidden="true"`

### Critical Violation: image-alt
- Help: Images must have alternative text
- Description: Ensure <img> elements have alternative text or a role of none or presentation
- Impact: critical
- Affected Nodes: 20

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | .profile-photo | <img class="profile-photo" src="/media/images/client/profile_gray.png"> | Missing alternative text |
| 2 | .mat-row.cdk-row:nth-child(1) > .cdk-column-managerViewed ... > img | <img src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg"> | Missing alternative text |
| 3 | .mat-row.cdk-row:nth-child(3) > .cdk-column-managerViewed ... > img | <img src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg"> | Missing alternative text |
| 4 | .mat-row.cdk-row:nth-child(4) > .cdk-column-managerViewed ... > img | <img src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg"> | Missing alternative text |
| 5 | .mat-row.cdk-row:nth-child(5) > .cdk-column-managerViewed ... > img | <img src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg"> | Missing alternative text |
| 6 | .action-item-row:nth-child(1) > .column-1 ... > img | <img src="/wand/app/manager/assets/actionItems/icon_time.svg"> | Missing alternative text |
| 7 | .action-item-row:nth-child(1) .reject-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_reject.svg"> | Missing alternative text |
| 8 | .action-item-row:nth-child(1) .approve-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_approve.svg"> | Missing alternative text |
| 9 | .action-item-row:nth-child(2) > .column-1 ... > img | <img src="/wand/app/manager/assets/actionItems/icon_time.svg"> | Missing alternative text |
| 10 | .action-item-row:nth-child(2) .reject-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_reject.svg"> | Missing alternative text |
| 11 | .action-item-row:nth-child(2) .approve-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_approve.svg"> | Missing alternative text |
| 12 | .action-item-row:nth-child(3) > .column-1 ... > img | <img src="/wand/app/manager/assets/actionItems/icon_time.svg"> | Missing alternative text |
| 13 | .action-item-row:nth-child(3) .reject-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_reject.svg"> | Missing alternative text |
| 14 | .action-item-row:nth-child(3) .approve-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_approve.svg"> | Missing alternative text |
| 15 | .action-item-row:nth-child(4) > .column-1 ... > img | <img src="/wand/app/manager/assets/actionItems/icon_time.svg"> | Missing alternative text |
| 16 | .action-item-row:nth-child(4) .reject-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_reject.svg"> | Missing alternative text |
| 17 | .action-item-row:nth-child(4) .approve-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_approve.svg"> | Missing alternative text |
| 18 | .expanding-row > .column-1 ... > img | <img src="/wand/app/manager/assets/actionItems/icon_time.svg"> | Missing alternative text |
| 19 | .expanding-row .reject-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_reject.svg"> | Missing alternative text |
| 20 | .expanding-row .approve-btn > .mat-button-wrapper > img | <img src="/wand/app/manager/assets/actionItems/icon_approve.svg"> | Missing alternative text |

Screenshots (subset):
![screenshot](public/screenshots/30ec5049-9564-4968-bec9-db6cfebf6784.jpeg)
![screenshot](public/screenshots/c4aba8eb-83d5-403b-becd-9ef7fcb7a28c.jpeg)
![screenshot](public/screenshots/504cbd4f-b59f-40c9-b26e-6a3da1b912f9.jpeg)
![screenshot](public/screenshots/dac2728f-47a6-4886-aca8-cf9396ff4843.jpeg)
![screenshot](public/screenshots/ab002a36-c677-496d-91e8-f47b7463fec2.jpeg)
![screenshot](public/screenshots/f7d99050-4315-4649-9a79-d2aa9adfa09d.jpeg)
![screenshot](public/screenshots/b611d088-c8f9-437a-ac10-9634763fb138.jpeg)
![screenshot](public/screenshots/b287f7bb-fb64-479b-85f7-8b8444e3e5c9.jpeg)
![screenshot](public/screenshots/031a861d-677d-4d31-9ea3-72f4c07e1f2a.jpeg)
![screenshot](public/screenshots/e7bd3cc2-3786-48e8-bc84-b237cc035514.jpeg)
![screenshot](public/screenshots/be8f01d9-94eb-4130-bcd5-324813c0db30.jpeg)
![screenshot](public/screenshots/9edee8cb-79d7-4829-bb82-133fe49fcd20.jpeg)
![screenshot](public/screenshots/277deb0c-e586-427e-9a63-2c2e549cfdb3.jpeg)
![screenshot](public/screenshots/78cf9880-a9e9-4030-af01-4118657320f2.jpeg)
![screenshot](public/screenshots/33d990b1-13f5-4495-823b-521313d2ee3e.jpeg)
![screenshot](public/screenshots/b9b78791-8e9b-4583-8df9-03b014c26a3d.jpeg)
![screenshot](public/screenshots/c4291b4c-654a-4794-8907-8e27eade8f35.jpeg)
![screenshot](public/screenshots/aab6e27d-1a6d-45b9-8299-41c1fab78548.jpeg)
![screenshot](public/screenshots/dd76a21c-7fde-475e-ae10-e39a7221d404.jpeg)
![screenshot](public/screenshots/73e96c56-f56d-4c48-968a-00540110cd22.jpeg)

**Why This Matters:** Alternative text communicates the purpose of images (status icons, action glyphs) to assistive technologies; without it functionality and state cues are lost.
**How to Fix:** Add concise `alt` text for meaningful images (e.g. `alt="Manager viewed"`, `alt="Approve"`); mark purely decorative images with `alt=""` or `role="presentation"`.
**Validation Checklist:**
- [ ] All meaningful images have descriptive `alt`
- [ ] Decorative images use empty `alt` or presentation role
- [ ] No duplicated ambiguous alt text
- [ ] Icon buttons not relying solely on SVG without label
- [ ] Status badge icons convey state in text alternative

### Serious Violation: aria-input-field-name
- Help: ARIA input fields must have an accessible name
- Description: Ensure every ARIA input field has an accessible name
- Impact: serious
- Affected Nodes: 3

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | #mat-chip-list-0 | <mat-chip-list id="mat-chip-list-0" role="listbox" ...> | Missing accessible name (aria-label / labelledby / title) |
| 2 | #mat-chip-list-2 | <mat-chip-list id="mat-chip-list-2" role="listbox" ...> | Missing accessible name |
| 3 | #mat-chip-list-1 | <mat-chip-list id="mat-chip-list-1" role="listbox" ...> | Missing accessible name |

Screenshots:
![screenshot](public/screenshots/0f161cf7-d95f-4eef-bea2-cdfb1597a749.jpeg)
![screenshot](public/screenshots/d8185983-6db1-4c30-9b8c-793802c9efb2.jpeg)
![screenshot](public/screenshots/fd8c2e92-9b8e-4343-84c9-1c9faf0c7116.jpeg)

**Why This Matters:** Listbox controls without names are not perceivable; users cannot identify filter purpose or content category selection.
**How to Fix:** Provide programmatic name via `aria-label="Filter by status"` or associate a visible label using `aria-labelledby` referencing a `<label>` or heading.
**Validation Checklist:**
- [ ] Each listbox exposes non-empty accessible name
- [ ] Visible label matches function
- [ ] No redundant label text
- [ ] Name announced once (no duplication)

### Serious Violation: color-contrast
- Help: Elements must meet minimum color contrast ratio thresholds
- Description: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- Impact: serious
- Affected Nodes: 9

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | .mat-row:nth-child(1) .manager-viewed-text .uc | <span class="uc">New</span> | Contrast 1.95 vs required 4.5 |
| 2 | .mat-row:nth-child(1) .cdk-column-billRate .sub-text | <span class="sub-text">Quote Estimate</span> | Contrast 3.58 vs 4.5 |
| 3 | .mat-row:nth-child(2) .cdk-column-billRate .sub-text | <span class="sub-text">Quote Estimate</span> | Contrast 3.44 vs 4.5 |
| 4 | .mat-row:nth-child(3) .manager-viewed-text .uc | <span class="uc">New</span> | Contrast 1.95 vs 4.5 |
| 5 | .mat-row:nth-child(3) .cdk-column-billRate .sub-text | <span class="sub-text">Quote Estimate</span> | Contrast 3.58 vs 4.5 |
| 6 | .mat-row:nth-child(4) .manager-viewed-text .uc | <span class="uc">New</span> | Contrast 1.75 vs 4.5 |
| 7 | .mat-row:nth-child(4) .cdk-column-billRate .sub-text | <span class="sub-text">Quote Estimate</span> | Contrast 3.44 vs 4.5 |
| 8 | .mat-row:nth-child(5) .manager-viewed-text .uc | <span class="uc">New</span> | Contrast 1.95 vs 4.5 |
| 9 | .mat-row:nth-child(5) .cdk-column-billRate .sub-text | <span class="sub-text">Quote Estimate</span> | Contrast 3.58 vs 4.5 |

Screenshots:
![screenshot](public/screenshots/ca0eb07c-472e-4114-a3d8-5c270be28cee.jpeg)
![screenshot](public/screenshots/59960b07-0d5f-43a4-9c71-b59c0775d768.jpeg)
![screenshot](public/screenshots/ef3a530a-13c2-4cac-82a5-2ee6b13773b2.jpeg)
![screenshot](public/screenshots/b12fa16e-0e38-405a-b607-6db8ec465b6b.jpeg)
![screenshot](public/screenshots/dc2844e6-47b0-41b3-86bd-acdc9b8e89cb.jpeg)
![screenshot](public/screenshots/52651959-c535-41b2-b606-747444aefe9b.jpeg)
![screenshot](public/screenshots/3c57bf42-7c77-4f72-ae9b-60647ad8706d.jpeg)
![screenshot](public/screenshots/9c75322c-b5c0-487c-ba1c-1b62afcc4513.jpeg)
![screenshot](public/screenshots/e86f44ad-8c2a-45dd-adcf-4ef14cff3ad5.jpeg)

**Why This Matters:** Low contrast text and badges hinder legibility for users with visual impairments or in low-vision/low-ambient conditions, increasing cognitive load and error risk.
**How to Fix:** Adjust foreground colors (darken grays, choose darker orange) or provide higher contrast backgrounds; ensure minimum 4.5:1 for normal text.
**Validation Checklist:**
- [ ] All adjusted colors meet >=4.5:1
- [ ] Status badge text legible on all backgrounds
- [ ] Secondary text passes after change
- [ ] No color-only reliance for status (text label retained)

### Serious Violation: nested-interactive
- Help: Interactive controls must not be nested
- Description: Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- Impact: serious
- Affected Nodes: 3

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | #mat-expansion-panel-header-0 | <mat-expansion-panel-header role="button" ...> | Contains focusable descendants |
| 2 | #mat-expansion-panel-header-1 | <mat-expansion-panel-header role="button" ...> | Contains focusable descendants |
| 3 | #mat-expansion-panel-header-2 | <mat-expansion-panel-header role="button" ...> | Contains focusable descendants |

Screenshots:
![screenshot](public/screenshots/672f5252-6ab5-44f1-bef2-4ab52a741f2d.jpeg)
![screenshot](public/screenshots/514d0b0f-287c-489f-a762-3931f3d16c26.jpeg)
![screenshot](public/screenshots/04575e57-9c25-4557-a4c6-3c89ae8f2923.jpeg)

**Why This Matters:** Nested interactive elements produce confusing focus paths and inconsistent announcements, degrading keyboard and screen reader experience.
**How to Fix:** Remove nested focusable elements inside headers; move interactive children outside accordion toggle or mark inner elements as non-focusable (`tabindex="-1"`).
**Validation Checklist:**
- [ ] Accordion headers have single focus target
- [ ] Inner interactive elements moved or disabled from tab order
- [ ] Screen reader announces header label once

### Serious Violation: scrollable-region-focusable
- Help: Scrollable region must have keyboard access
- Description: Ensure elements that have scrollable content are accessible by keyboard
- Impact: serious
- Affected Nodes: 1

| # | Selector | HTML Snippet | Failure Summary |
|---|----------|--------------|----------------|
| 1 | .recently-view-grid-container | <section class="recently-view-grid-container fl-flex fl-flex-col ..."> | Region not focusable / lacks focusable content |

Screenshots:
![screenshot](public/screenshots/7e424a90-5897-47be-87cf-0a2dd7f29d7e.jpeg)

**Why This Matters:** Keyboard-only users cannot scroll or navigate content if container is not focusable, leading to inaccessible recent items.
**How to Fix:** Add `tabindex="0"` and appropriate `aria-label` or use semantic landmarks (`<section aria-labelledby="recently-viewed-heading">`) ensuring internal focusable elements exist.
**Validation Checklist:**
- [ ] Scrollable region receives focus
- [ ] Focus outline visible
- [ ] Region has accessible name
- [ ] Scrolling works via keyboard

## 4. Color Contrast

Grouped Patterns:
- Status Badges ("New"): Foreground `#faa838` / Background `#ffffff` or `#f0f3f5` (1.75–1.95:1)
- Secondary Sub Text ("Quote Estimate"): Grays `#7f8895`, `#798391` vs white or light gray backgrounds (3.44–3.58:1)

Candidate Palette Adjustments:

| Role | Current | Proposed | Contrast Rationale |
|------|---------|----------|--------------------|
| Status Badge Text | #faa838 | #a55a00 | Darker orange raises luminance contrast above 4.5:1 on white |
| Status Badge Background Alt | #f0f3f5 | #e2e6e9 | Slight darkening increases ratio without harsh shift |
| Secondary Text | #7f8895 | #5a6470 | Darken gray to exceed 4.5:1 on white |
| Secondary Text (on #f0f3f5) | #798391 | #4f5a66 | Ensures >=4.5:1 on light gray background |

## 5. Root Cause Analysis

| Area | Issue | Cause | Recommended Action |
|------|-------|-------|--------------------|
| Icon Buttons | Missing labels | Reliance on visual SVG + tooltip | Add accessible names (aria-label or text) |
| Status Icons | No alt text | Decorative assumption without semantics | Provide alt or mark decorative appropriately |
| Listbox Chips | Missing names | Generated components lack associated labels | Link to visible label or add aria-label |
| Color Palette | Low contrast orange/gray | Brand colors not tested against WCAG | Adjust palette & verify ratios |
| Accordion Headers | Nested focusables | Template includes buttons/links inside header | Refactor header to a single interactive element |
| Scrollable Container | Not focusable | Section styled for scroll without tabindex/landmark | Add tabindex/aria-label or internal focus targets |

## 6. Prioritized Remediation Plan

| Priority | Task | Impact Addressed | Effort | Notes |
|----------|------|------------------|--------|-------|
| High | Add accessible names to all action buttons | button-name | Low | Simple attribute additions |
| High | Add alt text / mark decorative images | image-alt | Medium | Audit icons; batch update |
| High | Improve contrast for badges & secondary text | color-contrast | Medium | Coordinate with design system |
| Medium | Provide labels for chip listboxes | aria-input-field-name | Low | Add aria-label/labelledby |
| Medium | Refactor accordion headers to remove nested focusables | nested-interactive | Medium | May adjust component template |
| Medium | Make scrollable region focusable with landmark | scrollable-region-focusable | Low | Add tabindex + aria-label |
| Low | Palette documentation & regression tests | color-contrast | Medium | Add automated contrast checks |

## 7. Suggested Color Adjustments

| Element | Current Pair | Proposed Pair | Expected Ratio |
|---------|--------------|---------------|----------------|
| Badge Text on White | #faa838 / #ffffff | #a55a00 / #ffffff | >4.5:1 |
| Badge Text on Light Gray | #faa838 / #f0f3f5 | #a55a00 / #e2e6e9 | >4.5:1 |
| Secondary Text on White | #7f8895 / #ffffff | #5a6470 / #ffffff | >4.5:1 |
| Secondary Text on Light Gray | #798391 / #f0f3f5 | #4f5a66 / #e2e6e9 | >4.5:1 |

## 8. Testing & Verification Plan

1. Implement alt text & aria-label changes in a feature branch.
2. Adjust palette variables and update CSS tokens.
3. Refactor accordion headers; remove nested interactive descendants.
4. Add tabindex and aria-label to scrollable region; verify with keyboard.
5. Run automated axe audit to confirm reduced violations.
6. Manually test with screen reader (NVDA/VoiceOver) for button & listbox announcements.
7. Verify contrast with tooling (axe + manual contrast checker).
8. Regression test after deployment on staging environment.

## 9. Developer Implementation Checklist

- [ ] Button labels added (`aria-label` or text span)
- [ ] Alt text applied / decorative images marked
- [ ] Contrast palette updated & meets 4.5:1
- [ ] Chip listboxes labeled
- [ ] Accordion headers single focus target
- [ ] Scrollable region focusable & named
- [ ] Automated a11y test added to CI
- [ ] Manual screen reader pass completed

## 10. Appendix

References:
- WCAG 2.1 Contrast (SC 1.4.3): https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- WCAG 2.1 Non-text Content (SC 1.1.1)
- ARIA Authoring Practices Guide: https://www.w3.org/TR/wai-aria-practices/
- Axe Rule Documentation (button-name, image-alt, color-contrast) https://dequeuniversity.com/rules/axe

## 11. Final Notes

Highest-leverage fixes are labeling buttons/images and addressing color contrast; these will significantly improve perceivability and operability. After implementing changes, re-run automated and manual audits; trigger next re-test once palette and labeling updates are merged. Focus on preventing regression by adding CI a11y checks.
