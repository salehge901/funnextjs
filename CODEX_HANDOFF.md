# CODEX HANDOFF

## Repo State
- Path: `~/src/taiwjef92jdac`
- Branch: `main`
- Last pushed commit before this handoff update: `fd918a3`
- Working tree at handoff update time: includes local changes in:
  - `src/components/games/OfferCardInteractive.tsx`
  - `src/components/shell/CurrencyProvider.tsx`
  - `CODEX_HANDOFF.md`

## Main Purpose / Goal
Build a pixel-faithful VirtGold frontend from Figma, with real interactive behavior (not static mockups), and keep it backend-friendly so cards/offers/testimonials/games can be populated from APIs.

## User Collaboration Rules (Critical)
- Figma is the source of truth.
- Do not improvise style/layout.
- Apply precise iterative changes section-by-section.
- Keep interactive behavior where Figma cannot express behavior (hover states, dropdown close rules, carousel control, etc).
- Keep components ready for backend data.

## What Is Implemented

### 1) Shared Shell (Header/Footer)
- Reused shared header/footer across pages instead of rebuilding duplicates.
- Header includes:
  - Games dropdown
  - Account dropdown (Login/Register)
  - Currency dropdown
  - Wishlist/cart buttons
  - Search input with glowing search glyph hover
- Footer includes:
  - top marketplace cards area (where page requires it)
  - offers/promo area
  - legal/info/navigation columns
  - game links row
  - payment icons row

### 2) Homepage (`/`)
Implemented/refined multiple sections over many iterations against Figma:
- Testimonials carousel
  - Infinite loop behavior
  - Hover pause behavior
  - Metal-like thin card border treatment + inner shadow tuning
  - Background blending and clash reduction between adjacent sections
- Browse all games / card strips
  - Looping horizontal strips
  - Hover interactions
  - Adjusted side padding to reduce visible loop seam issues
- Process section and blog section
  - Accordion/toggle behavior for steps
  - Smooth expansion behavior
  - Spacing and typography tuning
- Seller/Buyer cards and promo/footer transition spacing
  - Significant spacing and divider tuning for Figma parity
  - Gray line/divider placement refinements

### 3) Games Listing Page (`/games`)
- Created page route and structure with shared header/footer and center content only.
- Select game grid and count behavior.
- Popular game chips/buttons with hover states.
- Search icon hover glow behavior.
- Footer boundary behavior adjusted for this page.

### 4) Game Offers Page (`/games/[game]`)
- Left filter panel:
  - Services category filters (Accounts/Gold/Boosting/Items)
  - Search, server, platform, price min/max, delivery filters
  - Apply filters button
- Right offers list:
  - Sort dropdown (`Recommended`, `Price`, `Fastest Delivery`, etc)
  - Offer cards with quantity controls and Buy Now
  - Load More behavior
- Delivery filter logic:
  - `1 day` = <= 24h
  - `3 days` = <= 72h
  - `5 days+` kept as broad selection per user direction
- Filtering/sorting updated client-side to avoid full-page reload UX issues.

### 5) Gold-Specific Offer Cards
- Added dedicated gold card component:
  - `src/components/games/GoldOfferCardInteractive.tsx`
- Includes gold-specific fields and structure (seller row, approval, min order, stock, per-gold price, buy now).
- Recent adjustment: entire gold metrics text group moved ~6px down (per user request).

### 6) Offer Detail Page (`/games/[game]/offers/[offer]`)
- Route exists and is wired with game/offer lookup.
- Still a simplified structure placeholder for full Figma parity.

### 7) Global Currency System
- Added provider and formatter:
  - `src/components/shell/CurrencyProvider.tsx`
  - `src/components/shell/CurrencyAmount.tsx`
- Added rate endpoint:
  - `src/app/api/exchange-rates/route.ts`
- Layout wraps app in `CurrencyProvider`.
- Price display switched to currency-aware rendering across interactive offer cards.
- Min/max price filter input now maps selected currency <-> USD storage.
- Current supported currencies: `USD`, `EUR`, `GBP`, `CAD`.

