import type { CSSProperties } from "react";
import { StartLink } from "./StartLink";
export function Features() {
  return (
    <section className="section container" id="features">
      <div className="section-heading">
        <h2>Features</h2>
        <p>넘기고, 읽고, 알아가는 3단계</p>
      </div>
      <article className="feature-row">
        <span className="rail">
          ▪ <span>01</span>
        </span>
        <div className="feature-copy">
          <span className="label">Swipe &amp; Summary</span>
          <h3>
            넘기면서 훑고,
            <br />
            멈추면 요약이 보여요
          </h3>
          <p>
            카드 한 장에 이슈 하나. 카드가 나타나면 0.5초 뒤 AI 3줄 요약이
            페이드인돼요. 관심 있으면 위로, 아니면 옆으로 넘기세요.
          </p>
          <div className="feature-link">
            <span className="tag">피드</span>
            <span>|</span>
            <StartLink destination="serviceUrl" className="text-link">
              자세히 보기 →
            </StartLink>
          </div>
        </div>
        <div className="screen-tile">
          <div className="mini-screen summary-preview">
            <div className="mini-top english">
              TODAY’S FEED <span>01 / 05</span>
            </div>
            <span className="tag">정책</span>
            <h4>
              복잡했던 뉴스가
              <br />
              명료해지는 순간.
            </h4>
            <div className="short-rule"></div>
            <p>
              하나의 이슈, 세 문장의 핵심.
              <br />
              여러 기사의 맥락을 한눈에.
              <br />더 궁금하면 원문까지.
            </p>
            <div className="mini-bottom english">
              SKIP <span>LIKE</span> OPEN
            </div>
          </div>
          <span className="tile-label">FEED / PREVIEW</span>
        </div>
      </article>
      <article className="feature-row">
        <span className="rail">
          ▪ <span>02</span>
        </span>
        <div className="feature-copy">
          <span className="label">Interest-based Feed</span>
          <h3>
            내가 넘긴 카드가
            <br />
            다음 카드를 정해요
          </h3>
          <p>
            관심 표시·넘기기·읽기 시간을 바탕으로 최근 7일 관심을 분석해 정책
            영역 12종 안에서 다음 이슈를 추천해요.
          </p>
          <div className="feature-link">
            <span className="tag">마이페이지</span>
            <span>|</span>
            <a href="#how" className="text-link">
              자세히 보기 →
            </a>
          </div>
        </div>
        <div className="screen-tile">
          <div className="mini-screen interests-preview">
            <div className="mini-top english">
              MY INTERESTS <span>07 DAYS</span>
            </div>
            <h4>
              나의 관심이 만드는
              <br />
              나만의 뉴스 루틴.
            </h4>
            <p>어떤 이야기에 눈길이 갔나요?</p>
            <div className="interest-tags">
              <span className="selected">경제·산업</span>
              <span className="selected">노동·일자리</span>
              <span>교육</span>
              <span>환경·에너지</span>
              <span>외교·안보</span>
              <span className="selected">주거·부동산</span>
            </div>
            <div className="mini-bottom">
              최근 7일의 관심을 바탕으로 추천해요.
            </div>
          </div>
          <span className="tile-label">MYPAGE / PREVIEW</span>
        </div>
      </article>
      <article className="feature-row">
        <span className="rail">
          ▪ <span>03</span>
        </span>
        <div className="feature-copy">
          <span className="label">Weekly Report</span>
          <h3>
            내가 어떤 이슈에
            <br />
            반응했는지 한눈에
          </h3>
          <p>
            관심 5건 이상 쌓이면 영역별 막대와 함께 이번 주 나의 관심 지도를
            보고서로 보여드려요.
          </p>
          <div className="feature-link">
            <span className="tag">진단보고서</span>
            <span>|</span>
            <a href="#how" className="text-link">
              자세히 보기 →
            </a>
          </div>
        </div>
        <div className="screen-tile">
          <div className="mini-screen report-preview">
            <div className="mini-top english">
              WEEKLY REPORT <span>THIS WEEK</span>
            </div>
            <h4>이번 주, 나의 관심 지도.</h4>
            <p>어떤 정책에 가장 많이 반응했을까요?</p>
            <div className="bar-row">
              <span>경제·산업</span>
              <i style={{ "--value": "85%" } as CSSProperties}></i>
            </div>
            <div className="bar-row">
              <span>노동·일자리</span>
              <i style={{ "--value": "65%" } as CSSProperties}></i>
            </div>
            <div className="bar-row">
              <span>주거·부동산</span>
              <i style={{ "--value": "43%" } as CSSProperties}></i>
            </div>
            <div className="bar-row">
              <span>교육</span>
              <i style={{ "--value": "25%" } as CSSProperties}></i>
            </div>
            <div className="mini-bottom">
              예시 데이터 · 정책을 바라보는 나의 기준
            </div>
          </div>
          <span className="tile-label">REPORT / PREVIEW</span>
        </div>
      </article>
    </section>
  );
}
