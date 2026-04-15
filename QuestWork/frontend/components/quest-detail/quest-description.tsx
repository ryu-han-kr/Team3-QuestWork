'use client'

import { Badge } from '@/components/ui/badge'

interface QuestDescriptionProps {
  description: string
  techStack: string[]
  submissionFormat?: string
}

export function QuestDescription({
  description,
  techStack,
  submissionFormat,
}: QuestDescriptionProps) {
  return (
    <div className="space-y-8">
      {/* Description Section */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-foreground">문제 설명</h2>
        <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      </div>

      {/* Tech Stack Section */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          기술 스택
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              className="bg-primary-light text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Submission Format Section */}
      {submissionFormat && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            제출 형식
          </h3>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="whitespace-pre-wrap text-sm text-foreground-muted">
              {submissionFormat}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
