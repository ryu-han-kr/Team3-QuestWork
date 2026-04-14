import Link from 'next/link'
import { cn } from '@/lib/utils'

export type SubmissionStatus = 'reviewing' | 'in_progress' | 'won' | 'rejected'

export interface Submission {
  id: string
  questTitle: string
  questId: string
  reward: string
  submittedAt: string
  status: SubmissionStatus
}

interface SubmissionTableProps {
  submissions: Submission[]
}

const STATUS_CONFIG: Record<
  SubmissionStatus,
  { label: string; className: string }
> = {
  reviewing: {
    label: '검토 중',
    className: 'bg-amber-50 text-amber-700 border border-amber-200',
  },
  in_progress: {
    label: '진행 중',
    className: 'bg-blue-50 text-blue-700 border border-blue-200',
  },
  won: {
    label: '선정됨',
    className: 'bg-green-50 text-green-700 border border-green-200',
  },
  rejected: {
    label: '미선정',
    className: 'bg-surface-raised text-foreground-muted border border-border',
  },
}

function StatusBadge({ status }: { status: SubmissionStatus }) {
  const config = STATUS_CONFIG[status]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        config.className
      )}
    >
      {config.label}
    </span>
  )
}

export function SubmissionTable({ submissions }: SubmissionTableProps) {
  if (submissions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface py-12 text-center">
        <p className="text-sm font-medium text-foreground">
          아직 제출한 퀘스트가 없습니다
        </p>
        <p className="text-xs text-foreground-muted">
          퀘스트에 참여하고 수익을 올려보세요
        </p>
        <Link
          href="/quests"
          className="mt-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          퀘스트 탐색하기
        </Link>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground-muted">
              퀘스트
            </th>
            <th className="hidden px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground-muted sm:table-cell">
              보상
            </th>
            <th className="hidden px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground-muted md:table-cell">
              제출일
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-foreground-muted">
              상태
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-background">
          {submissions.map((submission) => (
            <tr
              key={submission.id}
              className="transition-colors hover:bg-surface"
            >
              <td className="px-4 py-3.5">
                <Link
                  href={`/quests/${submission.questId}`}
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  {submission.questTitle}
                </Link>
              </td>
              <td className="hidden px-4 py-3.5 text-right font-semibold text-primary sm:table-cell">
                {submission.reward}
              </td>
              <td className="hidden px-4 py-3.5 text-right text-foreground-muted md:table-cell">
                {submission.submittedAt}
              </td>
              <td className="px-4 py-3.5 text-right">
                <StatusBadge status={submission.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
