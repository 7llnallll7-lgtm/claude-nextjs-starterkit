import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* 히어로 섹션 */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Next.js Starter Kit
        </h1>
        <p className="text-muted-foreground">
          Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/about" className={buttonVariants()}>
            소개 보기
          </Link>
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            shadcn/ui 문서
          </a>
        </div>
      </section>

      {/* 컴포넌트 예제 */}
      <section>
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>뉴스레터 구독</CardTitle>
            <CardDescription>
              Button, Card, Input 컴포넌트 예제입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Input type="email" placeholder="이메일 주소" />
            <Button>구독</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
