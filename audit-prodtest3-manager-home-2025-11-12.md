# Accessibility Audit Report

URL: https://prodtest3.prounlimited.com/wand/app/manager/index.html#/manager/home  
Date (Generated): November 12, 2025  
Audit Timestamp (UTC): 2025-11-12T16:33:28.324Z  
Compliance Target: WCAG 2.1 AA  
Browser: Chromium Desktop  
Total Violations: 5  
Total Affected Nodes: 37  
Accessibility Score: 65.00

Impact Distribution: Critical 2 (40%) • Serious 3 (60%) • Moderate 0 (0%) • Minor 0 (0%)

---
## 1. Executive Summary
- Score 65.00 indicates substantial remediation required for core perceivability & operability.
- 5 distinct rule violations affecting 37 nodes; concentration in non-text alternatives and control labeling.
- High-impact issues: missing alternative text on 20 images; icon-only buttons (10) without accessible names; unlabeled ARIA chip list inputs; improper interactive structure (nested controls); one scrollable region lacking keyboard focusability.
- Thematic Patterns:
  - Missing accessible names (buttons, ARIA listboxes)
  - Non-text content lacking alt text
  - Structural semantics causing focus / announcement ambiguity
  - Keyboard accessibility gap for scrollable region
- Highest Leverage Fixes: establish labeling patterns for interactive controls; batch alt text additions; refactor expansion panel header internals; ensure focusability of custom scroll region.

## 2. Score & Issue Overview
| Metric | Value |
|--------|-------|
| Accessibility Score | 65.00 |
| Total Violations | 5 |
| Critical | 2 |
| Serious | 3 |
| Moderate | 0 |
| Minor | 0 |
| Total Affected Nodes | 37 |

## 3. Detailed Violations

### Critical Violation: button-name
- Help: Buttons must have discernible text
- Description: Ensure buttons have discernible text
- Impact: critical
- Affected Nodes: 10

| # | Selector | HTML Snippet | Failure Summary | Screenshot |
|---|----------|--------------|-----------------|------------|
|1|.action-item-row.fl-gap-4.fl-item-center:nth-child(1) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/3bcb051f-9908-46ec-8c78-4a1432ed2366.jpeg)|
|2|.action-item-row.fl-gap-4.fl-item-center:nth-child(1) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/6372447e-589d-47ce-91fb-bf6df6c87055.jpeg)|
|3|.action-item-row.fl-gap-4.fl-item-center:nth-child(2) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/1ec62768-5aa9-4c97-a765-81fd1b340aea.jpeg)|
|4|.action-item-row.fl-gap-4.fl-item-center:nth-child(2) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/f4c8a216-13ee-4703-a712-46d8ab96f852.jpeg)|
|5|.action-item-row.fl-gap-4.fl-item-center:nth-child(3) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/70c95d36-2738-4df4-b9d4-32a243e66eb5.jpeg)|
|6|.action-item-row.fl-gap-4.fl-item-center:nth-child(3) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/0f9924c0-bfd8-4fb0-8557-0d0341b78c68.jpeg)|
|7|.action-item-row.fl-gap-4.fl-item-center:nth-child(4) > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/920fab80-4c27-42c5-9992-0f69c164fdce.jpeg)|
|8|.action-item-row.fl-gap-4.fl-item-center:nth-child(4) > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/381587c0-12e2-48f7-8a8f-da9625c365f6.jpeg)|
|9|.expanding-row > .actions-column.column-6.fl-justify-end > .reject-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/17f22b6a-e104-479b-b5f8-bd5c955dc362.jpeg)|
|10|.expanding-row > .actions-column.column-6.fl-justify-end > .approve-btn.mat-icon-button[mattooltipposition="above"]|<button _ngcontent-ng-c4198505905="" mat-icon-button="" mattooltipposition="above" class="mat-focus-indicator ...>|Element does not have inner text that is visible to screen readers|![screenshot](public/screenshots/8a2fb4db-2a3f-4584-a1ac-29676e43a582.jpeg)|

Why This Matters: Screen reader users rely on programmatic names to understand the purpose of icon-only buttons. Without discernible text, controls are announced generically (e.g. "button"), impeding task completion and increasing cognitive load.

How to Fix:
- Provide meaningful `aria-label` (e.g. "Approve Timesheet", "Reject Timesheet").
- If visible tooltip text exists, expose it via `aria-label` or ensure it is persistent text.
- Use `<button><span class="visually-hidden">Approve</span><img ...></button>` pattern if reusing icons.
- Ensure labels are unique where action differs.

