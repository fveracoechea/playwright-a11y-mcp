# Accessibility Audit Report

URL: https://fveracoechea.com/blog/preact-islands-architecture/ Date: 2025-11-07 Audit
Timestamp: 2025-11-07T20:41:09.541Z Summary Timestamp: 2025-11-07T20:41:09.588Z Tools:
`a11y_audit_page`, `a11y_get_summary` Engine: Playwright (Chromium, Desktop Chrome profile) Axe
Tags: wcag2a, wcag2aa, wcag21a, wcag21aa Screenshots Captured: 276

---

## 1. Executive Summary

The audited page presents 2 distinct Axe violations resulting in a custom accessibility score
of **85.00** (heuristic). While the raw count of violations is low, one **critical** ARIA
semantics violation and one **serious** color contrast violation impact a **large number
(275)** of nodes. The predominant accessibility concern is systematic insufficient contrast
across body text, links, inline code, and syntax highlighting tokens. Addressing the color
palette and syntax theme will remediate the majority of issues quickly.

---

## 2. Score & Issue Overview

| Metric               | Value |
| -------------------- | ----- |
| Accessibility Score  | 85.00 |
| Total Violations     | 2     |
| Critical             | 1     |
| Serious              | 1     |
| Moderate             | 0     |
| Minor                | 0     |
| Total Affected Nodes | 276   |

**Interpretation:** A small number of violation types can mask the breadth of impact when a
single rule (color contrast) affects many elements. Prioritize global fixes (palette/theme)
over one-off patches.

---

## 3. Detailed Violations

### 3.1 Critical Violation: `aria-required-children`

- **Help:** Certain ARIA roles must contain particular children
- **Description:** Ensure elements with an ARIA role that require child roles contain them.
- **Impact:** critical
- **Affected Nodes:** 1

#### Node Details

| Selector | HTML Snippet                                     | Failure Summary                                | Screenshot                                |
| -------- | ------------------------------------------------ | ---------------------------------------------- | ----------------------------------------- |
| `.pt-4`  | `<div role="list" title="legends" class="pt-4">` | Required ARIA child role not present: listitem | aba490c7-ecc2-49ff-bba0-424da8a7d409.jpeg |

**Why This Matters:** Users of assistive technologies rely on correct semantic roles for
structural navigation. A `role="list"` without `role="listitem"` children disrupts expected
list semantics.

**How to Fix:**

1. If semantically a list, replace with `<ul>` or `<ol>` and `<li>` children (preferred: native
   semantics).
2. If custom styling demands ARIA roles, ensure each child element has `role="listitem"`.
3. If not a list, remove `role="list"` entirely.
4. Re-test with Axe to confirm resolution.

**Validation Checklist:**

- [ ] Element has children with `role="listitem"` or native `<li>` tags.
- [ ] No extraneous `role` attributes misleading semantics.
- [ ] Screen reader announces the list and items correctly (test with NVDA/VoiceOver).

---

### 3.2 Serious Violation: `color-contrast`

- **Help:** Elements must meet minimum color contrast ratio thresholds
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA
  minimum thresholds (Normal text 4.5:1; Large text 3:1).
- **Impact:** serious
- **Affected Nodes:** 275

**Primary Patterns Observed:**

- Body text using mid-gray (`#6c6f85`) on very light background (`#eff1f5`) just below 4.5:1
  (≈4.36:1).
- Link color (`#1e66f5`) insufficient against light background (≈4.34:1).
- Inline code tokens (reds `#e64553`, oranges `#fe640b`, greens `#40a02b`, purples `#8839ef`,
  yellows `#df8e1d`, teals `#179299`) against code block backgrounds (`#e6e9ef` / `#eff1f5`)
  frequently fail.
- Syntax highlighting theme prioritizes aesthetic color distinctions over accessible contrast;
  comments as low as 1.77:1.
- Table of contents / navigational links using subdued foreground shades.

**Global Remediation Strategy:**

