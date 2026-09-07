const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const selector = button.getAttribute("data-copy");
    const target = selector ? document.querySelector(selector) : null;
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      const previous = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1400);
    } catch {
      button.textContent = "Select text";
    }
  });
});

document.querySelectorAll(".expandable").forEach((item) => {
  const panel = item.querySelector(".expand-panel");
  if (!panel) return;

  const syncPanelHeight = () => {
    panel.style.maxHeight = item.classList.contains("revealed") ? `${panel.scrollHeight}px` : "0px";
  };

  syncPanelHeight();
  window.addEventListener("resize", syncPanelHeight);
});

document.querySelectorAll(".section, .paper-strip, .wide-figure").forEach((element) => {
  element.classList.add("reveal-on-scroll");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("expandable")) {
          entry.target.classList.add("revealed");
          const panel = entry.target.querySelector(".expand-panel");
          if (panel) {
            window.requestAnimationFrame(() => {
              panel.style.maxHeight = `${panel.scrollHeight}px`;
            });
          }
        }
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal-on-scroll, .expandable").forEach((element) => {
  revealObserver.observe(element);
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("figcaption");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    const image = button.querySelector("img");
    lightboxImage.src = button.getAttribute("data-lightbox") || "";
    lightboxImage.alt = image?.alt || "";
    lightboxCaption.textContent = button.getAttribute("data-caption") || image?.alt || "";
    lightbox.hidden = false;
    lightboxClose?.focus();
  });
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
};

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
