/**
 * youFasApps - WhatsApp Contact & Modal Controller
 * Provides accessible, trilingual modal dialogs with pre-filled WhatsApp links.
 */

const ContactModal = (function() {
  let modalElement = null;
  let activeApp = null;
  let previousActiveElement = null;

  function init() {
    createModalDOM();
    setupGlobalListeners();
  }

  function createModalDOM() {
    if (document.getElementById("contactModal")) {
      modalElement = document.getElementById("contactModal");
      return;
    }

    const modalHtml = `
      <div id="contactModal" class="modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-dialog">
          <button type="button" class="modal-close" data-modal-close aria-label="Close dialog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="modal-header">
            <div class="modal-icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3 id="modalTitle" class="modal-title" data-i18n="modalTitle">Request Application</h3>
            <p class="modal-subtitle" data-i18n="modalSubtitle">Contact our team directly on WhatsApp to obtain your licensed copy or request an institutional demo.</p>
          </div>

          <div class="modal-app-card" id="modalAppCard">
            <!-- Injected dynamically with app logo and name -->
          </div>

          <div class="modal-channels-container">
            <h4 class="modal-channels-heading" data-i18n="modalChooseChannel">Select a Contact Channel:</h4>
            <div class="modal-channels-list" id="modalChannelsList">
              <!-- Channel 1 and 2 buttons injected dynamically -->
            </div>
          </div>

          <div class="modal-message-preview">
            <span class="preview-label" data-i18n="modalPrefilledLabel">Prefilled Message:</span>
            <blockquote class="preview-text" id="modalPrefillPreview"></blockquote>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary modal-btn-close" data-modal-close data-i18n="modalClose">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHtml);
    modalElement = document.getElementById("contactModal");
  }

  function getPrefilledMessage(appName, lang) {
    if (activeApp && activeApp.isClassified) {
      const classifiedMessages = {
        ar: `مرحباً، أود الاستفسار عن التطبيقات والمشاريع الجديدة قيد التطوير لدى youFasApps لمعرفة موعد إطلاقها وتفاصيلها.`,
        fr: `Bonjour, je souhaite me renseigner sur les nouvelles applications en cours de développement chez youFasApps pour connaître leur date de disponibilité.`,
        en: `Hello, I would like to inquire about the upcoming desktop applications currently in development at youFasApps.`
      };
      return classifiedMessages[lang] || classifiedMessages.en;
    }
    if (activeApp && activeApp.isUpcoming) {
      const upcomingMessages = {
        ar: `مرحباً، أود الاستفسار عن تطبيق ${appName} الذي هو قيد التطوير حالياً لمعرفة موعد توفره ومميزاته.`,
        fr: `Bonjour, je souhaite me renseigner sur l'application en cours de développement '${appName}' pour connaître sa date de sortie et ses fonctionnalités.`,
        en: `Hello, I would like to inquire about the upcoming app '${appName}' currently in development to know more about its release and features.`
      };
      return upcomingMessages[lang] || upcomingMessages.en;
    }
    const templates = CONFIG.whatsapp.messages;
    const template = templates[lang] || templates.en;
    return template.replace("{appName}", appName);
  }

  function renderModalContent() {
    if (!activeApp) return;

    const lang = I18n.getLanguage();
    const appName = activeApp.isClassified
      ? (lang === "ar" ? "مشروع سري قيد الكتمان" : (lang === "fr" ? "Projet Confidentiel" : "Classified Project"))
      : activeApp.officialName;
    const prefilledText = getPrefilledMessage(appName, lang);

    // App card
    const appCard = document.getElementById("modalAppCard");
    const isSubpage = window.location.pathname.includes("/apps/");
    const iconSrc = isSubpage ? activeApp.branding.subpageAppIcon : activeApp.branding.appIcon;
    const catText = activeApp.category[lang] || activeApp.category.en;
    const verDisplay = activeApp.isUpcoming
      ? (I18n.t("badgeInDev") || "In Development")
      : `v${activeApp.version}`;

    appCard.innerHTML = `
      <div class="modal-app-icon-wrap">
        <img src="${iconSrc}" alt="${appName}" class="modal-app-icon" onerror="this.src='${isSubpage ? activeApp.branding.subpagePrimaryLogo : activeApp.branding.primaryLogo}'">
      </div>
      <div class="modal-app-info">
        <span class="modal-app-category">${catText}</span>
        <h4 class="modal-app-name">${appName}</h4>
        <span class="modal-app-version">${verDisplay} • ${activeApp.requirements.os[lang] || activeApp.requirements.os.en}</span>
      </div>
    `;

    // Prefilled text preview
    const previewEl = document.getElementById("modalPrefillPreview");
    previewEl.textContent = `"${prefilledText}"`;

    // Channels buttons
    const channelsList = document.getElementById("modalChannelsList");
    channelsList.innerHTML = "";

    const encodedText = encodeURIComponent(prefilledText);
    const contacts = [CONFIG.whatsapp.contact1, CONFIG.whatsapp.contact2];

    contacts.forEach((contact, index) => {
      const channelNumber = index + 1;
      const badge = contact.badge[lang] || contact.badge.en;
      const desc = contact.description[lang] || contact.description.en;
      const isPlaceholder = !contact.isConfigured;
      const waUrl = `https://wa.me/${contact.number}?text=${encodedText}`;

      const numPillKey = channelNumber === 1 ? "contactChannel1Num" : "contactChannel2Num";
      const channelNumText = I18n.t(numPillKey) || `WhatsApp ${channelNumber}`;
      const placeholderText = I18n.t("contactDevPlaceholder") || "Development Placeholder";

      const card = document.createElement("div");
      card.className = "modal-channel-card";

      card.innerHTML = `
        <div class="channel-info">
          <div class="channel-badge-wrap">
            <span class="channel-num-badge">${channelNumText}</span>
            <span class="channel-label">${badge}</span>
          </div>
          <p class="channel-desc">${desc}</p>
          <span class="channel-phone" dir="ltr">${contact.display}</span>
          ${isPlaceholder ? `<span class="channel-dev-pill" title="Configured in js/config.js">${placeholderText}</span>` : ""}
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp modal-wa-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.073-.49-1.637-.676-2.684-2.338-2.766-2.449-.082-.111-.664-.883-.664-1.684 0-.801.42-1.196.57-1.357.148-.161.325-.202.434-.202.109 0 .217.001.312.006.1.005.234-.038.366.279.135.324.462 1.127.502 1.209.041.082.068.178.014.286-.055.109-.082.177-.163.272-.082.096-.172.214-.246.288-.082.082-.167.171-.072.335.096.163.424.7.912 1.135.628.56 1.157.733 1.32.815.163.082.259.072.355-.038.096-.111.408-.475.517-.638.109-.163.218-.137.367-.082.15.054.953.45 1.117.532.163.082.272.122.312.191.041.069.041.405-.103.81z"/>
          </svg>
          <span data-i18n="contactOpenWa">${I18n.t("contactOpenWa")}</span>
        </a>
      `;

      channelsList.appendChild(card);
    });

    I18n.translateDOM();
  }

  function open(appIdentifier) {
    if (!modalElement) createModalDOM();

    let app = null;
    if (typeof appIdentifier === "string") {
      app = AppsRegistry.getBySlug(appIdentifier);
    } else if (appIdentifier && typeof appIdentifier === "object") {
      app = appIdentifier;
    }

    // Default to first app if not found
    if (!app) {
      const all = AppsRegistry.getAll();
      app = all.length > 0 ? all[0] : null;
    }

    if (!app) return;

    activeApp = app;
    previousActiveElement = document.activeElement;

    renderModalContent();

    modalElement.classList.add("is-active");
    modalElement.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Focus close button or first action
    const closeBtn = modalElement.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!modalElement) return;

    modalElement.classList.remove("is-active");
    modalElement.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (previousActiveElement && typeof previousActiveElement.focus === "function") {
      previousActiveElement.focus();
    }
  }

  function setupGlobalListeners() {
    // Open modal on click of any element with data-get-app
    document.addEventListener("click", e => {
      const trigger = e.target.closest("[data-get-app]");
      if (trigger) {
        e.preventDefault();
        const appSlug = trigger.getAttribute("data-get-app");
        open(appSlug);
      }
    });

    // Close modal triggers
    document.addEventListener("click", e => {
      if (e.target.closest("[data-modal-close]")) {
        e.preventDefault();
        close();
      }
    });

    // Close when clicking directly on backdrop
    if (modalElement) {
      modalElement.addEventListener("click", e => {
        if (e.target === modalElement) {
          close();
        }
      });
    }

    // Escape key listener & focus trap
    document.addEventListener("keydown", e => {
      if (!modalElement || !modalElement.classList.contains("is-active")) return;

      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      if (e.key === "Tab") {
        const focusable = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Re-render modal when language changes
    window.addEventListener("languagechange", () => {
      if (modalElement && modalElement.classList.contains("is-active")) {
        renderModalContent();
      }
    });
  }

  return {
    init,
    open,
    close
  };
})();

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ContactModal.init());
} else {
  ContactModal.init();
}
