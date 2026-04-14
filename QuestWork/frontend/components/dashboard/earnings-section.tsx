'use client'

import { Card } from '@/components/ui/card'

export function EarningsSection() {
  const earningsData = [
    { month: '1월', amount: 800000 },
    { month: '2월', amount: 1200000 },
    { month: '3월', amount: 950000 },
    { month: '4월', amount: 1300000 },
  ]

  const totalEarnings = earningsData.reduce((sum, item) => sum + item.amount, 0)
  const maxAmount = Math.max(...earningsData.map((d) => d.amount))

  return (
    <Card className="border border-border">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          수익 현황
        </h2>
        <p className="text-3xl font-bold text-primary mb-6">
          ₩{totalEarnings.toLocaleString()}
        </p>

        <div className="space-y-4">
          {earningsData.map((item) => (
            <div key={item.month} className="flex items-end gap-3">
              <span className="w-12 text-sm font-medium text-foreground-muted">
                {item.month}
              </span>
              <div className="flex-1 h-10 bg-surface-raised rounded-lg overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{
                    width: `${(item.amount / maxAmount) * 100}%`,
                  }}
                />
              </div>
              <span className="w-24 text-right text-sm font-semibold text-foreground">
                ₩{item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
