'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Submission {
  id: string
  questTitle: string
  questId: string
  status: 'submitted' | 'selected' | 'rejected'
  submittedAt: string
  reward: string
}

interface SubmissionsSectionProps {
  submissions: Submission[]
}

function getStatusBadge(status: string) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    submitted: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      label: '제출 대기 중',
    },
    selected: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      label: '선정됨',
    },
    rejected: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      label: '미선정',
    },
  }
  return styles[status] || styles.submitted
}

export function SubmissionsSection({ submissions }: SubmissionsSectionProps) {
  if (submissions.length === 0) {
    return (
      <Card className="border border-border">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            나의 제출 현황
          </h2>
          <p className="text-sm text-foreground-muted">
            제출한 퀘스트가 없습니다.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border border-border">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          나의 제출 현황
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-semibold text-foreground">
                  퀘스트 제목
                </th>
                <th className="text-left py-3 px-2 font-semibold text-foreground">
                  보상
                </th>
                <th className="text-left py-3 px-2 font-semibold text-foreground">
                  상태
                </th>
                <th className="text-left py-3 px-2 font-semibold text-foreground">
                  제출일
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => {
                const statusStyle = getStatusBadge(submission.status)
                return (
                  <tr
                    key={submission.id}
                    className="border-b border-border hover:bg-surface transition-colors"
                  >
                    <td className="py-3 px-2">
                      <Link
                        href={`/quests/${submission.questId}`}
                        className="text-foreground hover:text-primary truncate block"
                      >
                        {submission.questTitle}
                      </Link>
                    </td>
                    <td className="py-3 px-2 font-semibold text-foreground">
                      {submission.reward}
                    </td>
                    <td className="py-3 px-2">
                      <Badge
                        className={`${statusStyle.bg} ${statusStyle.text} text-xs`}
                      >
                        {statusStyle.label}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-foreground-muted">
                      {submission.submittedAt}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
