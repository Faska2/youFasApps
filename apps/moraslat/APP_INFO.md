# بوابة المراسلات (BAWABAT)

## 1. Product Identity
- **Official Name**: بوابة المراسلات (BAWABAT)
- **Short Name**: BAWABAT / بوابة المراسلات
- **URL Slug**: bawabat
- **Category**: Administrative Management / Bureau d'Ordre & Government Mail Tracking
- **Tagline**: The Comprehensive Digital Platform for Administrative Correspondence & Order Bureau Management
- **Product Type**: Standalone Desktop Application (Electron + Embedded Node.js/Express + Local SQLite3)
- **Current Version**: 1.0.0
- **Information Confidence**: High (verified directly from source code, database schemas, Electron main configuration, translation dictionaries, and NSIS installer)

---

## 2. Short Description
BAWABAT is an offline-first Windows desktop platform for public administrations and private organizations, streamlining the complete lifecycle of incoming, outgoing, and internal correspondence with legal compliance, digital parapheur workflows, and secure local archiving.

---

## 3. Full Description
BAWABAT (بوابة المراسلات) is a purpose-built desktop management system engineered to modernize and digitize the Bureau d'Ordre (Mail & Registry Office). Operating completely offline via an embedded local database, BAWABAT centralizes incoming mail registration with QR-coded deposit receipts, departmental routing, multi-tier digital parapheur visa workflows, and sequential outgoing dispatch records. Built with bilingual Arabic (native RTL) and French interfaces, the system enforces statutory compliance with administrative transparency standards (such as Moroccan Laws 55-19 and 31-13). It features official registry printouts, classification plans with retention schedules (DUA), physical shelf/box archive indexing, and end-to-end cryptographic audit trails. BAWABAT gives administrative teams total data sovereignty and operational continuity without ongoing cloud dependencies.

---

