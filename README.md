# NEWTINE Landing

Figma 기반 **React + TypeScript + Vite** 랜딩 페이지입니다. 서버 API나 서버 렌더링이 필요하지 않아 Next.js는 사용하지 않습니다. 기존 `newtine-frontend`와 별도 프로젝트입니다.

## 실행과 검사

Node.js 22.12 이상에서:

```sh
npm ci
npm run dev
```

미리보기: http://localhost:4173

```sh
npm run typecheck
npm run build
npm run preview
```

`dev`와 `preview`는 같은 포트이므로 동시에 실행하지 않습니다. `build`는 TypeScript 검사 후 `dist/`에 배포 파일을 생성합니다.

## 구조

- `src/App.tsx`: 페이지 조합
- `src/components/`: Header, Hero, NewsDemo, Features 등 섹션과 공용 컴포넌트
- `src/data.ts`: 타입이 지정된 체험 카드 데이터
- `src/config.ts`: 서비스·회원가입·약관 연결 주소
- `src/styles.css`: 반응형 스타일과 디자인 토큰
- `public/assets/`: 원본 로고와 로컬 서체
- `vite.config.ts`, `tsconfig.json`: Vite 및 strict TypeScript 설정

카드 선택·관심 표시·메뉴·FAQ는 React 상태로 관리합니다. FAQ는 접근성 속성을 갖춘 버튼과 펼침 애니메이션으로 구성됩니다. 화면 관찰 이벤트는 컴포넌트 해제 시 정리합니다.

## Vercel

- Root Directory: 전체 작업 폴더를 올렸다면 `newtine-landing`, 이 프로젝트만 올렸다면 저장소 루트
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

`vercel.json`에 설정이 포함되어 있습니다.

프로덕션: https://newtine-landing.vercel.app

Vercel 프로젝트: `vdnuits-projects/newtine-landing`. CLI로 최초 배포했습니다. 소스 저장소: https://github.com/newtine-wanted/newtine-landing (공개). 이후 이 폴더에서 `npx vercel deploy --prod`로 재배포할 수 있습니다. `main` 브랜치에 푸시하면 Vercel이 프로덕션으로 자동 배포합니다. GitHub 저장소와 Vercel 프로젝트의 Git 연결을 완료했습니다.

## 서비스 연결

`src/config.ts`에 전체 HTTPS 주소를 입력하세요.

- `signupUrl`: 회원가입
- `serviceUrl`: 서비스 시작
- `termsUrl`: 이용약관
- `privacyUrl`: 개인정보처리방침

미설정 시 가입·시작 버튼은 페이지 내 카드 체험으로, 약관 링크는 준비 안내로 연결됩니다. 실제 회원가입·뉴스 API는 포함하지 않습니다.

## 디자인과 동작

첫 화면의 도시 일러스트와 포인트 카드는 유지하고, 아래 섹션에 순차 등장과 버튼 반응을 적용했습니다.

- Features: 카드 넘김·관심 주제·주간 차트를 HTML/CSS/SVG로 렌더링합니다. 영상 파일 없이 자동 재생과 직접 조작이 가능합니다.
- How it works: 관심 설정 → 피드 → 상세 → 보고서로 전환되는 휴대폰 목업입니다. 주제 선택·좌우 스와이프·출처 펼침·주간 전환을 자동 시연합니다. 직접 조작하면 해당 단계의 자동 시연을 멈춥니다. 실제 API와 연결하지 않은 예시 화면입니다.
- 자동 재생은 화면 밖, 비활성 브라우저 탭 또는 모션 감소 설정에서 멈춥니다. Features 카드·관심 주제를 직접 조작하면 해당 데모가 멈추며, 주간 보고서는 2.6초, How it works는 4초 간격의 자동 전환을 유지합니다. Features 카드 전환 간격은 3.2초입니다.
- 단계 탭은 방향키와 Home/End로 이동할 수 있습니다.

### 모션 조정 위치

- `src/styles.css`의 `--motion-slide-duration`, `--motion-reveal-duration`, `--motion-reveal-distance`: 내비게이션·모바일 CTA·스크롤 등장 속도와 거리
- `src/useScrollReveal.ts`: 등장 대상, 순서별 지연, 표시 시점
- `src/components/Experience.css`: 에셋, 목업, 버튼, FAQ의 세부 움직임과 1100/900/760/360px 반응형 스타일
- `src/components/usePreview.ts`: 자동 재생 공통 동작. 각 컴포넌트의 `usePreview` 두 번째 인수는 전환 간격(ms)입니다. 목업 간격 변경 시 CSS의 `tour-timer`도 함께 조정하세요.

원본 Figma 로고와 기존 프로젝트의 NeoHyundai 서체를 재사용합니다. Barlow Semi Condensed 라이선스는 `public/assets/fonts/OFL.txt`에 있습니다.
