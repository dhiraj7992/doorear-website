/**
 * Shared visual layer for marketing heroes: animated mesh, subtle grid, blur orbs.
 * Parent must be `relative overflow-hidden` with content in `relative z-10`.
 */
export default function MarketingHeroDecorations() {
  return (
    <>
      <div
        className='marketing-hero-mesh pointer-events-none absolute inset-0 z-0'
        aria-hidden
      />
      <div
        className='marketing-hero-grid pointer-events-none absolute inset-0 z-0 opacity-[0.45]'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -left-32 top-0 z-0 h-[28rem] w-[28rem] rounded-full bg-[var(--app-primary)]/12 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -right-20 top-1/4 z-0 h-80 w-80 rounded-full bg-amber-500/12 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute bottom-0 left-1/4 z-0 h-72 w-72 rounded-full bg-blue-400/8 blur-3xl'
        aria-hidden
      />
      <div
        className='marketing-floating-cube pointer-events-none absolute left-[14%] top-[24%] z-0'
        aria-hidden
      />
      <div
        className='marketing-floating-cube marketing-floating-cube-alt pointer-events-none absolute right-[18%] top-[20%] z-0'
        aria-hidden
      />
      <div
        className='marketing-floating-chip pointer-events-none absolute left-[8%] top-[62%] z-0'
        aria-hidden
      />
      <div
        className='marketing-floating-chip marketing-floating-chip-alt pointer-events-none absolute right-[10%] top-[68%] z-0'
        aria-hidden
      />
    </>
  )
}