## 4. Target Audience
- **Public Administrations & Municipalities**: Municipal councils (communes), prefectures, regional directorates, and provincial councils requiring strict compliance with mail tracking and public procedural laws.
- **Semi-Public & Educational Institutions**: Universities, academies, public utility agencies, and regional health directorates.
- **Corporate Legal & Executive Secretariats**: Private enterprises, legal firms, and corporate headquarters managing high volumes of formal contracts, tenders, and official dispatches.
- **Central Mail Offices (Bureaux d'Ordre)**: Order bureau officers, internal dispatchers, administrative archivists, and executive department heads.

---

## 5. Problem Solved
- **Eliminates Lost Documents & Untracked Mail**: Replaces vulnerable, fragmented paper logbooks and disorganized spreadsheets with sequential, tamper-proof registers.
- **Resolves Regulatory Compliance & Proof of Deposit Gaps**: Automatically generates legal deposit receipts with verifiable QR codes and tracks statutory response deadlines (Law 55-19).
- **Removes Administrative Bottlenecks**: Accelerates internal mail routing and multi-tier approval cycles through a built-in digital parapheur for visas, annotations, and approvals.
- **Solves Data Privacy & Cloud Reliance Risks**: Stores all correspondence records, scanned attachments, and audit logs locally on client infrastructure with no mandatory external server or cloud subscription.
- **Bridges Physical & Digital Archiving**: Bridges active correspondence with intermediate/definitive archiving through structured classification plans and physical warehouse storage indexing (room/shelf/box).

---

## 6. Main Benefits
1. **Total Data Sovereignty & Offline Reliability**: All databases and scanned documents reside on the local workstation, ensuring uninterrupted operations even without internet connectivity.
2. **Strict Legal & Regulatory Alignment**: Conforms to administrative procedural deadlines, automated reference numbering, and official registry standards.
3. **End-to-End Traceability & Accountability**: Granular audit logs track every action, approval, transfer, and document modification across the entire organization.
4. **Intuitive Bilingual Usability**: Native Arabic right-to-left (RTL) and French left-to-right (LTR) interfaces respect regional administrative conventions.
5. **Zero Recurring Infrastructure Costs**: Runs as an independent desktop package without requiring expensive cloud database subscriptions or third-party hosting.

---

## 7. Main Features

### Implemented Features (Verified in Codebase)

1. **Incoming Mail Registry (Registre d'Arrivée)**
   - *User Benefit*: Instantly registers received letters, tenders, and official packages with unique chronological numbers, sender metadata, scanning attachments, and immediate printable deposit receipts (Récépissé de dépôt) featuring QR codes for public verification.
2. **Outgoing Mail Management & Locked Archiving (Courrier Sortant)**
   - *User Benefit*: Manages outgoing correspondence with automated sequential reference numbering (`BO-S-YYYY-XXXX`), dispatch method tracking (postal, courier, hand delivery), dispatch proofs, and permanent record locking to prevent post-dispatch alterations.
3. **Departmental Routing & Assignment Tracking**
   - *User Benefit*: Dispatches incoming correspondence directly to internal departments, divisions, or individual agents with priority flags, task instructions, and statutory deadline countdowns.
4. **Digital Parapheur & Multi-Tier Validation (Parapheur Électronique)**
   - *User Benefit*: Enables multi-level document review (Visa, Correction, Approval, Rejection) with formal annotations, draft revisions, and SHA-256 integrity verification before official signature and dispatch.
5. **Official Legal Registers Generation**
   - *User Benefit*: Automatically compiles and exports printable statutory registers (Arrival Register, Dispatch Register, Administrative Acts) in standardized administrative formats.
6. **Comprehensive Archival Lifecycle & DUA Management**
   - *User Benefit*: Implements legal retention rules (Durée d'Utilité Administrative - DUA), transfer registers (versements), disposal processes (éliminations), and physical storage indexing down to room, rack, shelf, and box numbers.
7. **Administrative Procedures Catalog (Law 55-19)**
   - *User Benefit*: Maintains a centralized repository of administrative formalities, documenting required citizen paperwork, maximum legal response delays, and "silence-is-consent" statutory triggers.
8. **Citizen Inquiries & Complaints Tracking (Law 31-13)**
   - *User Benefit*: Dedicated registry for citizen complaints, suggestions, and access-to-information requests with statutory response monitoring.
9. **Real-Time Operational Dashboard & KPI Monitoring**
   - *User Benefit*: Visual overview of daily incoming and outgoing traffic, pending parapheur approvals, urgent or overdue assignments, and delivery success rates.
10. **Role-Based Access Control & Immutable Audit Logging**
    - *User Benefit*: Enforces role separation (Admin, Agent BO, Chef de Service, Archiviste, Directeur) and logs all user actions with IP, timestamp, and affected record details.
11. **Local Database Backup & Restore Utility**
    - *User Benefit*: Built-in desktop tool allowing administrators to create timestamped database snapshots and restore data directly from the settings interface.

### Planned or Unverified Features
- **Direct Hardware Scanner Integration (TWAIN/WIA)**: Currently, scanned documents are uploaded via file dialog / drag-and-drop. Direct scanner driver automation is not verified.
- **Cloud Synchronization & Multi-Site Replication**: Currently designed as a standalone local desktop installation; distributed multi-site sync requires confirmation.
- **Automated SMS Gateway Notifications**: Outbound SMTP email and external WhatsApp web dispatch links are present in code; direct SMS gateway integration is unverified.

---

## 8. Platform and Requirements
- **Supported Operating Systems**: Windows 10, Windows 11 (64-bit architecture verified).
- **Desktop or Web**: Standalone Desktop Application (Electron runtime bundling an embedded Express Node.js local service and React frontend).
- **Offline Support**: Yes, 100% offline support. All core operations, databases, and document attachments function without network access.
- **Internet Requirements**: No internet connection required for core operations. Internet is strictly optional for outbound SMTP email dispatches and opening external WhatsApp web links.
- **Supported Languages**: Arabic (العربية - native RTL) and French (Français - LTR).
- **Other Verified Requirements**: Minimum 4 GB RAM recommended; approximately 500 MB free disk space for the application and runtime, plus storage for scanned document attachments.

---

## 9. Branding Assets
- **Logo (Horizontal)**: `RecoveredProject/assets/branding/logo-horizontal.svg`
- **Logo (Horizontal Dark)**: `RecoveredProject/assets/branding/logo-horizontal-dark.svg`
- **Logo (Vertical)**: `RecoveredProject/assets/branding/logo-vertical.svg`
- **Application Icon**: `RecoveredProject/assets/branding/logo-icon.svg`
- **Windows Executable Icon**: `RecoveredProject/assets/icons/icon.ico`
- **Vector Master Files**:
  - `RecoveredProject/assets/branding/bawabat_horizontal.eps`
  - `RecoveredProject/assets/branding/bawabat_vertical.eps`
  - `RecoveredProject/assets/branding/bawabat_icon.eps`
- **Screenshots**: Currently, no dedicated marketing screenshots exist in the root assets folder. Official UI screenshots should be captured from the desktop application before launch.
- **Other Relevant Assets**: `RecoveredProject/assets/branding/preview.png`
- **Suggested Brand Colors**:
  - Primary Navy Blue: `#0B2D5B`
  - Brand Royal Blue: `#2563EB`
  - Accent Sky Blue: `#1686D9`
  - Accent Teal: `#2EC4B6`
  - Neutral Slate: `#425B76`
  - Background Neutral: `#F8FAFC`

---

## 10. Version and Distribution
- **Current Version**: 1.0.0
- **Installer Available**: Yes
- **Installer Path**: `RecoveredProject/dist_setup/بوابة المراسلات (BAWABAT) Setup 1.0.0.exe` (181.6 MB, NSIS 64-bit installer)
- **Distribution Notes**: Built with NSIS for 64-bit Windows environments. Packages the Chromium runtime, Node.js backend, React frontend, and auto-provisions the SQLite database schema and user upload storage upon installation.
- **Verified Availability Status**: Built and ready for local distribution. Commercial licensing servers and digital store distribution remain to be confirmed by the owner.

---

## 11. Website Card Content
- **Card Title**: BAWABAT — بوابة المراسلات
- **Short Description**: Modern desktop management system for administrative mail registry, incoming/outgoing tracking, digital parapheur visas, and physical/digital archiving.
- **Category Label**: Administrative & Public Sector Solutions
- **Suggested CTA**: Discover BAWABAT
- **Logo Asset Path**: `RecoveredProject/assets/branding/logo-horizontal.svg`

---

## 12. Application Details Page Content
- **Hero Heading**: The Complete Digital Solution for Bureau d'Ordre & Administrative Mail Tracking
- **Hero Subtitle**: Transform your organization's administrative correspondence with automated registration, QR deposit receipts, collaborative digital visas, and legal archiving—fully operational offline.
- **Main Features**:
  - Chronological incoming and outgoing mail registration with automated reference numbers.
  - Printable deposit receipts (Récépissé de dépôt) with QR code verification.
  - Multi-tier digital parapheur for visas, annotations, and approvals.
  - Complete archival lifecycle management with DUA retention schedules and warehouse indexing.
  - Automated compilation and export of statutory legal registers.
- **Benefits**:
  - 100% offline operational sovereignty—zero cloud dependence.
  - Full compliance with administrative transparency laws (Law 55-19 & Law 31-13).
  - Native bilingual Arabic (RTL) and French (LTR) interface.
  - Tamper-proof audit trails ensuring accountability across all departments.
- **Requirements**: Windows 10/11 (64-bit), 4 GB RAM, 500 MB disk space.
- **Suggested CTA**: Request Information / Schedule a Demonstration

---

## 13. FAQ

### Q1: Does BAWABAT require a permanent internet connection?
**A**: No. BAWABAT is designed as an offline-first desktop application. All database transactions, mail registrations, document attachments, and search functions run entirely on your local computer or local network without requiring internet access.

### Q2: What operating systems are supported?
**A**: BAWABAT officially supports 64-bit versions of Microsoft Windows 10 and Windows 11.

### Q3: How does BAWABAT help comply with administrative simplification laws (e.g., Law 55-19)?
**A**: The platform includes dedicated modules for administrative procedures with statutory processing deadlines, automatic deposit receipt generation with verification QR codes, and tracking for citizen requests and complaints under Law 31-13.

### Q4: Can the application be used in both Arabic and French?
**A**: Yes. BAWABAT features full bilingual support. Users can switch seamlessly between Arabic (with native right-to-left layout) and French (left-to-right).

### Q5: How is data backed up?
**A**: The application includes a built-in database management utility in the settings menu, allowing authorized administrators to generate timestamped SQLite backup files and restore them when needed.

---

## 14. Contact Configuration
- **WhatsApp Contact 1**: To be configured centrally by the website administrator.
- **WhatsApp Contact 2**: To be configured centrally by the website administrator.
- **Product-Specific Contact Notes**: Standard inquiry topic: "Inquiry regarding BAWABAT - Administrative Mail Management Desktop Solution".

---

## 15. Information Requiring Confirmation
1. **Commercial Licensing & Pricing**: The software includes machine-fingerprint activation mechanisms in code, but official licensing tiers (per-workstation, organizational site license, or subscription) must be confirmed by the owner.
2. **Official Contact Information**: Company legal entity name, official support email, phone numbers, and website domain.
3. **Marketing Screenshots**: High-resolution showcase screenshots of the dashboard, arrival registry, and parapheur interface need to be captured and added to the website assets folder.
4. **Hardware Scanner Integration Plans**: Confirmation whether future updates will include direct TWAIN/WIA scanner integration or cloud backup options.

---

## 16. Website Integration Notes
- **Product Representation**: BAWABAT should be presented as an enterprise-grade administrative desktop solution tailored for governmental organizations, municipal councils, and structured corporate secretariats.
- **Asset Mapping**:
  - Horizontal Logo: `RecoveredProject/assets/branding/logo-horizontal.svg`
  - Horizontal Dark Logo: `RecoveredProject/assets/branding/logo-horizontal-dark.svg`
  - Vertical Logo: `RecoveredProject/assets/branding/logo-vertical.svg`
  - Application Icon: `RecoveredProject/assets/branding/logo-icon.svg`
  - Windows Executable Icon: `RecoveredProject/assets/icons/icon.ico`
  - Production Installer File: `RecoveredProject/dist_setup/بوابة المراسلات (BAWABAT) Setup 1.0.0.exe`
- **Missing Assets for Website**:
  - High-resolution application screenshots (Hero mockup, dashboard view, arrival workflow view, and parapheur view) are required before launching the public product page.
- **Language & Presentation**: Given the target market, the website showcase should highlight both Arabic and French capabilities, with Arabic given prominent positioning.
