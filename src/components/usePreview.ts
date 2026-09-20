import { useEffect, useRef, useState } from "react";

/** Autoplay only on-screen, in an active tab, and with motion permitted. */
export function usePreview(count: number, duration = 5200, pauseOnSelect = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(!document.hidden);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(preference.matches);
    const onVisibility = () => setActiveTab(!document.hidden);
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (!ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      setVisible(bounds.bottom > 0 && bounds.top < window.innerHeight && bounds.right > 0 && bounds.left < window.innerWidth);
    };
    const onViewport = () => { if (!frame) frame = window.requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onViewport, { passive: true });
    window.addEventListener("resize", onViewport);
    onVisibility();
    onMotion();
    preference.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("scroll", onViewport); window.removeEventListener("resize", onViewport); preference.removeEventListener("change", onMotion); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  const running = visible && activeTab && !paused && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), duration);
    return () => clearTimeout(timer);
  }, [running, count, duration, index]);
  const select = (next: number) => { setIndex((next + count) % count); setPaused(pauseOnSelect); };
  return { ref, index, select, running, paused, reduced, toggle: () => setPaused((value) => !value), pause: () => setPaused(true) };
}
