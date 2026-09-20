import { externalUrl, siteConfig } from "../config";
export function Footer() {
  return (
    <>
      <footer className="container">
        <div className="footer-top">
          <a href="#" aria-label="뉴틴 홈">
            <img
              className="logo"
              src="/assets/logo.svg"
              width="101"
              height="30"
              alt="newtine"
            />
          </a>
          <div>
            {(
              [
                ["termsUrl", "이용약관"],
                ["privacyUrl", "개인정보처리방침"],
              ] as const
            ).map(([key, label]) => (
              <a
                key={key}
                href={externalUrl(siteConfig[key])}
                role="link"
                aria-disabled={!externalUrl(siteConfig[key])}
                tabIndex={0}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            2030을 위한 AI 카드형 정치 뉴스 · 원티드 2026 AI 챌린지 팀 프로젝트
          </p>
          <span className="english">© 2026 NEWTINE</span>
        </div>
      </footer>
    </>
  );
}
