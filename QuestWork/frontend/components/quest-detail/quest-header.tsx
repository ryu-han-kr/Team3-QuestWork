'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface QuestHeaderProps {
  title: string
  reward: string
  deadline: string
  participants: number
  onParticipate: () => void
}

export function QuestHeader({
  title,
  reward,
  deadline,
  participants,
  onParticipate,
}: QuestHeaderProps) {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {title}
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground-muted">
                보상
              </span>
              <span className="text-2xl font-bold text-primary">{reward}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground-muted">
                마감
              </span>
              <span className="text-xl font-semibold text-foreground">
                {deadline}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground-muted">
                참여자
              </span>
              <span className="text-xl font-semibold text-foreground">
                {participants}명
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary-hover sm:w-auto"
            onClick={onParticipate}
          >
            퀘스트 참여하기
          </Button>
        </div>
      </div>
    </div>
  )
}
