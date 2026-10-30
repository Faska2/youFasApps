/**
 * youFasApps - Signature 3-Second Logo Formation Animation Controller
 * Orchestrates the progressive vector assembly of the youFasApps symbol,
 * wordmark, and tagline on initial load with strict performance and safety guarantees.
 */

const BrandAnimation = (function() {
  const SESSION_KEY = "youfas_intro_played";
  const TOTAL_DURATION_MS = 3000;
  let overlayEl = null;
  let timerId = null;

  function init() {
    overlayEl = document.getElementById("brandLoader");
    if (!overlayEl) return;

    // Check accessibility: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check session storage: only play full 3-second sequence on genuine initial visit of session
    const hasPlayedThisSession = sessionStorage.getItem(SESSION_KEY) === "true";

    if (prefersReducedMotion || hasPlayedThisSession) {
      dismissImmediately();
      return;
    }

    // Mark as played for this session
    sessionStorage.setItem(SESSION_KEY, "true");

    // Start 3-second animation sequence
    document.body.classList.add("brand-animating");
    overlayEl.classList.add("is-animating");

    // Fallback safety timeout: guarantee dismissal at 3200ms
    timerId = setTimeout(() => {
      dismiss();
    }, TOTAL_DURATION_MS + 200);

    // Allow user to click anywhere or press Skip to dismiss early
    overlayEl.addEventListener("click", () => dismiss());
    const skipBtn = overlayEl.querySelector(".anim-skip-btn");
    if (skipBtn) {
      skipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dismiss();
      });
    }

    // Prevent stuck overlay on bfcache restore
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        dismissImmediately();
      }
    });
  }

  function dismiss() {
    if (timerId) clearTimeout(timerId);
    if (!overlayEl) return;

    overlayEl.classList.add("is-exiting");
    document.body.classList.remove("brand-animating");

    setTimeout(() => {
      overlayEl.style.display = "none";
      overlayEl.setAttribute("aria-hidden", "true");
    }, 400);
  }

  function dismissImmediately() {
    if (timerId) clearTimeout(timerId);
    if (!overlayEl) return;
    document.body.classList.remove("brand-animating");
    overlayEl.style.display = "none";
    overlayEl.setAttribute("aria-hidden", "true");
  }

  return {
    init,
    dismiss,
    dismissImmediately
  };
})();

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => BrandAnimation.init());
} else {
  BrandAnimation.init();
}
