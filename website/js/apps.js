/**
 * youFasApps - Applications Inventory
 * Source of truth for all products displayed on the showcase site.
 * Generated from verified application documentation in apps/CM-manager/APP_INFO.md.
 */

const APPS_DATA = [
  {
    id: "cm-manager",
    slug: "cm-manager",
    officialName: "IJTIMAA (اجتماع)",
    shortName: "IJTIMAA",
    historicalName: "CM Manager (Conseil Communal Manager)",
    version: "1.0.0",
    releaseStatus: "Production Ready",
    category: {
      en: "Meeting Management",
      fr: "Gestion des Réunions",
      ar: "تطبيق لإدارة الاجتماعات"
    },
    categoryKey: "govtech",
    tagline: {
      en: "Complete Platform for Organizing Meetings, Logging Quorum, and Tracking Decisions",
      fr: "Logiciel complet pour planifier les réunions, vérifier le quorum et suivre les décisions",
      ar: "برنامج متكامل لتنظيم وإدارة الاجتماعات وتتبع القرارات"
    },
    shortDescription: {
      en: "A professional desktop application designed to organize and conduct meetings, automate attendance and quorum calculations, draft official minutes, and monitor decision execution.",
      fr: "Une application logicielle de bureau conçue pour planifier, mener et archiver les réunions, calculer le quorum, rédiger les procès-verbaux et suivre l'exécution des décisions.",
      ar: "برنامج مكتبي متكامل لإدارة وتنظيم الاجتماعات: إعداد جدول الأعمال، تسجيل الحضور واحتساب النصاب، صياغة المحاضر، وتتبع تنفيذ القرارات بكل سهولة ودقة."
    },
    fullDescription: {
      en: "IJTIMAA is a comprehensive desktop application designed to manage and organize meetings and committees with total simplicity and speed. It covers the full meeting lifecycle: scheduling dates, preparing agendas, sending notifications and convocations, live attendance logging, automatic quorum verification, and vote counting.\n\nThe application helps you generate structured bilingual minutes in Arabic and French in record time, follow up on the status and execution of approved decisions, and maintain a secure local archive directly on your computer without requiring any internet connection.",
      fr: "IJTIMAA est une application logicielle de bureau conçue pour organiser et gérer les réunions et comités avec simplicité et rapidité. Elle prend en charge l'ensemble du cycle de réunion : planification des séances, préparation de l'ordre du jour, convocations, pointage des présences, contrôle automatique du quorum et déroulement des votes.\n\nLe logiciel accélère la rédaction des procès-verbaux bilingues (arabe et français), assure le suivi rigoureux de l'état d'avancement des décisions adoptées, et sécurise un archivage local autonome sans dépendance à Internet.",
      ar: "يعد تطبيق IJTIMAA برنامجاً مكتبياً شاملاً مصمماً لإدارة وتنظيم الاجتماعات واللجان بكل احترافية وسهولة. يغطي التطبيق كافة مراحل الاجتماع: بدءاً من جدولة المواعيد وإعداد جدول الأعمال وتوجيه الاستدعاءات، وصولاً إلى تسجيل الحضور المباشر، احتساب النصاب القانوني، وإدارة التصويت.\n\nيساعد البرنامج على إعداد محاضر الاجتماعات الرسمية باللغتين العربية والفرنسية بسرعة ودقة، مع إمكانية متابعة تنفيذ القرارات والتوصيات حتى اكتمالها، وحفظ وأرشفة الملفات بأمان على جهاز الكمبيوتر دون الحاجة للاتصال بالإنترنت."
    },
    regulatoryFramework: {
      en: "Standard Meeting Procedures & Rules (Including Organic Law 113.14)",
      fr: "Procédures et règles de gestion des réunions (Loi 113.14)",
      ar: "قواعد وضوابط تنظيم الاجتماعات والجلسات"
    },
    branding: {
      appIcon: "../apps/CM-manager/branding/ijtimaa-app-icon.svg",
      appIconPng: "../apps/CM-manager/branding/ijtimaa-app-icon.png",
      primaryLogo: "../apps/CM-manager/branding/ijtimaa-logo-primary.svg",
      darkLogo: "../apps/CM-manager/branding/ijtimaa-logo-dark.svg",
      horizontalLogo: "../apps/CM-manager/branding/ijtimaa-logo-horizontal.svg",
      verticalLogo: "../apps/CM-manager/branding/ijtimaa-logo-vertical.svg",
      compactLogo: "../apps/CM-manager/branding/ijtimaa-logo-compact.svg",
      symbol: "../apps/CM-manager/branding/ijtimaa-symbol.svg",
      // Relative paths for pages inside apps/ directory
      subpageAppIcon: "../../apps/CM-manager/branding/ijtimaa-app-icon.svg",
      subpagePrimaryLogo: "../../apps/CM-manager/branding/ijtimaa-logo-primary.svg",
      subpageDarkLogo: "../../apps/CM-manager/branding/ijtimaa-logo-dark.svg"
    },
    colors: {
      primary: "#163A63",   // Deep Institutional Navy
      secondary: "#2878B8", // Ocean Blue
      accent: "#19A7A0",    // Teal / Turquoise
      darkSurface: "#18232F"
    },
    boxConfig: {
      year: "2026",
      edition: {
        en: "Professional Edition",
        fr: "Édition Professionnelle",
        ar: "نسخة إدارة الاجتماعات"
      },
      spineName: "IJTIMAA",
      arabicSub: "إدارة الاجتماعات",
      modules: [
        { label: "S", title: "Sessions", color: "#0284c7" },
        { label: "Q", title: "Quorum", color: "#0d9488" },
        { label: "M", title: "Minutes", color: "#ea580c" },
        { label: "D", title: "Decisions", color: "#7c3aed" },
        { label: "A", title: "Archive", color: "#4338ca" }
      ]
    },
    requirements: {
      os: {
        en: "Windows 10, Windows 11 (64-bit / x64)",
        fr: "Windows 10, Windows 11 (64 bits / x64)",
        ar: "ويندوز 10، ويندوز 11 (نواة 64 بت)"
      },
      offline: {
        en: "100% Offline Core (No internet required)",
        fr: "Fonctionnement 100% hors-ligne (Aucune connexion requise)",
        ar: "تشغيل كامل دون اتصال بالإنترنت (لا يتطلب سحابة)"
      },
      processor: {
        en: "64-bit Intel or AMD processor",
        fr: "Processeur Intel ou AMD 64 bits",
        ar: "معالج Intel أو AMD بمعمارية 64 بت"
      },
      ram: {
        en: "4 GB minimum (8 GB recommended)",
        fr: "4 Go minimum (8 Go recommandés)",
        ar: "4 جيجابايت كحد أدنى (8 جيجابايت موصى بها)"
      },
      diskSpace: {
        en: "~400 MB free storage space",
        fr: "~400 Mo d'espace disque disponible",
        ar: "حوالي 400 ميغابايت من المساحة المتوفرة"
      },
      languages: {
        en: "Bilingual: Arabic (RTL) & French (LTR)",
        fr: "Bilingue : Arabe (RTL) & Français (LTR)",
        ar: "ثنائي اللغة بالكامل: العربية (RTL) والفرنسية (LTR)"
      }
    },
    mainBenefits: [
      {
        icon: "shield-check",
        title: {
          en: "Guaranteed Legal Compliance",
          fr: "Conformité Légale Garantie",
          ar: "امتثال قانوني مضمون"
        },
        desc: {
          en: "An integrated compliance engine continuously verifies meeting parameters against Organic Law 113.14 rules in real time.",
          fr: "Moteur de vérification juridique intégré validant en temps réel le respect strict des dispositions de la loi organique 113.14.",
          ar: "محرك تدقيق قانوني مدمج يراقب إجراءات الاجتماعات لحظياً وفق مقتضيات القانون التنظيمي 113.14."
        }
      },
      {
        icon: "layers",
        title: {
          en: "Complete End-to-End Meeting Lifecycle",
          fr: "Cycle de Réunion Complet de Bout en Bout",
          ar: "دورة عمل متكاملة للاجتماعات"
        },
        desc: {
          en: "Unifies planning, agenda building, convocation dispatch, quorum logging, voting, and decision tracking into a single system.",
          fr: "Centralise la planification, l'ordre du jour, les convocations, le quorum, les délibérations et le suivi d'exécution.",
          ar: "يوحد جدولة الدورات وإعداد جدول الأعمال وتوجيه الاستدعاءات واحتساب النصاب والتصويت وتتبع المقررات في منصة واحدة."
        }
      },
      {
        icon: "languages",
        title: {
          en: "Native Bilingual Arabic & French",
          fr: "Support Bilingue Natif Arabe & Français",
          ar: "ثنائية لغوية أصلية (عربية وفرنسية)"
        },
        desc: {
          en: "Full bidirectional support across all screens, forms, legal notices, and exported administrative documents.",
          fr: "Prise en charge bidirectionnelle intégrale (RTL/LTR) sur toutes les interfaces et documents officiels exportés.",
          ar: "دعم ثنائي الاتجاه (RTL/LTR) عبر جميع الواجهات والنماذج والاستدعاءات والمحاضر المستخرجة."
        }
      },
      {
        icon: "file-text",
        title: {
          en: "Accelerated Document Production",
          fr: "Génération Accélérée des Documents Officiels",
          ar: "إصدار فوري للوثائق والمحاضر الرسمية"
        },
        desc: {
          en: "Exports formatted convocations, attendance sheets, and structured minutes directly to Word (.docx) and PDF (.pdf).",
          fr: "Exportation instantanée des convocations, feuilles de présence et procès-verbaux structurés sous formats Word et PDF.",
          ar: "تصدير فوري للاستدعاءات وجداول الحضور والمحاضر الرسمية المفصلة بصيغتي Word و PDF."
        }
      },
      {
        icon: "trending-up",
        title: {
          en: "Actionable Decision Execution Tracking",
          fr: "Cockpit Interactif de Suivi des Décisions",
          ar: "تتبع تنفيذي تفاعلي للقرارات والمقررات"
        },
        desc: {
          en: "Replaces static minutes with an interactive execution cockpit with milestone gauges (0%–100%) and delay alerts.",
          fr: "Transforme les PV en plans d'actions interactifs avec pourcentages d'avancement, services assignés et alertes.",
          ar: "يحول المقررات المعتمدة إلى مهام تنفيذية بمؤشرات إنجاز دقيقة (0% - 100%) وتحديد مصالح مسؤولة وتنبيهات تأخير."
        }
      },
      {
        icon: "lock",
        title: {
          en: "100% Local Data Sovereignty",
          fr: "Souveraineté des Données & Fonctionnement Hors-Ligne",
          ar: "سيادة كاملة على البيانات وأمان محلي"
        },
        desc: {
          en: "Operates entirely offline on the local workstation with no mandatory cloud connection, ensuring absolute institutional privacy.",
          fr: "Fonctionne entièrement en local sur le poste sans dépendance au cloud, garantissant la stricte confidentialité publique.",
          ar: "يعمل التطبيق كلياً على محطة العمل المحلية دون الحاجة لأي سحابة، مما يضمن السرية التامة للمداولات والمعطيات."
        }
      }
    ],
    verifiedFeatures: [
      {
        num: "01",
        title: {
          en: "Regulatory Session & Meeting Wizard",
          fr: "Assistant de Sessions & Réunions Réglementaires",
          ar: "مساعد إدارة الدورات والاجتماعات القانونية"
        },
        desc: {
          en: "Guides staff through Ordinary Sessions (February, May, October), Extraordinary Sessions, Committee Hearings, and Bureau Meetings with automated statutory checks.",
          fr: "Guide la création des sessions ordinaires (février, mai, octobre), extraordinaires et commissions avec validation automatique des règles légales.",
          ar: "توجيه إداري لإنشاء الدورات العادية (فبراير، ماي، أكتوبر) والاستثنائية واجتماعات اللجان والمكتب مع فحص المواعيد المحددة قانوناً."
        }
      },
      {
        num: "02",
        title: {
          en: "Structured Agenda Builder",
          fr: "Élaborateur d'Ordre du Jour Structuré",
          ar: "منشئ جدول الأعمال المصنف"
        },
        desc: {
          en: "Classifies agenda points by domain (budget, urban planning, social affairs, conventions) linked to reporting committees and municipal divisions.",
          fr: "Structure les points par domaine d'action (budget, urbanisme, affaires sociales, conventions) et les lie aux commissions compétentes.",
          ar: "تنظيم نقاط جدول الأعمال حسب المجالات وتوزيعها وربطها باللجان الدائمة المختصة والمصالح الجماعية المعنية."
        }
      },
      {
        num: "03",
        title: {
          en: "Convocation Dispatch & Statutory Notice Engine",
          fr: "Gestion des Convocations & Délais Légaux",
          ar: "تدبير الاستدعاءات وتتبع الآجال القانونية"
        },
        desc: {
          en: "Calculates the mandatory 7-clear-day statutory notice period automatically, generates individual printable convocations, and logs signed discharges.",
          fr: "Calcule le délai franc légal de 7 jours, génère les convocations individuelles personnalisées et enregistre les décharges de remise.",
          ar: "احتساب آلي للأجل القانوني المحدد في 7 أيام كاملة، مع توليد الاستدعاءات الفردية وتتبع وصولها وشهادات التسليم."
        }
      },
      {
        num: "04",
        title: {
          en: "Attendance Logging & Quorum Snapshot Engine",
          fr: "Pointage des Présences & Snapshot du Quorum",
          ar: "تسجيل الحضور واحتساب النصاب اللحظي"
        },
        desc: {
          en: "Logs attendees in real time, applies the statutory quorum formula (50% + 1 of active members in office), and captures an immutable opening timestamped snapshot.",
          fr: "Pointage des élus en direct, application de la formule légale (50% + 1 des membres en exercice) et enregistrement d'un snapshot certifié d'ouverture.",
          ar: "تسجيل فوري لحضور الأعضاء، وتطبيق معادلة النصاب القانوني (النصف + 1 للأعضاء المزاولين)، وتوثيق لقطة افتتاحية غير قابلة للتغيير."
        }
      },
      {
        num: "05",
        title: {
          en: "Absence Tracking & Statutory Impact Alerts",
          fr: "Suivi des Absences & Impact Légal (Art. 67)",
          ar: "تتبع الغيابات وتنبيهات المادة 67"
        },
        desc: {
          en: "Categorizes justified and unjustified absences, tracking cumulative consecutive absences per Article 67 to prevent procedural surprises.",
          fr: "Gère les justificatifs d'absence et comptabilise les absences consécutives conformément à l'article 67 de la loi 113.14.",
          ar: "تصنيف الغيابات ومبرراتها ومتابعة الغيابات المتتالية وفقاً لمقتضيات المادة 67 من القانون 113.14 لتفادي أي إخلال شكلي."
        }
      },
      {
        num: "06",
        title: {
          en: "Bilingual Minutes Builder with Word & PDF Export",
          fr: "Rédacteur de Procès-Verbaux Bilingue (PV)",
          ar: "محرر محاضر الجلسات الثنائي اللغة"
        },
        desc: {
          en: "Facilitates structured drafting of deliberations in Arabic and French, generating standardized institutional documents and reports.",
          fr: "Facilite la rédaction exhaustive des délibérations en arabe et français avec mise en page juridique rigoureuse et export Word et PDF.",
          ar: "صياغة سريعة ومنهجية لمداولات المجلس باللغتين العربية والفرنسية بتنسيق قانوني محكم وتصدير مباشر لملفات Word و PDF."
        }
      },
      {
        num: "07",
        title: {
          en: "Voting Administration & Formal Resolutions",
          fr: "Administration des Votes & Résolutions",
          ar: "إدارة عمليات التصويت واعتماد المقررات"
        },
        desc: {
          en: "Records roll-call or show-of-hands votes (For, Against, Abstentions) per agenda item, attributing permanent legal references to each resolution.",
          fr: "Enregistre les votes (Pour, Contre, Abstention) par point de l'ordre du jour et formalise les délibérations adoptées avec références juridiques.",
          ar: "تسجيل دقيق للأصوات (موافق، معارض، ممتنع) لكل نقطة، وصياغة القرارات المعتمدة مع إسناد أرقام إدارية مرجعية لها."
        }
      },
      {
        num: "08",
        title: {
          en: "Interactive Decision Tracking Cockpit",
          fr: "Cockpit de Suivi d'Exécution des Décisions",
          ar: "لوحة قيادة تتبع تنفيذ المقررات"
        },
        desc: {
          en: "Transforms resolutions into trackable administrative tasks assigned to municipal divisions with progress gauges (0%–100%) and target deadlines.",
          fr: "Assigne les décisions votées aux départements municipaux avec jalons d'avancement (0% à 100%), échéanciers et suivi d'exécution.",
          ar: "تحويل المقررات إلى مهام عمل تنفيذية موزعة على المصالح الجماعية مع مؤشرات إنجاز (0% - 100%) وتواريخ استحقاق محددة."
        }
      },
      {
        num: "09",
        title: {
          en: "Legal Archiving & Supervisory Dossier Sealing",
          fr: "Archives Légales & Dossier de Tutelle",
          ar: "الأرشفة القانونية وإعداد ملف سلطة الرقابة"
        },
        desc: {
          en: "Seals closed sessions into read-only immutable archives, assembling the complete statutory dossier ready for transmission to the Prefecture / Province.",
          fr: "Clôture et verrouille les sessions terminées dans une archive infalsifiable prête à être transmise aux autorités de tutelle (Préfecture / Province).",
          ar: "إغلاق الدورات المنتهية وتشميعها في أرشيف محصن غير قابل للتعديل لتجهيز الملف الإداري الموجه لسلطات الرقابة (العمالة أو الإقليم)."
        }
      },
      {
        num: "10",
        title: {
          en: "Institutional KPI Dashboard & Analytics",
          fr: "Tableau de Bord & Indicateurs de Performance",
          ar: "لوحة مؤشرات الأداء المؤسساتي والإحصائيات"
        },
        desc: {
          en: "Presents clear visual metrics: quorum trends, elected member attendance rates, resolution implementation pace, and compliance warnings.",
          fr: "Offre une vue synthétique des indicateurs clés : taux de présence des élus, célérité d'exécution des décisions et alertes de gouvernance.",
          ar: "مؤشرات بصرية فورية تشمل معدلات حضور المنتخبين، سرعة تنفيذ المقررات، ونسب تحقيق الأهداف الإدارية."
        }
      },
      {
        num: "11",
        title: {
          en: "Institutional Governance Calendar",
          fr: "Calendrier Institutionnel Interactif",
          ar: "التقويم الزمني للمواعيد والالتزامات"
        },
        desc: {
          en: "Interactive calendar detailing statutory session dates, committee hearings, and critical convocation deadlines in month, week, and day views.",
          fr: "Calendrier complet des sessions, réunions de commissions et dates limites d'envoi des convocations en vues mensuelle, hebdomadaire et journalière.",
          ar: "تقويم تفاعلي شامل لمواعيد الدورات العادية والاستثنائية، واجتماعات اللجان، والآجال القصوى لإرسال الاستدعاءات."
        }
      },
      {
        num: "12",
        title: {
          en: "Granular Role-Based Security & Permissions",
          fr: "Sécurité Granulaire & Rôles Utilisateurs",
          ar: "نظام الصلاحيات والأمان المتدرج"
        },
        desc: {
          en: "Safeguards municipal operations with role hierarchies (Admin, President, Rapporteur, Department Officer, Reader) and strict credential policies.",
          fr: "Protège les données avec des rôles précis (Admin, Président, Rapporteur, Chef de service, Lecteur) et une gestion rigoureuse des accès.",
          ar: "حماية مشددة للمعلومات عبر تحديد أدوار المستخدمين (مدير النظام، الرئيس، كاتب المجلس، رؤساء المصالح، قارئ) وإدارة كلمات المرور."
        }
      },
      {
        num: "13",
        title: {
          en: "Demo Data Training Environment",
          fr: "Environnement de Démonstration & Formation",
          ar: "بيئة بيانات تجريبية لتدريب الأطر"
        },
        desc: {
          en: "Enables administrators to generate realistic test data across 13 modules for staff training and reset it safely without affecting real municipal records.",
          fr: "Génération de jeux de données fictifs et réalistes pour former les agents sans aucun risque pour les données réelles de la commune.",
          ar: "إمكانية توليد بيانات تدريبية واقعية عبر 13 وحدة لتدريب الموظفين والمنتخبين وحذفها بأمان دون المساس بالسجلات الحقيقية."
        }
      },
      {
        num: "14",
        title: {
          en: "Dual-Code Secure Data Reset Safeguard",
          fr: "Réinitialisation Sécurisée à Double Code",
          ar: "آلية إعادة التعيين الآمنة برمزين مزدوجين"
        },
        desc: {
          en: "Prevents catastrophic data erasure through a two-step safeguard requiring the admin password and a dynamic daily security token.",
          fr: "Protection contre les purges accidentelles par double authentification exigeant le mot de passe admin et une clé de sécurité quotidienne.",
          ar: "حماية متقدمة من المسح الخاطئ للبيانات تتطلب إدخال كلمة سر المشرف مع رمز أمان يومي ديناميكي لتأكيد العملية."
        }
      },
      {
        num: "15",
        title: {
          en: "Local Network (LAN) In-Chamber Access",
          fr: "Accès Réseau Local en Salle de Réunion",
          ar: "الولوج عبر الشبكة المحلية داخل قاعة الاجتماعات"
        },
        desc: {
          en: "Built-in local network mode allows members and staff in the meeting hall to view the live agenda and attendance on their tablets via local Wi-Fi.",
          fr: "Partage réseau local sécurisé permettant aux élus et collaborateurs en salle d'accéder aux délibérations et présences sur navigateur via le Wi-Fi local.",
          ar: "ميزة مشاركة الشبكة المحلية تتيح للأعضاء الحاضرين في قاعة الاجتماع الاطلاع على جدول الأعمال والمداولات عبر المتصفح دون إنترنت."
        }
      },
      {
        num: "16",
        title: {
          en: "Workstation Hardware Licensing Protection",
          fr: "Licence Matérielle Sécurisée par Poste",
          ar: "ترخيص مكتبي محمي بالبصمة العتادية"
        },
        desc: {
          en: "Hardware-bound machine token authentication paired with annual activation codes to protect software deployment integrity.",
          fr: "Authentification liée à la signature matérielle du poste de travail pour une intégrité et une gestion rigoureuse des déploiements.",
          ar: "نظام ترخيص مرتبط بالبصمة العتادية للحاسوب مع مفاتيح تفعيل سنوية لضمان استقرار الاستخدام وسلامة التنصيب."
        }
      }
    ],
    targetAudience: [
      {
        role: {
          en: "Council & Committee Presidents & Board Members",
          fr: "Présidents & Membres des Bureaux",
          ar: "رؤساء المجالس واللجان وأعضاء المكاتب"
        },
        desc: {
          en: "Overall meeting oversight, session convening, vote certification, and decision implementation tracking.",
          fr: "Supervision des réunions, convocation des séances, certification des votes et suivi des décisions.",
          ar: "الإشراف العام على الاجتماعات، الدعوة للجلسات، المصادقة على نتائج التصويت، ومتابعة تنفيذ القرارات."
        }
      },
      {
        role: {
          en: "Executive Directors & General Secretaries",
          fr: "Secrétaires Généraux & Directeurs",
          ar: "المديرون العامون ومديرو المصالح الإدارية"
        },
        desc: {
          en: "Internal organization, administrative coordination, and meeting workflow oversight.",
          fr: "Organisation interne, coordination administrative et gestion des flux de travail.",
          ar: "تنظيم العمل الداخلي، التنسيق الإداري، والإشراف على حسن سير الاجتماعات وتنفيذ التوصيات."
        }
      },
      {
        role: {
          en: "Meeting Secretaries & Minute Clerks",
          fr: "Secrétaires de Séance & Rédacteurs",
          ar: "كتاب الجلسات ومحررو المحاضر"
        },
        desc: {
          en: "Agenda drafting, convocation generation, real-time attendance recording, and official minutes preparation.",
          fr: "Élaboration de l'ordre du jour, envois des convocations, pointage des présences et rédaction des PV.",
          ar: "إعداد جداول الأعمال، استخراج وتوجيه الاستدعاءات، تسجيل الحضور، وتحرير محاضر الاجتماعات."
        }
      },
      {
        role: {
          en: "Committee Chairs & Rapporteurs",
          fr: "Présidents & Rapporteurs de Commissions",
          ar: "رؤساء ومقررو اللجان"
        },
        desc: {
          en: "Committee session planning, agenda item examination, and administrative reporting.",
          fr: "Planification des réunions de commission, étude approfondie des dossiers et rapports.",
          ar: "جدولة اجتماعات اللجان، دراسة الملفات والنقاط المعروضة، وإعداد التقارير والملاحظات."
        }
      },
      {
        role: {
          en: "Department Heads & Operational Teams",
          fr: "Chefs de Services & Équipes Opérationnelles",
          ar: "رؤساء الأقسام والمصالح والفرق التنفيذية"
        },
        desc: {
          en: "Executing approved decisions, updating action progress percentages, and fulfilling deliverables.",
          fr: "Mise en œuvre concrète des décisions votées, actualisation des taux d'avancement et livrables.",
          ar: "التنفيذ الفعلي للقرارات المتخذة، تحيين مؤشرات الإنجاز، وتقديم المخرجات المطلوبة."
        }
      },
      {
        role: {
          en: "IT Officers & System Administrators",
          fr: "Responsables Informatiques & Administrateurs Systèmes",
          ar: "مسؤولو المعلوميات ومديرو الأنظمة"
        },
        desc: {
          en: "Managing user privileges, maintaining on-premise local data backups, and managing workstation licensing.",
          fr: "Gestion des accès et privilèges, sauvegardes locales des bases de données et suivi des licences.",
          ar: "إدارة حسابات المستخدمين وصلاحياتهم، وتسيير النسخ الاحتياطية وإدارة التراخيص."
        }
      }
    ],
    faq: [
      {
        q: {
          en: "What regulatory framework does IJTIMAA follow?",
          fr: "Quel cadre réglementaire l'application IJTIMAA applique-t-elle ?",
          ar: "ما هو الإطار القانوني والتنظيمي الذي يعتمده برنامج IJTIMAA؟"
        },
        a: {
          en: "IJTIMAA is designed specifically around Moroccan Organic Law No. 113.14 relating to Communes. It automatically enforces rules regarding mandatory ordinary session timing (February, May, October), statutory convocation notice periods (7 clear days), legal quorum formulas (50% + 1 of active council members in office), and consecutive absence tracking under Article 67.",
          fr: "IJTIMAA est conçue dans le strict respect de la loi organique marocaine n° 113.14 relative aux Communes. Elle applique automatiquement les périodicités obligatoires des sessions ordinaires (février, mai, octobre), le délai franc d'envoi des convocations (7 jours entiers), la formule de calcul du quorum légal (50% + 1 des membres en exercice) et le contrôle des absences consécutives (article 67).",
          ar: "تم تطوير IJTIMAA وفقاً لمقتضيات القانون التنظيمي المغربي رقم 113.14 المتعلق بالجماعات. يطبق البرنامج آلياً قواعد التوقيت الإلزامي للدورات العادية (فبراير، ماي، أكتوبر)، والمهلة القانونية للاستدعاءات (7 أيام كاملة)، ومعادلة النصاب القانوني (50% + 1 من الأعضاء المزاولين لمهامهم)، ومتابعة الغيابات المتكررة طبقا للمادة 67."
        }
      },
      {
        q: {
          en: "Does IJTIMAA require an internet connection to function?",
          fr: "IJTIMAA nécessite-t-elle une connexion Internet permanente ?",
          ar: "هل يتطلب تشغيل IJTIMAA اتصالاً دائماً بشبكة الإنترنت؟"
        },
        a: {
          en: "No. IJTIMAA is a self-contained on-premise desktop application storing all data locally on your workstation. It functions 100% offline for all administrative workflows—including quorum calculation, attendance logging, session management, and document exports. An internet connection is strictly optional, used only if external AI-assisted drafting is explicitly configured.",
          fr: "Non. IJTIMAA est une application de bureau souveraine stockant ses données localement sur votre poste. Elle fonctionne à 100% hors-ligne pour tous les processus essentiels (calcul du quorum, pointage, PV, exportations). Une connexion n'est utile que si la fonction optionnelle d'aide à la rédaction par IA externe est activée.",
          ar: "لا، IJTIMAA تطبيق مكتبي محلي مستقل يخزن كافة البيانات محلياً على جهازك. يعمل بنسبة 100% دون اتصال بالإنترنت لجميع المهام الإدارية (احتساب النصاب، تسجيل الحضور، صياغة المحاضر، وتصدير الملفات). الاتصال بالإنترنت مطلوب فقط في حالة تفعيل ميزة المساعدة بالذكاء الاصطناعي بشكل اختياري."
        }
      },
      {
        q: {
          en: "Can staff and elected members access the system during a live session?",
          fr: "Les élus et agents peuvent-ils accéder au système pendant la session ?",
          ar: "هل يمكن للمنتخبين والموظفين الولوج إلى النظام أثناء انعقاد الجلسة؟"
        },
        a: {
          en: "Yes. IJTIMAA includes a built-in local network mode. The workstation hosting the application can serve authorized users in the council hall over the local room Wi-Fi or LAN through standard web browsers, enabling secure live agenda viewing and attendance tracking without any internet dependency.",
          fr: "Oui. IJTIMAA intègre un mode de partage réseau local. Le poste hôte peut diffuser l'accès aux utilisateurs autorisés dans la salle de délibération via le réseau Wi-Fi local ou filaire, permettant la consultation de l'ordre du jour et des présences sur tablette ou ordinateur sans passer par Internet.",
          ar: "نعم، يتضمن IJTIMAA خاصية مشاركة الشبكة المحلية، حيث يمكن للحاسوب الرئيسي إتاحة الولوج للمستخدمين المصرح لهم داخل قاعة الجلسة عبر شبكة Wi-Fi المحلية للاطلاع على جدول الأعمال ونقاط التداول ومتابعة الحضور عبر المتصفح بأمان تام دون إنترنت."
        }
      },
      {
        q: {
          en: "In what languages is the application available?",
          fr: "En quelles langues l'application est-elle disponible ?",
          ar: "ما هي اللغات المتوفرة في واجهة ومستندات التطبيق؟"
        },
        a: {
          en: "The application is natively bilingual in Arabic and French. Users can toggle languages instantly, with full support for Right-to-Left (RTL) Arabic and Left-to-Right (LTR) French layouts, inputs, and exported administrative Word/PDF documents.",
          fr: "L'application est entièrement bilingue arabe et français. L'utilisateur bascule instantanément entre les deux langues avec prise en charge complète du sens de lecture (RTL pour l'arabe, LTR pour le français) sur les écrans et dans les documents officiels exportés.",
          ar: "التطبيق ثنائي اللغة بالكامل (العربية والفرنسية). يمكن التبديل الفوري بين اللغتين مع تكيف كامل لاتجاه الواجهات من اليمين إلى اليسار (RTL) أو العكس، وينطبق ذلك على جميع الشاشات والمستندات المصدرة."
        }
      },
      {
        q: {
          en: "How does the system handle decision tracking after meetings are adjourned?",
          fr: "Comment s'effectue le suivi des décisions après la clôture de la session ?",
          ar: "كيف يتم تتبع تنفيذ القرارات والمقررات بعد اختتام الجلسات؟"
        },
        a: {
          en: "Once resolutions are formally voted and closed, they transition into the Decision Tracking Cockpit. Here, administrative leadership assigns each resolution to specific municipal departments, designates lead officers, defines deadlines, and monitors progress percentages (0% to 100%) until final execution.",
          fr: "Dès que les délibérations sont adoptées et la session clôturée, les décisions basculent dans le module de suivi d'exécution. Les responsables y assignent les services municipaux compétents, fixent les échéances et mettent à jour les taux d'avancement jusqu'à l'achèvement complet.",
          ar: "بمجرد المصادقة على المقررات وإغلاق الدورة، تنتقل تلقائياً إلى لوحة تتبع المقررات، حيث تعين الإدارة المصالح الجماعية المسؤولة والأطر المكلفة، مع تحديد آجال التنفيذ ومتابعة نسب الإنجاز تدريجياً حتى اكتمال المشروع."
        }
      },
      {
        q: {
          en: "Are municipal records protected against accidental loss or tampering?",
          fr: "Les données municipales sont-elles protégées contre la perte ou l'altération ?",
          ar: "هل سجلات ومعطيات الجماعة محمية ضد الضياع أو التعديل غير المصرح به؟"
        },
        a: {
          en: "Yes. Completed sessions are locked into an immutable read-only state. Furthermore, all administrative actions are logged in an internal audit trail, local database backups can be downloaded anytime, and system-wide data resets require dual-code security verification.",
          fr: "Oui. Les sessions terminées sont verrouillées en mode lecture seule infalsifiable. De plus, toutes les opérations font l'objet d'un journal d'audit, des sauvegardes de la base de données peuvent être exportées à tout moment et la réinitialisation requiert un double code de sécurité.",
          ar: "نعم، يتم تشميع الدورات المكتملة في حالة قراءة فقط غير قابلة للتعديل، مع تسجيل كافة العمليات في سجل تدقيق محمي، وإمكانية أخذ نسخ احتياطية شاملة في أي وقت، واشتراط رمز مزدوج لتأكيد أي عملية إعادة ضبط."
        }
      }
    ]
  },
  {
    id: "bawabat",
    slug: "bawabat",
    officialName: "بوابة المراسلات (BAWABAT)",
    shortName: "BAWABAT",
    historicalName: "بوابة المراسلات / Mail Registry & Order Bureau",
    version: "1.0.0",
    releaseStatus: "Production Ready",
    category: {
      en: "Correspondence & Registry Management",
      fr: "Gestion du Courrier & Bureau d'Ordre",
      ar: "تطبيق إدارة المراسلات ومكتب الضبط"
    },
    categoryKey: "admin",
    tagline: {
      en: "The Modern Desktop Platform for Mail & Order Bureau Management",
      fr: "Logiciel complet de gestion du courrier administratif et du bureau d'ordre",
      ar: "برنامج متكامل لإدارة المراسلات ومكتب الضبط وتسجيل البريد الوارد والصادر"
    },
    shortDescription: {
      en: "An offline-first Windows desktop platform for organizations, streamlining incoming, outgoing, and internal correspondence with QR-code receipts, digital parapheur visas, and secure local archiving.",
      fr: "Logiciel de bureau conçu pour enregistrer le courrier, générer des récépissés à QR code, gérer le parapheur électronique et archiver localement en toute sécurité.",
      ar: "برنامج مكتبي متكامل لتنظيم ورقمنة مكاتب الضبط: تسجيل البريد الوارد والصادر، استخراج وصولات إيداع برمز QR، مسار التأشير الإلكتروني، والأرشفة الآمنة."
    },
    fullDescription: {
      en: "BAWABAT is a purpose-built desktop management system engineered to modernize and digitize the Mail & Registry Office. Operating completely offline via an embedded local database, BAWABAT centralizes incoming mail registration with QR-coded deposit receipts, departmental routing, multi-tier digital parapheur visa workflows, and sequential outgoing dispatch records.\n\nBuilt with bilingual Arabic (native RTL) and French interfaces, the system features official registry printouts, classification plans with retention schedules (DUA), physical shelf/box archive indexing, and secure local audit trails. BAWABAT gives teams total data security and operational continuity without ongoing cloud dependencies.",
      fr: "BAWABAT est un système de gestion de bureau conçu pour moderniser et dématérialiser le Bureau d'Ordre. Fonctionnant 100% hors-ligne grâce à une base de données locale intégrée, BAWABAT centralise l'enregistrement du courrier arrivée avec génération de récépissés à QR code, l'orientation vers les services, les circuits de visa via un parapheur électronique à plusieurs niveaux, et la tenue rigoureuse du registre départ.\n\nConçue avec une interface bilingue arabe (RTL) et français (LTR), la plateforme intègre l'édition des registres officiels, les tableaux de gestion des archives (DUA), l'indexation physique des boîtes d'archives et des journaux d'audit sécurisés. BAWABAT apporte aux équipes administratives une sécurité totale et une continuité opérationnelle sans dépendance au cloud.",
      ar: "تعد بوابة المراسلات (BAWABAT) برنامجاً مكتبياً متكاملاً صُمم لتنظيم ورقمنة عمل مكتب الضبط وإدارة البريد. يعمل البرنامج دون الحاجة للاتصال بالإنترنت عبر قاعدة بيانات محلية، ويتيح تسجيل البريد الوارد بدقة مع استخراج وصولات الإيداع المزودة برمز QR، وتوجيه المراسلات للمصالح المعنية، وإدارة مسار التأشير والتوقيع الإلكتروني (Parapheur)، وتوثيق البريد الصادر بالتسلسل الرقمي المعتمد.\n\nيتميز البرنامج بواجهة عربية وفرنسية سهلة الاستخدام، ويوفر طباعة السجلات، إدارة الأرشيف وخطط الحفظ (DUA)، وتتبع مسار المراسلات وسجل العمليات، مما يمنح فريق العمل أماناً وسرعة ومرونة عالية دون الحاجة للإنترنت أو اشتراكات سحابية."
    },
    regulatoryFramework: {
      en: "Administrative Standards for Simplification & Records Management",
      fr: "Normes de simplification administrative et de gestion documentaire",
      ar: "معايير تنظيم وإدارة المراسلات والوثائق الإدارية"
    },
    branding: {
      appIcon: "../apps/moraslat/branding/bawabat_icon.svg",
      primaryLogo: "../apps/moraslat/branding/bawabat_horizontal_outlined.svg",
      darkLogo: "../apps/moraslat/branding/bawabat_horizontal_outlined.svg",
      horizontalLogo: "../apps/moraslat/branding/bawabat_horizontal_outlined.svg",
      verticalLogo: "../apps/moraslat/branding/bawabat_vertical_outlined.svg",
      subpageAppIcon: "../../apps/moraslat/branding/bawabat_icon.svg",
      subpagePrimaryLogo: "../../apps/moraslat/branding/bawabat_horizontal_outlined.svg",
      subpageDarkLogo: "../../apps/moraslat/branding/bawabat_horizontal_outlined.svg"
    },
    colors: {
      primary: "#0B2D5B",
      secondary: "#2563EB",
      accent: "#2EC4B6",
      darkSurface: "#071a36"
    },
    boxConfig: {
      year: "2026",
      edition: {
        en: "Professional Edition",
        fr: "Édition Professionnelle",
        ar: "نسخة إدارة المراسلات"
      },
      spineName: "BAWABAT",
      arabicSub: "إدارة المراسلات",
      modules: [
        { label: "IN", title: "Inbound", color: "#2563eb" },
        { label: "OUT", title: "Outbound", color: "#06b6d4" },
        { label: "PAR", title: "Parapheur", color: "#8b5cf6" },
        { label: "QR", title: "Tracking", color: "#10b981" },
        { label: "ARC", title: "DUA Archive", color: "#f59e0b" }
      ]
    },
    requirements: {
      os: {
        en: "Windows 10, Windows 11 (64-bit / x64)",
        fr: "Windows 10, Windows 11 (64 bits / x64)",
        ar: "ويندوز 10، ويندوز 11 (نواة 64 بت)"
      },
      offline: {
        en: "100% Offline Core (No mandatory cloud)",
        fr: "Fonctionnement 100% hors-ligne (Zéro dépendance cloud)",
        ar: "تشغيل كامل 100% دون اتصال بالإنترنت"
      },
      processor: {
        en: "64-bit Intel or AMD processor",
        fr: "Processeur Intel ou AMD 64 bits",
        ar: "معالج Intel أو AMD بمعمارية 64 بت"
      },
      ram: {
        en: "4 GB minimum (8 GB recommended)",
        fr: "4 Go minimum (8 Go recommandés)",
        ar: "4 جيجابايت كحد أدنى (8 جيجابايت موصى بها)"
      },
      diskSpace: {
        en: "~500 MB free storage space + scan storage",
        fr: "~500 Mo d'espace disque + stockage des pièces jointes",
        ar: "حوالي 500 ميغابايت + مساحة المرفقات الممسوحة ضوئياً"
      },
      languages: {
        en: "Bilingual: Arabic (Native RTL) & French (LTR)",
        fr: "Bilingue : Arabe (RTL natif) & Français (LTR)",
        ar: "ثنائي اللغة: العربية (RTL) والفرنسية (LTR)"
      }
    },
    mainBenefits: [
      {
        icon: "shield-check",
        title: {
          en: "Total Data Sovereignty & Offline Reliability",
          fr: "Souveraineté des Données & Zéro Dépendance Cloud",
          ar: "سيادة كاملة على البيانات وتشغيل محلي"
        },
        desc: {
          en: "All databases and scanned documents reside on the local workstation, ensuring uninterrupted operations without internet access.",
          fr: "Toutes les bases de données et pièces jointes restent en local, garantissant une continuité absolue sans dépendance au cloud.",
          ar: "كافة السجلات والمرفقات الممسوحة ضوئياً تحفظ محلياً على الحاسوب، مما يضمن العمل المستمر دون الحاجة للإنترنت."
        }
      },
      {
        icon: "layers",
        title: {
          en: "Strict Legal & Regulatory Alignment",
          fr: "Conformité Légale & Respect des Délais (Loi 55-19)",
          ar: "امتثال دقيق لمقتضيات القانون 55-19"
        },
        desc: {
          en: "Conforms to administrative procedural deadlines, automated reference numbering, and official deposit receipt standards with verification QR codes.",
          fr: "Respecte les délais légaux de traitement, la numérotation séquentielle et la délivrance de récépissés avec QR codes de vérification.",
          ar: "التزام صارم بالآجال القانونية لمعالجة الملفات، والترقيم التسلسلي الآلي، وتوليد وصولات الإيداع المعتمدة برموز QR."
        }
      },
      {
        icon: "trending-up",
        title: {
          en: "End-to-End Traceability & Accountability",
          fr: "Traçabilité Intégrale & Piste d'Audit",
          ar: "تتبع شامل وسجلات تدقيق غير قابلة للتعديل"
        },
        desc: {
          en: "Granular audit logs track every action, approval, transfer, and document modification across the entire administrative hierarchy.",
          fr: "Un journal d'audit cryptographique enregistre chaque action, visa, transfert et modification au sein de l'organisation.",
          ar: "سجلات تدقيق مفصلة توثق بالدقيقة والثانية كل إجراء أو تأشيرة أو توجيه للمراسلات لضمان المسؤولية والشفافية."
        }
      },
      {
        icon: "languages",
        title: {
          en: "Native Bilingual Usability",
          fr: "Interface Bilingue Arabe & Français",
          ar: "واجهة ثنائية اللغة عربية وفرنسية"
        },
        desc: {
          en: "Native Arabic right-to-left (RTL) and French left-to-right (LTR) interfaces respect regional administrative conventions.",
          fr: "Prise en charge intégrale du sens de lecture arabe (RTL) et français (LTR) adaptée aux pratiques administratives officielles.",
          ar: "تصميم ثنائي اللغة يدعم القراءة والكتابة من اليمين إلى اليسار (RTL) باللغة العربية والفرنسية (LTR) وفق المعايير الرسمية."
        }
      },
      {
        icon: "lock",
        title: {
          en: "Zero Recurring Infrastructure Costs",
          fr: "Zéro Coût Récurrent d'Hébergement",
          ar: "اقتصادية وبدون تكاليف اشتراك متكررة"
        },
        desc: {
          en: "Runs as an independent desktop package without requiring expensive cloud subscriptions, third-party hosting, or external API licenses.",
          fr: "Fonctionne sous forme d'application desktop autonome sans aucun abonnement cloud obligatoire ni frais récurrents.",
          ar: "تطبيق مكتبي دائم يعمل بشكل مستقل دون اشتراكات سحابية مكلفة أو خوادم وسيطة مدفوعة."
        }
      }
    ],
    verifiedFeatures: [
      {
        num: "01",
        title: {
          en: "Incoming Mail Registry & QR Deposit Receipts",
          fr: "Registre d'Arrivée & Récépissés de Dépôt QR",
          ar: "سجل البريد الوارد ووصولات الإيداع بـ QR"
        },
        desc: {
          en: "Registers received letters, tenders, and official documents with chronological reference numbers, scanned attachments, and printable QR receipts.",
          fr: "Enregistre le courrier reçu avec numérotation chronologique unique, numérisation des pièces et délivrance immédiate de récépissés à QR code.",
          ar: "تسجيل فوري للمراسلات والعروض الواردة مع ترقيم آلي غير قابل للتكرار ومرفقات ضوئية ووصولات إيداع معتمدة برمز QR."
        }
      },
      {
        num: "02",
        title: {
          en: "Outgoing Mail Management & Locked Archiving",
          fr: "Gestion du Courrier Sortant & Verrouillage",
          ar: "تدبير البريد الصادر والتثبيت النهائي"
        },
        desc: {
          en: "Manages outgoing correspondence with sequential reference numbering (BO-S-YYYY-XXXX), delivery tracking, and immutable record locking upon dispatch.",
          fr: "Attribue des références séquentielles officielles, suit les modes d'expédition et verrouille définitivement les courriers expédiés.",
          ar: "ترقيم تسلسلي رسمي للمراسلات الصادرة وتتبع طرق الإرسال وقفل السجلات تلقائياً لمنع أي تعديل لاحق بعد التوجيه."
        }
      },
      {
        num: "03",
        title: {
          en: "Departmental Routing & Deadline Tracking",
          fr: "Orientation Interne & Compte à Rebours des Délais",
          ar: "التوجيه الداخلي وتتبع آجال الرد"
        },
        desc: {
          en: "Dispatches incoming correspondence to internal divisions or officers with priority flags, task instructions, and statutory countdown alerts.",
          fr: "Achemine le courrier vers les services concernés avec niveau de priorité, consignes d'exécution et suivi des délais réglementaires.",
          ar: "توجيه سريع للمراسلات إلى الأقسام والمصالح المعنية مع تحديد الأولويات والتعليمات وتنبيهات العد التنازلي للآجال القانونية."
        }
      },
      {
        num: "04",
        title: {
          en: "Digital Parapheur & Multi-Tier Visa Workflows",
          fr: "Parapheur Électronique & Circuit de Visas",
          ar: "الـ Parapheur الإلكتروني ومسار التأشير"
        },
        desc: {
          en: "Multi-level collaborative document review (Visa, Correction, Approval, Rejection) with formal annotations and SHA-256 verification before signature.",
          fr: "Validation collaborative à plusieurs niveaux (Visa, Annotation, Approbation, Rejet) avec vérification d'intégrité avant signature.",
          ar: "دورة مصادقة ومراجعة متعددة المراحل للمسودات والمذكرات (تأشير، تنقيح، موافقة، رفض) مع التحقق من سلامة الوثائق."
        }
      },
      {
        num: "05",
        title: {
          en: "Official Legal Registers Compilation",
          fr: "Édition des Registres Légaux Réglementaires",
          ar: "استخراج السجلات القانونية المعتمدة"
        },
        desc: {
          en: "Automatically compiles and exports printable statutory registers (Arrival Register, Dispatch Register, Administrative Acts) in standard formats.",
          fr: "Génère les registres réglementaires officiels imprimables (registre d'arrivée, registre départ, actes administratifs) conformes aux normes.",
          ar: "توليد وتصدير السجلات الرسمية الورقية والرقمية (سجل الواردات، سجل الصادرات، سجل القرارات) بتنسيقات قانونية جاهزة للطباعة."
        }
      },
      {
        num: "06",
        title: {
          en: "Comprehensive Archival Lifecycle & DUA Management",
          fr: "Gestion des Archives & DUA (Rayonnage/Boîtes)",
          ar: "دورة تدبير الأرشيف ومدد الحفظ (DUA)"
        },
        desc: {
          en: "Applies legal retention schedules (DUA), transfer lists, disposal protocols, and physical warehouse storage indexing down to shelf and box numbers.",
          fr: "Applique les durées d'utilité administrative (DUA), versements, éliminations et indexation physique précise (salle, travée, boîte).",
          ar: "تطبيق مدد الاستبقاء القانونية (DUA) وجداول الترحيل والإتلاف مع فهرسة دقيقة لموقع الحفظ المادي (رقم القاعة، الرف، والعلبة)."
        }
      },
      {
        num: "07",
        title: {
          en: "Administrative Procedures Catalog (Law 55-19)",
          fr: "Répertoire des Procédures Administratives (Loi 55-19)",
          ar: "دليل المساطر والإجراءات الإدارية (القانون 55-19)"
        },
        desc: {
          en: "Centralized repository of administrative formalities, documenting required citizen paperwork, maximum response delays, and statutory rules.",
          fr: "Référentiel des démarches administratives précisant les pièces requises, les délais légaux plafonds et les cas de décision implicite.",
          ar: "توثيق شامل للمساطر الإدارية والوثائق المطلوبة من المرتفقين مع ضبط الآجال القانونية القصوى وفق قانون تبسيط الإجراءات 55-19."
        }
      },
      {
        num: "08",
        title: {
          en: "Citizen Complaints & Inquiries Tracking (Law 31-13)",
          fr: "Suivi des Réclamations & Accès à l'Information (Loi 31-13)",
          ar: "تتبع الشكايات وحق الحصول على المعلومات (القانون 31-13)"
        },
        desc: {
          en: "Dedicated registry for citizen complaints, suggestions, and access-to-information requests with statutory response deadline monitoring.",
          fr: "Module dédié au traitement des réclamations, doléances citoyennes et demandes d'accès à l'information dans les délais légaux.",
          ar: "سجل خاص بتدبير شكايات وتظلمات المواطنين وطلبات الحصول على المعلومات مع متابعة دقيقة لآجال الرد القانونية الملزمة."
        }
      },
      {
        num: "09",
        title: {
          en: "Real-Time Operational Dashboard & Mail Traffic KPIs",
          fr: "Tableau de Bord & Indicateurs de Flux de Courrier",
          ar: "لوحة القيادة ومؤشرات تدفق المراسلات"
        },
        desc: {
          en: "Presents clear visual statistics on daily incoming/outgoing mail volume, pending approvals, urgent assignments, and resolution performance.",
          fr: "Visualisation immédiate des flux de courrier, des dossiers en attente de visa, des urgences et des taux de traitement par service.",
          ar: "إحصائيات ورسوم بيانية فورية لحجم المراسلات الصادرة والواردة، المعاملات العالقة، المراسلات المستعجلة، ومعدلات الأداء."
        }
      },
      {
        num: "10",
        title: {
          en: "Role-Based Access Control & Cryptographic Audit Trails",
          fr: "Contrôle des Accès par Rôles & Journal d'Audit",
          ar: "صلاحيات مشددة وسجلات تدقيق موثقة"
        },
        desc: {
          en: "Enforces role boundaries (Admin, Order Bureau Agent, Department Head, Archivist, Director) and logs every operation with timestamps.",
          fr: "Cloisonne les accès par profil utilisateur et conserve l'historique complet des consultations et modifications d'actes.",
          ar: "توزيع محكم للصلاحيات حسب الأدوار الإدارية (مدير، عون مكتب الضبط، رئيس مصلحة، أرشيفي) مع تسجيل شامل لكافة العمليات."
        }
      },
      {
        num: "11",
        title: {
          en: "Local Database Backup & Restore Utility",
          fr: "Sauvegarde & Restauration Locale de la Base",
          ar: "أداة النسخ الاحتياطي والاستعادة المحلية"
        },
        desc: {
          en: "Built-in desktop utility allowing administrators to create timestamped database snapshots and restore data securely on demand.",
          fr: "Outil intégré permettant aux administrateurs de générer des sauvegardes horodatées complètes et de restaurer les données en cas de besoin.",
          ar: "أداة مدمجة تمكن مسؤولي النظام من إنشاء نسخ احتياطية شاملة ومؤرخة واستعادتها بأمان تام عند الحاجة دون خبرة برمجية معقدة."
        }
      }
    ],
    targetAudience: [
      {
        role: {
          en: "Companies, Organizations & Offices",
          fr: "Entreprises, Organisations & Bureaux",
          ar: "الشركات والمؤسسات والمكاتب الإدارية"
        },
        desc: {
          en: "Organizations requiring streamlined mail registration, incoming/outgoing logs, and deadline tracking.",
          fr: "Organisations nécessitant un enregistrement rigoureux du courrier, des registres d'arrivée/départ et le respect des délais.",
          ar: "المؤسسات والشركات والمكاتب الإدارية التي تحتاج إلى ضبط حركة البريد والمراسلات وتتبع الآجال بدقة."
        }
      },
      {
        role: {
          en: "Educational Institutions & Centers",
          fr: "Établissements d'Enseignement & Centres",
          ar: "المؤسسات التعليمية والمعاهد والمراكز"
        },
        desc: {
          en: "Institutes, academies, and organizations managing structured correspondence and records.",
          fr: "Instituts, universités et centres gérant un volume important de courriers et dossiers.",
          ar: "الجامعات والمعاهد والمراكز التي تدير حجماً كبيراً من المراسلات والوثائق الرسمية."
        }
      },
      {
        role: {
          en: "Legal Firms & Executive Secretariats",
          fr: "Cabinets Professionnels & Secrétariats de Direction",
          ar: "مكاتب المحاماة والاستشارات وسكرتارية الإدارة"
        },
        desc: {
          en: "Offices requiring QR-code deposit receipts, digital parapheur visas, and reliable local document tracking.",
          fr: "Cabinets nécessitant des récépissés à QR code, des visas parapheur et un suivi rigoureux des documents.",
          ar: "المكاتب المهنية وسكرتارية الإدارة التي تحتاج وصولات إيداع برمز QR وتأشيرات إلكترونية وأرشفة سريعة."
        }
      },
      {
        role: {
          en: "Registry & Mail Office Officers",
          fr: "Agents du Bureau d'Ordre & Archivistes",
          ar: "أطر مكاتب الضبط ومسؤولو الأرشيف"
        },
        desc: {
          en: "Mail clerks, archive managers, and administrative coordinators handling daily dispatch.",
          fr: "Agents d'accueil du courrier, archivistes et coordinateurs administratifs gérant les flux quotidiens.",
          ar: "المسؤولون عن استلام وتسجيل البريد اليومي وتوجيهه ومتابعة مسار التأشيرات وحفظ الأرشيف."
        }
      }
    ],
    faq: [
      {
        q: {
          en: "Does BAWABAT require a permanent internet connection?",
          fr: "BAWABAT nécessite-t-elle une connexion Internet permanente ?",
          ar: "هل يتطلب تشغيل BAWABAT اتصالاً دائماً بالإنترنت؟"
        },
        a: {
          en: "No. BAWABAT is designed as an offline-first desktop application. All database transactions, mail registrations, document attachments, and search functions run entirely on your local computer or local network without requiring internet access.",
          fr: "Non. BAWABAT est une application de bureau conçue pour fonctionner intégralement hors-ligne. Toutes les opérations d'enregistrement, de recherche et de gestion documentaire s'exécutent en local sans accès Internet.",
          ar: "لا، BAWABAT تطبيق مكتبي يعمل باستقلالية تامة دون إنترنت (Offline-First). كافة عمليات تسجيل البريد، إرفاق الوثائق، والبحث تتم كلياً على حاسوبك المحلي دون الحاجة لأي اتصال بالشبكة."
        }
      },
      {
        q: {
          en: "What operating systems are supported?",
          fr: "Quels systèmes d'exploitation sont supportés ?",
          ar: "ما هي أنظمة التشغيل المدعومة؟"
        },
        a: {
          en: "BAWABAT officially supports 64-bit versions of Microsoft Windows 10 and Windows 11.",
          fr: "BAWABAT supporte officiellement les versions 64 bits de Microsoft Windows 10 et Windows 11.",
          ar: "يدعم برنامج BAWABAT رسمياً أنظمة Microsoft Windows 10 و Windows 11 بمعمارية 64 بت."
        }
      },
      {
        q: {
          en: "How does BAWABAT help comply with administrative simplification laws (e.g., Law 55-19)?",
          fr: "Comment l'application assure-t-elle la conformité à la loi 55-19 ?",
          ar: "كيف يساعد البرنامج في الامتثال لقانون تبسيط المساطر الإدارية 55-19؟"
        },
        a: {
          en: "The platform includes dedicated modules for administrative procedures with statutory processing deadlines, automatic deposit receipt generation with verification QR codes, and tracking for citizen requests and complaints under Law 31-13.",
          fr: "La plateforme intègre un répertoire des procédures avec décompte des délais légaux, la délivrance de récépissés à QR code horodatés et le suivi des demandes citoyennes conformément aux lois 55-19 et 31-13.",
          ar: "يتضمن البرنامج دليلاً رقمياً للمساطر الإدارية مع حساب آلي لآجال المعالجة المحددة قانوناً، وتوليد وصولات إيداع موثقة بـ QR Code، وتتبع شكايات المرتفقين وفقاً للقانونين 55-19 و 31-13."
        }
      },
      {
        q: {
          en: "Can the application be used in both Arabic and French?",
          fr: "L'application est-elle disponible en arabe et en français ?",
          ar: "هل يدعم التطبيق اللغتين العربية والفرنسية؟"
        },
        a: {
          en: "Yes. BAWABAT features full bilingual support. Users can switch seamlessly between Arabic (with native right-to-left layout) and French (left-to-right).",
          fr: "Oui. BAWABAT est nativement bilingue avec basculement instantané entre l'arabe (RTL) et le français (LTR) sur tous les écrans et documents imprimables.",
          ar: "نعم، يتميز BAWABAT بدعم ثنائي اللغة بالكامل، مع إمكانية التبديل الفوري بين واجهة عربية أصيلة من اليمين إلى اليسار (RTL) والواجهة الفرنسية (LTR)."
        }
      },
      {
        q: {
          en: "How is administrative data backed up?",
          fr: "Comment les données administratives sont-elles sauvegardées ?",
          ar: "كيف يتم إجراء النسخ الاحتياطي وحماية البيانات؟"
        },
        a: {
          en: "The application includes a built-in database management utility in the settings menu, allowing authorized administrators to generate timestamped SQLite backup files and restore them when needed.",
          fr: "L'application intègre un module de gestion des sauvegardes permettant aux administrateurs de générer des copies de sauvegarde horodatées complètes et de les restaurer en un clic.",
          ar: "يتضمن البرنامج أداة مدمجة لإدارة قواعد البيانات تتيح للمسؤول استخراج نسخ احتياطية شاملة ومؤرخة بضغطة زر واحدة واسترجاعها بأمان تام في أي وقت."
        }
      }
    ]
  },
  {
    id: "makhzon",
    slug: "makhzon",
    officialName: "مخزون (MAKHZON)",
    shortName: "MAKHZON",
    version: "0.9.0",
    releaseStatus: "In Development",
    isUpcoming: true,
    category: {
      en: "Inventory & Asset Management",
      fr: "Gestion de Stock & Matériel",
      ar: "إدارة المخزون والممتلكات"
    },
    categoryKey: "upcoming",
    tagline: {
      en: "Next-Generation Offline Inventory & Equipment Management Platform",
      fr: "Logiciel moderne de gestion des stocks, immobilisations et matériel",
      ar: "برنامج مكتبي لإدارة المخازن والممتلكات وجرد العتاد وتتبع حركات الاستهلاك"
    },
    shortDescription: {
      en: "A robust desktop solution currently in engineering, designed to automate warehouse inventory, barcode logging, equipment allocation, and consumption tracking without internet dependency.",
      fr: "Solution de bureau en cours de développement pour automatiser l'inventaire des stocks, le suivi par code-barres et les mouvements de matériel 100% hors-ligne.",
      ar: "برنامج مكتبي قيد التطوير حالياً، مصمم لأتمتة جرد المخازن، التتبع بالباركود، إدارة العتاد والممتلكات، ومراقبة حركات الاستهلاك محلياً دون إنترنت."
    },
    branding: {
      appIcon: "assets/brand/makhzon_icon.svg",
      primaryLogo: "assets/brand/makhzon_icon.svg",
      subpageAppIcon: "../assets/brand/makhzon_icon.svg",
      subpagePrimaryLogo: "../assets/brand/makhzon_icon.svg"
    },
    colors: {
      primary: "#D97706",
      secondary: "#F59E0B",
      accent: "#B45309",
      darkSurface: "#1e160a"
    },
    boxConfig: {
      year: "2026",
      edition: {
        en: "In Development",
        fr: "En développement",
        ar: "قيد التطوير"
      },
      spineName: "MAKHZON",
      arabicSub: "إدارة المخزون",
      modules: [
        { label: "STK", title: "Stock", color: "#d97706" },
        { label: "BAR", title: "Barcode", color: "#b45309" },
        { label: "INV", title: "Inventory", color: "#f59e0b" },
        { label: "OUT", title: "Dispatch", color: "#ea580c" },
        { label: "LOG", title: "History", color: "#78350f" }
      ]
    },
    requirements: {
      os: { en: "Windows 10, Windows 11 (64-bit)", fr: "Windows 10, Windows 11 (64 bits)", ar: "ويندوز 10، ويندوز 11 (نواة 64 بت)" },
      offline: { en: "100% Offline Core", fr: "100% Hors-ligne", ar: "يعمل 100% محلياً دون إنترنت" }
    }
  },
  {
    id: "kawader",
    slug: "kawader",
    officialName: "كوادر (KAWADER)",
    shortName: "KAWADER",
    version: "0.8.5",
    releaseStatus: "In Development",
    isUpcoming: true,
    category: {
      en: "Human Resources & Tasks",
      fr: "Ressources Humaines & Tâches",
      ar: "الموارد البشرية والمهام"
    },
    categoryKey: "upcoming",
    tagline: {
      en: "Streamlined Desktop HR, Leave Tracking & Duty Management System",
      fr: "Gestion autonome du personnel, des congés et du suivi des missions",
      ar: "برنامج مكتبي لإدارة ملفات الموظفين وتتبع الرخص والغيابات وجداول المهام"
    },
    shortDescription: {
      en: "A confidential on-premise human resources management platform currently being crafted for team profiling, statutory leave accounting, duty schedules, and staff analytics.",
      fr: "Plateforme RH autonome en cours de conception pour le suivi des dossiers du personnel, les congés réglementaires et les plannings de service.",
      ar: "برنامج مكتبي متقدم قيد الإنجاز، مخصص لتدبير ملفات المستخدمين، تتبع الإجازات والرخص، جدولة المهام الإدارية، وإعداد تقارير الحضور محلياً."
    },
    branding: {
      appIcon: "assets/brand/kawader_icon.svg",
      primaryLogo: "assets/brand/kawader_icon.svg",
      subpageAppIcon: "../assets/brand/kawader_icon.svg",
      subpagePrimaryLogo: "../assets/brand/kawader_icon.svg"
    },
    colors: {
      primary: "#7C3AED",
      secondary: "#8B5CF6",
      accent: "#6D28D9",
      darkSurface: "#170f24"
    },
    boxConfig: {
      year: "2026",
      edition: {
        en: "In Development",
        fr: "En développement",
        ar: "قيد التطوير"
      },
      spineName: "KAWADER",
      arabicSub: "الموارد البشرية",
      modules: [
        { label: "HR", title: "Personnel", color: "#7c3aed" },
        { label: "ATT", title: "Leaves", color: "#8b5cf6" },
        { label: "TSK", title: "Tasks", color: "#6366f1" },
        { label: "DOC", title: "Files", color: "#a855f7" },
        { label: "EVA", title: "Reports", color: "#4f46e5" }
      ]
    },
    requirements: {
      os: { en: "Windows 10, Windows 11 (64-bit)", fr: "Windows 10, Windows 11 (64 bits)", ar: "ويندوز 10، ويندوز 11 (نواة 64 بت)" },
      offline: { en: "100% Offline Core", fr: "100% Hors-ligne", ar: "يعمل 100% محلياً دون إنترنت" }
    }
  },
  {
    id: "mustanad",
    slug: "mustanad",
    officialName: "مستند (MUSTANAD)",
    shortName: "MUSTANAD",
    version: "0.8.0",
    releaseStatus: "In Development",
    isUpcoming: true,
    category: {
      en: "Digital Archive & Records",
      fr: "Archivage Numérique & GED",
      ar: "الأرشيف الرقمي والوثائق"
    },
    categoryKey: "upcoming",
    tagline: {
      en: "Secure Local Electronic Document Management & Rapid Optical Indexing",
      fr: "Coffre-fort documentaire local pour l'indexation rapide et l'archivage numérique",
      ar: "خزينة رقمية مكتبية للأرشفة الذكية وفهرسة الوثائق الممسوحة ضوئياً والبحث السريع"
    },
    shortDescription: {
      en: "A standalone document vault and electronic archive system currently being built, featuring high-speed optical scan ingestion, custom classification trees, and encrypted local indexing.",
      fr: "Système de coffre-fort documentaire en cours de développement, intégrant la numérisation rapide, le classement thématique et l'indexation chiffrée.",
      ar: "خزينة رقمية مستقلة لحفظ الوثائق قيد التطوير، تتيح أرشفة المستندات الممسوحة ضوئياً، الفهرسة الموضوعية، والبحث الفوري داخل النصوص مع تشفير محلي كامل."
    },
    branding: {
      appIcon: "assets/brand/mustanad_icon.svg",
      primaryLogo: "assets/brand/mustanad_icon.svg",
      subpageAppIcon: "../assets/brand/mustanad_icon.svg",
      subpagePrimaryLogo: "../assets/brand/mustanad_icon.svg"
    },
    colors: {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#047857",
      darkSurface: "#091c14"
    },
    boxConfig: {
      year: "2026",
      edition: {
        en: "In Development",
        fr: "En développement",
        ar: "قيد التطوير"
      },
      spineName: "MUSTANAD",
      arabicSub: "الأرشيف الرقمي",
      modules: [
        { label: "SCN", title: "Scan", color: "#059669" },
        { label: "OCR", title: "Indexing", color: "#10b981" },
        { label: "TAG", title: "Classification", color: "#14b8a6" },
        { label: "SEC", title: "Encrypted", color: "#047857" },
        { label: "ZIP", title: "Backup", color: "#065f46" }
      ]
    },
    requirements: {
      os: { en: "Windows 10, Windows 11 (64-bit)", fr: "Windows 10, Windows 11 (64 bits)", ar: "ويندوز 10، ويندوز 11 (نواة 64 بت)" },
      offline: { en: "100% Offline Core", fr: "100% Hors-ligne", ar: "يعمل 100% محلياً دون إنترنت" }
    }
  }
];

// Helper functions for easy querying
const AppsRegistry = {
  getAll() {
    return APPS_DATA;
  },
  getBySlug(slug) {
    return APPS_DATA.find(app => app.slug === slug || app.id === slug) || null;
  },
  filterByCategory(categoryKey) {
    if (!categoryKey || categoryKey === "all") return APPS_DATA;
    if (categoryKey === "upcoming") return APPS_DATA.filter(app => app.isUpcoming);
    return APPS_DATA.filter(app => app.categoryKey === categoryKey);
  },
  search(query, lang = "en") {
    if (!query || !query.trim()) return APPS_DATA;
    const q = query.toLowerCase().trim();
    return APPS_DATA.filter(app => {
      const name = (app.officialName || "").toLowerCase();
      const shortName = (app.shortName || "").toLowerCase();
      const tag = (app.tagline[lang] || app.tagline.en || "").toLowerCase();
      const desc = (app.shortDescription[lang] || app.shortDescription.en || "").toLowerCase();
      const cat = (app.category[lang] || app.category.en || "").toLowerCase();
      return name.includes(q) || shortName.includes(q) || tag.includes(q) || desc.includes(q) || cat.includes(q);
    });
  }
};