Validation Checklist:
- [ ] Each button exposes a non-empty accessible name.
- [ ] Names convey unique action intent.
- [ ] No duplicate ambiguous labels.
- [ ] Tooltip content not relied on exclusively.
- [ ] Icons marked decorative only if redundant with text.

### Critical Violation: image-alt
- Help: Images must have alternative text
- Description: Ensure <img> elements have alternative text or a role of none or presentation
- Impact: critical
- Affected Nodes: 20

| # | Selector | HTML Snippet | Failure Summary | Screenshot |
|---|----------|--------------|-----------------|------------|
|1|.profile-photo|<img _ngcontent-ng-c2553650765="" class="profile-photo" src="/media/images/client/profile_gray.png">|Element does not have an alt attribute|![screenshot](public/screenshots/20e47b13-a08f-4462-9148-1fbb7438858f.jpeg)|
|2|...nth-child(1)... > img[src*="icon_time.svg"]|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_time.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/b363cca3-07ed-471e-bce2-5b686d4a26f1.jpeg)|
|3|...nth-child(1)... reject-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_reject.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/2fd8911e-8f12-44a7-b327-d06f6f6e75d2.jpeg)|
|4|...nth-child(1)... approve-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_approve.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/cb41f0d5-9087-4b35-9fdc-857f75d19cdf.jpeg)|
|5|...nth-child(2)... > img[src*="icon_time.svg"]|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_time.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/7af92340-96a6-4b34-9e7d-4ed79de7ec72.jpeg)|
|6|...nth-child(2)... reject-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_reject.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/3ffd9ee0-ad39-47a5-86d5-f8f83c2238fa.jpeg)|
|7|...nth-child(2)... approve-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_approve.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/6db2aea6-5e60-47a2-9e86-e8838ec0dd76.jpeg)|
|8|...nth-child(3)... > img[src*="icon_time.svg"]|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_time.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/fc1ac810-ede9-4f16-bc8a-abdb2c66699d.jpeg)|
|9|...nth-child(3)... reject-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_reject.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/385a1402-7bb8-4219-99fe-8edbd442a987.jpeg)|
|10|...nth-child(3)... approve-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_approve.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/1f8cc5d7-1eb1-4fbe-af62-e7a44312253a.jpeg)|
|11|...nth-child(4)... > img[src*="icon_time.svg"]|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_time.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/d7a65287-ef9f-4150-aa42-95d0b884f4ab.jpeg)|
|12|...nth-child(4)... reject-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_reject.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/c4a75e9f-9e23-4799-8e36-e6587056fef0.jpeg)|
|13|...nth-child(4)... approve-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_approve.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/557dd234-13b4-44e9-b184-7ee60b957ebe.jpeg)|
|14|.expanding-row ... icon_time.svg|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_time.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/4720a082-76e5-423a-ac22-b08dcf87033d.jpeg)|
|15|.expanding-row ... reject-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_reject.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/7981c830-69a7-4a0d-b335-59cfd4749154.jpeg)|
|16|.expanding-row ... approve-btn ... > img|<img _ngcontent-ng-c4198505905="" src="/wand/app/manager/assets/actionItems/icon_approve.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/0efbcfaf-5b4d-4013-9fab-2c6ec5afce2e.jpeg)|
|17|.mat-row:nth-child(1) ... manager-viewed-text > img|<img _ngcontent-ng-c1477178540="" src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/12ae62f8-cab1-4f39-9966-1aa1d0b0f1dd.jpeg)|
|18|.mat-row:nth-child(3) ... manager-viewed-text > img|<img _ngcontent-ng-c1477178540="" src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/85fe6fd9-008b-40b8-bdf4-63903a0bb636.jpeg)|
|19|.mat-row:nth-child(4) ... manager-viewed-text > img|<img _ngcontent-ng-c1477178540="" src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/4ce13801-4031-41f5-8bf3-b7bcd142c6d2.jpeg)|
|20|.mat-row:nth-child(5) ... manager-viewed-text > img|<img _ngcontent-ng-c1477178540="" src="/wand/app/manager/assets/homepage/icon_manager_viewed.svg">|Element does not have an alt attribute|![screenshot](public/screenshots/7547f7d6-1f0f-43c1-8eae-9dfc41c1b791.jpeg)|

