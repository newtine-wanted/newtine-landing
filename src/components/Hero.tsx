import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { StartLink } from "./StartLink";
import "./Hero.css";

const places = [
  { name: "국회", tag: "POLITICS", x: 64, y: 51, question: "오늘의 법안, 내일의 일상.", lines: ["국회에서 논의하는 법은 우리의 일상과 연결돼요.", "어떤 변화가 제안됐고, 누구에게 영향을 줄까요?", "핵심과 서로 다른 관점을 카드 한 장으로 살펴보세요."] },
  { name: "아파트", tag: "HOUSING", x: 85, y: 38, question: "내 월세도 정치와 연결될까?", lines: ["주거 정책은 집을 구하고 살아가는 조건에 영향을 줘요.", "주거 지원과 임대차 제도에서 무엇이 달라질까요?", "복잡한 정책도 내 생활에서 시작하면 가까워져요."] },
  { name: "지하철", tag: "MOBILITY", x: 68, y: 83, question: "매일의 출근길에도 정치가 있다.", lines: ["교통 정책은 매일의 이동과 연결돼요.", "노선과 요금, 이동 지원은 어떻게 결정될까요?", "익숙한 출근길 속 정책의 맥락을 읽어보세요."] },
  { name: "동네 상점", tag: "ECONOMY", x: 87, y: 72, question: "우리 동네 가게가 궁금하다면.", lines: ["작은 가게에도 경제 정책의 변화가 닿아요.", "소상공인 지원과 지역 경제는 어떤 관계일까요?", "뉴스 속 큰 이야기를 우리 동네의 시선으로 만나보세요."] },
];
export function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const active = selected ?? hovered;
  useLayoutEffect(() => {
    if (active === null) return;
    const card = document.getElementById(`city-story-${active}`);
    const marker = triggers.current[active];
    const hero = document.getElementById("hero");
    if (!card || !marker || !hero) return;
    const positionCard = () => {
      const heroRect = hero.getBoundingClientRect();
      const navBottom = document.querySelector(".navigation")?.getBoundingClientRect().bottom ?? 0;
      const top = Math.max(12, heroRect.top + 8, navBottom + 8);
      const bottom = Math.min(window.innerHeight - 12, heroRect.bottom - 8);
      const available = Math.max(80, bottom - top);
      card.style.maxHeight = `${available}px`;
      card.style.overflowY = card.scrollHeight > available + 1 ? "auto" : "visible";
      const height = card.getBoundingClientRect().height;
      const preferredTop = marker.getBoundingClientRect().top - 12 - height;
      const fittedTop = Math.max(top, Math.min(preferredTop, bottom - height));
      const shift = fittedTop - preferredTop;
      card.style.setProperty("--story-shift", `${shift}px`);
      card.toggleAttribute("data-shifted", Math.abs(shift) > 1);
    };
    positionCard();
    const observer = new ResizeObserver(positionCard);
    observer.observe(card);
    window.addEventListener("scroll", positionCard, { passive: true });
    window.addEventListener("resize", positionCard);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", positionCard);
      window.removeEventListener("resize", positionCard);
    };
  }, [active, selected]);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest(".city-place")) { setSelected(null); setHovered(null); }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelected(null); setHovered(null); }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <section className="hero city-hero" id="hero" aria-labelledby="hero-title">
      <div className="city-copy">
        <h1 id="hero-title">Politics,<br />One Card<br />A Day<span className="city-period">.</span></h1>
        <h2>정치 뉴스, 카드 한 장으로 끝.</h2>
        <p className="hero-description">우리가 사는 도시, 그 안의 정치.<br />일상 속 궁금한 곳에서 이야기를 발견해 보세요.</p>
        <div className="hero-actions">
          <StartLink className="button" destination="serviceUrl">바로 체험하기</StartLink>
          <StartLink className="button hero-signup" destination="signupUrl">가입하기</StartLink>
        </div>
      </div>
      <div className="city-scene" aria-label="우리 일상과 연결된 정치 이야기">
        <img className="city-art" src="/assets/city-line-art.png" alt="국회의사당, 아파트, 지하철과 동네 상점이 한강을 따라 이어진 한국 도시 선화" width="1672" height="941" fetchPriority="high" />
        {places.map((place, index) => (
          <div key={place.tag} className={`city-place place-${index}${active === index ? " is-active" : ""}`} style={{ "--x": `${place.x}%`, "--y": `${place.y}%` } as CSSProperties}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(index); }} onPointerLeave={() => setHovered(null)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(null); }}>
            <button ref={(node) => { triggers.current[index] = node; }} className="city-marker" aria-label={`${place.name}: ${place.question}`} aria-expanded={selected === index} aria-controls={`city-story-${index}`}
              onFocus={() => setHovered(index)} onClick={() => { setSelected(selected === index ? null : index); setHovered(null); }}><span aria-hidden="true">+</span></button>
            <div id={`city-story-${index}`} className={`city-story${selected === index ? " is-expanded" : ""}`} aria-hidden={active !== index} inert={active !== index}>
              <div className="city-story-meta"><span>{String(index + 1).padStart(2, "0")} / {place.tag}</span>{selected === index && <button aria-label="이야기 닫기" onClick={() => { triggers.current[index]?.focus(); setSelected(null); setHovered(null); }}>×</button>}</div>
              <h3>{place.question}</h3>
              <div className="city-story-details" inert={selected !== index} aria-hidden={selected !== index}><div className="city-story-details-inner">
                <div className="city-story-lines">{place.lines.map((line, i) => <p key={line}><span>0{i + 1}</span>{line}</p>)}</div>
                <div className="city-story-footer"><StartLink destination="serviceUrl">바로 체험하기</StartLink></div>
              </div></div>
              <p className="city-story-hint" aria-hidden={selected === index}>눌러서 이야기 펼치기 <span>↗</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
