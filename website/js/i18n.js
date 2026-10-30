/**
 * youFasApps - Internationalization (i18n) Engine
 * Handles language detection, switching, DOM translation, and RTL/LTR dynamics.
 */

const I18n = (function() {
  let currentLang = "en";

  function init() {
    // Determine initial language: localStorage -> browser language -> default
    const saved = localStorage.getItem(CONFIG.i18n.storageKey);
    if (saved && isValidLang(saved)) {
      currentLang = saved;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
      if (browserLang.startsWith("ar")) {
        currentLang = "ar";
      } else if (browserLang.startsWith("fr")) {
        currentLang = "fr";
      } else {
        currentLang = CONFIG.i18n.defaultLang || "en";
      }
    }

    applyLanguage(currentLang, false);
    setupEventListeners();
  }

  function isValidLang(lang) {
    return CONFIG.i18n.supportedLanguages.some(l => l.code === lang);
  }

  function getLanguage() {
    return currentLang;
  }

  function isRTL() {
    return currentLang === "ar";
  }

  function t(key, params = {}) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en || {};
    let text = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] || key);

    // Replace placeholder parameters {name}
    if (typeof text === "string" && params && typeof params === "object") {
      Object.keys(params).forEach(p => {
        text = text.replace(new RegExp(`\\{${p}\\}`, "g"), params[p]);
      });
    }

    return text;
  }

  function setLanguage(lang) {
    if (!isValidLang(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(CONFIG.i18n.storageKey, currentLang);
    applyLanguage(currentLang, true);
  }

  function applyLanguage(lang, dispatch = true) {
    const isArabic = lang === "ar";
    const dir = isArabic ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.setAttribute("data-lang", lang);

    // Update body classes for styling hooks if needed
    if (isArabic) {
      document.body.classList.add("is-rtl");
      document.body.classList.remove("is-ltr");
    } else {
      document.body.classList.add("is-ltr");
      document.body.classList.remove("is-rtl");
    }

    // Translate all static DOM nodes with data-i18n
    translateDOM();

    // Update active state on language selector controls
    updateSelectorUI();

    if (dispatch) {
      const event = new CustomEvent("languagechange", {
        detail: { language: lang, dir, isRTL: isArabic }
      });
      window.dispatchEvent(event);
    }
  }

  function translateDOM() {
    // Translate textContent
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key) {
        el.textContent = t(key);
      }
    });

    // Translate HTML if explicitly marked (for links or spans)
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (key) {
        el.innerHTML = t(key);
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) {
        el.setAttribute("placeholder", t(key));
      }
    });

    // Translate aria-label attributes
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) {
        el.setAttribute("aria-label", t(key));
      }
    });

    // Translate title attributes
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (key) {
        el.setAttribute("title", t(key));
      }
    });
  }

  function updateSelectorUI() {
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      const targetLang = btn.getAttribute("data-lang-btn");
      if (targetLang === currentLang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    // Update select element if dropdown is used
    document.querySelectorAll("select[data-lang-select]").forEach(sel => {
      sel.value = currentLang;
    });
  }

  function setupEventListeners() {
    // Attach listener to any element with data-lang-btn
    document.addEventListener("click", e => {
      const btn = e.target.closest("[data-lang-btn]");
      if (btn) {
        e.preventDefault();
        const lang = btn.getAttribute("data-lang-btn");
        if (lang) setLanguage(lang);
      }
    });

    // Attach listener to any select with data-lang-select
    document.addEventListener("change", e => {
      if (e.target.matches("[data-lang-select]")) {
        const lang = e.target.value;
        if (lang) setLanguage(lang);
      }
    });
  }

  return {
    init,
    getLanguage,
    setLanguage,
    isRTL,
    t,
    translateDOM
  };
})();

// Auto-initialize when script loads or DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18n.init());
} else {
  I18n.init();
}
