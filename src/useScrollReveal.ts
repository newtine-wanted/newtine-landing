import { useEffect } from "react";

/** Reveal lower-page content once, keeping already visible content stable. */
export function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      "main .section-heading, .why-grid > article, .feature-intro, .feature-stage, .tour-copy, .tour-display, .principle-grid > article, .persona-grid > article, .faq-item, .closing .container > *, .footer-top, .footer-bottom",
    ));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    targets.forEach((target) => {
      if (preference.matches || target.getBoundingClientRect().top < window.innerHeight) return;
      const index = Array.from(target.parentElement?.children ?? []).indexOf(target);
      target.style.setProperty("--reveal-delay", `${Math.min(index, 2) * 60}ms`);
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });
    const showAll = () => {
      if (!preference.matches) return;
      targets.forEach((target) => target.classList.add("is-revealed"));
      observer.disconnect();
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      targets.forEach((target) => {
        target.classList.remove("scroll-reveal", "is-revealed");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
}
