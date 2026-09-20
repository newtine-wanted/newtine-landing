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

카드 선택·관심 표시·메뉴·모달은 React 상태로 관리합니다. 화면 관찰 이벤트는 컴포넌트 해제 시 정리합니다. FAQ는 기본 HTML details 요소입니다.

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

Lusion 참고로 추가했던 입자 구·스크롤 강조·기울기·스와이프·자석 버튼은 제거하고 이전 Figma 기반 디자인을 복원했습니다.
기존 카드 5개 순환, 관심 3개 제한·취소, 상세 모달, FAQ, 모바일 메뉴 및 하단 CTA는 유지합니다.

회색 이미지 영역의 기능 미리보기는 실제 앱 캡처가 아닌 HTML/CSS 예시입니다. 원본 Figma 로고와 기존 프로젝트의 NeoHyundai 서체를 재사용합니다. Google Fonts의 Barlow Semi Condensed 라이선스는 `public/assets/fonts/OFL.txt`에 있습니다.
