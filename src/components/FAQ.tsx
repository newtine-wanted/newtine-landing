import { useState } from "react";
import { StartLink } from "./StartLink";
const questions = [
  {
    "question": "정치를 잘 몰라도 이용할 수 있나요?",
    "answer": "정치 배경지식이 없어도 읽을 수 있도록 핵심과 배경을 쉽게 설명해요. 이해에 필요한 어려운 용어도 함께 풀어드려요."
  },
  {
    "question": "회원가입 없이도 볼 수 있나요?",
    "answer": "회원가입 없이도 계속 체험할 수 있어요. 나의 관심을 담은 진단보고서와 취향에 맞는 이슈 추천을 받고 싶다면 가입해 주세요.",
    "trial": true
  },
  {
    "question": "요약은 누가 만드나요? 믿을 수 있나요?",
    "answer": "AI가 여러 기사를 바탕으로 핵심을 세 줄로 정리해요. AI 요약에는 오류가 있을 수 있으므로 중요한 내용은 카드에 연결된 원문과 출처를 함께 확인해 주세요."
  },
  {
    "question": "뉴스는 얼마나 자주 업데이트되나요?",
    "answer": "하루에 한 번 새로운 이슈를 업데이트해요. 뉴틴 AI가 여러 분야의 뉴스를 폭넓게 수집해 최신 트렌드와 주요 변화를 반영해요."
  },
  {
    "question": "어떤 소식을 볼 수 있나요?",
    "answer": "주거, 일자리, 교육, 환경 등 12개 정책 영역의 뉴스를 다뤄요. 특정 분야에만 치우치지 않도록 여러 세대와 지역에 관련된 이슈를 두루 살펴봐요."
  }
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <section className="section container" id="faq"><div className="section-heading"><h2>FAQ<span className="heading-dot">.</span></h2><p>자주 묻는 질문</p></div><div className="faq-list motion-faq">{questions.map((item, i) => <div className={`faq-item${open === i ? " open" : ""}`} key={item.question}><h3><button aria-expanded={open === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={() => setOpen(open === i ? null : i)}><span className="faq-index">0{i + 1}</span><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></button></h3><div className="faq-answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} inert={open !== i} aria-hidden={open !== i}><div><p>{item.answer}</p>{item.trial && <StartLink className="text-link faq-trial-link" destination="serviceUrl">바로 체험하기</StartLink>}</div></div></div>)}</div></section>;
}
