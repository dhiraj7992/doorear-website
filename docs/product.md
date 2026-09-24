# Maa — product overview

**Maa** is operations software for **courier and logistics businesses**. It gives each company its own secure workspace: teams book shipments, run hubs and last-mile delivery, see operational and commercial analytics, handle accounts and GST-style documents, and manage company setup—from branches and coverage to users and roles.

This document explains what the product **does for users and operators**, in plain language. It reflects **features present in this codebase**. Deeper technical detail (APIs, schema field names) lives in the same repo for engineering; visual standards are in **`design-system.md`**.

---

## What problem it solves

Running a logistics operation means coordinating **bookings**, **hubs**, **routes**, **delivery**, **billing documents**, and **staff access**—often across branches. Maa centralizes that work in one web application so teams do not juggle disconnected spreadsheets and ad-hoc tools for day-to-day operations.

---

## Who uses it (real-world roles)

- **Operations & hub staff** — book orders, work forward and inward shipment flows, manage bags and manifests, run delivery activity.
- **Branch or regional managers** — see dashboards and MIS-style reports, monitor KPIs (e.g. bookings, out-for-delivery, deliveries, COD, pipeline risk).
- **Finance / accounts** — work with AWB products, tax invoices, reimbursement vouchers, and purchase-side analytics where enabled.
- **Procurement / commercial** — run customer RFQs, vendor proposals, and agreements (including flows that support **public quote links** for external parties).
- **Company administrators** — maintain company profile, network (locations, branches, partners, fleet), user invites, roles, permissions, subscription and billing touchpoints, and integrations settings.

Access is **role-based**: each person only sees menu areas their permissions allow (for example booking vs. analytics vs. accounts).

---

## Core capabilities (benefit-led)

### Shipment operations

- **Forward bookings** — Create and track shipment orders with structured booking data (consignment / AWB-oriented workflow).
- **Operational pipeline** — Support for bags, manifests, inward legs, and delivery runs so work can progress from booking through hub and last-mile stages (status-driven, as modeled in the product).
- **Branch-aware work** — Users are tied to branches; the product respects branch scope for analytics and operational context.

**Benefit:** One place to record and progress shipments instead of fragmented tools.

### Network and coverage

- **Serviceable locations** — PIN / locality coverage for bookings and SLA thinking.
- **Branches** — Hierarchical org structure (parent/child hubs), operational status.
- **Fleet and partners** — Register capacity and commercial partners.

**Benefit:** Cleaner booking validation and a single network picture for the tenant.

### Analytics

- **Dashboard** — High-level operational KPIs (e.g. today’s bookings, out for delivery, delivered today, COD, pipeline issues)—with paths into deeper MIS views.
- **Operations, sales, purchase** — Dedicated analytics areas for operational MIS, commercial insight, and purchase-oriented views where permissions allow.

**Benefit:** Faster daily standups and exception handling from live counts and trends.

### Company setup and governance

- **Company profile** — Legal and trading identity, GST and invoicing-related fields, branding (including logo), booking rules such as backdate windows.
- **Users and access** — Invites, roles, and a permission catalog so only the right people change bookings, users, network, or accounts.
- **Subscription and billing touchpoints** — Plans, usage-style messaging, offline payment intimation, and subscription-related invoice history—aligned with **manual reconciliation** after payment (as implemented).

**Benefit:** Clear separation of duties and auditable company configuration.

### Accounts and procurement

- **Accounts** — AWB products, invoices, vouchers—aligned with Indian logistics / GST-style usage in the data model.
- **Procurement** — RFQ → proposal → agreement style workflow, with **public quote** access where the route is exposed without login.

**Benefit:** Commercial and finance workflows stay inside the same tenant boundary as operations.

### Authentication and onboarding

- **Multiple sign-in paths** — Password login, refresh sessions, OTP, optional **Clerk**-based sign-in bridged to the app, organization registration, and email invites.

**Benefit:** Flexible rollout for teams that want SSO-style (Clerk) or classic username/password.

---

## How tenants and security work (simple view)

- Each **company** is isolated: data is scoped to that tenant.
- People sign in; the app loads **permissions** from the server so menus and pages match what they may do.
- Sensitive areas (for example booking, user management, accounts) require the right **permission**, not just “logged in.”

---

## Subscription and usage (what customers experience)

- New organizations receive a **trial subscription** created when they register (implementation: single transaction with tenant setup).
- **Shipment limits** can apply by plan: new bookings may be blocked when the plan is expired or out of included shipments; the UI surfaces reminders and subscription context.
- **Plan upgrades and renewals** are described in-product as **offline / finance-coordinated**—there is no self-service checkout in this codebase; payment proof can be submitted for reconciliation.

---

## Integrations

The product includes **integrations & setup** screens (for example Twilio, SendGrid, Firebase, Tally, Google Calendar, Stream Chat) as **configuration entry points** in the app navigation. Actual connector behavior depends on backend wiring per integration—treat as **module placeholders** unless a specific integration is verified in deployment.

---

## Honest boundaries (from implementation)

- **Currency display:** List pricing in the subscription marketing UI may show **USD** using a fixed conversion for presentation, while internal plan amounts and many finance surfaces remain **INR-oriented**—align messaging on customer-facing sites with what finance confirms.
- **Plan changes:** Elevating or changing plans is **not** exposed as a one-click purchase API here; operations rely on agreed process and database-backed subscription rows.
- **Cancellations vs. shipment counts:** (Engineering note) automatic refund of a consumed shipment credit on order cancel is **not** guaranteed in reviewed paths—confirm policy with product/engineering.

---

## Related documents

| Document | Purpose |
|----------|---------|
| **`docs/design-system.md`** | Colors, type, components, and consistency for app and marketing alignment |
| **`docs/product-seo.md`** | Marketing summary, SEO keywords, audience, and content topic ideas |
| Engineering | API routes, Prisma schema, and services in `Backend/`; app routes and UI in `Frontend/` |

When shipping new features, update this file so sales and support stay aligned with what the software **actually** does.
