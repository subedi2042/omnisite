# OmniSite Product & Template Rules

These rules are mandatory for every page, component, workflow, dashboard, customer template, theme preset, and responsive state created in this project.

## 1. Product Design Objective & Quality Benchmark

Design a polished commercial website-building platform for small businesses, churches, and nonprofit organizations.

The platform must feel:
- Clear
- Confident
- Modern
- Calm
- Trustworthy
- Professional
- Easy for nontechnical customers

The product must **not** feel experimental, cluttered, childish, overly decorative, or like an AI-generated prototype.

The quality benchmark is the clarity and polish of established SaaS products such as Stripe, Shopify, Linear, Webflow, Squarespace, and modern Google products. Do not directly copy any company's visual identity.

---

## 2. Universal Website-Template Standards

Every reusable website template created for the OmniSite platform must adhere to the following rules:

### Design Direction
- Create a complete, consistent theme system before building individual pages:
  - Color tokens
  - Typography scale
  - Spacing scale
  - Container widths
  - Border-radius rules
  - Shadow rules
  - Button variants & Form styles
  - Card & Navigation styles
  - Section patterns & Image treatment
  - Hover, focus, loading, error, and disabled states
- Use the theme consistently across every page. Do not invent ad-hoc colors, spacing, or card styles on individual pages.

### Visual Hierarchy
Every page must have:
1. One clear page purpose
2. One dominant heading
3. One primary call to action
4. Supporting content organized into distinct sections
5. Strong spacing between content groups
6. Consistent section widths and alignment
- Avoid excessive pills, gradients, heavy floating shadows, decorative blobs, stock icons, and unnecessary animation.
- Do not place every sentence inside a card.

### Reusable Page Inventory
Every theme template kit must support:
- Home, About, Services/Programs, Service Detail, Events/Appointments, Event Detail, Team/Leadership, Testimonials, Gallery, Blog/News, Article Detail, Contact, FAQ, Donation/Booking/Checkout, Privacy Policy, Terms, and 404 pages.

### CMS Requirements & Content Safety
- All routine content must come from editable content fields or collections (Org name, logo, contact info, business hours / service times, navigation, hero, CTAs, services, staff, events, testimonials, FAQs, gallery, announcements, posts, footer).
- Nontechnical customers must be able to edit content in **Easy Edit** mode without code or breaking layouts.
- Use content constraints, sensible character limits, image aspect-ratio guidance, empty states, and fallback values.
- Do not hard-code customer-specific information into reusable primitive components.

### Responsive & Accessibility Standards
- Verify template layouts at 1440px, 1280px, 1024px, 768px, 390px, and 360px.
- Recompose navigation, columns, typography, images, and CTAs for mobile screens.
- Target WCAG 2.2 Level AA compliance: readable contrast, visible keyboard focus indicators, semantic HTML, reserved image dimensions to prevent CLS, and respect reduced-motion settings.

---

## 3. OmniSite Starter-Theme Library Manifest

The platform includes five production starter kits built on a unified, shared foundation:

1. **Faith Community** — Churches & Faith-based Organizations (`#17243A` Navy, `#FAF7F1` Ivory, `#B68A45` Muted Gold, Libre Baskerville + Inter)
2. **Local Authority** — Professional Services & Consultants (`#163A5F` Deep Blue, `#2878B5` Bright Blue, `#F8F7F3` Warm Off-White, Manrope + Inter)
3. **Local Table** — Restaurants, Cafés & Food Businesses (`#24211E` Charcoal, `#FBF5EA` Cream, `#B84E32` Terracotta, DM Serif Display + DM Sans)
4. **Trusted Home Pro** — Home Services, Plumbing, HVAC, Contractors (`#17324D` Navy, `#236FA1` Service Blue, `#E8752E` Safety Orange, Manrope + Inter)
5. **Modern Merchant** — E-commerce & Specialty Apparel (`#17191C` Ink, `#FFFFFF` White, `#F5F5F3` Soft Gray, Space Grotesk + Inter)

---

## 4. Delivery Workflow

- After a meaningful product increment passes the relevant type-check and production build, create a focused Git commit and push it to the configured GitHub repository.
- Never push a broken, partially validated, secret-containing, or knowingly misleading build.
- Keep commits focused and use concise messages that describe the completed product increment.
- Do not describe front-end previews as production-ready backend capabilities.
