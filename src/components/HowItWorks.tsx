export function HowItWorks() {
  return (
    <section className="section container" id="how">
      <div className="section-heading">
        <h2>How it works</h2>
        <p>시작은 1분, 매일은 3분</p>
      </div>
      <div
        className="steps"
        tabIndex={0}
        aria-label="이용 방법 4단계. 작은 화면에서는 좌우로 스크롤하세요."
      >
        <article>
          <div className="step-art">
            <div className="step-phone">
              <span className="english">01 / ONBOARDING</span>
              <h4>
                어떤 주제에
                <br />
                관심 있나요?
              </h4>
              <p>나의 관심부터 시작해요.</p>
              <div className="topic-grid">
                <span>경제</span>
                <span>교육</span>
                <span>주거</span>
                <span>환경</span>
                <span>노동</span>
                <span>외교</span>
              </div>
              <div className="step-button">다음 →</div>
            </div>
          </div>
          <div className="step-caption">
            <b>01</b>
            <div>
              <span className="label">Onboarding</span>
              <h3>관심 주제 고르기</h3>
              <p>정책 영역·인물·세대·지역 4단계 설문</p>
            </div>
          </div>
        </article>
        <article>
          <div className="step-art">
            <div className="step-phone">
              <span className="english">02 / FEED</span>
              <h4>
                오늘의 이슈를
                <br />
                카드 한 장에.
              </h4>
              <span className="tag">AI 3줄 요약</span>
              <div className="sample-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="step-button">SKIP　 LIKE　 OPEN</div>
            </div>
          </div>
          <div className="step-caption">
            <b>02</b>
            <div>
              <span className="label">Feed</span>
              <h3>카드 넘기기</h3>
              <p>하루 이슈를 카드로 훑고 3줄 요약 읽기</p>
            </div>
          </div>
        </article>
        <article>
          <div className="step-art">
            <div className="step-phone">
              <span className="english">03 / DETAIL</span>
              <h4>
                맥락을 알고,
                <br />
                출처를 확인해요.
              </h4>
              <p>요약 너머의 이야기도.</p>
              <div className="source-row">
                핵심 요약 <span>↗</span>
              </div>
              <div className="source-row">
                이슈의 배경 <span>↗</span>
              </div>
              <div className="source-row">
                원문과 출처 <span>↗</span>
              </div>
            </div>
          </div>
          <div className="step-caption">
            <b>03</b>
            <div>
              <span className="label">Detail</span>
              <h3>자세히 보기</h3>
              <p>카드 탭 → 요약 시트 → 확장해 원문·출처 확인</p>
            </div>
          </div>
        </article>
        <article>
          <div className="step-art">
            <div className="step-phone">
              <span className="english">04 / REPORT</span>
              <h4>
                뉴스를 읽으며
                <br />
                나를 알아가요.
              </h4>
              <p>이번 주 나의 관심은?</p>
              <div className="vertical-chart" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="step-button">나의 관심 지도 →</div>
            </div>
          </div>
          <div className="step-caption">
            <b>04</b>
            <div>
              <span className="label">Report</span>
              <h3>나를 알아가기</h3>
              <p>관심 기록이 쌓이면 나만의 진단보고서</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