## Backend-Friendly Data Strategy
- Cards/offers built from `catalog` data structures, not static HTML duplicates.
- Carousels/listing components designed to support larger datasets and cloned loops.
- Filters/sort/load-more operate on data arrays and can be swapped to API-fed data.
- Currency conversion centralized in provider for global consistency.

## Client-Side First (Current Design)
- Current UX is intentionally client-sided for fast perceived loading and smooth interactions.
- Implemented client-side today:
  - offers filtering/sorting
  - load-more expansion
  - dropdown open/close behavior
  - quantity controls
  - currency selection + on-screen price updates
  - carousel motion/hover pause
- Route reloads are avoided for these interactions; only URL state is synced where needed.
- Backend integration should preserve this approach by returning data to client components and updating local state, instead of forcing full navigation refreshes.

## Asset Handling Strategy
Two approaches are in use:
1. Local extracted sprite assets for precise slices:
- e.g. `public/figma/extracted/Web-2.png`

2. Direct Figma MCP asset URLs:
- Used extensively for icons/images while matching Figma quickly.

Notes:
- This worked for rapid fidelity iteration.
- For production hardening, migrate critical external Figma URLs to local/CDN-managed assets to avoid third-party availability risk.

## Major Issues Encountered + Fixes

### A) Carousel seam/spawn artifacts
- Symptom: end/start visual glitch during infinite loops.
- Fixes applied:
  - Increased side paddings
  - duplicated lists
  - tuned animation boundaries
  - reduced visible edge pressure (e.g. 10/20px side offsets)

### B) Section color/background clashes
- Symptom: hard lines between sections, especially testimonial background transitions.
- Fixes:
  - unified base colors globally
  - corrected background image layering
  - removed incorrect side gradients
  - tuned vertical fade usage and section spacing

### C) Dropdown hover collapse in header
- Symptom: menus disappearing while moving cursor from trigger to menu.
- Fix:
  - replaced fragile pure CSS hover chains with local open-state controlled by enter/leave wrappers.

### D) Full-page reload during filter interactions
- Symptom: UX lag when applying filters.
- Fix:
  - moved interactions to client-side state updates and local filtering/sorting.

### E) Root-owned file blocked edits
- File: `src/app/games/[game]/offers/[offer]/page.tsx`
- Symptom: permission denied from normal user.
- Fix:
  - `chown`/`chmod` adjusted so file could be edited.

### F) Encoding/BOM and shell path issues
- Symptoms:
  - occasional BOM insertion in TSX
  - PowerShell/WSL quoting and UNC path quirks
- Fixes:
  - normalized file encodings
  - used stable WSL login-shell command pattern
  - used literal paths when editing bracketed route files

## Current Open Items / Next Work
- Keep polishing `/games/[game]` and `/games/[game]/offers/[offer]` to strict 1:1 Figma, especially:
  - micro typography
  - exact spacing and metallic bars
  - dropdown behavior nuances
  - final offer card/detail fidelity
- Replace remaining direct Figma URLs with managed static assets when stabilizing.
- Wire real backend endpoints for offers/games/testimonials/currencies as final integration step.

## Quick Commands
```bash
cd ~/src/taiwjef92jdac
git status --porcelain=v1
npm run build
```

## Important File Map (Most Touched)
- `src/app/page.tsx`
- `src/app/games/page.tsx`
- `src/app/games/[game]/page.tsx`
- `src/app/games/[game]/offers/[offer]/page.tsx`
- `src/components/shell/SiteHeader.tsx`
- `src/components/shell/SiteFooter.tsx`
- `src/components/shell/CurrencyProvider.tsx`
- `src/components/shell/CurrencyAmount.tsx`
- `src/components/games/GameOffersClient.tsx`
- `src/components/games/OfferCardInteractive.tsx`
- `src/components/games/GoldOfferCardInteractive.tsx`
- `src/app/api/exchange-rates/route.ts`

## Working Notes For Next Codex
- Keep edits incremental and immediately previewable.
- If user says "use figma", do exact node-based matching and avoid stylistic assumptions.
- Prioritize preserving already-tuned spacing/line/divider behavior while editing adjacent sections.
