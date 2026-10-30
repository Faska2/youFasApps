/**
 * youFasApps - Motion and 3D Interaction Engine
 * Sophisticated, restrained 3D tilt, subtle floating effects,
 * and performant IntersectionObserver scroll reveals. Respects prefers-reduced-motion.
 */

const Motion = (function() {
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    setupStickyNav();
    if (prefersReduced) return;
    setup3DTilt();
    setupScrollReveals();
  }

  function setupStickyNav() {
    const navbar = document.querySelector(".site-nav");
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 24) {
        navbar.classList.add("is-scrolled");
      } else {
        navbar.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  function setup3DTilt() {
    const tiltElements = document.querySelectorAll("[data-tilt]");

    tiltElements.forEach(el => {
      const maxTilt = parseFloat(el.getAttribute("data-tilt-max")) || 8; // Max 8 degrees for subtlety
      const scale = parseFloat(el.getAttribute("data-tilt-scale")) || 1.02;

      let bounds = null;

      const onMouseEnter = () => {
        bounds = el.getBoundingClientRect();
        el.style.transition = "transform 0.15s cubic-bezier(0.2, 0, 0, 1)";
      };

      const onMouseMove = e => {
        if (!bounds) bounds = el.getBoundingClientRect();

        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const xRatio = (x / bounds.width) - 0.5;
        const yRatio = (y / bounds.height) - 0.5;

        // Invert Y for intuitive 3D tilt
        const rotX = -yRatio * maxTilt;
        const rotY = xRatio * maxTilt;

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
      };

      const onMouseLeave = () => {
        el.style.transition = "transform 0.5s cubic-bezier(0.2, 0, 0, 1)";
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        bounds = null;
      };

      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);
    });
  }

  function setupScrollReveals() {
    const revealNodes = document.querySelectorAll(".reveal");
    if (revealNodes.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach(node => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1
    });

    revealNodes.forEach(node => observer.observe(node));
  }

  return {
    init,
    setup3DTilt
  };
})();

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => Motion.init());
} else {
  Motion.init();
}
