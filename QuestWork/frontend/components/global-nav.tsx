'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
            Q
          </div>
          <span className="hidden font-bold text-foreground sm:inline">
            QuestWork
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/quests"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Quests
          </Link>
          <Link
            href="/my-submissions"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            My Submissions
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-xs sm:text-sm border-border transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_0_2px_var(--primary-light)]" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-primary text-xs text-primary-foreground hover:bg-primary-hover sm:text-sm">
            Post Quest
          </Button>
        </div>
      </nav>
    </header>
  )
}
