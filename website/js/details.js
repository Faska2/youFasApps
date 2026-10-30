/**
 * youFasApps - Application Details Page Controller
 * Handles FAQ accordion interactivity, sticky section tabs,
 * language change updates for product metadata, and mobile navigation.
 */

const DetailsController = (function() {
  function getCurrentSlug() {
    const bodySlug = document.body.getAttribute("data-app-slug");
    if (bodySlug) return bodySlug;
    const path = window.location.pathname.toLowerCase();
    const allApps = AppsRegistry.getAll();
    for (const a of allApps) {
      if (path.includes(a.slug)) return a.slug;
    }
    return "cm-manager";
  }

  function init() {
    setupFaqAccordion();
    setupSectionNav();
    setupMobileNav();
    updateCopyrightYear();

    window.addEventListener("languagechange", () => {
      updateLocalizedDetails();
    });

    // Initial render
    updateLocalizedDetails();
  }

  function updateLocalizedDetails() {
    const currentSlug = getCurrentSlug();
    const app = AppsRegistry.getBySlug(currentSlug);
    if (!app) return;

    const lang = I18n.getLanguage();

    // Bind WhatsApp buttons to active app slug
    document.querySelectorAll("[data-get-app]").forEach(btn => {
      btn.setAttribute("data-get-app", app.slug);
    });

    // Update dynamic headings & descriptions
    const elAppName = document.querySelectorAll("[data-app-name]");
    elAppName.forEach(el => el.textContent = app.officialName);

    const elAppTagline = document.querySelectorAll("[data-app-tagline]");
    elAppTagline.forEach(el => el.textContent = app.tagline[lang] || app.tagline.en);

    const elAppDesc = document.getElementById("detailFullDesc");
    if (elAppDesc) {
      const fullText = app.fullDescription[lang] || app.fullDescription.en;
      elAppDesc.innerHTML = fullText.split("\n\n").map(p => `<p>${p}</p>`).join("");
    }

    const elAppCat = document.querySelectorAll("[data-app-category]");
    elAppCat.forEach(el => el.textContent = app.category[lang] || app.category.en);

    // Update Statutory Callout Text
    const elStatutoryText = document.getElementById("detailStatutoryText");
    if (elStatutoryText && app.regulatoryFramework) {
      elStatutoryText.innerHTML = `<strong>${app.regulatoryFramework[lang] || app.regulatoryFramework.en}</strong>`;
    }

    // Update Specs values
    const specOs = document.getElementById("specOs");
    if (specOs) specOs.textContent = app.requirements.os[lang] || app.requirements.os.en;
    const specOffline = document.getElementById("specOffline");
    if (specOffline) specOffline.textContent = app.requirements.offline[lang] || app.requirements.offline.en;
    const specCpu = document.getElementById("specCpu");
    if (specCpu) specCpu.textContent = app.requirements.processor[lang] || app.requirements.processor.en;
    const specRam = document.getElementById("specRam");
    if (specRam) specRam.textContent = app.requirements.ram[lang] || app.requirements.ram.en;
    const specDisk = document.getElementById("specDisk");
    if (specDisk) specDisk.textContent = app.requirements.diskSpace[lang] || app.requirements.diskSpace.en;
    const specLang = document.getElementById("specLang");
    if (specLang) specLang.textContent = app.requirements.languages[lang] || app.requirements.languages.en;

    // Update Hero Visual Presentation
    const heroCard = document.querySelector(".product-visual-card");
    if (heroCard) heroCard.style.setProperty("--app-primary", app.colors.primary);

    const heroIcon = document.getElementById("detailAppIcon");
    if (heroIcon) {
      heroIcon.src = app.branding.subpageAppIcon;
      heroIcon.alt = app.officialName;
    }

    const heroIdentityName = document.querySelector(".product-identity-name");
    if (heroIdentityName) heroIdentityName.textContent = app.shortName;

    const heroIdentityAlt = document.querySelector(".product-identity-alt");
    if (heroIdentityAlt) heroIdentityAlt.textContent = `${app.category[lang] || app.category.en} • v${app.version}`;

    // Update CTA Banner
    const ctaTitle = document.getElementById("detailCtaTitle");
    if (ctaTitle) {
      ctaTitle.textContent = I18n.t("ctaBannerTitle", { appName: app.shortName });
    }

    // Render Benefits
    const benefitsList = document.getElementById("detailBenefitsList");
    if (benefitsList && app.mainBenefits) {
      benefitsList.innerHTML = app.mainBenefits.map(b => {
        const title = b.title[lang] || b.title.en;
        const desc = b.desc[lang] || b.desc.en;
        return `
          <div class="benefit-card reveal is-visible">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h4 class="benefit-title">${title}</h4>
            <p class="benefit-desc">${desc}</p>
          </div>
        `;
      }).join("");
    }

    // Render Features
    const featuresList = document.getElementById("detailFeaturesList");
    if (featuresList && app.verifiedFeatures) {
      featuresList.innerHTML = app.verifiedFeatures.map(f => {
        const title = f.title[lang] || f.title.en;
        const desc = f.desc[lang] || f.desc.en;
        return `
          <div class="feature-card reveal is-visible">
            <div class="feature-num-badge">${f.num}</div>
            <div class="feature-card-content">
              <h4 class="feature-card-title">${title}</h4>
              <p class="feature-card-desc">${desc}</p>
            </div>
          </div>
        `;
      }).join("");
    }

    // Render Audience
    const audienceList = document.getElementById("detailAudienceList");
    if (audienceList && app.targetAudience) {
      audienceList.innerHTML = app.targetAudience.map(a => {
        const role = a.role[lang] || a.role.en;
        const desc = a.desc[lang] || a.desc.en;
        return `
          <div class="audience-card reveal is-visible">
            <div class="audience-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="audience-text">
              <h4 class="audience-role">${role}</h4>
              <p class="audience-desc">${desc}</p>
            </div>
          </div>
        `;
      }).join("");
    }

    // Render FAQ
    const faqContainer = document.getElementById("detailFaqContainer");
    if (faqContainer && app.faq) {
      faqContainer.innerHTML = app.faq.map((item, idx) => {
        const q = item.q[lang] || item.q.en;
        const a = item.a[lang] || item.a.en;
        return `
          <div class="faq-item ${idx === 0 ? "is-open" : ""}">
            <button type="button" class="faq-question" aria-expanded="${idx === 0 ? "true" : "false"}" id="faq-q-${idx}">
              <span class="faq-q-text">${q}</span>
              <span class="faq-icon-indicator" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div class="faq-answer" id="faq-a-${idx}" role="region" aria-labelledby="faq-q-${idx}">
              <div class="faq-answer-inner">
                <p>${a}</p>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Rebind FAQ click handlers after re-rendering
    setupFaqAccordion();
  }

  function setupFaqAccordion() {
    const faqContainer = document.getElementById("detailFaqContainer");
    if (!faqContainer) return;

    faqContainer.querySelectorAll(".faq-question").forEach(btn => {
      // Remove old listeners to avoid multiple triggers
      btn.onclick = () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("is-open");

        // Close other items (clean accordion style)
        faqContainer.querySelectorAll(".faq-item").forEach(other => {
          if (other !== item) {
            other.classList.remove("is-open");
            const otherBtn = other.querySelector(".faq-question");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          item.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      };
    });
  }

  function setupSectionNav() {
    const navLinks = document.querySelectorAll(".details-subnav-link");
    if (navLinks.length === 0) return;

    // Smooth scroll on subnav link click
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            const navHeight = 80;
            const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      });
    });

    // Highlight active section on scroll
    const sections = Array.from(navLinks).map(link => {
      const id = link.getAttribute("href");
      return id && id.startsWith("#") ? document.querySelector(id) : null;
    }).filter(Boolean);

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPos = window.scrollY + 120;

      sections.forEach(sec => {
        if (sec.offsetTop <= scrollPos) {
          currentSectionId = sec.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    }, { passive: true });
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
  }

  function updateCopyrightYear() {
    const yearSpan = document.getElementById("copyrightYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  return {
    init,
    updateLocalizedDetails
  };
})();

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => DetailsController.init());
} else {
  DetailsController.init();
}
