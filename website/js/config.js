/**
 * youFasApps - Central Configuration
 * All contact info, branding, and defaults are centralized here.
 */
const CONFIG = {
  brand: {
    name: "youFasApps",
    tagline: {
      en: "Software That Works for You",
      fr: "Des logiciels conçus pour vous simplifier la vie",
      ar: "برمجيات صُممت لتعمل لأجلك وتلبي تطلعاتك"
    },
    subTagline: {
      en: "Discover thoughtfully designed desktop applications that simplify complex workflows, ensure regulatory compliance, and empower organizations.",
      fr: "Découvrez des applications de bureau pensées pour simplifier les processus complexes, garantir la conformité réglementaire et valoriser votre organisation.",
      ar: "اكتشف برمجيات سطح مكتب متطورة تم ابتكارها لتبسيط المهام المعقدة، وضمان الامتثال القانوني، والارتقاء بالأداء المؤسساتي."
    },
    about: {
      en: "youFasApps is a dedicated software workshop focused on engineering robust, offline-capable desktop solutions. We craft focused, institutional-grade tools that respect user sovereignty, ensure data privacy, and deliver uncompromising reliability.",
      fr: "youFasApps est un atelier de développement logiciel spécialisé dans l'ingénierie d'applications de bureau robustes et fonctionnant hors-ligne. Nous créons des outils institutionnels ciblés qui respectent la souveraineté des données et offrent une fiabilité absolue.",
      ar: "تعد youFasApps منصة برمجية متخصصة في هندسة حلول سطح المكتب القوية التي تعمل باستقلالية تامة دون الحاجة للاتصال بالإنترنت. نصمم أدوات مؤسساتية متقدمة تحترم خصوصية وسيادة البيانات وتوفر أعلى درجات الاعتمادية."
    },
    // Vector brand asset paths (pure SVG)
    logoPath: "assets/brand/youfasapps-logo.svg",
    compactLogoPath: "assets/brand/youfasapps-compact.svg",
    symbolPath: "assets/brand/youfasapps-symbol.svg",
    faviconPath: "assets/brand/favicon.svg",
    subpageLogoPath: "../assets/brand/youfasapps-logo.svg",
    subpageCompactPath: "../assets/brand/youfasapps-compact.svg"
  },

  // Central WhatsApp Contacts
  // Note: Replace numbers with official verified WhatsApp numbers in international format (digits only, no + or spaces)
  whatsapp: {
    contact1: {
      id: "sales",
      number: "212600000000",
      display: "+212 600-000000",
      isConfigured: false, // Set to true when verified number is provided
      badge: {
        en: "Sales & Inquiries",
        fr: "Ventes & Informations",
        ar: "المبيعات والاستفسارات"
      },
      description: {
        en: "Inquire about acquisition, licensing, and commercial inquiries.",
        fr: "Renseignements sur l'acquisition, les licences et les questions commerciales.",
        ar: "للاستفسار عن اقتناء البرامج والتراخيص والمعلومات العامة."
      }
    },
    contact2: {
      id: "demo",
      number: "212700000000",
      display: "+212 700-000000",
      isConfigured: false, // Set to true when verified number is provided
      badge: {
        en: "Institutional Demo & Support",
        fr: "Démonstrations & Support",
        ar: "العروض التوضيحية والدعم التقني"
      },
      description: {
        en: "Request a personalized live demonstration or technical overview.",
        fr: "Demander une démonstration interactive ou une présentation technique.",
        ar: "طلب عرض توضيحي مباشر أو استعراض للميزات التقنية."
      }
    },
    // Message templates parameterized by application name
    messages: {
      en: "Hello, I am interested in {appName}. I would like to receive more information about this application and how to obtain it.",
      fr: "Bonjour, je suis intéressé(e) par l'application {appName}. J'aimerais obtenir plus d'informations ainsi que les modalités d'acquisition.",
      ar: "مرحباً، أنا مهتم بالحصول على تطبيق {appName}. أود الحصول على مزيد من المعلومات حول التطبيق وكيفية طلبه."
    }
  },

  // Localization settings
  i18n: {
    defaultLang: "en",
    supportedLanguages: [
      { code: "en", name: "English", dir: "ltr", short: "EN" },
      { code: "fr", name: "Français", dir: "ltr", short: "FR" },
      { code: "ar", name: "العربية", dir: "rtl", short: "العربية" }
    ],
    storageKey: "youfas_language"
  },

  // Theme settings
  theme: {
    defaultTheme: "dark",
    storageKey: "youfas_theme"
  }
};

// Freeze configuration in non-development to prevent accidental tampering
if (typeof Object.freeze === "function") {
  Object.freeze(CONFIG.brand);
  Object.freeze(CONFIG.i18n);
  Object.freeze(CONFIG.theme);
}
