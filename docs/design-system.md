# Maa design system

Use this document for **the web application** (`Frontend/`) and to keep **marketing sites, landing pages, and emails** visually aligned with the product. Values below come from **`Frontend/src/index.css`**, **`useThemeStore`**, and shared UI components unless noted.

---

## Purpose

1. **Product UI** — Single source for colors, type scale patterns, and component behavior inside the React app (including user-tunable theme).  
2. **Marketing & website** — Map landing pages and docs to the **same brand DNA** (primary blue, dark sidebar idiom, clean sans type) so prospects recognize Maa before login.  
3. **Cross-platform consistency** — Apply the same rules when building **static sites**, **Webflow/WordPress**, or **email**: use the token hex values and hierarchy below rather than inventing a second palette.

---

## Brand pillars (non-technical)

- **Professional & operational** — Feels like control-room software: clear hierarchy, dense-but-readable tables, subtle motion.  
- **Trustworthy** — Primary blue (`#2563eb` default), ample whitespace, restrained shadows.  
- **Logistics warmth (accent)** — Optional amber/orange touches (scrollbars, occasional gradients) suggest movement and energy without clownish color.

---

## Color system

### Core tokens (copy into marketing CSS)

These are the **defaults** in `:root`. Dark mode mirrors are in `.dark` in `index.css`.

| Token | Default (light) | Role |
|-------|-------------------|------|
| `--app-primary` | `#2563eb` | CTAs, links, focus, key charts |
| `--app-sidebar` | `#0f172a` | Nav rail (dark strip) |
| `--app-surface` | `#f8fafc` | Page background |
| `--app-card` | `#ffffff` | Cards, inputs surface |
| `--app-border` | `#e2e8f0` | Dividers, table borders |
| `--app-muted` | `#64748b` | Secondary text, labels |
| `--app-foreground` | `#0f172a` | Primary text on light UI |

**Marketing site recommendation:** Use **`--app-primary`** (or the hex above) for all primary buttons and links. Use **`--app-foreground`** for body copy and **`#64748b`** (or `--app-muted`) for supporting text—do not introduce a third neutral gray family unless necessary.

### Dark mode

When the product runs in dark mode, surfaces flip to deep slate (`--app-card` ~ `#111827`, `--app-surface` ~ `#0b1120`). **Marketing pages** often stay light for conversion; if you ship a dark marketing hero, mirror these dark tokens rather than pure black (`#000`).

### Semantic accents (app)

KPI and status colors in the app use **fixed Tailwind hues** (sky, emerald, violet, amber, rose) for charts and badges. For **marketing illustrations**:

- **Success / positive** — emerald family (`#059669` light chart token `--chart-emerald`).  
- **Warning / attention** — amber (`--chart-amber` / `#b45309` light).  
- **Info** — sky/blue adjacent to primary, not a competing brand color.

### What not to do

- Do not replace primary blue with **orange as the main brand**—orange is **accent-only** in-app (scrollbars, subtle gradients).  
- Avoid **Clerk sign-in pages** as the visual reference for marketing: they use **zinc neutrals**; the **logged-in app** uses `--app-primary` (see *Known gaps*).

---

## Typography

### Font family

**System stack** (no bundled webfont by default):

`ui-sans-serif, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**Website guidance:** Use the **same stack** on maa.com-style pages for parity. If marketing adopts **Inter** or **Geist**, restrict to **one** webfont and ensure weights map to app patterns (600–700 for headings, 400–500 for body).

### Hierarchy (align marketing to app)

| Use | App pattern | Website equivalent |
|-----|-------------|-------------------|
| Page title | `text-2xl`–`text-3xl`, `font-bold`, `tracking-tight` | H1: single weight 700–800, tight tracking |
| Section label | `text-[10px]`–`text-xs`, uppercase, `tracking-wider`, muted | Eyebrow / overline above H2 |
| Body | `text-sm`–`text-base` | 16px body min on marketing for readability |
| Table / data | `text-sm`, tabular nums where needed | Same for pricing tables |

---

## Components (app → marketing translation)

### Buttons

App default button: **filled primary** (`bg` = primary, white text, `rounded-lg`–`rounded-xl`, subtle shadow, opacity hover).

**Marketing consistency:**

- **Primary CTA** — Solid fill `#2563eb` (or current `--app-primary`), white text, rounded corners **8–12px** (`rounded-lg` / `rounded-xl`), no heavy 3D effects.  
- **Secondary** — Outline or light gray fill; border `#e2e8f0`.  
- **Ghost** — Text-only with hover wash; use sparingly in hero.

### Inputs

App inputs: `rounded-lg`, 40px height, light border, primary-tint focus ring.

