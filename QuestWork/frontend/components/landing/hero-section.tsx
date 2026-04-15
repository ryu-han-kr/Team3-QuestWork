'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2">
            <span className="text-xs font-semibold text-primary">
              지금 퀘스트에 참여하세요
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance text-5xl font-bold leading-tight text-foreground sm:text-6xl">
            실력으로 증명하는{' '}
            <span className="text-primary">프리랜서 플랫폼</span>
          </h1>

          {/* Subheading */}
          <p className="text-balance text-lg text-foreground-muted sm:text-xl">
            기업은 문제를 퀘스트로 올리고
            <br />
            프리랜서는 결과물로 경쟁합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/quests">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-hover sm:w-auto">
                퀘스트 탐색하기
              </Button>
            </Link>
            <Link href="/manager">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                퀨스트 등록하기
              </Button>
            </Link>
          </div>

          {/* Hero Visual - Illustration placeholder */}
          <div className="mt-8 w-full">
            <div className="aspect-video rounded-lg border border-border bg-surface p-8 shadow-sm">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="text-4xl">👨‍💻</div>
                <p className="text-center text-foreground-muted">
                  프리랜서들이 퀘스트로 경쟁하고 최고의 솔루션을 제시합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
