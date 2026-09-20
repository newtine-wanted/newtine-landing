export function FAQ() {
  return (
    <section className="section container" id="faq">
      <div className="section-heading">
        <h2>FAQ</h2>
        <p>자주 묻는 질문</p>
      </div>
      <div className="faq-list">
        <details>
          <summary>
            <span>Q1</span>회원가입 없이도 쓸 수 있나요?
          </summary>
          <p>
            비회원도 카드 5장, 관심 표시 3회까지 체험할 수 있어요.
            바로 체험하기를 누르면 피드 화면으로 이동해요.
          </p>
        </details>
        <details>
          <summary>
            <span>Q2</span>요약은 누가 만드나요? 믿을 수 있나요?
          </summary>
          <p>
            AI가 여러 기사를 바탕으로 핵심을 세 줄로 정리해요. AI 요약에는
            오류가 있을 수 있으므로 중요한 내용은 카드에 연결된 원문과 출처를
            함께 확인해 주세요.
          </p>
        </details>
        <details>
          <summary>
            <span>Q3</span>왜 빨간색·파란색이 없나요?
          </summary>
          <p>
            특정 진영을 연상시키는 색 대신 흑백으로 정보를 전해요. 초록색은 관심
            표시와 보조 동작에만 사용합니다.
          </p>
        </details>
        <details>
          <summary>
            <span>Q4</span>진단보고서는 언제부터 볼 수 있나요?
          </summary>
          <p>
            관심 표시가 5건 이상 쌓이면 정책 영역별 관심 지도를 볼 수 있어요.
            최근 7일 동안 어떤 이슈에 반응했는지 확인해 보세요.
          </p>
        </details>
        <details>
          <summary>
            <span>Q5</span>기록을 지우거나 관심을 초기화할 수 있나요?
          </summary>
          <p>
            마이페이지에서 관심 기록을 초기화할 수 있어요. 새로운 관심사에 맞춰
            뉴스 루틴을 다시 시작해 보세요.
          </p>
        </details>
      </div>
    </section>
  );
}
