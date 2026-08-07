# OmniSite Accessibility Audit

Audit date: August 7, 2026  
Target: WCAG 2.2 Level AA for the Milestone 2 front-end builder and template previews

## Completed checks

- One primary `main` landmark in the workspace; preview content does not create nested main landmarks.
- English document language is declared.
- Visible buttons and form controls have accessible names.
- Images include alt attributes; the media editor requires a plain-language image description field.
- Keyboard focus is visible through a three-pixel focus ring or focus shadow.
- Required controls remain available at 1440, 1280, 1024, 768, 390, and 360 pixels.
- No horizontal page overflow was found at the required widths.
- Motion respects `prefers-reduced-motion`.
- Starter-template primary/background color pairs range from 10.86:1 to 17.61:1; small template labels use the high-contrast primary token instead of accent colors.
- Required page headings, labels, native inputs, checkboxes, and select controls use semantic HTML.

## Verification results

- Unlabeled visible buttons: 0
- Unlabeled visible form controls: 0
- Images missing alt attributes: 0
- Duplicate DOM IDs: 0
- Browser console errors during audited workflows: 0
- Main landmarks in the workspace: 1

## Re-audit triggers

Repeat the audit when production authentication, third-party checkout, uploaded customer content, embedded media, or new template families are added. Customer-supplied colors and images must be checked before publishing because they can change contrast and text alternatives.
