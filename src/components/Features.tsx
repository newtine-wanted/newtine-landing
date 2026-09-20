import { useEffect, useState } from "react";
import { cards } from "../data";
import { usePreview } from "./usePreview";
import { ProductIcon, ReportBars } from "./ProductVisuals";

function FeedPreview() {
  const preview = usePreview(3, 3200);
  const [liked, setLiked] = useState<number[]>([]);
  const [displayed, setDisplayed] = useState(preview.index);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const exiting = displayed !== preview.index;
  useEffect(() => {
    if (!exiting) return;
    const timer = window.setTimeout(() => {
      setDisplayed(preview.index);
      setDirection((current) => current === "left" ? "right" : "left");
    }, preview.reduced ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [exiting, preview.index, preview.reduced]);
  const swipe = (nextDirection: "left" | "right") => {
    if (exiting) return;
    setDirection(nextDirection);
    if (nextDirection === "right") setLiked((value) => value.includes(displayed) ? value : [...value, displayed]);
    preview.select(preview.index + 1);
  };
  const card = cards[displayed];
  return <div ref={preview.ref} className="feature-stage feed-stage" data-running={preview.running}>
    <div className="card-composition">
      <div className="paper-ghost ghost-two"/><div className="paper-ghost ghost-one"/>
      <div key={displayed} className={`live-news-card${exiting ? ` swipe-out-${direction}` : ""}`} aria-busy={exiting}>
        <div className="live-card-top"><span className="live-tag">{card.tags[0]} · {card.tags[1]}</span><span>0{displayed + 1} / 03</span></div>
        <h4>{card.title}</h4>
        <span className="summary-eyebrow">길었던 뉴스가, 세 문장으로.</span>
        <div className="live-summary">{card.summary.map((line, i) => <p key={line} style={{ animationDelay: `${400 + i * 180}ms` }}><b>{i + 1}</b><span>{line}</span></p>)}</div>
        <div className="live-news-actions"><button disabled={exiting} onClick={() => swipe("left")}><span className="skip-arrow" aria-hidden="true"><ProductIcon name="arrow"/></span>넘기기</button><button disabled={exiting} className={liked.includes(displayed) ? "liked" : ""} aria-pressed={liked.includes(displayed)} onClick={() => swipe("right")}><ProductIcon name="heart"/>{liked.includes(displayed) ? "관심 표시됨" : "관심 있어요"}</button></div>
      </div>
    </div>
  </div>;
}
const topics = ["경제·산업", "노동·일자리", "주거·부동산", "교육", "환경·에너지", "외교·안보"];
function InterestPreview() {
  const preview = usePreview(3, 4200);
  const [manual, setManual] = useState<number[] | null>(null);
  const chosen = manual ?? [[0, 1], [0, 1, 2], [0, 2, 4]][preview.index];
  return <div ref={preview.ref} className="feature-stage interest-stage" data-running={preview.running}>
    <div className="interest-composition"><div className="orbit-ring orbit-one"/><div className="orbit-ring orbit-two"/>
      <div className="interest-hub"><ProductIcon name="user"/><span>MY INTERESTS</span><b>나의 관심</b></div>
      <div className="orbit-topics">{topics.map((topic, i) => <button key={topic} className={`orbit-topic topic-${i}${chosen.includes(i) ? " chosen" : ""}`} aria-pressed={chosen.includes(i)} onClick={() => { preview.pause(); setManual(chosen.includes(i) ? chosen.filter((n) => n !== i) : [...chosen, i]); }}><span>{chosen.includes(i) ? "✓" : "+"}</span>{topic}</button>)}</div>
    </div>
  </div>;
}
function ReportPreview() {
  const preview = usePreview(2, 2600, false);
  return <div ref={preview.ref} className="feature-stage report-stage" data-running={preview.running}>
    <div className="report-composition"><div className="report-sheet"><div className="report-sheet-head"><span>MY WEEKLY REPORT</span><ProductIcon name="chart"/></div><h4>뉴스를 읽었더니,<br/>나의 관심이 보이네요.</h4><div className="week-switch" aria-label="예시 주간 보고서"><button aria-pressed={preview.index === 0} onClick={() => preview.select(0)}>이번 주</button><button aria-pressed={preview.index === 1} onClick={() => preview.select(1)}>지난주</button></div><ReportBars alternate={preview.index === 1}/><div className="report-sheet-foot"><span>가장 많이 읽은 주제</span><b>경제·산업 <span>↗</span></b></div></div></div>
  </div>;
}
const features = [
  { title: <>넘기면서 훑고,<br/>멈추면 요약이 보여요</>, description: "카드 한 장에 이슈 하나. 잠깐 멈추면 세 줄의 핵심이 나타나요. 관심 있는 이야기를 골라 조금 더 깊이 읽어보세요.", tag: "피드", preview: FeedPreview },
  { title: <>내가 넘긴 카드가<br/>다음 카드를 정해요</>, description: "관심 표시와 읽기 기록을 바탕으로 최근 7일의 관심을 살펴봐요. 12개 정책 영역 안에서 나와 가까운 이야기를 이어가세요.", tag: "마이페이지", preview: InterestPreview },
  { title: <>뉴스를 읽으며<br/>나를 알아가는 시간</>, description: "관심이 쌓이면 내가 자주 읽은 정책 영역이 한눈에 보여요. 최근 7일의 기록으로 나만의 관심 지도를 만나보세요.", tag: "진단보고서", preview: ReportPreview },
];
export function Features() {
  return <section className="section container experience-features" id="features"><div className="section-heading"><h2>Features<span className="heading-dot">.</span></h2></div>{features.map((feature, i) => <article className="feature-row" key={feature.tag}><div className="feature-intro"><span className="rail"><span aria-hidden="true">▪</span><span>0{i + 1}</span></span><div className="feature-copy"><span className="tag">{feature.tag}</span><h3>{feature.title}</h3><p>{feature.description}</p></div></div><feature.preview/></article>)}</section>;
}
