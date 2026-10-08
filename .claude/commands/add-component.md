---
description: src/components/ 아래에 React 함수형 컴포넌트 템플릿 파일을 생성합니다
argument-hint: <ComponentName>
allowed-tools: Read, Write, Glob
---

`src/components/` 폴더에 `$1` 컴포넌트를 새로 만들어 주세요.

## 규칙

1. `$1`이 비어 있으면 파일을 만들지 말고 사용법(`/add-component <ComponentName>`)을 안내합니다.
2. 컴포넌트 이름은 PascalCase여야 합니다. 다른 형식이면 PascalCase로 변환해서 사용하고, 변환했다면 알려 줍니다.
3. 파일 경로는 `src/components/<kebab-case 이름>.tsx`입니다. (예: `UserCard` → `src/components/user-card.tsx`)
4. 같은 경로에 파일이 이미 있으면 덮어쓰지 말고 중단한 뒤 알려 줍니다.
5. 새로 만드는 파일 외에는 수정하지 않습니다.

## 템플릿

아래 형식으로 작성합니다. `$1`은 PascalCase로 변환한 컴포넌트 이름으로 바꿉니다.

```tsx
import { cn } from "@/lib/utils";

interface $1Props {
  className?: string;
  children?: React.ReactNode;
}

// $1 컴포넌트
export function $1({ className, children }: $1Props) {
  return <div className={cn("", className)}>{children}</div>;
}
```

## 코딩 규칙

- 들여쓰기는 2칸, 주석은 한국어로 작성합니다.
- 타입은 TypeScript로, 스타일은 Tailwind CSS로 작성합니다.
- 상태나 이벤트 핸들러가 필요한 경우가 아니면 `"use client"`를 붙이지 않습니다.
- 클래스 병합에는 `@/lib/utils`의 `cn()`을 사용합니다.

## 완료 후

생성한 파일 경로와 import 예시(`import { $1 } from "@/components/<파일명>";`)를 알려 주세요.
