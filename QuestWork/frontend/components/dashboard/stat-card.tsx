import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string
  subtext?: string
  trend?: {
    value: string
    direction: 'up' | 'down' | 'neutral'
  }
  accent?: boolean
  icon?: string
}

export function StatCard({ label, value, subtext, trend, accent, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-lg border p-5',
        accent
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-background'
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            'text-sm font-medium',
            accent ? 'text-primary-foreground/80' : 'text-foreground-muted'
          )}
        >
          {label}
        </p>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="flex items-end justify-between gap-2">
        <p
          className={cn(
            'text-3xl font-bold leading-none tracking-tight',
            accent ? 'text-primary-foreground' : 'text-foreground'
          )}
        >
          {value}
        </p>
        {trend && (
          <span
            className={cn(
              'mb-0.5 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
              trend.direction === 'up' &&
                (accent
                  ? 'bg-white/20 text-white'
                  : 'bg-green-100 text-green-700'),
              trend.direction === 'down' &&
                (accent
                  ? 'bg-white/20 text-white'
                  : 'bg-red-100 text-red-700'),
              trend.direction === 'neutral' &&
                (accent
                  ? 'bg-white/20 text-white'
                  : 'bg-surface-raised text-foreground-muted')
            )}
          >
            {trend.direction === 'up' && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {trend.direction === 'down' && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2v6M2 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {trend.value}
          </span>
        )}
      </div>
      {subtext && (
        <p
          className={cn(
            'text-xs',
            accent ? 'text-primary-foreground/70' : 'text-foreground-subtle'
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  )
}
