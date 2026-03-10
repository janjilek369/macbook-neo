document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelectorAll(".nav__links a");
  const sectionsToReveal = document.querySelectorAll(".reveal");

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      const context = this;
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  // Sticky header state
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("site-header--scrolled");
    } else {
      header.classList.remove("site-header--scrolled");
    }
  }

  const debouncedScroll = debounce(handleScroll, 50);
  window.addEventListener("scroll", debouncedScroll, { passive: true });
  handleScroll();

  // Mobile navigation
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("nav--open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function closeMobileNav() {
    if (!nav) return;
    if (nav.classList.contains("nav--open")) {
      nav.classList.remove("nav--open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  }

  // Smooth scrolling for anchor links in nav
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      closeMobileNav();
    });
  });

  // Intersection Observer for reveal animations
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    sectionsToReveal.forEach(function (section) {
      observer.observe(section);
    });
  } else {
    // Fallback without IntersectionObserver
    sectionsToReveal.forEach(function (section) {
      section.classList.add("reveal--visible");
    });
  }
});

