import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "소개 | Next.js Starter Kit",
};

// 기술 스택 목록
const stacks = [
  { name: "Next.js 15", description: "App Router 기반 React 프레임워크" },
  { name: "TypeScript", description: "정적 타입으로 안정적인 개발" },
  { name: "Tailwind CSS", description: "유틸리티 우선 CSS 프레임워크" },
  { name: "shadcn/ui", description: "복사해서 쓰는 접근성 좋은 UI 컴포넌트" },
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">소개</h1>
        <p className="text-muted-foreground">
          이 프로젝트는 빠르게 시작할 수 있는 Next.js 스타터 킷입니다.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {stacks.map((stack) => (
          <Card key={stack.name}>
            <CardHeader>
              <CardTitle>{stack.name}</CardTitle>
              <CardDescription>{stack.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
