# youFasApps — Premium Desktop Software Showcase

`youFasApps` is the official showcase website presenting our suite of desktop software applications. It is engineered with vanilla HTML5, CSS3, and JavaScript, featuring a custom CSS/SVG-built brand identity, a signature 3-second progressive logo formation sequence, complete trilingual localization (Arabic, French, English), and light/dark themes.

> **Note:** This is a static product showcase website. It does **not** host direct downloads, process payments, or track user activation. Product acquisition and inquiries are handled directly via WhatsApp consultation.

---

## 1. Project Architecture

```text
youFasApps/
│
├── index.html                   # Root entrypoint (redirects to website/)
├── logo.png                     # Visual brand reference image (recreated purely in vector SVG)
├── README.md                    # Main repository documentation
│
├── apps/                        # Original desktop application projects (source of truth)
│   └── CM-manager/              # IJTIMAA platform project
│       ├── APP_INFO.md          # Complete verified product specifications
│       └── branding/            # Official vector & raster branding assets
│           ├── ijtimaa-app-icon.svg
│           ├── ijtimaa-app-icon.png
│           ├── ijtimaa-logo-primary.svg
│           ├── ijtimaa-logo-dark.svg
│           ├── ijtimaa-logo-horizontal.svg
│           ├── ijtimaa-logo-vertical.svg
│           ├── ijtimaa-logo-compact.svg
│           └── ijtimaa-symbol.svg
│
└── website/                     # Showcase website codebase
    ├── index.html               # Main showcase homepage
    ├── README.md                # Website maintenance and onboarding guide
    │
    ├── apps/
    │   └── cm-manager.html      # Dedicated details page for IJTIMAA (CM Manager)
    │
    ├── assets/
    │   └── brand/               # Pure Vector Brand Identity Recreations
    │       ├── favicon.svg      # Vector app symbol for browser tabs & icons
    │       ├── youfasapps-symbol.svg   # Scalable standalone app symbol
    │       ├── youfasapps-compact.svg  # Compact logo for navbar & footer
    │       └── youfasapps-logo.svg     # Full brand lockup with tagline
    │
    ├── css/
    │   ├── variables.css        # Design tokens, light & dark theme variables
    │   ├── base.css             # Fluid typography, resets, bidirectional RTL rules
    │   ├── components.css       # Navigation, cards, hero, footer, WhatsApp modal
    │   ├── animations.css       # 3-second progressive formation, 3D tilt, reveals
    │   └── details.css          # Product details page, spec grid, FAQ accordion
    │
    └── js/
        ├── config.js            # Central brand info, WhatsApp numbers, defaults
        ├── apps.js              # Application data registry (verified metadata)
        ├── translations.js      # Trilingual dictionary (EN, FR, AR)
        ├── i18n.js              # Localization engine & RTL switcher
        ├── theme.js             # Light/dark mode manager with persistence
        ├── contact.js           # WhatsApp modal dialog & prefilled message generator
        ├── motion.js            # 3D card tilt & IntersectionObserver scroll reveal
        ├── brand-animation.js   # Signature 3-second logo formation orchestrator
        ├── main.js              # Homepage showcase renderer & search/filtering
        └── details.js           # Details page interactive controller & FAQ accordion
```

---

## 2. Brand Identity & Signature 3-Second Formation Animation

### Pure CSS & SVG Brand Recreation
In strict compliance with requirements, the provided `logo.png` image is **not** used as an `<img>` or background. Instead, the brand has been faithfully recreated with crisp, scalable vector geometry:
- **App Symbol:** A rounded-square squircle with an electric-blue to royal-blue linear gradient, specular sheen border, and a 2×2 grid:
  - Top-left: Rounded solid white square.
  - Top-right: Rounded vibrant cyan square (`#00E5FF`).
  - Bottom-left: Rounded vibrant cyan square (`#00E5FF`).
  - Bottom-right: Stylized capital letter "F" in solid white (`#FFFFFF`) integrated into the cell shape.
- **Wordmark:** Bold sans-serif `youFasApps` with `youFas` in theme-adaptive neutral (white in dark mode, deep navy in light mode) and `Apps` in bright cyan gradient.
- **Tagline:** `Discover. Explore. Download.` in refined, tracked typography.

