# IJTIMAA — Plateforme de Gestion des Réunions et Suivi des Décisions

## 1. Product Identity
- **Official Name:** IJTIMAA (اجتماع)
- **Short Name:** IJTIMAA
- **Alternative / Historical Name:** CM Manager (Conseil Communal Manager) / cmR
- **URL Slug:** `ijtimaa`
- **Category:** Public Sector Governance / Municipal Administration & Council Management Software
- **Tagline:** Integrated Municipal Council Meeting Governance and Decision Tracking Platform
- **Product Type:** Desktop Application (Windows desktop application with optional Local Area Network access)
- **Current Version:** 1.0.0
- **Information Confidence:** High (Verified from source code, application package configuration, design system documentation, user manuals, and compiled binaries)

---

## 2. Short Description
IJTIMAA is an institutional desktop platform designed for Moroccan communal councils and territorial administrations to plan, conduct, and archive regulatory meetings, automate minutes and legal quorum checks, and monitor decision execution.

---

## 3. Full Description
IJTIMAA (formerly CM Manager) is a comprehensive governance desktop application engineered specifically for Moroccan communal councils, administrative committees, and public organizations governed by Organic Law No. 113.14. It streamlines the complete administrative lifecycle of meetings—from session scheduling, agenda preparation, and statutory convocation delivery to real-time attendance verification, automated quorum snapshots, and voting administration. 

The platform accelerates the drafting of official bilingual (Arabic and French) minutes with optional AI assistance, tracks deliberative decisions through to operational completion, and seals immutable legal archives. Featuring role-based access control, local-first data privacy, and built-in legal compliance checks, IJTIMAA ensures that public administrations conduct council sessions with full transparency, regulatory precision, and institutional rigor.

---

## 4. Target Audience
- **Communal Council Presidents & Board Members (Présidents de Conseils Communaux, Membres du Bureau):** For institutional oversight, session convening, voting certification, and high-level progress monitoring.
- **Council General Secretaries & Executive Directors (Secrétaires Généraux & Directeurs Généraux des Services):** For regulatory compliance enforcement, administrative coordination, and municipal workflow oversight.
- **Council Secretariat Staff & Minute Writers (Secrétariat du Conseil & Rédacteurs des PV):** For agenda drafting, convocation generation, real-time attendance recording, and minutes preparation.
- **Permanent Committee Chairs & Rapporteurs (Présidents et Rapporteurs des Commissions Permanentes):** For committee session planning, agenda item examination, and reporting.
- **Municipal Department Heads & Operational Teams (Chefs de Services Municipaux):** For executing council decisions, updating action progress, and fulfilling mandated deliverables.
- **Municipal IT Officers & System Administrators:** For managing user privileges, maintaining on-premise local data backups, and managing workstation licensing.

---

## 5. Problem Solved
1. **Complex Regulatory Deadlines & Statutory Governance:** Moroccan Organic Law No. 113.14 mandates strict procedural rules for communal councils (mandatory session months in February, May, and October; 7-clear-day notice periods for convocations; formula-based legal quorum based on council members currently in office). Manual scheduling frequently leads to compliance risks and administrative challenges.
2. **Scattered Governance Records:** Agendas, convocation receipts, attendance rosters, audio transcriptions, minutes, and resolutions are often maintained across disconnected spreadsheets and paper files, risking document loss and version discrepancies.
3. **Time-Consuming Minutes & Deliberations Drafting:** Compiling exhaustive, legally structured, bilingual minutes in Arabic and French manually can take weeks following session adjournment.
4. **Weak Decision Accountability & Tracking:** After resolutions are adopted, municipalities often lack a centralized system to assign departments, establish deadlines, track milestone percentages, and identify execution bottlenecks.
5. **Data Sovereignty & Privacy Concerns:** Territorial public institutions require complete confidentiality and on-premise local storage without being forced to host sensitive governance records on external public cloud servers.

---

