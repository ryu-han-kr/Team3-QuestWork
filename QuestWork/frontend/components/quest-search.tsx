'use client'

import { Input } from '@/components/ui/input'

interface QuestSearchProps {
  value: string
  onChange: (value: string) => void
}

export function QuestSearch({ value, onChange }: QuestSearchProps) {
  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search quests by title or keyword..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10"
      />
    </div>
  )
}
