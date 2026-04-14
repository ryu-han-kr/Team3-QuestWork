'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Quest {
  id: string
  title: string
  status: 'open' | 'closed' | 'completed'
  reward: string
  submissionsCount: number
  createdAt: string
}

interface PostedQuestsSectionProps {
  quests: Quest[]
}

const statusBadgeColor = {
  open: 'bg-quest-open text-white',
  closed: 'bg-quest-closed text-white',
  completed: 'bg-quest-reviewing text-white',
}

const statusLabel = {
  open: '진행 중',
  closed: '마감됨',
  completed: '완료',
}

export function PostedQuestsSection({ quests }: PostedQuestsSectionProps) {
  return (
    <Card className="border border-border">
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">등록된 퀘스트</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover">
            + 새 퀘스트
          </Button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {quests.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-foreground-muted">등록된 퀘스트가 없습니다.</p>
          </div>
        ) : (
          quests.map((quest) => (
            <Link
              key={quest.id}
              href={`/manager/quests/${quest.id}`}
              className="block transition-colors hover:bg-surface-raised"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground hover:text-primary truncate">
                      {quest.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      생성일: {quest.createdAt}
                    </p>
                  </div>
                  <Badge className={statusBadgeColor[quest.status]}>
                    {statusLabel[quest.status]}
                  </Badge>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs text-foreground-muted">보상</p>
                      <p className="font-semibold text-primary">{quest.reward}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground-muted">제출</p>
                      <p className="font-semibold text-foreground">
                        {quest.submissionsCount}건
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="text-xs">
                    상세 보기
                  </Button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </Card>
  )
}
