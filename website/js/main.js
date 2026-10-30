/**
 * youFasApps - Homepage Controller
 * Manages product showcase rendering, search/filter logic, mobile nav, and dynamic UI bindings.
 */

const MainController = (function() {
  let activeCategory = "all";
  let searchQuery = "";

  function init() {
    renderShowcase();
    setupFiltersAndSearch();
    setupMobileNav();
    updateCopyrightYear();

    window.addEventListener("languagechange", () => {
      renderShowcase();
    });
  }

  function renderShowcase() {
    const grid = document.getElementById("appsGrid");
    if (!grid) return;

    const lang = I18n.getLanguage();
    let apps = AppsRegistry.getAll();

    // Apply category filter
    if (activeCategory !== "all") {
      if (activeCategory === "upcoming") {
        apps = apps.filter(app => app.isUpcoming);
      } else {
        apps = apps.filter(app => app.categoryKey === activeCategory);
      }
    }

    // Apply search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      apps = apps.filter(app => {
        const name = (app.officialName || "").toLowerCase();
        const shortName = (app.shortName || "").toLowerCase();
        const tag = (app.tagline[lang] || app.tagline.en || "").toLowerCase();
        const desc = (app.shortDescription[lang] || app.shortDescription.en || "").toLowerCase();
        const cat = (app.category[lang] || app.category.en || "").toLowerCase();
        return name.includes(q) || shortName.includes(q) || tag.includes(q) || desc.includes(q) || cat.includes(q);
      });
    }

    const emptyState = document.getElementById("appsEmptyState");

    if (apps.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    const cardsHtml = apps.map(app => {
      const catText = app.category[lang] || app.category.en;
      const boxCfg = app.boxConfig || {};
      const boxYear = boxCfg.year || "2026";
      const editionText = (boxCfg.edition && (boxCfg.edition[lang] || boxCfg.edition.en)) || "Professional Plus";
      const spineName = app.isClassified
        ? (lang === "ar" ? "سري للغاية" : (lang === "fr" ? "CONFIDENTIEL" : "CLASSIFIED"))
        : (boxCfg.spineName || app.shortName || "APP");
      const arabicSub = boxCfg.arabicSub || (lang === "ar" ? app.officialName : "");
      
      const modules = boxCfg.modules || [
        { label: "1", title: "Core", color: "#0284c7" },
        { label: "2", title: "Security", color: "#0d9488" },
        { label: "3", title: "Tools", color: "#ea580c" },
        { label: "4", title: "Reports", color: "#7c3aed" },
        { label: "5", title: "Archive", color: "#4338ca" }
      ];

      const modulesHtml = modules.map(m => `
        <span class="box-module-icon" style="background: ${m.color};" title="${m.title}">${m.label}</span>
      `).join("");

      const versionBadgeHtml = app.isUpcoming
        ? `<span class="app-badge upcoming-badge"><span class="badge-pulse-dot"></span>${I18n.t("badgeInDev")}</span>`
        : `<span class="app-badge version-badge">v${app.version}</span>`;

      const ribbonHtml = app.isUpcoming
        ? `<div class="box-teaser-ribbon">${I18n.t("badgeInDev")}</div>`
        : "";

      const footerActionsHtml = app.isUpcoming ? `
        <button type="button" class="btn btn-secondary btn-upcoming-status" disabled>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${I18n.t("btnComingSoon")}</span>
        </button>
        
        <button type="button" class="btn btn-primary app-btn-get" data-get-app="${app.slug}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>${I18n.t("btnPreOrder")}</span>
        </button>
      ` : `
        <a href="apps/${app.slug}.html" class="btn btn-secondary app-btn-details">
          <span>${I18n.t("btnViewDetails")}</span>
          <svg class="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        
        <button type="button" class="btn btn-primary app-btn-get" data-get-app="${app.slug}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>${I18n.t("btnGetApp")}</span>
        </button>
      `;

      return `
        <article class="app-card reveal is-visible ${app.isUpcoming ? 'is-upcoming-card' : ''}" style="--app-primary: ${app.colors.primary};">
          <div class="app-card-badge-row">
            <span class="app-badge category-badge">${catText}</span>
            ${versionBadgeHtml}
          </div>

          <div class="software-box-stage">
            <div class="software-box-halo"></div>
            
            <div class="software-box">
              <div class="box-face box-face-top"></div>
              <div class="box-face box-face-right"></div>

              <div class="box-face box-face-spine">
                <div class="spine-brand-top">
                  <svg class="spine-corp-icon" viewBox="0 0 200 200" aria-hidden="true">
                    <rect x="12" y="12" width="176" height="176" rx="46" fill="#006EFF"/>
                    <rect x="42" y="42" width="52" height="52" rx="14" fill="#FFFFFF"/>
                    <rect x="106" y="42" width="52" height="52" rx="14" fill="#00E5FF"/>
                    <rect x="42" y="106" width="52" height="52" rx="14" fill="#00E5FF"/>
                    <path d="M 115 106 H 152 A 6 6 0 0 1 158 112 V 118 A 6 6 0 0 1 152 124 H 126 V 131 H 145 A 6 6 0 0 1 151 137 V 141 A 6 6 0 0 1 145 147 H 126 V 151 A 7 7 0 0 1 119 158 H 114 A 7 7 0 0 1 107 151 V 114 A 8 8 0 0 1 115 106 Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <div class="spine-vertical-name">${spineName}</div>
                <div class="spine-bottom-year">${boxYear}</div>
              </div>

              <div class="box-face box-face-front">
                ${ribbonHtml}

                <div class="box-front-header">
                  <div class="box-corp-brand">
                    <svg class="box-corp-icon" viewBox="0 0 200 200" aria-hidden="true">
                      <rect x="12" y="12" width="176" height="176" rx="46" fill="#006EFF"/>
                      <rect x="42" y="42" width="52" height="52" rx="14" fill="#FFFFFF"/>
                      <rect x="106" y="42" width="52" height="52" rx="14" fill="#00E5FF"/>
                      <rect x="42" y="106" width="52" height="52" rx="14" fill="#00E5FF"/>
                      <path d="M 115 106 H 152 A 6 6 0 0 1 158 112 V 118 A 6 6 0 0 1 152 124 H 126 V 131 H 145 A 6 6 0 0 1 151 137 V 141 A 6 6 0 0 1 145 147 H 126 V 151 A 7 7 0 0 1 119 158 H 114 A 7 7 0 0 1 107 151 V 114 A 8 8 0 0 1 115 106 Z" fill="#FFFFFF"/>
                    </svg>
                    <span class="box-corp-text">youFas<span>Apps</span></span>
                  </div>
                </div>

                <div class="box-front-identity ${app.isClassified ? 'is-classified-identity' : ''}">
                  <div class="box-icon-wrap ${app.isClassified ? 'is-classified-icon-wrap' : ''}">
                    <img src="${app.branding.appIcon}" alt="${app.officialName} Icon" class="box-product-icon ${app.isClassified ? 'box-product-icon-covered' : ''}" onerror="this.src='${app.branding.primaryLogo}'">
                    ${app.isClassified ? `
                      <span class="covered-lock-badge" title="${lang === 'ar' ? 'أيقونة محجوبة' : 'Covered Icon'}">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                    ` : ''}
                  </div>
                  <div class="box-product-titles ${app.isClassified ? 'box-titles-covered' : ''}">
                    ${app.isClassified ? `
                      <div class="covered-censor-pill">
                        <span class="censor-pulse-dot"></span>
                        <span class="censor-pill-text">${lang === 'ar' ? 'اسم محجوب' : (lang === 'fr' ? 'NOM MASQUÉ' : 'REDACTED')}</span>
                      </div>
                      <div class="covered-name-bar" aria-label="Covered Title">
                        <span class="censor-block">████████</span>
                      </div>
                      <span class="box-product-sub covered-sub-bar">
                        ${lang === 'ar' ? 'سري • قريباً' : (lang === 'fr' ? 'Confidentiel • Bientôt' : 'Classified • Soon')}
                      </span>
                    ` : `
                      <h3 class="box-product-name">${app.shortName}</h3>
                      ${arabicSub ? `<span class="box-product-sub">${arabicSub}</span>` : ""}
                    `}
                  </div>
                </div>

                <div class="box-modules-row">
                  ${modulesHtml}
                </div>

                <div class="box-front-footer">
                  <div class="box-year-text">${boxYear}</div>
                  <div class="box-edition-text">${editionText}</div>
                </div>
              </div>

              <div class="box-floor-shadow"></div>
            </div>
          </div>

          <div class="app-card-footer">
            ${footerActionsHtml}
          </div>
        </article>
      `;
    }).join("");

    grid.innerHTML = cardsHtml;

    // Rebind 3D tilt to newly injected cards
    if (typeof Motion !== "undefined" && Motion.setup3DTilt) {
      Motion.setup3DTilt();
    }
  }

  function setupFiltersAndSearch() {
    const searchInput = document.getElementById("appSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        searchQuery = e.target.value;
        renderShowcase();
      });
    }

    const filterBtns = document.querySelectorAll("[data-filter]");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-filter") || "all";
        renderShowcase();
      });
    });
  }

  function setupMobileNav() {
    const toggleBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu-wrapper");
    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-open");
      toggleBtn.classList.toggle("is-active");
    });

    // Close menu when clicking navigation links
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
        toggleBtn.classList.remove("is-active");
      });
    });
  }

  function updateCopyrightYear() {
    const yearSpan = document.getElementById("copyrightYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  return {
    init,
    renderShowcase
  };
})();

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => MainController.init());
} else {
  MainController.init();
}
