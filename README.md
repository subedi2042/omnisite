# OmniSite

OmniSite is a website-building and operations platform for small businesses, churches, and nonprofit organizations. It combines protected content editing, industry starter templates, responsive previews, publishing controls, and an optional managed-service workflow.

## Project status

This repository is a functional front-end MVP. The interface and local browser workflows are implemented, but the product does not yet include the backend infrastructure required for commercial production use.

### Tracking dashboard

Last updated: **August 6, 2026**

Status definitions:

- ✅ **Done** — implemented and verified in the repository
- 🟡 **In progress** — usable front-end foundation exists, but production work remains
- ⬜ **Not started** — required work has not been implemented

| Workstream | Status | Current result | Next milestone |
| --- | --- | --- | --- |
| Marketing website | ✅ Done | Responsive product site and workspace entry | Connect real accounts and onboarding |
| Starter templates | ✅ Done | Five industry-specific template foundations | Complete every page renderer per template |
| Website page builder | 🟡 In progress | Add pages and edit basic page details | Section management and full content fields |
| Easy Edit | 🟡 In progress | Protected editing for common content | Complete collection and media editors |
| Responsive preview | 🟡 In progress | Desktop and 390px phone preview | Verify all six required breakpoints |
| Publishing | 🟡 In progress | Browser-state review and publish flow | Real builds, hosting, releases, and rollback |
| Commerce and giving | 🟡 In progress | Interactive front-end demonstrations | Payments, orders, receipts, and reporting |
| Appointments and events | 🟡 In progress | Interactive front-end demonstrations | Calendar, registration, capacity, and messages |
| People and groups | 🟡 In progress | Privacy-oriented interface demonstration | Secure records, consent, permissions, and exports |
| Authentication and tenancy | ⬜ Not started | No production authentication or tenant database | Accounts, sessions, roles, and tenant isolation |
| Domains and hosting | ⬜ Not started | Settings interface only | DNS verification, SSL, CDN, and deployment |
| Automated testing and CI/CD | ⬜ Not started | Manual checks and build commands | Test suites and required pull-request checks |

### Milestone checklist

#### Milestone 1 — Front-end MVP

- [x] Public marketing website
- [x] Customer workspace and dashboard
- [x] Five starter-template foundations
- [x] Industry content changes with template selection
- [x] Desktop and phone previews
- [x] Basic page creation and page-detail editing
- [x] Easy Edit routine-content workflows
- [x] Staged operations-module interfaces
- [x] TypeScript and production-build verification

#### Milestone 2 — Complete website builder

- [ ] Render every required page and section type
- [ ] Add section reorder, duplicate, visibility, and deletion controls
- [ ] Add navigation and footer editors
- [ ] Add full collection editors
- [ ] Add media library and image editing guidance
- [ ] Complete SEO and social-sharing controls
- [ ] Verify 1440, 1280, 1024, 768, 390, and 360px layouts
- [ ] Complete WCAG 2.2 Level AA audit

#### Milestone 3 — Production platform

- [ ] Add authentication and secure sessions
- [ ] Add multi-tenant database and organization isolation
- [ ] Add server-side roles and permissions
- [ ] Add durable drafts, revisions, audit logs, and rollback
- [ ] Add secure forms, notifications, and spam protection
- [ ] Add production monitoring, backups, and recovery

#### Milestone 4 — Publishing and operations

- [ ] Build real preview and production deployment pipelines
- [ ] Add custom domains, DNS validation, and SSL
- [ ] Connect payment processing for sales and giving
- [ ] Connect calendars and appointment availability
- [ ] Implement event registration and attendee communication
- [ ] Implement secure people records and consent controls
- [ ] Replace demonstration analytics with a privacy-aware event pipeline

#### Milestone 5 — Commercial readiness

- [ ] Add unit, integration, accessibility, and end-to-end tests
- [ ] Add CI/CD and protected release checks
- [ ] Add billing and subscription management
- [ ] Add customer-support and managed-service administration
- [ ] Complete privacy, terms, payment, retention, and accessibility reviews

### Completed and working

#### Public product website

- Responsive marketing homepage
- Product features, starter-template showcase, testimonials, pricing, and managed-service sections
- Mobile navigation
- Entry point into the OmniSite workspace

#### Website builder

