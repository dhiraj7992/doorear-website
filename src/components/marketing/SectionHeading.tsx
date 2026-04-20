type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
          {eyebrow}
        </p>
      ) : null}
      <h2 className='mt-2 text-3xl font-bold tracking-tight text-[var(--app-foreground)] sm:text-4xl'>
        {title}
      </h2>
      {description ? (
        <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
          {description}
        </p>
      ) : null}
    </div>
  )
}
