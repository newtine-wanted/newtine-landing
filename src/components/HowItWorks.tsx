import { useEffect, useState } from "react";
import { cards } from "../data";
import { StartLink } from "./StartLink";
import { usePreview } from "./usePreview";
import { ProductIcon, ReportBars } from "./ProductVisuals";

const steps = [
  { title: "관심 주제로 시작해요", description: "정책 영역부터 인물, 세대, 지역까지. 나의 관심을 고르면 첫 번째 피드가 준비돼요." },
  { title: "넘기고, 멈추고, 읽어요", description: "카드 한 장에서 이슈와 세 줄 요약을 읽어요. 더 알고 싶은 이야기에는 관심을 표시하세요." },
  { title: "맥락과 출처를 확인해요", description: "요약에서 끝내지 않아도 괜찮아요. 이슈의 배경과 원문을 함께 살펴보며 나의 판단을 만들어가요." },
  { title: "이번 주의 나를 발견해요", description: "관심 기록이 쌓이면 나만의 진단보고서가 열려요. 어떤 주제를 자주 읽었는지 천천히 돌아보세요." },
];
export function HowItWorks() {
  const preview = usePreview(4, 4000, false);
  const [topics, setTopics] = useState(["경제", "주거"]);
  const [feed, setFeed] = useState(0);
  const [liked, setLiked] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [previousWeek, setPreviousWeek] = useState(false);
  const [displayedFeed, setDisplayedFeed] = useState(0);
  const [feedDirection, setFeedDirection] = useState<"left" | "right">("left");
  const [demoAction, setDemoAction] = useState<string | null>(null);
  const [interacting, setInteracting] = useState(false);
  useEffect(() => { setInteracting(false); }, [preview.index]);
  useEffect(() => {
    setDemoAction(null);
    if (!preview.running || interacting) return;
    const timers: number[] = [];
    const later = (delay: number, action: () => void) => timers.push(window.setTimeout(action, delay));
    const tap = (target: string, action: () => void) => {
      setDemoAction(target);
      action();
      later(550, () => setDemoAction(null));
    };
    if (preview.index === 0) {
      setTopics(["경제", "주거"]);
      later(1000, () => tap("교육", () => setTopics((value) => [...value, "교육"])));
      later(2350, () => tap("환경", () => setTopics((value) => [...value, "환경"])));
      later(3450, () => tap("next", () => {}));
    } else if (preview.index === 1) {
      later(1100, () => tap("skip", () => {
        setFeedDirection("left"); setLiked(false); setFeed((value) => (value + 1) % cards.length);
      }));
      later(2700, () => tap("like", () => {
        setFeedDirection("right"); setLiked(true); setFeed((value) => (value + 1) % cards.length);
      }));
    } else if (preview.index === 2) {
      setSourceOpen(false);
      later(1450, () => tap("source", () => setSourceOpen(true)));
    } else {
      setPreviousWeek(false);
      later(1400, () => tap("previous", () => setPreviousWeek(true)));
      later(2850, () => tap("current", () => setPreviousWeek(false)));
    }
    return () => timers.forEach(window.clearTimeout);
  }, [preview.index, preview.running, interacting]);
  const feedExiting = displayedFeed !== feed;
  useEffect(() => {
    if (!feedExiting) return;
    const timer = window.setTimeout(() => { setDisplayedFeed(feed); setLiked(false); }, preview.reduced ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [feed, feedExiting, preview.reduced]);
  const swipeFeed = (direction: "left" | "right") => {
    if (feedExiting) return;
    setFeedDirection(direction);
    setLiked(direction === "right");
    setFeed((current) => (current + 1) % cards.length);
  };
  const card = cards[displayedFeed];
  return <section className="section container experience-how" id="how">
    <div className="section-heading"><h2>How it works<span className="heading-dot">.</span></h2></div>
    <div ref={preview.ref} className="product-tour" data-running={preview.running}>
      <div className="tour-copy"><div className="tour-title-row"><h3>어려웠던 정치가<br/>익숙한 일상이 되도록.</h3><StartLink className="text-link tour-heading-cta" destination="serviceUrl">나의 첫 카드 만나기</StartLink></div>
        <div className="tour-tabs" role="tablist" aria-label="뉴틴 이용 단계">{steps.map((step, i) => <button key={step.title} role="tab" id={`tour-tab-${i}`} aria-selected={preview.index === i} tabIndex={preview.index === i ? 0 : -1} onKeyDown={(event) => {
          const next = event.key === "Home" ? 0 : event.key === "End" ? steps.length - 1 : ["ArrowRight", "ArrowDown"].includes(event.key) ? (i + 1) % steps.length : ["ArrowLeft", "ArrowUp"].includes(event.key) ? (i + steps.length - 1) % steps.length : null;
          if (next === null) return;
          event.preventDefault(); preview.select(next); document.getElementById(`tour-tab-${next}`)?.focus();
        }} aria-controls="tour-screen" className={preview.index === i ? "active" : ""} onClick={() => preview.select(i)}><span className="tour-number">0{i + 1}</span><span><b>{step.title}</b><span className="tour-step-description">{step.description}</span></span></button>)}</div>
        <StartLink className="text-link tour-cta" destination="serviceUrl">나의 첫 카드 만나기</StartLink>
      </div>
      <div className="tour-display">
        <div className="device-scene"><span className="device-orbit"/><span className="device-orbit orbit-offset"/>
          <div className="device-shell"><div className="device-camera" aria-hidden="true"/><div className="device-screen" id="tour-screen" role="tabpanel" aria-labelledby={`tour-tab-${preview.index}`}>
            <div className="device-status" aria-hidden="true"><b>9:41</b><span>▥ ▰</span></div>
            <div className="mock-app-header"><img src="/assets/logo.svg" alt="newtine" width="83" height="25"/><span><ProductIcon name="user"/> 마이</span></div>
            <div className="app-view" key={preview.index} onPointerDownCapture={() => setInteracting(true)} onKeyDownCapture={() => setInteracting(true)}>
              {preview.index === 0 && <div className="onboarding-view"><span className="app-eyebrow">나의 관심 찾기 <b>1 / 4</b></span><div className="app-progress"><i/></div><h4>어떤 이야기에<br/>눈길이 가나요?</h4><p>궁금한 정책 영역을 골라주세요.</p><div className="app-topic-grid">{["경제", "교육", "주거", "환경", "노동", "외교"].map((topic, i) => <button key={topic} data-demo-active={demoAction === topic} className={topics.includes(topic) ? "selected" : ""} aria-pressed={topics.includes(topic)} onClick={() => { setTopics(topics.includes(topic) ? topics.filter((t) => t !== topic) : [...topics, topic]); }}><span aria-hidden="true">{["▥", "Aa", "⌂", "✳", "▦", "◎"][i]}</span>{topic}<small>{topics.includes(topic) ? "✓" : "+"}</small></button>)}</div><span className="app-helper">관심 주제는 나중에 바꿀 수 있어요.</span><button data-demo-active={demoAction === "next"} className="app-primary" onClick={() => preview.select(1)}>다음</button></div>}
              {preview.index === 1 && <div className="feed-view"><div key={displayedFeed} className={`app-feed-card${feedExiting ? ` swipe-out-${feedDirection}` : ""}`} aria-busy={feedExiting}><div className="app-card-meta"><span>{card.tags.join(" · ")}</span><small>기사 3건 묶음</small></div><h4>{card.title}</h4><div className="app-summary-label">3줄 요약</div><div className="live-summary">{card.summary.map((line, i) => <p key={line} style={{ animationDelay: `${350 + i * 180}ms` }}><b>{i + 1}</b><span>{line}</span></p>)}</div></div><div className="app-feed-actions"><button data-demo-active={demoAction === "skip"} disabled={feedExiting} onClick={() => swipeFeed("left")}>× 넘기기</button><button data-demo-active={demoAction === "like"} disabled={feedExiting} aria-pressed={liked} onClick={() => swipeFeed("right")} className={liked ? "is-liked" : ""}>♥ {liked ? "관심 표시됨" : "관심 있어요"}</button></div><span className="app-gesture">한 장씩, 나의 속도로 읽어요</span></div>}
              {preview.index === 2 && <div className="detail-view"><div className="detail-background"><span>오늘의 이슈</span><h4>살고 싶은 동네,<br/>알아두고 싶은 이야기.</h4></div><div className="app-detail-sheet"><div className="sheet-handle"/><span className="app-eyebrow">이슈 자세히</span><h4>요약 너머의<br/>이야기를 만나요.</h4><div className="detail-block"><b>핵심 요약</b><p>주거 정책의 주요 내용을 읽고, 나에게 적용되는 조건을 살펴봐요.</p></div><div className="detail-block"><b>이슈의 배경</b><p>누구를 위한 변화인지, 서로 다른 관점에서는 어떻게 바라보는지 확인해요.</p></div><button data-demo-active={demoAction === "source"} className="mock-source-toggle" aria-expanded={sourceOpen} onClick={() => { setSourceOpen(!sourceOpen); }}>원문과 출처 <span>{sourceOpen ? "−" : "+"}</span></button><div className={`mock-source-content${sourceOpen ? " open" : ""}`}><p>실제 서비스에서는 언론사별 원문을 확인할 수 있어요.</p></div></div></div>}
              {preview.index === 3 && <div className="app-report"><span className="app-eyebrow">나의 진단보고서</span><h4>관심이 쌓여,<br/>나의 지도가 됐어요.</h4><div className="app-report-overview"><span>최근 7일 관심</span><b>12<small>건</small></b><span className="app-report-spark" aria-hidden="true">✳</span></div><div className="week-switch"><button data-demo-active={demoAction === "current"} aria-pressed={!previousWeek} onClick={() => { setPreviousWeek(false); }}>이번 주</button><button data-demo-active={demoAction === "previous"} aria-pressed={previousWeek} onClick={() => { setPreviousWeek(true); }}>지난주</button></div><ReportBars alternate={previousWeek}/><p className="app-report-note">경제·산업 이야기에 가장 많이 반응했어요.</p></div>}
            </div>
            <div className="mock-bottom-nav"><button aria-label="피드 화면 미리보기" aria-pressed={preview.index === 1} onClick={() => preview.select(1)}><ProductIcon name="feed"/><span>피드</span></button><button aria-label="보고서 화면 미리보기" aria-pressed={preview.index === 3} onClick={() => preview.select(3)}><ProductIcon name="chart"/><span>보고서</span></button><button aria-label="관심 설정 화면 미리보기" aria-pressed={preview.index === 0} onClick={() => preview.select(0)}><ProductIcon name="user"/><span>마이</span></button></div>
          </div><div className="device-home" aria-hidden="true"/></div>
        </div>
        <div className="tour-progress" key={`${preview.index}-${preview.paused}`}><i/></div>
      </div>
    </div>
  </section>;
}
