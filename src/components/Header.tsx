import { useEffect, useState } from "react";
import { StartLink } from "./StartLink";
const links = [
  ["why", "Why"],
  ["features", "Features"],
  ["how", "How it works"],
  ["faq", "FAQ"],
] as const;
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <span>비회원도 카드 5장까지 바로 체험할 수 있어요</span>
          <StartLink className="english" destination="serviceUrl">
            바로 체험하기 →
          </StartLink>
        </div>
      </div>
      <header className="navigation">
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
            가입하기 <span>→</span>
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
