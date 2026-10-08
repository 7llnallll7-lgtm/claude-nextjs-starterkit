# Next.js Starter Kit

Next.js 15 (App Router) 기반 스타터 킷입니다.

## 기술 스택

- Next.js 15 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (style: `base-nova`, Base UI 기반)

## 실행 방법

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행 (build 이후)
npm run lint    # ESLint 검사
```

## 프로젝트 구조

```
.
├── CLAUDE.md
├── components.json            # shadcn/ui 설정
├── package.json
├── tsconfig.json              # 경로 별칭 @/* -> src/*
├── public/                    # 정적 파일
└── src/
    ├── app/
    │   ├── layout.tsx         # 루트 레이아웃 (헤더 + 메인 + 푸터)
    │   ├── page.tsx           # 홈 (/)
    │   ├── about/page.tsx     # 소개 (/about)
    │   └── globals.css        # 전역 스타일, 테마 변수
    ├── components/
    │   ├── layout/
    │   │   ├── header.tsx     # 헤더 + 네비게이션
    │   │   └── footer.tsx     # 푸터
    │   └── ui/                # shadcn/ui 컴포넌트 (button, card, input)
    └── lib/
        └── utils.ts           # cn() 클래스 병합 유틸
```

## 개발 가이드

### 페이지 추가

`src/app/<경로>/page.tsx`를 만들면 해당 경로가 생성됩니다. 네비게이션에 노출하려면 `src/components/layout/header.tsx`의 `navItems`에 항목을 추가합니다.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>
```

### 주의사항

- 이 프로젝트의 `Button`은 Base UI 기반이라 `asChild` prop이 없습니다. 링크를 버튼처럼 보이게 하려면 `<Link className={buttonVariants()}>`를 사용합니다.
- `src/lib/utils.ts`의 `cn()`은 `clsx` + `tailwind-merge`로 구현되어 있습니다. shadcn CLI가 무관한 `cn` npm 패키지를 설치하는 경우가 있으니, `package.json`에 `cn`이 추가되지 않았는지 확인합니다.

## 코딩 규칙

- 들여쓰기: 2칸
- 코드 주석, 커밋 메시지, 문서: 한국어
- 변수명/함수명: 영어
- 스타일링: Tailwind CSS 사용
- 언어: TypeScript 사용 (strict 모드)
