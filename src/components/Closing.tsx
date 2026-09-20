import { StartLink } from "./StartLink";

export function Closing() {
  return (
    <section className="closing dark" id="start">
      <div className="container">
        <h2>Start Today.</h2>
        <p>오늘의 정치 이슈, 지금 첫 카드를 넘겨 보세요.</p>
        <StartLink className="button button-white" destination="serviceUrl">
          바로 체험하기
        </StartLink>
      </div>
    </section>
  );
}
