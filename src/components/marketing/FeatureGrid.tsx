import type { LucideIcon } from 'lucide-react'

export type FeatureItem = {
  icon: LucideIcon
  title: string
  body: string
  bullets?: string[]
}

type FeatureGridProps = {
  items: FeatureItem[]
  columns?: 2 | 3
}

export default function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  const grid =
    columns === 2
      ? 'md:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((item) => {
        const Icon = item.icon
        return (
        <article
          key={item.title}
          className='group rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm transition hover:border-[var(--app-primary)]/25 hover:shadow-md'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)] transition group-hover:bg-[var(--app-primary)]/15'>
            <Icon className='h-5 w-5' strokeWidth={2} aria-hidden />
          </div>
          <h3 className='mt-4 text-lg font-semibold text-[var(--app-foreground)]'>
            {item.title}
          </h3>
          <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
            {item.body}
          </p>
          {item.bullets && item.bullets.length > 0 ? (
            <ul className='mt-4 space-y-2 border-t border-[var(--app-border)] pt-4 text-xs leading-relaxed text-[var(--app-foreground)]/90'>
              {item.bullets.map((b) => (
                <li key={b} className='flex gap-2'>
                  <span
                    className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]'
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
        )
      })}
    </div>
  )
}