## 6. Main Benefits
- **Guaranteed Legal Compliance:** An integrated compliance engine continuously verifies meeting parameters against Organic Law 113.14 requirements, flagging procedural discrepancies in real time.
- **Complete End-to-End Meeting Lifecycle:** Unifies planning, agenda building, convocation dispatch, quorum logging, deliberation drafting, voting, and decision execution into a single coherent system.
- **Native Bilingual Arabic & French Support:** Provides a fully localized bilingual interface with bidirectional support (Right-to-Left Arabic and Left-to-Right French) across all screens and generated documents.
- **Accelerated Document Production:** Generates standardized official documents, convocation letters, attendance sheets, and minutes in Word (.docx) and PDF (.pdf) formats with automated templating.
- **Actionable Execution Tracking:** Replaces static minutes with an interactive decision tracking cockpit that displays execution percentages, responsible parties, milestones, and delay alerts.
- **100% Local Data Sovereignty & Offline Reliability:** Operates fully offline on the host workstation with no mandatory cloud connection, ensuring local data privacy and dependable operation during council sessions.

---

## 7. Main Features

### Implemented & Verified Features

1. **Regulatory Session & Meeting Wizard (Gestion des Réunions & Sessions)**
   - *User-Facing Benefit:* Guides staff through creating Ordinary Sessions (February, May, October), Extraordinary Sessions, Committee Meetings, or Bureau Meetings with automatic validation of statutory constraints.
