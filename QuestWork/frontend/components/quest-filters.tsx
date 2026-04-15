'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export interface QuestFilters {
  categories: string[]
  techStack: string[]
  minReward: number | null
  maxReward: number | null
  difficulty: string[]
}

interface QuestFiltersProps {
  filters: QuestFilters
  onFiltersChange: (filters: QuestFilters) => void
}

const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Java',
  'Spring',
  'PostgreSQL',
  'Python',
  'Docker',
  'Kubernetes',
  'AWS',
  'React Native',
  'Flutter',
]

export function QuestFilters({ filters, onFiltersChange }: QuestFiltersProps) {
  const handleTechChange = (tech: string) => {
    const updated = filters.techStack.includes(tech)
      ? filters.techStack.filter((t) => t !== tech)
      : [...filters.techStack, tech]
    onFiltersChange({ ...filters, techStack: updated })
  }

  const FilterContent = () => (
    <div className="flex flex-col gap-6 p-4 sm:p-0">
      {/* Tech Stack */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">기술 스택</h3>
        <div className="space-y-2">
          {TECH_STACK.map((tech) => (
            <div key={tech} className="flex items-center gap-2">
              <Checkbox
                id={`tech-${tech}`}
                checked={filters.techStack.includes(tech)}
                onCheckedChange={() => handleTechChange(tech)}
              />
              <Label
                htmlFor={`tech-${tech}`}
                className="cursor-pointer text-sm font-normal text-foreground"
              >
                {tech}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          onFiltersChange({
            categories: [],
            techStack: [],
            minReward: null,
            maxReward: null,
            difficulty: [],
          })
        }
      >
        필터 초기화
      </Button>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-border bg-surface py-6 lg:block">
        <FilterContent />
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-4">
              필터
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
