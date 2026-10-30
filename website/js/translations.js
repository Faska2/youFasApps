/**
 * youFasApps - Centralized Trilingual Translation Dictionary
 * Comprehensive localization strings for English (en), French (fr), and Arabic (ar).
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    brandTitle: "youFasApps",
    navHome: "Home",
    navApps: "Applications",
    navAbout: "About",
    navContact: "Contact",
    themeToggleAria: "Toggle light or dark theme",
    langSelectAria: "Select website language",
    mobileMenuAria: "Toggle navigation menu",

    // Hero
    heroBadge: "Desktop Software Engineering",
    heroHeadline: "Software That Works for You.",
    heroSubtitle: "Discover thoughtfully designed desktop applications that simplify complex workflows, guarantee statutory compliance, and empower organizations.",
    heroExploreCta: "Explore Applications",
    heroContactCta: "Contact Us",
    heroTrustOffline: "100% Local & Sovereign",
    heroTrustNative: "Native Windows Performance",
    heroTrustDirect: "Direct WhatsApp Inquiries",

    // Showcase
    showcaseBadge: "Software Portfolio",
    showcaseTitle: "Engineered Desktop Applications",
    showcaseSubtitle: "Explore our verified software suite built for institutional rigor and everyday operational clarity.",
    searchPlaceholder: "Search applications by keyword or domain...",
    filterAll: "All Applications",
    filterGovtech: "Meeting Management",
    filterAdmin: "Correspondence & Registry",
    filterUpcoming: "In Development",
    badgeInDev: "In Development",
    btnComingSoon: "Coming Soon",
    btnPreOrder: "Inquire via WhatsApp",
    btnViewDetails: "View Details",
    btnGetApp: "Get App",
    noResultsTitle: "No applications found",
    noResultsDesc: "Try adjusting your search terms or filter selection.",

    // About
    aboutBadge: "Our Philosophy",
    aboutTitle: "Crafting Reliable Software for Demanding Workflows",
    aboutText: "youFasApps focuses on engineering focused, offline-capable desktop solutions. We craft institutional-grade tools that respect user sovereignty, ensure data privacy, and deliver uncompromising reliability.",
    aboutCard1Title: "Local-First Sovereignty",
    aboutCard1Desc: "We engineer desktop tools that operate 100% offline. Sensitive municipal records and files never leave your local machines without your explicit command.",
    aboutCard2Title: "Regulatory Precision",
    aboutCard2Desc: "Our applications are structured directly around governing laws and administrative statutory rules, turning strict procedural mandates into frictionless workflows.",
    aboutCard3Title: "Direct Human Consultation",
    aboutCard3Desc: "We eliminate automated bots and complicated ticketing portals. Engage directly with our development leadership via WhatsApp for licensing and demonstrations.",

    // Contact
    contactBadge: "Contact & Acquisition",
    contactTitle: "Ready to Transform Your Workflow?",
    contactSubtitle: "We distribute our applications through direct consultation. Reach out on WhatsApp to request an application, discuss licensing, or schedule a personalized institutional demonstration.",
    contactDevNote: "Configuration Note: The contact channels below are managed centrally in js/config.js. Replace placeholders with verified phone numbers prior to public release.",
    contactOpenWa: "Message on WhatsApp",
    contactAvailabilityNote: "Available for municipal councils, public institutions, and professional organizations.",
    contactChannel1Num: "WhatsApp 1",
    contactChannel1Badge: "General & Sales",
    contactChannel1Title: "Commercial & Licensing",
    contactChannel1Desc: "Inquire about workstation deployment, institutional licensing models, and acquisition agreements.",
    contactChannel2Num: "WhatsApp 2",
    contactChannel2Badge: "Demonstrations",
    contactChannel2Title: "Institutional Demos & Tech",
    contactChannel2Desc: "Request an interactive walk-through session for your council, administrative committee, or technical department.",
    contactDevPlaceholder: "Development Placeholder",

    // WhatsApp Modal
    modalTitle: "Request Application",
    modalSubtitle: "Contact our team directly on WhatsApp to obtain your licensed copy or request an institutional demo.",
    modalAppLabel: "Target Application:",
    modalChooseChannel: "Select a Contact Channel:",
    modalPrefilledLabel: "Prefilled Message:",
    modalClose: "Close",
    modalConfigNotice: "Development notice: Official phone number is configurable in config.js.",

    // Details Page Common
    breadcrumbHome: "Home",
    breadcrumbApps: "Applications",
    detailsVersionLabel: "Version",
    detailsPlatformLabel: "Platform",
    detailsOfflineLabel: "Offline Mode",
    detailsLanguagesLabel: "Languages",
    detailsReleaseLabel: "Release Status",
    detailsBackToApps: "Back to Applications",
    
    // Details Page Tabs
    navTabOverview: "Overview",
    navTabBenefits: "Key Benefits",
    navTabFeatures: "Verified Features",
    navTabRequirements: "System Requirements",
    navTabAudience: "Target Audience",
    navTabFaq: "FAQ",

    // Details Sections
    sectionOverviewTitle: "Institutional Overview",
    sectionBenefitsTitle: "Core Institutional Benefits",
    sectionFeaturesTitle: "Verified Feature Modules",
    sectionRequirementsTitle: "Hardware & Platform Requirements",
    sectionAudienceTitle: "Designed for Institutional Roles",
    sectionFaqTitle: "Frequently Asked Questions",
    
    // Details CTA Banner
    ctaBannerTitle: "Interested in Deploying {appName}?",
    ctaBannerSubtitle: "Contact our team directly on WhatsApp to discuss deployment, licensing, and customized institutional demonstrations.",
    ctaBannerButton: "Request via WhatsApp",

    // Footer
    footerDesc: "Premium desktop software solutions engineered for institutional governance, administrative precision, and local data sovereignty.",
    footerQuickLinks: "Quick Navigation",
    footerProducts: "Products",
    footerContact: "Direct Contact",
    footerRights: "All rights reserved.",
    footerStaticNotice: "Static showcase website. No direct downloads, payments, or activation tracking."
  },

  fr: {
    // Navigation
    brandTitle: "youFasApps",
    navHome: "Accueil",
    navApps: "Applications",
    navAbout: "À Propos",
    navContact: "Contact",
    themeToggleAria: "Basculer entre thème clair et sombre",
    langSelectAria: "Sélectionner la langue du site",
    mobileMenuAria: "Ouvrir ou fermer le menu de navigation",

    // Hero
    heroBadge: "Ingénierie Logicielle Desktop",
    heroHeadline: "Des logiciels conçus pour vous simplifier la vie.",
    heroSubtitle: "Découvrez des applications de bureau pensées pour simplifier les processus complexes, garantir la conformité réglementaire et valoriser votre organisation.",
    heroExploreCta: "Explorer les Applications",
    heroContactCta: "Nous Contacter",
    heroTrustOffline: "100% Local & Souverain",
    heroTrustNative: "Performances Natives Windows",
    heroTrustDirect: "Contact Direct via WhatsApp",

    // Showcase
    showcaseBadge: "Portfolio Logiciel",
    showcaseTitle: "Nos Applications de Bureau",
    showcaseSubtitle: "Explorez notre gamme de logiciels fiables, conçus pour l'exigence institutionnelle et l'efficacité au quotidien.",
    searchPlaceholder: "Rechercher une application par mot-clé ou domaine...",
    filterAll: "Toutes les Applications",
    filterGovtech: "Gestion des Réunions",
    filterAdmin: "Courrier & Bureau d'Ordre",
    filterUpcoming: "En développement",
    badgeInDev: "En développement",
    btnComingSoon: "Bientôt disponible",
    btnPreOrder: "Demande WhatsApp",
    btnViewDetails: "Voir les Détails",
    btnGetApp: "Obtenir l'App",
    noResultsTitle: "Aucune application trouvée",
    noResultsDesc: "Essayez de modifier vos termes de recherche ou la catégorie sélectionnée.",

    // About
    aboutBadge: "Notre Philosophie",
    aboutTitle: "Concevoir des logiciels fiables pour les processus exigeants",
    aboutText: "youFasApps est un atelier de développement logiciel spécialisé dans l'ingénierie d'applications de bureau robustes et fonctionnant hors-ligne. Nous créons des outils institutionnels ciblés qui respectent la souveraineté des données et offrent une fiabilité absolue.",
    aboutCard1Title: "Souveraineté 100% Locale",
    aboutCard1Desc: "Nous concevons des outils desktop fonctionnant intégralement hors-ligne. Vos documents stratégiques et délibérations restent protégés sur vos machines locales.",
    aboutCard2Title: "Rigueur Réglementaire",
    aboutCard2Desc: "Chaque produit est directement structuré autour des textes législatifs et des impératifs administratifs, transformant les obligations légales en flux de travail fluides.",
    aboutCard3Title: "Assistance Directe & Humaine",
    aboutCard3Desc: "Aucun intermédiaire ni robot de messagerie. Échangez en direct avec nos concepteurs via WhatsApp pour vos besoins de licences et de démonstrations.",

    // Contact
    contactBadge: "Contact & Acquisition",
    contactTitle: "Prêt à moderniser vos processus de travail ?",
    contactSubtitle: "Nous distribuons nos applications par accompagnement personnalisé. Écrivez-nous sur WhatsApp pour demander une application, échanger sur les licences ou planifier une démonstration.",
    contactDevNote: "Note de configuration : Les canaux de contact ci-dessous sont gérés de manière centralisée dans js/config.js. Renseignez les numéros vérifiés avant la mise en production.",
    contactOpenWa: "Écrire sur WhatsApp",
    contactAvailabilityNote: "Disponible pour les conseils communaux, administrations publiques et organisations professionnelles.",
    contactChannel1Num: "WhatsApp 1",
    contactChannel1Badge: "Ventes & Informations",
    contactChannel1Title: "Commercial & Licences",
    contactChannel1Desc: "Renseignements sur le déploiement sur postes, les modèles de licences et les modalités d'acquisition.",
    contactChannel2Num: "WhatsApp 2",
    contactChannel2Badge: "Démonstrations",
    contactChannel2Title: "Démos & Support Technique",
    contactChannel2Desc: "Demander une séance de présentation interactive pour votre conseil, commission ou département technique.",
    contactDevPlaceholder: "Numéro de développement",

    // WhatsApp Modal
    modalTitle: "Demande d'Application",
    modalSubtitle: "Contactez notre équipe directement sur WhatsApp pour obtenir votre licence ou organiser une démonstration institutionnelle.",
    modalAppLabel: "Application demandée :",
    modalChooseChannel: "Choisissez un canal de contact :",
    modalPrefilledLabel: "Message préparé :",
    modalClose: "Fermer",
    modalConfigNotice: "Note de développement : Le numéro officiel est configurable dans config.js.",

    // Details Page Common
    breadcrumbHome: "Accueil",
    breadcrumbApps: "Applications",
    detailsVersionLabel: "Version",
    detailsPlatformLabel: "Plateforme",
    detailsOfflineLabel: "Mode Hors-ligne",
    detailsLanguagesLabel: "Langues",
    detailsReleaseLabel: "Statut de Disponibilité",
    detailsBackToApps: "Retour aux Applications",

    // Details Page Tabs
    navTabOverview: "Présentation",
    navTabBenefits: "Bénéfices Clés",
    navTabFeatures: "Fonctionnalités",
    navTabRequirements: "Configuration",
    navTabAudience: "Public Cible",
    navTabFaq: "Questions Fréquentes",

    // Details Sections
    sectionOverviewTitle: "Présentation Institutionnelle",
    sectionBenefitsTitle: "Bénéfices Institutionnels Clés",
    sectionFeaturesTitle: "Modules et Fonctionnalités Vérifiés",
    sectionRequirementsTitle: "Configuration Matérielle Requise",
    sectionAudienceTitle: "Conçu pour les Rôles Institutionnels",
    sectionFaqTitle: "Questions Fréquemment Posées",

    // Details CTA Banner
    ctaBannerTitle: "Intéressé par le déploiement de {appName} ?",
    ctaBannerSubtitle: "Contactez notre équipe directement sur WhatsApp pour échanger sur le déploiement, les licences et réserver une démonstration.",
    ctaBannerButton: "Demander sur WhatsApp",

    // Footer
    footerDesc: "Solutions logicielles desktop d'excellence dédiées à la gouvernance institutionnelle, la rigueur administrative et la souveraineté locale des données.",
    footerQuickLinks: "Navigation Rapide",
    footerProducts: "Nos Produits",
    footerContact: "Contact Direct",
    footerRights: "Tous droits réservés.",
    footerStaticNotice: "Site vitrine statique. Aucun téléchargement direct, paiement ou système d'activation en ligne."
  },

  ar: {
    // Navigation
    brandTitle: "youFasApps",
    navHome: "الرئيسية",
    navApps: "التطبيقات",
    navAbout: "عن المنصة",
    navContact: "تواصل معنا",
    themeToggleAria: "تبديل المظهر بين الفاتح والداكن",
    langSelectAria: "تغيير لغة الموقع",
    mobileMenuAria: "فتح أو إغلاق قائمة التصفح",

    // Hero
    heroBadge: "برمجيات سطح مكتب احترافية",
    heroHeadline: "برمجيات عملية صُممت لتسهيل أعمالك اليومية.",
    heroSubtitle: "اكتشف برمجيات سطح مكتب متطورة صُممت لتبسيط المهام اليومية، إدارة الاجتماعات والمراسلات، وتنظيم الملفات بكفاءة وسرعة.",
    heroExploreCta: "استكشف التطبيقات",
    heroContactCta: "تواصل معنا",
    heroTrustOffline: "100% تعمل محلياً دون إنترنت",
    heroTrustNative: "أداء فائق لنظام ويندوز",
    heroTrustDirect: "تواصل وطلب مباشر عبر واتساب",

    // Showcase
    showcaseBadge: "باقة برامجنا",
    showcaseTitle: "تطبيقات سطح المكتب المتخصصة",
    showcaseSubtitle: "استكشف باقتنا البرمجية المصممة لتسهيل إدارة أعمالك وتوفير إنتاجية عملية وسلسة.",
    searchPlaceholder: "ابحث عن التطبيقات بالاسم أو الكلمات المفتاحية...",
    filterAll: "جميع التطبيقات",
    filterGovtech: "إدارة الاجتماعات",
    filterAdmin: "إدارة المراسلات ومكتب الضبط",
    filterUpcoming: "قيد التطوير",
    badgeInDev: "قيد التطوير",
    btnComingSoon: "قريباً",
    btnPreOrder: "استفسار عبر واتساب",
    btnViewDetails: "تفاصيل التطبيق",
    btnGetApp: "طلب التطبيق",
    noResultsTitle: "لم يتم العثور على أي تطبيق",
    noResultsDesc: "يرجى تجربة تعديل كلمات البحث أو اختيار تصنيف آخر.",

    // About
    aboutBadge: "رؤيتنا",
    aboutTitle: "صناعة برمجيات موثوقة وسهلة الاستخدام",
    aboutText: "تركز youFasApps على تطوير برامج سطح مكتب قوية وعملية تعمل باستقلالية تامة دون الحاجة للاتصال بالإنترنت. نصمم أدوات واضحة وبسيطة تحترم خصوصية وأمان بياناتك وتضمن سرعة إنجاز المهام.",
    aboutCard1Title: "أمان وسرية محلية 100%",
    aboutCard1Desc: "نطور برامج تعمل بالكامل دون اتصال بالإنترنت، حيث تظل ملفاتك وسجلاتك محفوظة بأمان على جهازك الخاص دون مشاركتها عبر أي سحابة.",
    aboutCard2Title: "تنظيم إداري دقيق",
    aboutCard2Desc: "صُممت برمجياتنا لتنظيم الإجراءات وجداول الأعمال والمراسلات بسهولة ودون تعقيد، مع تفادي الأخطاء اليدوية.",
    aboutCard3Title: "تواصل ودعم مباشر",
    aboutCard3Desc: "تواصل مباشرة مع فريق التطوير عبر واتساب لطلب البرامج، الاستفسار عن التراخيص، أو الحصول على دعم تقني مباشر.",

    // Contact
    contactBadge: "التواصل والطلب",
    contactTitle: "جاهز لتنظيم وتطوير أسلوب عملك؟",
    contactSubtitle: "نوفر تطبيقاتنا عبر تواصل مباشر. راسلنا عبر واتساب لطلب الحصول على أي تطبيق، الاستفسار عن التفاصيل، أو طلب عرض توضيحي مباشر.",
    contactDevNote: "ملاحظة إعداد: أرقام التواصل أدناه مخصصة للتهيئة الأولية وتدار مركزياً في js/config.js. يرجى إدخال الأرقام الرسمية المعتمدة قبل الإطلاق.",
    contactOpenWa: "مراسلة عبر واتساب",
    contactAvailabilityNote: "البرامج متاحة للمؤسسات والشركات، المكاتب الإدارية، وفرق العمل المهنية.",
    contactChannel1Num: "واتساب 1",
    contactChannel1Badge: "الاستفسارات والطلب",
    contactChannel1Title: "الاستفسارات والترخيص",
    contactChannel1Desc: "للاستفسار عن تنصيب البرامج على الحواسيب، تراخيص الاستخدام، وتفاصيل الحصول على النسخ.",
    contactChannel2Num: "واتساب 2",
    contactChannel2Badge: "العروض التوضيحية",
    contactChannel2Title: "العروض التوضيحية والدعم",
    contactChannel2Desc: "طلب جلسة عرض توضيحي مباشر للتعرف على مميزات البرنامج وطريقة استخدامه.",
    contactDevPlaceholder: "رقم قيد التطوير",

    // WhatsApp Modal
    modalTitle: "طلب الحصول على التطبيق",
    modalSubtitle: "تواصل مع فريقنا مباشرة عبر واتساب للحصول على نسختك من البرنامج أو طلب عرض توضيحي مباشر.",
    modalAppLabel: "التطبيق المطلوب:",
    modalChooseChannel: "اختر جهة التواصل المناسبة:",
    modalPrefilledLabel: "نص الرسالة التلقائية:",
    modalClose: "إغلاق",
    modalConfigNotice: "ملاحظة تطوير: يتم تحديد رقم الهاتف الرسمي مركزياً عبر config.js.",

    // Details Page Common
    breadcrumbHome: "الرئيسية",
    breadcrumbApps: "التطبيقات",
    detailsVersionLabel: "الإصدار",
    detailsPlatformLabel: "نظام التشغيل",
    detailsOfflineLabel: "العمل دون إنترنت",
    detailsLanguagesLabel: "اللغات المدعومة",
    detailsReleaseLabel: "حالة التوفر",
    detailsBackToApps: "العودة إلى التطبيقات",

    // Details Page Tabs
    navTabOverview: "نظرة عامة",
    navTabBenefits: "المزايا الرئيسية",
    navTabFeatures: "الميزات والوحدات",
    navTabRequirements: "المتطلبات التقنية",
    navTabAudience: "الفئات المستهدفة",
    navTabFaq: "الأسئلة الشائعة",

    // Details Sections
    sectionOverviewTitle: "نظرة عامة على التطبيق",
    sectionBenefitsTitle: "المزايا الرئيسية للبرنامج",
    sectionFeaturesTitle: "الميزات والوحدات الوظيفية المعتمدة",
    sectionRequirementsTitle: "المتطلبات التقنية ومواصفات التشغيل",
    sectionAudienceTitle: "الفئات المستهدفة ومجالات الاستخدام",
    sectionFaqTitle: "الأسئلة الشائعة والإجابات المعتمدة",

    // Details CTA Banner
    ctaBannerTitle: "هل ترغب في الحصول على تطبيق {appName}؟",
    ctaBannerSubtitle: "تواصل مع فريقنا مباشرة عبر واتساب لمعرفة تفاصيل الترخيص، الدعم التقني، وحجز جلسة عرض مباشر.",
    ctaBannerButton: "طلب التطبيق عبر واتساب",

    // Footer
    footerDesc: "حلول برمجية مكتبية متميزة صُممت لتسهيل إدارة الاجتماعات والمراسلات بأعلى معايير السرعة والأمان والحفاظ على البيانات.",
    footerQuickLinks: "روابط سريعة",
    footerProducts: "المنتجات",
    footerContact: "تواصل مباشر",
    footerRights: "جميع الحقوق محفوظة.",
    footerStaticNotice: "موقع تعريفي ثابت. لا يتضمن تنزيلات مباشرة للبرامج أو بوابات دفع إلكتروني أو أنظمة تفعيل."
  }
};