2. **Structured Agenda Builder (Élaboration de l'Ordre du Jour)**
   - *User-Facing Benefit:* Organizes agenda items with legal classifications (budget, urban planning, social affairs, conventions) and links each item to designated reporting committees and administrative services.
3. **Convocation Dispatch & Statutory Notice Tracking (Gestion des Convocations)**
   - *User-Facing Benefit:* Calculates mandatory 7-clear-day advance notice periods automatically, generates printable individual convocations, and tracks receipt confirmations (signed discharge, delivery receipts).
4. **Attendance Logging & Quorum Snapshot Engine (Présence & Calcul du Quorum)**
   - *User-Facing Benefit:* Logs attendees in real time and applies the statutory formula (50% + 1 of active council members in office) while excluding external guests from the legal quorum. Captures an immutable "Opening Snapshot" timestamped for council records.
5. **Absence Management & Statutory Impact Monitoring (Suivi des Absences)**
   - *User-Facing Benefit:* Records justifications (medical, official mission, unauthorized) and tracks cumulative absences in accordance with Article 67 of Law 113.14 to alert officials before statutory loss of membership thresholds are reached.
6. **Bilingual Minutes Builder with Optional AI Assistance (Rédaction des Procès-Verbaux)**
   - *User-Facing Benefit:* Enables rapid creation of structured minutes and deliberations in Arabic and French with ready-to-use legal formatting, rich text editing, and optional AI draft generation.
7. **Voting Administration & Decision Formalization (Prise de Décisions & Votes)**
   - *User-Facing Benefit:* Accurately registers votes (For, Against, Abstentions) per agenda item, formalizes adopted resolutions with their legal foundations, and assigns administrative references.
8. **Interactive Decision Tracking Cockpit (Suivi d'Exécution des Décisions)**
   - *User-Facing Benefit:* Converts voted decisions into trackable operational work items assigned to municipal departments with target deadlines, progress gauges (0%–100%), and status flags.
9. **Legal Archiving & Document Dossier Sealing (Archives & Immuabilité Légale)**
   - *User-Facing Benefit:* Closes and seals completed sessions into an immutable read-only archive, generating a complete administrative dossier ready for transmission to supervisory authorities (Préfecture / Province).
10. **Institutional KPI Dashboard & Analytics (Tableau de Bord & Indicateurs)**
    - *User-Facing Benefit:* Delivers immediate visual visibility into municipal activity: quorum trends, attendance rates, decision execution velocity, and compliance health alerts.
11. **Institutional Calendar (Calendrier Institutionnel)**
    - *User-Facing Benefit:* Displays an interactive calendar of upcoming sessions, committee hearings, legal deadlines, and convocation cut-off dates in monthly, weekly, and daily views.
12. **Role-Based Access Control & User Security (Gestion des Rôles & Sécurité)**
    - *User-Facing Benefit:* Protects administrative boundaries with granular roles (System Admin, Business Admin, President, Rapporteur, Agent, Reader), featuring admin password recovery, temporary password resets, and mandatory initial password change enforcement.
13. **Demo Data Management System (Données de Démonstration & Maintenance)**
    - *User-Facing Benefit:* Allows administrators to generate a realistic, relationally linked demonstration dataset across 13 administrative modules for staff training, and clean it up safely without affecting real municipal records.
14. **Dual-Code Secure Data Reset (Réinitialisation Sécurisée des Données)**
    - *User-Facing Benefit:* Prevents accidental system purges through a two-step authentication safeguard requiring both the system administrator password and a dynamic daily security formula.
15. **Local Network In-Chamber Access (Accès Réseau Local)**
    - *User-Facing Benefit:* Features an integrated local network server allowing authorized staff and elected members in the meeting chamber to access the application via browser over the local Wi-Fi/LAN without cloud dependence.
16. **Workstation Hardware Licensing Protection (Activation & Licence)**
    - *User-Facing Benefit:* Hardware-bound machine token authentication paired with annual activation codes to protect software deployment integrity.

### Planned, Optional, or External Integration Features
- **AI-Assisted Drafting (OpenRouter Integration):** Implemented as an optional enhancement; requires the user/organization to input an OpenRouter API key and connect to the internet. When no key is present or when offline, the complete manual drafting workflow remains 100% operational.
- **Automated SMS / WhatsApp Gateway Integration:** Not currently integrated as an automated dispatch gateway; convocation notifications and communication receipts are currently tracked administratively within the application.
- **Multi-Commune Cloud Federation:** Not implemented; the platform is intentionally architected as an on-premise, local-first sovereign installation.

---

## 8. Platform and Requirements
- **Supported Operating Systems:** Windows 10, Windows 11 (64-bit architecture / x64).
- **Desktop or Web:** Desktop Application (packaged with Electron, hosting an embedded local Express API and React single-page application; includes built-in Local Area Network browser sharing).
- **Offline Support:** Yes. All core workflows—session creation, attendance, quorum computation, minutes drafting, decision tracking, and document export—function completely offline without an internet connection.
- **Internet Requirements:** An active internet connection is only needed if utilizing the optional AI-assisted text generation feature (via external OpenRouter API).
- **Supported Languages:** Arabic (العربية - RTL) and French (Français - LTR). Complete bilingual toggle with dynamic text direction across the entire user interface.
- **Other Verified Requirements:**
  - **Processor:** 64-bit Intel or AMD processor.
  - **RAM:** Minimum 4 GB RAM (8 GB recommended for optimal multi-window performance).
  - **Disk Space:** Approximately 400 MB of free storage space for application and local data files.

---

## 9. Branding Assets
All paths are relative to the project root:

- **Primary Logo:**
  - Vector Primary (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-primary.svg`
  - Vector Primary Outlined (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-primary-outlined.svg`
  - Dark Background Variant (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-dark-background-outlined.svg`
  - Horizontal Layout (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-horizontal-outlined.svg`
  - Vertical Layout (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-vertical-outlined.svg`
  - Monochrome White / Black (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-monochrome-white-outlined.svg`
  - Embedded Raster Logo: `src/assets/logo.jpeg`
- **Application Icon:**
  - Windows Executable Icon: `src/assets/icon.ico`
  - High-Resolution PNG Icon: `src/assets/icon.png`
  - Vector Icon (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/02_APP_ICON/ijtimaa-app-icon.svg`
  - Pre-rendered Sizes Available: `16x16`, `32x32`, `64x64`, `128x128`, `256x256`, `512x512` in `docs/IJTIMAA_Dossier_Complet_Illustrator/02_APP_ICON/`
- **Brand Identity & Style Guide:**
  - Vector Mini-Charte (SVG): `docs/IJTIMAA_Dossier_Complet_Illustrator/04_CHARTE/ijtimaa-mini-charte.svg`
  - Mini-Charte Document (PDF): `docs/IJTIMAA_Dossier_Complet_Illustrator/04_CHARTE/ijtimaa-mini-charte.pdf`
- **Mockups and Previews:**
  - Application Icon Preview: `docs/IJTIMAA_Dossier_Complet_Illustrator/06_PREVIEWS/app-icon-preview.png`
  - Brand Identity Mockups: `docs/IJTIMAA_Dossier_Complet_Illustrator/06_PREVIEWS/brand-mockups.png`
  - Minutes Document Cover Concept: `docs/IJTIMAA_Dossier_Complet_Illustrator/06_PREVIEWS/proces-verbal-cover.png`
- **Official Brand Colors (Extracted from Brand Guidelines):**
  - **Primary (Deep Institutional Navy):** `#163A63` (RGB: 22, 58, 99 | CMYK: 78, 41, 0, 61)
  - **Secondary (Ocean Blue):** `#2878B8` (RGB: 40, 120, 184 | CMYK: 78, 35, 0, 28)
  - **Accent (Teal / Turquoise):** `#19A7A0` (RGB: 25, 167, 160 | CMYK: 85, 0, 4, 35)
  - **Dark Surface (Slate Charcoal):** `#18232F` (RGB: 24, 35, 47 | CMYK: 49, 26, 0, 82)
  - **Light Background (Soft Neutral):** `#F7F9FC` (RGB: 247, 249, 252 | CMYK: 2, 1, 0, 1)
- **Official Brand Typography:**
  - Latin Alphabet: *Inter* (SemiBold & Bold)
  - Arabic Alphabet: *Noto Sans Arabic* (Alternatives: *IBM Plex Sans Arabic*, *Noto Kufi Arabic*)

---

## 10. Version and Distribution
- **Current Version:** 1.0.0
- **Installer Available:** Yes
- **Installer Path:** `release/IJTIMAA-Setup-1.0.0-x64.exe` (File size: ~128 MB)
- **Distribution Notes:**
  - Self-contained NSIS Windows installer targeting 64-bit (`x64`) architectures.
  - Interactive setup wizard allowing custom installation directory selection.
  - Automatically creates Desktop and Start Menu shortcuts.
  - Configured with `deleteAppDataOnUninstall: false` to safeguard operational municipal data during application updates or reinstalls.
- **Verified Availability Status:** Production-Ready Windows installer compiled and tested.

---

## 11. Website Card Content
- **Card Title:** IJTIMAA (اجتماع)
- **Short Description:** The all-in-one governance desktop platform for communal councils—automating regulatory meetings, legal quorum validation, bilingual minutes, and decision execution tracking.
- **Category Label:** Public Administration & GovTech
- **Suggested CTA:** Request a Demo
- **Logo Asset Path:** `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-primary.svg`

---

## 12. Application Details Page Content
- **Hero Heading:** Institutional Governance & Council Meeting Management Made Simple
- **Hero Subtitle:** Empower your communal council with an automated, bilingual desktop solution built in strict compliance with Moroccan Organic Law 113.14. From statutory convocations to executed decisions.
- **Main Features:**
  - Automated Regulatory Meeting Wizard & Calendar Validation
  - Statutory Convocation Generation & Delivery Tracking
  - Real-Time Attendance Logging & Instant Quorum Calculations
  - Bilingual Minutes (PV) and Deliberation Builder with Export to Word & PDF
  - Interactive Decision Execution Cockpit with Milestone Progress Tracking
  - Immutable Legal Archiving & Supervisory Dossier Compilation
- **Benefits:**
  - Ensure total procedural compliance with national territorial administration standards.
  - Eliminate hours of manual paperwork and transcription after each session.
  - Maintain absolute accountability across municipal departments for voted resolutions.
  - Keep sensitive public records secure with local-first, offline-capable data architecture.
- **Requirements:** Windows 10 or 11 (64-bit), 4 GB RAM, 400 MB available disk space.
- **Suggested CTA:** Contact Us for an Institutional Demonstration

---

## 13. FAQ

### What regulatory framework does IJTIMAA follow?
IJTIMAA is designed specifically around Moroccan Organic Law No. 113.14 relating to Communes. It automatically enforces rules regarding mandatory ordinary session timing (February, May, October), statutory convocation notice periods (7 clear days), legal quorum formulas (50% + 1 of council members currently in office), and consecutive absence tracking (Article 67).

### Does IJTIMAA require an internet connection to function?
No. IJTIMAA is an on-premise desktop application that stores all data locally in the application environment. It runs completely offline without requiring internet connectivity for any core feature, including quorum computation, session administration, and document exports. An internet connection is only needed if you choose to enable the optional AI-assisted minutes generation.

### Can staff and council members access the system during a live session?
Yes. IJTIMAA features a built-in local area network access mode. The workstation hosting the application can serve authorized users connected to the same local chamber network (LAN/Wi-Fi) through their web browsers, enabling collaborative attendance monitoring and agenda viewing during meetings.

### In what languages is the application available?
The application is fully bilingual in Arabic and French. Users can toggle between languages instantly, with full support for Right-to-Left (RTL) Arabic and Left-to-Right (LTR) French layouts, input forms, and exported documents.

### How does the system handle decision tracking after meetings are closed?
Once decisions are adopted and recorded, they transition into the Decision Tracking module. Here, administrative staff assign each decision to specific municipal services, assign operational officers, set deadlines, and log progress percentages (0% to 100%) until final execution.

### Are municipal records protected against accidental loss or overwriting?
Yes. Completed meetings and their official minutes can be permanently archived and sealed into read-only format. Furthermore, administrative operations are recorded in an audit log, database backup exports can be downloaded at any time, and system resets require dual-code security verification.

---

## 14. Contact Configuration
- **WhatsApp Contact 1:** To be configured centrally by the website administrator.
- **WhatsApp Contact 2:** To be configured centrally by the website administrator.
- **Product-Specific Contact Notes:** When requesting a demonstration or software activation, clients should specify their Municipality / Commune name, Province / Prefecture, and the target workstation Machine ID (generated within the application's activation window).

---

## 15. Information Requiring Confirmation
The following items should be confirmed by the product owner prior to publishing marketing materials:
1. **Public Launch & Distribution Date:** Specific commercial availability date for public release.
2. **Commercial Pricing Structure:** Pricing model (e.g., perpetual workstation license, annual institutional subscription, or tiered by communal council size).
3. **Official Support Channels:** Official public telephone numbers and customer support email addresses to be published on the marketing website.
4. **AI Token / API Key Policy:** Whether commercial client licenses include bundled AI generation credits or if client municipalities must supply their own OpenRouter API key.
5. **Hardware Certification Standards:** Official minimum hardware certification standards if bundled with pre-configured municipal hardware kits.

---

## 16. Website Integration Notes
- **Branding Consistency:** The application has transitioned branding from the legacy development name *CM Manager* to the official commercial product name **IJTIMAA (اجتماع)**. All public-facing website headings, metadata, and promotional text should feature **IJTIMAA** as the primary product name, referencing "CM Manager" only as an explanatory subtitle or legacy descriptor where helpful.
- **Vector Logo Deployment:** Use `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-primary.svg` for light-background web sections and `docs/IJTIMAA_Dossier_Complet_Illustrator/01_LOGOS_SVG/ijtimaa-logo-dark-background-outlined.svg` for dark-mode or footer sections.
- **Product Color Palette:** The website product page CSS should mirror the official brand palette:
  - Header / Accent: `#163A63` (Deep Institutional Navy) and `#19A7A0` (Teal)
  - Interactive Accents: `#2878B8` (Ocean Blue)
  - Page Backgrounds: `#F7F9FC` (Soft Light Gray)
- **Installer Downloads:** The verified Windows executable is located at `release/IJTIMAA-Setup-1.0.0-x64.exe`. Ensure the web hosting server serves this file with appropriate MIME types (`application/vnd.microsoft.portable-executable` or `application/octet-stream`).
- **Production Screenshots Notice:** While conceptual previews are available in `docs/IJTIMAA_Dossier_Complet_Illustrator/06_PREVIEWS/`, high-resolution 1080p screenshots of the live system (showing the French and Arabic dashboards, session cockpit, and tracking views) should be captured from the running desktop application and uploaded to the website's image CDN.
