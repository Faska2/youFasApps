# youFasApps — Website Maintenance & Onboarding Guide

This directory contains the static website codebase for **youFasApps**, engineered with pure HTML5, CSS3, and vanilla JavaScript.

---

## 1. Architecture Overview

- `index.html`: Main showcase homepage featuring the animated vector brand intro, sticky navigation, hero showcase, applications portfolio, philosophy cards, contact channels, and footer.
- `apps/`: Dedicated details pages for each verified application:
  - `cm-manager.html`: Dedicated showcase page for **IJTIMAA (اجتماع)** — Municipal Council Meeting Governance.
  - `bawabat.html`: Dedicated showcase page for **BAWABAT (بوابة المراسلات)** — Administrative Correspondence & Bureau d'Ordre.
- `assets/brand/`: Recreated vector brand assets:
  - `favicon.svg`: Scalable vector browser tab icon (rounded square symbol with 2×2 cell grid and stylized white "F").
  - `youfasapps-symbol.svg`: Standalone vector app symbol.
  - `youfasapps-compact.svg`: Compact logo (symbol + `youFasApps` wordmark) for navbar and footer.
  - `youfasapps-logo.svg`: Full brand lockup (symbol + wordmark + `Discover. Explore. Download.` tagline).
- `css/`: Modular stylesheets:
  - `variables.css`: Design tokens, intentional Light & Dark theme variables.
  - `base.css`: Fluid typography, resets, bidirectional RTL layout rules.
  - `components.css`: Navbar, cards, hero, footer, WhatsApp modal, brand styling.
  - `animations.css`: 3-second progressive logo formation sequence, 3D tilt, scroll reveals.
  - `details.css`: Application details page, spec grid, FAQ accordion.
- `js/`: Modular vanilla JavaScript controllers:
  - `config.js`: Central settings (WhatsApp contacts, brand info, defaults).
  - `apps.js`: Application registry with complete verified trilingual data.
  - `translations.js`: Trilingual interface dictionary (English, French, Arabic).
  - `i18n.js`: Dynamic language switcher and RTL layout engine.
  - `theme.js`: Light/Dark theme switcher with system preference detection.
  - `contact.js`: WhatsApp modal dialog with pre-filled message generator.
  - `motion.js`: Restrained 3D tilt, subtle floating, and scroll reveal animations.
  - `brand-animation.js`: Signature 3-second logo formation orchestrator.
  - `main.js`: Homepage card rendering and search/category filtering.
  - `details.js`: Product details page accordion, sub-navigation, and data hydration.

---

## 2. Signature 3-Second Logo Formation Animation

The initial load of the website executes a signature, progressive vector assembly sequence across ~3000 ms:
- **Phase 1 (0–600 ms):** Symbol foundation — the base squircle scales in with soft electric-blue glow and specular sheen.
- **Phase 2 (600–1600 ms):** Geometric assembly — the 4 cells move diagonally into place with staggered easing (top-left white cell, top-right cyan cell, bottom-left cyan cell).
- **Phase 3 (1150–1900 ms):** "F" detail — the stylized white letter "F" reveals and locks into the bottom-right cell.
- **Phase 4 (1500–2400 ms):** Wordmark reveal — `youFas` appears first, followed immediately by the vibrant `Apps` accent gradient.
- **Phase 5 (2200–2700 ms):** Tagline — `Discover. Explore. Download.` fades in with subtle upward translation.
- **Phase 6 (2700–3000 ms):** Final settle — excess glow settles and the overlay transitions smoothly into the homepage.

### Accessibility & Performance Safeguards:
- **Session Control:** Stored in `sessionStorage` (`youfas_intro_played`) so repeat navigations in the same session bypass the animation immediately.
- **Reduced Motion:** If `prefers-reduced-motion` is active, the overlay is hidden immediately.
- **User Skip:** A "Skip" button allows instant dismissal at any moment.
- **Fail-Safe Timer:** A hard timeout dismisses the overlay at 3200ms to guarantee visitors are never blocked.
- **BFCache:** Restores from the back-forward cache automatically dismiss the overlay via `pageshow`.

---

## 3. Modifying WhatsApp Contact Channels

Edit `website/js/config.js`:
- `CONFIG.whatsapp.contact1.number`: Enter the verified international phone number (digits only, no `+` or spaces).
- `CONFIG.whatsapp.contact1.display`: Formatted display representation (e.g. `+212 600-000000`).
- `CONFIG.whatsapp.contact1.isConfigured`: Set to `true` when ready.

---

## 4. Adding a New Application to the Showcase

1. Add your product entry to the `APPS_DATA` array in `website/js/apps.js`.
2. Copy `website/apps/cm-manager.html` to `website/apps/[your-app-slug].html`.
3. Set `<body data-app-slug="your-app-slug">` in the new file.
4. The page will automatically render all benefits, features, specs, audience roles, and FAQ in Arabic, French, and English!
