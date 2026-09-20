export function Personas() {
  return (
    <section className="section container personas">
      <div className="section-heading">
        <h2>Who is it for</h2>
        <p>정치에 관심은 있는데, 시간은 없는 당신에게</p>
      </div>
      <div className="persona-grid">
        <article className="persona-card">
          <div className="persona-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9h6M9 14h6"/></svg></div>
          <h3>20대 취업준비생이라면</h3>
          <p>
            면접 전 시사 상식이 필요할 때, 출근길 10분에 오늘의 정치 이슈를
            카드로 훑을 수 있어요.
          </p>
        </article>
        <article className="persona-card">
          <div className="persona-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 13h18"/></svg></div>
          <h3>30대 직장인이라면</h3>
          <p>
            점심시간 대화에 끼고 싶을 때, 편 가르지 않는 3줄 요약으로 맥락만
            빠르게 챙겨요.
          </p>
        </article>
        <article className="persona-card">
          <div className="persona-symbol" aria-hidden="true">✓</div>
          <h3>첫 투표를 앞둔 20대라면</h3>
          <p>
            진단보고서로 내가 어떤 정책 영역에 반응하는지 확인하고, 내 기준을
            만들어 가요.
          </p>
        </article>
      </div>
    </section>
  );
}
