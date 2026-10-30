/**
 * youFasApps - Theme Controller
 * Manages Light and Dark mode transitions, persistence in localStorage,
 * and system preference detection with zero flash of unstyled content.
 */

const ThemeManager = (function() {
  let currentTheme = "dark";

  function init() {
    // 1. Check localStorage
    const saved = localStorage.getItem(CONFIG.theme.storageKey);
    if (saved === "light" || saved === "dark") {
      currentTheme = saved;
    } else {
      // 2. Check system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      currentTheme = prefersDark ? "dark" : (CONFIG.theme.defaultTheme || "dark");
    }

    applyTheme(currentTheme, false);
    setupEventListeners();
    listenToSystemChanges();
  }

  function getTheme() {
    return currentTheme;
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    currentTheme = theme;
    localStorage.setItem(CONFIG.theme.storageKey, currentTheme);
    applyTheme(currentTheme, true);
  }

  function toggleTheme() {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  function applyTheme(theme, animate = true) {
    const root = document.documentElement;

    if (!animate) {
      root.classList.add("no-transitions");
    }

    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    if (!animate) {
      // Force repaint then remove no-transitions
      void root.offsetHeight;
      root.classList.remove("no-transitions");
    }

    updateToggleUI();

    const event = new CustomEvent("themechange", { detail: { theme } });
    window.dispatchEvent(event);
  }

  function updateToggleUI() {
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");
      btn.setAttribute("title", currentTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme");

      // Update inner icon if present
      const sunIcon = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      if (sunIcon && moonIcon) {
        if (currentTheme === "dark") {
          sunIcon.style.display = "block";
          moonIcon.style.display = "none";
        } else {
          sunIcon.style.display = "none";
          moonIcon.style.display = "block";
        }
      }
    });
  }

  function setupEventListeners() {
    document.addEventListener("click", e => {
      const toggle = e.target.closest("[data-theme-toggle]");
      if (toggle) {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  function listenToSystemChanges() {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = e => {
      // Only respond to OS changes if user has not explicitly saved a preference
      const saved = localStorage.getItem(CONFIG.theme.storageKey);
      if (!saved) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
    }
  }

  return {
    init,
    getTheme,
    setTheme,
    toggleTheme
  };
})();

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ThemeManager.init());
} else {
  ThemeManager.init();
}