Why This Matters: Alternative text communicates the purpose of images to users who cannot perceive them visually, satisfying WCAG 1.1.1 and enabling assistive technologies to convey equivalent information.

How to Fix:
- Add concise, functional alt text for action icons (e.g. "Reject", "Approve", "Pending Time Entry").
- For purely decorative images, set `alt=""` (empty) or apply `role="presentation"`.
- Apply consistent naming conventions for repeated icons to aid recognition.
- Avoid duplicating nearby visible text—leave decorative duplicates empty.

Validation Checklist:
- [ ] Every meaningful image has descriptive non-empty `alt`.
- [ ] Decorative images have empty `alt`.
- [ ] No file names used as alt text.
- [ ] Icons and their buttons do not produce redundant spoken output.

### Serious Violation: aria-input-field-name
- Help: ARIA input fields must have an accessible name
- Description: Ensure every ARIA input field has an accessible name
- Impact: serious
- Affected Nodes: 3

| # | Selector | HTML Snippet | Failure Summary | Screenshot |
|---|----------|--------------|-----------------|------------|
|1|#mat-chip-list-2|<mat-chip-list ... id="mat-chip-list-2" tabindex="0" aria-required="false" ...>|aria-label attribute does not exist or is empty|![screenshot](public/screenshots/a0fe13ed-2ee8-45ba-8aaf-848be5506441.jpeg)|
|2|#mat-chip-list-0|<mat-chip-list ... id="mat-chip-list-0" tabindex="0" aria-required="false" ...>|aria-label attribute does not exist or is empty|![screenshot](public/screenshots/205f7777-dc8f-4f39-ba13-ba4bd6518adc.jpeg)|
|3|#mat-chip-list-1|<mat-chip-list ... id="mat-chip-list-1" tabindex="0" aria-required="false" ...>|aria-label attribute does not exist or is empty|![screenshot](public/screenshots/be64b872-4afe-4093-8a66-1abe9bc32839.jpeg)|

Why This Matters: Inputs without accessible names are announced generically, obstructing form navigation and filter comprehension for screen reader users.

How to Fix:
- Associate visible label via `aria-labelledby` referencing a persistent text element.
- If no visible text exists, add a concise `aria-label` (e.g. "Status Filters").
- Ensure uniqueness across multiple chip lists (e.g. "Region Filter", "Department Filter").

Validation Checklist:
- [ ] Each chip list announces a unique, meaningful name.
- [ ] No reliance on placeholder text alone.
- [ ] Labels persist when focus enters control.

### Serious Violation: nested-interactive
- Help: Interactive controls must not be nested
- Description: Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- Impact: serious
- Affected Nodes: 3

| # | Selector | HTML Snippet | Failure Summary | Screenshot |
|---|----------|--------------|-----------------|------------|
|1|#mat-expansion-panel-header-0|<mat-expansion-panel-header ... role="button" ... aria-expanded="true" ...>|Element has focusable descendants|![screenshot](public/screenshots/8ec85d9e-52ad-4edb-8a01-0efa87a92fce.jpeg)|
|2|#mat-expansion-panel-header-1|<mat-expansion-panel-header ... role="button" ... aria-expanded="true" ...>|Element has focusable descendants|![screenshot](public/screenshots/f83c2342-0261-4620-a364-ddee7ef3ad59.jpeg)|
|3|#mat-expansion-panel-header-2|<mat-expansion-panel-header ... role="button" ... aria-expanded="true" ...>|Element has focusable descendants|![screenshot](public/screenshots/81fe41e8-d1af-4e40-8871-b9de7541e2ed.jpeg)|

Why This Matters: Nested focusable elements create multiple tab stops inside a single control, causing inconsistent announcements and potential focus trapping.

How to Fix:
- Remove inner focusable elements (buttons, links) from header; use non-focusable wrappers inside header text.
- Move secondary actions outside the expansion header region.
- Ensure only one tabbable element per interactive header.

Validation Checklist:
- [ ] Expansion header is a single tab stop.
- [ ] Inner elements are not focusable.
- [ ] Keyboard interaction (Enter/Space) toggles panel reliably.

### Serious Violation: scrollable-region-focusable
- Help: Scrollable region must have keyboard access
- Description: Ensure elements that have scrollable content are accessible by keyboard
- Impact: serious
- Affected Nodes: 1

