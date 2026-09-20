export function Why() {
  return (
    <section className="section container" id="why">
      <div className="section-heading">
        <h2>Why NEWTINE</h2>
        <p>2030 세대가 정치 뉴스를 멀리하는 세 가지 이유</p>
      </div>
      <div className="why-grid">
        <article className="why-item">
          <span className="big-number">01</span>
          <div>
            <h3>길다</h3>
            <p>
              기사 하나에 2,000자. 핵심만 알고 싶은데 끝까지 읽을 시간이 없어요.
            </p>
          </div>
        </article>
        <article className="why-item">
          <span className="big-number">02</span>
          <div>
            <h3>어렵다</h3>
            <p>용어와 배경 맥락을 모르면 무슨 이야기인지 따라가기 어려워요.</p>
          </div>
        </article>
        <article className="why-item">
          <span className="big-number">03</span>
          <div>
            <h3>편향적이다</h3>
            <p>언론사마다 다른 프레임. 무엇이 사실인지 헷갈려요.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
