'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function RewardSection() {
  const selectedWinner = {
    name: '김개발',
    reward: '₩1,500,000',
    questTitle: 'REST API for Microservices Architecture',
  }

  return (
    <Card className="border border-border">
      <div className="border-b border-border p-6">
        <h2 className="text-xl font-semibold text-foreground">보상 지급 관리</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Selected Winner */}
        <div className="rounded-lg bg-surface-raised p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground-muted">선정된 프리랜서</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {selectedWinner.name}
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {selectedWinner.questTitle}
              </p>
            </div>
            <Badge className="bg-quest-open text-white">선정됨</Badge>
          </div>
        </div>

        {/* Reward Amount */}
        <div>
          <p className="text-sm font-semibold text-foreground-muted">보상 금액</p>
          <p className="mt-2 text-3xl font-bold text-primary">
            {selectedWinner.reward}
          </p>
        </div>

        {/* Payment Status */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-quest-open" />
            <span className="text-sm text-foreground">결제 대기 중</span>
          </div>
          <p className="text-xs text-foreground-muted">
            결제를 승인하면 프리랜서에게 보상이 지급됩니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1">
            결제 취소
          </Button>
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary-hover">
            결제 승인 및 지급
          </Button>
        </div>
      </div>
    </Card>
  )
}