| # | Selector | HTML Snippet | Failure Summary | Screenshot |
|---|----------|--------------|-----------------|------------|
|1|.recently-view-grid-container|<section ... class="recently-view-grid-container fl-flex fl-flex-col ...">|Element should be focusable|![screenshot](public/screenshots/2c18f354-429f-4c92-aaf5-fb0b6c15191c.jpeg)|

Why This Matters: Keyboard users must be able to focus scrollable regions to scroll content without a pointing device, satisfying WCAG 2.1.1 (Keyboard) and 2.4.3 (Focus Order).

How to Fix:
- Add `tabindex="0"` to the scroll container if no native focus target exists.
- Provide an accessible name (e.g. `aria-label="Recently Viewed"`).
- Avoid disabling native scrolling behaviors.

Validation Checklist:
- [ ] Region receives focus via Tab.
- [ ] Screen reader announces purpose/name.
- [ ] Arrow/Page keys scroll content while focused.

## 4. Color Contrast
No color-contrast violations detected; section omitted.

## 5. Root Cause Analysis
| Area | Issue | Cause | Recommended Action |
|------|-------|-------|--------------------|
| Action Buttons | Missing accessible names | Icon-only implementation without labels | Add `aria-label` or visible text with visually hidden technique |
| Images/Icons | Missing alt text | Lack of alt authoring pattern & inconsistent semantics | Define alt text guidelines; enforce linting in component library |
| Filter Chip Lists | Unlabeled ARIA inputs | Labels not programmatically associated | Bind visible labels via `aria-labelledby`; ensure unique IDs |
| Expansion Panels | Nested interactive elements | Focusable children inside header | Refactor header to contain only static inline elements |
| Scrollable Grid | Not focusable | Custom container lacks tabindex/role | Add `tabindex="0"` and accessible name |

## 6. Prioritized Remediation Plan
| Priority | Task | Impact Addressed | Effort | Notes |
|----------|------|------------------|--------|-------|
| High | Add accessible names to all icon buttons | button-name | Low | Centralized component update |
| High | Provide alt/empty alt for all images/icons | image-alt | Medium | Audit shared icon component |
| High | Label chip list inputs programmatically | aria-input-field-name | Low | Add IDs + `aria-labelledby` |
| Medium | Refactor expansion panel headers (remove nested focusables) | nested-interactive | Medium | Might adjust component API |
| Medium | Make scroll region focusable & named | scrollable-region-focusable | Low | Single DOM change |
| Low | Establish a11y regression tests for new components | All | Medium | Prevent reintroduction |

## 7. Suggested Color Adjustments
Not applicable (no color-contrast violation present).

## 8. Testing & Verification Plan
1. Re-run automated axe-based audit after each remediation batch.
2. Perform keyboard-only navigation: confirm tab order & scrolling behavior.
3. Use screen reader (NVDA/Chrome) to validate button names, alt text, and chip list labels.
4. Toggle expansion panels ensuring single tab stop and proper announcements.
5. Validate recently viewed grid focus and scroll with keyboard.
6. Regression test with automated CI check (axe + playwright) to enforce rules.

## 9. Developer Implementation Checklist
- [ ] Add `aria-label` or text for all approve/reject buttons (Pending)
- [ ] Add `alt` text for semantic images; empty alt for decorative (Pending)
- [ ] Associate chip list elements with visible labels (Pending)
- [ ] Remove nested focusable elements inside expansion panel headers (Pending)
- [ ] Add `tabindex="0"` and `aria-label` to scrollable grid (Pending)
- [ ] Introduce component-level linting / tests for alt & label presence (Pending)
- [ ] Add automated accessibility audit to CI pipeline (Pending)

## 10. Appendix
References:
- WCAG 2.1 Success Criterion 1.1.1 (Non-text Content)
- WCAG 2.1 Success Criterion 1.3.1 (Info and Relationships)
- WCAG 2.1 Success Criterion 2.1.1 (Keyboard)
- WCAG 2.1 Success Criterion 2.4.6 (Headings and Labels)
- ARIA Authoring Practices Guide (APG)
- Axe Core Rule Documentation (button-name, image-alt, aria-input-field-name, nested-interactive, scrollable-region-focusable)

## 11. Final Notes
Addressing button labels, alt text, and ARIA input naming will yield the largest immediate improvement in user experience and score. After implementing prioritized fixes, schedule a re-audit; if score improvement <15 points, conduct manual exploratory testing for latent issues (focus management, announcements). Re-test trigger: completion of all High priority tasks or introduction of new interactive components.
