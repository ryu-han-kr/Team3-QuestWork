'use client'

import Link from 'next/link'
import { GlobalNav } from '@/components/global-nav'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Submission {
  id: string
  questId: string
  questTitle: string
  submittedAt: string
  status: 'submitted' | 'selected' | 'rejected'
  rewardStatus: 'pending' | 'paid' | 'none'
  reward: string
}

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: '1',
    questId: '1',
    questTitle: 'React Admin Dashboard Performance Optimization',
    submittedAt: '2024-04-10',
    status: 'selected',
    rewardStatus: 'paid',
    reward: '₩1,000,000',
  },
  {
    id: '2',
    questId: '2',
    questTitle: 'Mobile App for Task Management',
    submittedAt: '2024-04-08',
    status: 'selected',
    rewardStatus: 'pending',
    reward: '₩800,000',
  },
  {
    id: '3',
    questId: '3',
    questTitle: 'REST API for Microservices Architecture',
    submittedAt: '2024-04-09',
    status: 'submitted',
    rewardStatus: 'none',
    reward: '₩1,500,000',
  },
  {
    id: '4',
    questId: '4',
    questTitle: 'Spring Boot REST Service',
    submittedAt: '2024-04-05',
    status: 'rejected',
    rewardStatus: 'none',
    reward: '₩1,200,000',
  },
  {
    id: '5',
    questId: '5',
    questTitle: 'Python Data Processing Pipeline',
    submittedAt: '2024-04-03',
    status: 'submitted',
    rewardStatus: 'none',
    reward: '₩900,000',
  },
  {
    id: '6',
    questId: '11',
    questTitle: 'Next.js E-commerce Platform',
    submittedAt: '2024-03-28',
    status: 'selected',
    rewardStatus: 'paid',
    reward: '₩2,500,000',
  },
]

function getStatusBadge(status: string) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    submitted: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      label: '검토 중',
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

function getRewardStatusBadge(rewardStatus: string) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    paid: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      label: '지급 완료',
    },
    pending: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      label: '지급 대기',
    },
    none: {
      bg: 'bg-gray-100',
      text: 'text-gray-500',
      label: '-',
    },
  }
  return styles[rewardStatus] || styles.none
}

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">나의 제출 내역</h1>
            <p className="mt-1 text-sm text-foreground-muted">
              제출한 퀘스트의 현황과 보상 상태를 확인하세요.
            </p>
          </div>

          {/* Submissions Table */}
          <Card className="border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">
                      퀘스트 제목
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">
                      제출일
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">
                      상태
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">
                      보상 상태
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">
                      상세
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_SUBMISSIONS.map((submission) => {
                    const statusStyle = getStatusBadge(submission.status)
                    const rewardStyle = getRewardStatusBadge(submission.rewardStatus)
                    return (
                      <tr
                        key={submission.id}
                        className="border-b border-border last:border-b-0 hover:bg-surface transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium text-foreground">
                              {submission.questTitle}
                            </span>
                            <span className="text-xs text-foreground-muted">
                              보상: {submission.reward}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-foreground-muted">
                          {submission.submittedAt}
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            className={`${statusStyle.bg} ${statusStyle.text} text-xs`}
                          >
                            {statusStyle.label}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            className={`${rewardStyle.bg} ${rewardStyle.text} text-xs`}
                          >
                            {rewardStyle.label}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link href={`/quests/${submission.questId}`}>
                              상세 보기
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {MOCK_SUBMISSIONS.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-foreground-muted">제출한 퀘스트가 없습니다.</p>
                <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary-hover">
                  <Link href="/quests/web-development">퀘스트 탐색하기</Link>
                </Button>
              </div>
            )}
          </Card>
        </main>
      </div>
    </div>
  )
}