### 3-Second Formation Sequence:
On initial load, the logo visually assembles itself across ~3000 ms:
1. **0–600 ms:** Symbol foundation — the base squircle scales in with soft electric-blue glow and specular highlight.
2. **600–1600 ms:** Geometric assembly — the 4 cells move diagonally into place with staggered easing.
3. **1150–1900 ms:** "F" detail — the stylized white letter "F" reveals and locks into the bottom-right cell.
4. **1500–2400 ms:** Wordmark reveal — `youFas` appears first, followed by the vibrant `Apps` accent gradient.
5. **2200–2700 ms:** Tagline — `Discover. Explore. Download.` fades in with subtle upward translation.
6. **2700–3000 ms:** Final settle — excess glow settles and the overlay transitions smoothly into the homepage.

**Performance & Accessibility Safeguards:**
- `sessionStorage` records whether the animation has already played in the current browsing session to avoid unnecessary replay on navigation.
- `prefers-reduced-motion` immediately disables the animation.
- A "Skip" button and click-to-dismiss allow instant bypass.
- A fail-safe timer (3200 ms) guarantees visitors are never blocked.
- Back-forward cache restore (`pageshow`) removes the overlay automatically.

---

## 3. Discovered Applications Inventory

### 1. **IJTIMAA (اجتماع)** *(Formerly CM Manager / Conseil Communal Manager)*
- **Category:** Public Administration & GovTech
- **Platform:** Windows 10, Windows 11 (64-bit architecture)
- **Offline Capability:** 100% Offline Core (No internet required)
- **Regulatory Framework:** Moroccan Organic Law No. 113.14 relating to Communes
- **Languages:** Arabic (العربية - RTL) & French (Français - LTR)
- **16 Verified Feature Modules:**
  1. Regulatory Session Wizard (Ordinary in Feb/May/Oct, extraordinary)
  2. Structured Agenda Builder with legal classifications
  3. Convocation Notice Engine (7-clear-day statutory calculation)
  4. Attendance & Quorum Engine (50% + 1 active members snapshot)
  5. Absence Tracking & Article 67 Statutory Impact Monitoring
  6. Bilingual Minutes Builder (PV) in Word & PDF
  7. Voting Administration (For, Against, Abstentions) & Legal references
  8. Interactive Decision Tracking Cockpit (Milestones 0%–100%)
  9. Legal Archiving & Supervisory Dossier Sealing (Prefecture / Province)
  10. Institutional KPI Dashboard & Visual Analytics
  11. Institutional Governance Calendar
  12. Granular Role-Based Access Control (RBAC) & Local Security
  13. Demo Data Training Environment across 13 modules
  14. Dual-Code Secure Data Reset Protection
  15. Local Network (LAN) In-Chamber Access via Browser
  16. Workstation Hardware Licensing Protection

---

## 4. Local Development & Testing

Run any lightweight static server:

### Option A: Python (Built-in)
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000/` or `http://localhost:3000/website/`.

### Option B: Node.js (npx serve)
```bash
npx serve .
```

---

## 5. Deployment Guide

### GitHub Pages
1. Push this repository to GitHub.
2. In repository settings, navigate to **Pages**.
3. Under **Source**, select **Deploy from a branch** and choose `main` with root `/`.
4. The root `index.html` will automatically direct visitors to `website/index.html`.

### Netlify
1. Connect your repository to Netlify.
2. Set the **Publish directory** to `.`.

---

## 6. How to Configure WhatsApp Contact Numbers

Open `website/js/config.js` and locate the `whatsapp` section:

```javascript
whatsapp: {
  contact1: {
    id: "sales",
    number: "2126XXXXXXXX", // International format (digits only, no + or spaces)
    display: "+212 6XX-XXXXXX",
    isConfigured: true,     // Set to true once verified
    badge: { en: "Sales & Inquiries", fr: "Ventes & Informations", ar: "المبيعات والاستفسارات" }
  },
  contact2: {
    id: "demo",
    number: "2127XXXXXXXX",
    display: "+212 7XX-XXXXXX",
    isConfigured: true,
    badge: { en: "Institutional Demo", fr: "Démonstrations & Support", ar: "العروض التوضيحية والدعم التقني" }
  }
}
```

---

## 7. How to Add a New Application

1. **Place documentation and assets:** Create `apps/NewApp/` containing `APP_INFO.md` and `branding/`.
2. **Register application metadata in `website/js/apps.js`:** Add an entry to the `APPS_DATA` array following the existing schema.
3. **Create the details page:** Duplicate `website/apps/cm-manager.html` to `website/apps/new-app-slug.html`, update `<body data-app-slug="new-app-slug">`. The shared controller automatically hydrates the page!
4. **Update footer/nav links:** Optionally add the application link to the footer navigation in `website/index.html`.