**Forms on marketing:** Match border radius and focus ring color to **primary blue**, not browser default black ring.

### Cards

App: `rounded-xl` or `rounded-2xl`, `1px` border, `shadow-sm`, padding **16–24px**.

**Pricing / feature cards:** Same radius family; avoid mixed corner systems (e.g. do not use `4px` on one card and `24px` on another without reason).

### Tables

App tables: muted uppercase headers, row hover on surface tint.

**Marketing comparison tables:** Reuse header style (small caps label, muted) for “looks like the product.”

### Icons

**Lucide-style**: stroke icons, ~2px stroke, rounded joins—**outline / minimal**. On marketing, use **Lucide** (or a matching stroke set), not filled Material icons, to match the app sidebar and dashboards.

---

## Layout & spacing

- **Content width:** App main area uses responsive padding `px-4` → `lg:px-8`; marketing sections often use **max-width ~1200–1280px** centered for readability.  
- **Grid:** App uses 1 → 2 → 3 column card grids at breakpoints `sm` / `lg`; marketing feature grids should follow similar breakpoints to feel familiar.  
- **Sidebar mental model:** Product has a **dark left rail** (~240px). Marketing navbars can echo **dark bar + primary CTA on the right** without copying full app chrome.

### Spacing scale

Tailwind-driven: multiples of **4px** (`gap-2`, `p-4`, `p-6`). **Rule:** stick to **4/8/12/16/24/32** px spacing on marketing for harmony with the app.

---

## Motion

- App uses short easings (`cubic-bezier(0.22, 1, 0.36, 1)`), **subtle** enter animations (dashboard, booking steps).  
- **Marketing:** Prefer **fade + slight translate** (8–14px) over flashy motion. Respect **`prefers-reduced-motion`** for hero animations.

---

## Consistency rules (checklist)

Use this for **design QA** on any new surface (app or web).

1. **Primary actions** use the **same blue** as `--app-primary` (or documented brand override if marketing brand updates—then update `index.css` defaults too).  
2. **Body text** uses one dark neutral (`#0f172a` or token), not pure black.  
3. **Borders** use one light gray (`#e2e8f0` or token), not mixed `#eee` / `#ddd`.  
4. **Corner radius** stays in the **lg / xl / 2xl** family for cards and buttons.  
5. **Icons** stay **stroke / outline**, consistent weight.  
6. **Charts** on marketing screenshots or embeds use **chart-* tokens** or the same hexes as `index.css` for primary/emerald/sky/rose/amber.  
7. **Currency / locale** — If the page shows **subscription pricing**, align copy with product reality: **USD display for reference** vs **INR** in finance—state which is which to avoid trust issues.

---

## Cross-platform look & feel

| Platform | Guidance |
|----------|----------|
| **Product (React)** | Source of truth: `index.css` + `useThemeStore`. Theme drawer may change primary/sidebar per tenant—screenshots for marketing should note “default theme” if showing blue. |
| **Marketing website** | Inline CSS variables copying the table above, or Tailwind with the same hex values. One global `--color-primary`. |
| **Documentation (e.g. GitBook, Mintlify)** | Custom CSS injecting the same fonts and primary color; avoid default purple or green themes. |
| **Email** | Limited CSS: use **inline styles** with `#2563eb` buttons, `#0f172a` text, system fonts, 16px body. No reliance on `color-mix` or dark mode in email. |
| **Social / ads** | Hero imagery: dark sidebar + light content **or** clean white + blue CTA—both match brand; avoid off-brand gradients unrelated to logistics. |
| **PDF / print** | Booking voucher print styles in `index.css` use `#0f172a` and slate borders—PDFs generated elsewhere should match for legal consistency. |

---

## Known gaps (product vs marketing)

1. **Clerk login** UI uses a **zinc-heavy** palette (`clerkAppearance.js`), not `--app-primary`. If marketing shows **only** the sign-in box, consider a **product screenshot** of the logged-in shell for color accuracy, or restyle Clerk to follow `getClerkAppearance` synced to primary (engineering backlog).  
2. **Semantic KPI colors** in-app are not all tokenized—marketing dashboards in Figma may **define** `--accent-success` etc. for consistency, then optionally backport to the app later.

---

## File reference (engineering)

| File | Contents |
|------|-----------|
| `Frontend/src/index.css` | `:root` / `.dark` tokens, scrollbars, datepicker, print |
| `Frontend/src/store/useThemeStore.js` | User primary/sidebar/mode |
| `Frontend/tailwind.config.js` | Keyframe animations |
| `Frontend/src/components/base/Button.jsx` | Button variants |
| `Frontend/src/lib/clerkAppearance.js` | Clerk-specific styling (differs from app shell) |

Update this document when global tokens or brand defaults change.
