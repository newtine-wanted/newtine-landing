import type { CSSProperties } from "react";
export function PreviewControl({ paused, reduced, toggle }: { paused: boolean; reduced: boolean; toggle: () => void }) {
  return reduced ? <span className="preview-static">정지 미리보기</span> : <button className="preview-play" onClick={toggle} aria-label={paused ? "자동 재생 시작" : "자동 재생 일시정지"} aria-pressed={paused}><span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span><span>{paused ? "재생" : "일시정지"}</span></button>;
}
export function ProductIcon({ name }: { name: "feed" | "user" | "chart" | "arrow" | "heart" }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{name === "feed" ? <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></> : name === "user" ? <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></> : name === "chart" ? <path d="M4 20V10m8 10V4m8 16v-7"/> : name === "heart" ? <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/> : <path d="M5 12h14m-5-5 5 5-5 5"/>}</svg>;
}
export function ReportBars({ alternate = false }: { alternate?: boolean }) {
  return <div className="live-bars">{["경제·산업", "노동·일자리", "주거·부동산", "교육"].map((label, i) => <div className="live-bar" key={label}><div><span>{label}</span><b>{(alternate ? [36, 28, 24, 12] : [42, 30, 18, 10])[i]}<small>%</small></b></div><div className="live-bar-track"><i style={{ "--bar-width": `${(alternate ? [86, 67, 57, 29] : [100, 71, 43, 24])[i]}%`, "--bar-delay": `${i * 90}ms` } as CSSProperties}/></div></div>)}</div>;
}
