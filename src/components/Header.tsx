import { useEffect, useRef, useState } from "react";
import { StartLink } from "./StartLink";
const links = [
  ["why", "Why"],
  ["features", "Features"],
  ["how", "How it works"],
  ["faq", "FAQ"],
] as const;
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let distance = 0;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
      const delta = y - lastY;
      lastY = y;
      setScrolled(y > 24);
      const keyboardFocus = header.current?.contains(document.activeElement) && document.activeElement?.matches(":focus-visible");
      if (y < 80 || menuOpen || keyboardFocus) {
        setHidden(false);
        distance = 0;
        return;
      }
      if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
      distance += delta;
      if (distance > 14) { setHidden(true); distance = 0; }
      if (distance < -8) { setHidden(false); distance = 0; }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, [menuOpen]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <div className="notice">
        <div className="container">
          <span>비회원도 카드 5장까지 <StartLink className="notice-trial-link" destination="serviceUrl">바로 체험</StartLink>할 수 있어요</span>
        </div>
      </div>
      <header ref={header} className={`navigation${hidden && !menuOpen ? " is-hidden" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`} onFocusCapture={() => setHidden(false)}>
        <div className="container nav-inner">
          <a href="#" aria-label="뉴틴 홈">
            <img
              className="logo"
              src="/assets/logo.svg"
              width="101"
              height="30"
              alt="newtine"
            />
          </a>
          <nav aria-label="주 메뉴">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <StartLink className="button button-outline nav-cta" destination="signupUrl">
            가입하기
          </StartLink>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ≡
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="모바일 메뉴"
          hidden={!menuOpen}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