- Five industry starter templates:
  - Faith Community
  - Local Authority
  - Local Table
  - Trusted Home Pro
  - Modern Merchant
- Full industry content changes when a template is selected; templates do not all default to church content
- Editable primary, accent, background, and text colors
- Desktop and 390px phone previews
- Live page-specific preview
- Individual page creation from 13 page types
- One-click complete-site structure with the required essential pages
- Editable page name, URL slug, heading, and introductory text
- Template content for organization identity, services, hours, announcements, staff, events, and contact information

#### Easy Edit

- Protected organization-name and homepage-message editing
- Service-time and business-hour editing
- Announcement editing
- Address, phone, and public-email editing
- Draft-change detection
- Layout and design remain protected from routine content editors

#### Workspace and publishing experience

- Customer dashboard with website status, launch progress, recent activity, and common tasks
- Draft versus published-state controls in the current browser session
- Review-and-publish interaction
- Managed-service project milestones and review-thread interface
- Organization and domain settings interface
- Responsive workspace navigation

#### Staged operations modules

The following modules have interactive front-end workflows and local demo data:

- Products and orders
- Appointments
- Events and registrations
- Giving and funds
- People and groups
- Analytics dashboard

These modules are previews only. They do not yet have secure production databases, payment processing, calendar integrations, or server-side permissions.

#### Quality and accessibility foundation

- TypeScript type checking
- Production Vite build
- Responsive layout behavior
- Visible keyboard focus styles
- Semantic headings and navigation landmarks
- Reduced-motion support
- Accessible labels on primary interactive controls

## Partially complete

- Page templates currently provide structured starter content and previews; every page type still needs its final production section renderer and dedicated content fields.
- Publishing updates front-end state but does not deploy a customer website to hosting.
- Analytics uses representative interface data rather than a real event pipeline.
- Product, appointment, event, giving, and people records persist only where local demo storage is used.
- Domain settings are an interface concept and do not perform DNS validation or provisioning.
- Managed-service messaging is a UI workflow and is not connected to email, notifications, or a support backend.

## Remaining work

### Production platform foundation

- User authentication, password recovery, and secure sessions
- Multi-tenant database and organization isolation
- Server-side authorization and role-based access control
- Durable draft, revision, rollback, and audit-history storage
- File and image upload pipeline with optimization and accessible metadata
- Form submission storage, routing, spam protection, and notifications
- Production error monitoring, logging, backups, and recovery procedures

### Website rendering and CMS

- Production renderer for every required page type and section
- Reorder, duplicate, hide, and delete page and section controls
- Navigation and footer menu editor
- Collection editors for staff, events, testimonials, gallery items, posts, FAQs, services, and products
- Media library and image crop/aspect-ratio guidance
- SEO fields, social-sharing images, sitemap, robots controls, and structured data
- Empty states, content-length constraints, and fallback content across all templates
- Full responsive verification at 1440, 1280, 1024, 768, 390, and 360 pixels
- WCAG 2.2 Level AA audit and remediation

### Publishing and domains

- Real site build and deployment pipeline
- Preview URLs and production releases
- Custom-domain connection, DNS verification, and SSL provisioning
- Release history, rollback, and deployment-status monitoring
- CDN caching and performance monitoring

### Operations modules

- Payment-processor integration for commerce and giving
- Secure checkout, receipts, refunds, taxes, and financial reporting
- Calendar availability and appointment integrations
- Event registration, capacity, ticketing, and attendee communications
- Privacy-aware people records, consent, exports, and data-retention controls
- Real analytics collection with consent and privacy controls

### Product operations

- Automated unit, integration, accessibility, and end-to-end tests
- CI/CD checks for pull requests and deployments
- Billing and subscription management
- Transactional email and notification system
- Customer support and managed-service administration tools
- Legal review for privacy, terms, payments, data retention, and accessibility claims

## Technology

- React 18
- TypeScript
- Vite
- Lucide icons
- Plain CSS design system

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Repository structure

```text
src/
  components/
    MarketingHome.tsx
    PlatformWorkspace.tsx
  data/
    themeDataFactory.ts
    themesManifest.ts
  types/
  App.tsx
  index.css
```

## Deployment note

The front-end builds to `dist/` and can be hosted as a static Vite application. That static deployment is only the OmniSite MVP interface; it does not provide authentication, databases, payments, domain provisioning, or production customer-site publishing.