1. Adjust base text color to a darker hue (e.g. from `#6c6f85` → `#5c5f70`) to exceed 4.5:1.
2. Darken link blue (e.g. `#1e66f5` → `#1652c7`) or increase font weight / underline plus
   adjust color to reach ≥4.5:1.
3. Replace syntax highlighting theme with a WCAG-compliant palette (many accessible themes
   available for Prism/Highlight.js).
4. Ensure inline code uses accessible colors or add subtle background darkening behind tokens.
5. Validate all changes via automated contrast checker (axe / APCA evaluator) before
   deployment.

**Selective Element-Level Fix Guidance:**

- For text at 14px normal weight failing at ~4.36:1: darken foreground or slightly darken the
  background (prefer adjusting foreground to avoid ripple side effects).
- For colored tokens failing <3:1: pick darker saturation or adjust background to a slightly
  darker shade (#dcdfe5) ensuring new contrasts ≥4.5:1.
- For multiple tokens (e.g. `comment`, `keyword`, `string`, `class_`, `variable`): treat theme
  holistically rather than per token.

#### Color Contrast Affected Nodes (Full List)

Below each row: selector, HTML snippet (truncated), failure summary, screenshot filename. Use
this list to identify template/components needing palette changes.

| #   | Selector                                                                    | HTML / Text (truncated)                                 | Failure Summary (contrast details)         | Screenshot                                |
| --- | --------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------ | ----------------------------------------- |
| 1   | `time`                                                                      | `<time class="text-sm text-cat-subtext0" ...>`          | Insufficient contrast 4.36:1 (needs 4.5:1) | 03944c26-74e2-463a-99b5-78b381537e2a.jpeg |
| 2   | `.m-0`                                                                      | `<p class="m-0 text-sm text-cat-subtext0">A pattern...` | 4.36:1                                     | 9ea3970d-4c95-45f5-855a-0e23519b5713.jpeg |
| 3   | `p:nth-child(2) > a[href$="astro.build/"]`                                  | `<a href="https://astro.build/">Astro</a>`              | 4.34:1 (link)                              | 7c8f49d3-6e5f-48bb-af71-d93eaf45f4b4.jpeg |
| 4   | `p:nth-child(2) > a[href$="fresh.deno.dev/"]`                               | `<a href="https://fresh.deno.dev/">Fresh</a>`           | 4.34:1 (link)                              | 78b1eb39-40dd-4c47-857a-e523cc56ac92.jpeg |
| 5   | `blockquote:nth-child(18) > p`                                              | `<p>The Build Tool for the Web</p>`                     | 4.36:1                                     | 79c40c2d-d52c-41f1-801e-a12bf720db0e.jpeg |
| 6   | `a[href$="vite.dev/"]`                                                      | `<a href="https://vite.dev/">Vite</a>`                  | 4.34:1                                     | e765b4bf-d0d2-4cb9-b5e1-1fe584091c95.jpeg |
| 7   | `blockquote:nth-child(21) > p`                                              | `<p>Fast 3kB alternative to React...`                   | 4.36:1                                     | d153592e-b905-4c5a-8f77-2b5c5bb70a30.jpeg |
| 8   | `a[href$="preactjs.com/"]`                                                  | `<a href="https://preactjs.com/">Preact</a>`            | 4.34:1                                     | e2abd0cd-5c41-4406-8f47-cefe3bc3559e.jpeg |
| 9   | `ul:nth-child(25) > li:nth-child(1) > a:nth-child(1)`                       | `react`                                                 | 4.34:1                                     | 768e999e-3062-4c19-9738-fd17056d44fd.jpeg |
| 10  | `li:nth-child(1) > a:nth-child(2)`                                          | `react-dom`                                             | 4.34:1                                     | 034c40df-a162-408e-b3bb-988277cf805b.jpeg |
| 11  | `a:nth-child(3)`                                                            | `react-router-dom`                                      | 4.34:1                                     | 1dd29dfb-9e95-4232-8940-6a590e785aca.jpeg |
| 12  | `ul:nth-child(25) > li:nth-child(2) > a:nth-child(1)`                       | `preact`                                                | 4.34:1                                     | 11970545-a931-4619-b6cb-63826d66ff0b.jpeg |
| 13  | `li:nth-child(2) > a:nth-child(2)`                                          | `preact-iso`                                            | 4.34:1                                     | 1ff4bb4c-61d9-48ca-9128-aea89025c2ac.jpeg |
| 14  | `blockquote:nth-child(28) > p`                                              | `A web standard for creating...`                        | 4.36:1                                     | 5249a8cb-c11d-4965-a93f-7ad57995b8ed.jpeg |
| 15  | `p:nth-child(32) > a`                                                       | `github.com/...`                                        | 4.34:1                                     | dba04874-f5f4-43ba-acdb-34050cb49e11.jpeg |
| 16  | `p:nth-child(35) > code:nth-child(1)`                                       | `<code>pnpm craate preact</code>`                       | 3.47:1 (inline code)                       | 4184362a-6fee-4fd3-a2a8-6e3db1607d40.jpeg |
| 17  | `p:nth-child(35) > code:nth-child(2)`                                       | `<code>npm init preact</code>`                          | 3.47:1                                     | 552f60df-a699-48b5-8911-0bfed9c84916.jpeg |
| 18  | `p:nth-child(37) > code:nth-child(1)`                                       | `<code>npm run dev</code>`                              | 3.47:1                                     | 8241086a-0b89-4f96-bd45-f1c7757e3ab2.jpeg |
| 19  | `p:nth-child(37) > code:nth-child(2)`                                       | `<code>pnpm dev</code>`                                 | 3.47:1                                     | e69d139f-67ee-4ccd-9f82-f9100198b890.jpeg |
| 20  | `pre:nth-child(41) > .language-tsx ... .hljs-comment`                       | `// src/lib/preact-islands.tsx`                         | 1.77:1 (comment)                           | 02bac3e6-b14b-43b7-b613-aa6ef430f7a1.jpeg |
| 21  | `pre:nth-child(41) > .language-tsx ... .hljs-keyword:nth-child(2)`          | `import`                                                | 4.45:1 (borderline)                        | 36683a23-ea47-495f-a13b-517299607e68.jpeg |
| 22  | `pre:nth-child(41) > .language-tsx ... .class_.hljs-title:nth-child(4)`     | `FunctionalComponent`                                   | 2.15:1                                     | 6e7f21b3-0ab4-494e-b8aa-b55e89eede25.jpeg |
| 23  | `.language-tsx.language-typescript.hljs > .constant_.hljs-variable`         | `JSX`                                                   | 2.45:1                                     | 2d61ad9e-01c8-4357-bf23-ad2f87454c4d.jpeg |
| 24  | `pre:nth-child(41) > .hljs-string:nth-child(7)`                             | `"preact"`                                              | 2.74:1                                     | 67761bd4-c6c2-4c76-8da6-243ec06060db.jpeg |
| 25  | `.hljs-built_in:nth-child(15)`                                              | `string`                                                | 4.46:1 (just meets)                        | b937a5d0-570d-4f7a-a0dc-027f5c8b0215.jpeg |
| 26  | `.hljs-property:nth-child(40)`                                              | `hasOwnProperty`                                        | 3.07:1                                     | 09ae61cf-f508-4824-a860-dcc17e41519e.jpeg |
| 27  | `p:nth-child(44) > code:nth-child(1)`                                       | `preact-island`                                         | 3.47:1                                     | 512e8da7-5364-4b12-a0cc-4783c77eca12.jpeg |
| 28  | `p:nth-child(47) > code:nth-child(1)`                                       | `<preact-island>`                                       | 3.47:1                                     | 30ca05ad-5b3a-4eb1-9df3-58c0c2adb126.jpeg |
| 29  | `pre:nth-child(51) > .language-tsx ... .hljs-comment`                       | `// src/islands/Button.tsx`                             | 1.77:1                                     | cfc1db2d-bf63-47c4-a3a8-5592a3d05857.jpeg |
| 30  | `pre:nth-child(51) > .language-tsx ... .function_.hljs-title:nth-child(12)` | `withIsland`                                            | 4.03:1                                     | 53efe49d-d277-4a1e-860f-fbb163184b48.jpeg |
| 31  | `pre:nth-child(57) > .language-tsx ... .hljs-comment:nth-child(1)`          | `// src/App.tsx`                                        | 1.77:1                                     | 0e5b182c-1421-4d07-934e-3d660f9bb61c.jpeg |
| 32  | `pre:nth-child(57) > .language-tsx ... .class_.hljs-title:nth-child(3)`     | `LocationProvider`                                      | 2.15:1                                     | 722fd95d-4e5a-43b7-b352-4052fd0f7a29.jpeg |
| 33  | `p:nth-child(59) > code`                                                    | `src/index.tsx`                                         | 3.47:1                                     | a68e405f-e42e-4158-bed6-ad239f7098df.jpeg |
| 34  | `pre:nth-child(60) > .language-tsx ... .hljs-comment:nth-child(1)`          | `// src/index.tsx`                                      | 1.77:1                                     | f32f513e-489c-4731-8d48-a66aa804b72f.jpeg |
| 35  | `pre:nth-child(60) > .language-tsx ... .hljs-string:nth-child(4)`           | `"preact-iso/hydrate"`                                  | 2.74:1                                     | 0ed18767-789e-4db6-afbc-13cece688161.jpeg |
| 36  | `pre:nth-child(60) > .language-tsx ... .hljs-property:nth-child(16)`        | `meta`                                                  | 3.07:1                                     | 2b1474e3-d493-4adc-99d7-83c127d794f9.jpeg |
| 37  | `.hljs-comment:nth-child(25)`                                               | `// Hydrate the whole app...`                           | 1.77:1                                     | 139ec4e4-bf8f-497f-99ba-19873bd0a00d.jpeg |
| 38  | `p:nth-child(66) > code`                                                    | `localhost:4173`                                        | 3.47:1                                     | 33b0c449-49a7-492a-b262-0d0dada68d78.jpeg |
| 39  | `.language-ts > .hljs-keyword:nth-child(1)`                                 | `declare`                                               | 4.45:1                                     | fb262e52-bdc5-417a-b5d9-98a2910d5fec.jpeg |
| 40  | `.language-ts > .class_.hljs-title:nth-child(5)`                            | `JSX`                                                   | 2.15:1                                     | 75830c3a-7de1-4b15-a2d9-c9a83d7dd7e0.jpeg |
| 41  | `.language-ts > .constant_.hljs-variable`                                   | `JSX`                                                   | 2.45:1                                     | b8be94fc-9697-43f5-a4b0-3dedfeeb61b7.jpeg |
| 42  | `.language-ts > .hljs-property`                                             | `HTMLAttributes`                                        | 3.07:1                                     | bf73ca7d-9f9c-449c-8f15-aa24d76e6bf7.jpeg |
| 43  | `a[href$="lume.land/"]`                                                     | `Lume`                                                  | 4.34:1                                     | fabc6448-aa0d-4327-8e5b-6e47b139934f.jpeg |
| 44  | `a[href$="11ty.dev/"]`                                                      | `Eleventy`                                              | 4.34:1                                     | 80eff5c5-609f-435f-b0c6-a9c30f6f4373.jpeg |
| 45  | `p:nth-child(79) > a[href$="astro.build/"]`                                 | `Astro`                                                 | 4.34:1                                     | f398bb0c-669b-41fa-96f5-cd18fcdb25ce.jpeg |
| 46  | `a[href$="#the-islands-architecture"]`                                      | `The islands architecture`                              | 4.36:1                                     | 9039243d-89ef-4604-a7ba-b99a4147a386.jpeg |
| 47  | `a[href$="#final-thoughts"]`                                                | `Final thoughts`                                        | 4.36:1                                     | 6d866b54-f4ec-4e9e-8029-0d97c4ca02d5.jpeg |
| 48  | `a[href$="#resources"]`                                                     | `Resources`                                             | 4.36:1                                     | 8902c94d-5c35-4454-b8de-8c05d949c209.jpeg |
| …   | (Many more similar nodes omitted for brevity)                               |                                                         |                                            |                                           |

> The full list includes all 275 nodes; the omitted middle section follows identical patterns
> (links, code tokens, syntax elements). Addressing color variables & theme will remediate them
> collectively.

**Validation Checklist Post-Fix:**

- [ ] Body text contrast ≥4.5:1 across paragraphs & blockquotes.
- [ ] Links contrast ≥4.5:1 in default, hover, focus, visited states.
- [ ] Inline code tokens & comments ≥4.5:1 (comments may target ≥3:1 but aim higher).
- [ ] Syntax theme adapted: keywords, strings, types, class names all pass.
- [ ] Table of contents / navigation links pass focus contrast & maintain visible focus
      indicators.
- [ ] No new contrast regressions introduced.

---

## 4. Root Cause Analysis

| Area            | Issue                    | Cause                                          | Recommended Action                                                      |
| --------------- | ------------------------ | ---------------------------------------------- | ----------------------------------------------------------------------- |
| Base Typography | Marginal contrast        | Palette selection slightly below threshold     | Darken primary text color variable                                      |
| Links           | Uniform color failing    | Brand/blue chosen without contrast validation  | Adjust link color or add weight/underline with darker shade             |
| Code Blocks     | Multiple token failures  | Aesthetic theme prioritized over accessibility | Adopt accessible syntax theme (e.g. adjusted Nord / Solarized variants) |
| Inline Code     | Red/orange/green failing | High-chroma colors on very light background    | Darken tokens or add subtle darker background behind inline code        |
| ARIA Semantics  | Missing listitem roles   | Manual role usage instead of native list       | Convert to native list or add child roles                               |

---

## 5. Prioritized Remediation Plan

| Priority | Task                              | Impact Addressed | Effort | Notes                                    |
| -------- | --------------------------------- | ---------------- | ------ | ---------------------------------------- |
| High     | Fix ARIA list semantics           | Critical         | Low    | Simple structural markup change          |
| High     | Adjust body & link colors         | Serious          | Low    | Global CSS variable update               |
| High     | Replace syntax highlighting theme | Serious          | Medium | Choose accessible theme & test           |
| Medium   | Inline code styling adjustments   | Serious          | Low    | Could piggyback with main palette update |
| Medium   | Re-run audit, regression test     | All              | Low    | Validate improvements                    |
| Low      | Add CI accessibility check        | Prevent future   | Medium | Integrate axe-core script                |

---

## 6. Suggested Color Adjustments (Example Candidates)

| Role              | Current | Proposed | Approx Contrast (vs #eff1f5) | Notes                                            |
| ----------------- | ------- | -------- | ---------------------------- | ------------------------------------------------ |
| Body text         | #6c6f85 | #5c5f70  | ~5.1:1                       | Darker neutral gray                              |
| Link text         | #1e66f5 | #1652c7  | ~5.2:1                       | Maintain brand feel, increase luminance contrast |
| Inline code red   | #e64553 | #c0313f  | ~4.6–4.8:1                   | Darken + slight desaturation                     |
| Inline code green | #40a02b | #2d7a20  | ~4.7:1                       | Darken for contrast                              |
| Comment text      | #acb0be | #6a7180  | ~4.6:1                       | Improve legibility                               |
| Keyword purple    | #8839ef | #6d2dbf  | ≥4.5:1                       | Maintain differentiation                         |
| Variable yellow   | #df8e1d | #b87417  | ≥4.5:1                       | Reduce brightness, increase contrast             |

> Validate exact ratios with final background color values (if background changes slightly).

---

## 7. Testing & Verification Plan

1. Update color variables & syntax theme.
2. Run `axe` locally (Playwright + Axe) on page templates.
3. Manually inspect focus states (keyboard navigation) ensuring contrast maintained.
4. Use screen reader to confirm list semantics corrected.
5. Capture before/after diff of contrast metrics.
6. Integrate `a11y_audit_page` tool in CI pipeline for critical pages.

---

## 8. Tool & Environment Metadata

| Field                 | Value                                 |
| --------------------- | ------------------------------------- |
| MCP Server Name       | playwright-a11y-mcp                   |
| MCP Version           | 0.0.1                                 |
| Browser               | Chromium (Desktop Chrome profile)     |
| Navigation Wait       | networkidle (≤30–35s timeout)         |
| Screenshots Directory | `public/screenshots` (server runtime) |
| Total Screenshots     | 276                                   |

---

## 9. Developer Implementation Checklist

| Category   | Checklist Item                            | Status  |
| ---------- | ----------------------------------------- | ------- |
| Semantics  | Replace `div[role=list]` with proper list | Pending |
| Semantics  | Verify list children semantics with SR    | Pending |
| Contrast   | Adjust CSS variables for text/link tokens | Pending |
| Contrast   | Replace syntax highlight theme            | Pending |
| Contrast   | Re-test inline & block code contrast      | Pending |
| Regression | Re-run audit (expect 0 critical/serious)  | Pending |
| CI         | Add automated Axe check                   | Pending |

---

## 10. Appendix

### 10.1 Full Violation JSON (Raw Structured Content – Audit)

```json
{
  "url": "https://fveracoechea.com/blog/preact-islands-architecture/",
  "totalViolations": 2,
  "screenshotsCaptured": 276,
  "timestamp": "2025-11-07T20:41:09.541Z",
  "results": [
    {
      "id": "aria-required-children",
      "help": "Certain ARIA roles must contain particular children",
      "impact": "critical",
      "description": "Ensure elements with an ARIA role that require child roles contain them",
      "nodes": [
        {
          "html": "<div role=\"list\" title=\"legends\" class=\"pt-4\">",
          "selector": ".pt-4",
          "screenshot": "aba490c7-ecc2-49ff-bba0-424da8a7d409.jpeg",
          "summary": "Fix any of the following:\n  Required ARIA child role not present: listitem"
        }
      ]
    },
    {
      "id": "color-contrast",
      "help": "Elements must meet minimum color contrast ratio thresholds",
      "impact": "serious",
      "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
      "nodes": [
        "(275 node entries – see condensed table above; full raw data available from tool output)"
      ]
    }
  ]
}
```

### 10.2 Summary Tool Output (Raw Structured Content)

```json
{
  "url": "https://fveracoechea.com/blog/preact-islands-architecture/",
  "timestamp": "2025-11-07T20:41:09.588Z",
  "results": {
    "score": "85.00",
    "totalIssues": 2,
    "critical": 1,
    "serious": 1,
    "moderate": 0,
    "minor": 0
  }
}
```

### 10.3 References & Resources

- WCAG 2.1 Contrast (SC 1.4.3):
  https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- ARIA Authoring Practices: https://www.w3.org/TR/wai-aria-practices/
- Accessible Syntax Highlighting Guidelines:
  https://accessibility.blog.gov.uk/2023/05/22/colour-contrast-in-code-highlighting/
- Axe Core Docs: https://github.com/dequelabs/axe-core

---

## 11. Final Notes

Addressing the color contrast issue with a palette & theme update will eliminate the majority
of affected nodes in one change, significantly improving readability and user experience for
low-vision users. Semantic correction of the list role is straightforward and should be
actioned immediately.

Please proceed with the remediation plan, then re-run the `a11y_audit_page` tool to verify
improvements.
