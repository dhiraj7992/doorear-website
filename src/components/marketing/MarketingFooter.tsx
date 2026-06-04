import Link from 'next/link'
import MarketingLogo from '@/components/marketing/MarketingLogo'
import { locationPages } from '@/lib/location-pages'
import { solutionPages } from '@/lib/solution-pages'
import { NAV_LINKS, SITE_DESCRIPTION, SITE_NAME } from './site-config'

export default function MarketingFooter() {
  return (
    <footer className='aigocy-dark-band relative overflow-hidden border-t border-white/10'>
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6493ea]/50 to-transparent'
        aria-hidden
      />
      <div className='marketing-container py-16 md:py-20'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <div className='inline-block max-w-full'>
              <MarketingLogo />
            </div>
            <p className='mt-5 max-w-md text-sm leading-relaxed text-white/75'>
              {SITE_DESCRIPTION}
            </p>
            <p className='mt-4 text-xs leading-relaxed text-white/50'>
              GST-aware company profiles, PIN validation, subscription allowances
              with shipment top-ups, and procurement modules when you enable
              them—aligned to how mid-market networks actually buy software.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4'>
            <div>
              <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Product
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                {NAV_LINKS.filter((l) =>
                  ['Features', 'Solutions', 'Pricing', 'Locations'].includes(l.label)
                ).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='text-white/75 transition hover:translate-x-0.5 hover:text-white'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Solutions
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                {solutionPages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/solutions/${page.slug}`}
                      className='text-white/75 transition hover:text-white'>
                      {page.eyebrow.replace(/^Solutions · /, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Company
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                <li>
                  <Link href='/about' className='text-white/75 transition hover:text-white'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/blog' className='text-white/75 transition hover:text-white'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='text-white/75 transition hover:text-white'>
                    Contact
                  </Link>
                </li>
              </ul>
              <p className='aigocy-section-eyebrow mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Resources
              </p>
              <ul className='mt-3 space-y-2.5 text-sm'>
                <li>
                  <Link href='/faq' className='text-white/75 transition hover:text-white'>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href='/glossary' className='text-white/75 transition hover:text-white'>
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    href='/compare/logistics-operating-system-vs-tms'
                    className='text-white/75 transition hover:text-white'>
                    LOS vs TMS
                  </Link>
                </li>
              </ul>
              <p className='aigocy-section-eyebrow mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Cities
              </p>
              <ul className='mt-3 space-y-2 text-sm'>
                {locationPages.slice(0, 5).map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className='text-white/60 transition hover:text-white'>
                      {loc.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Legal
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-white/75 transition hover:text-white'>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms-of-service'
                    className='text-white/75 transition hover:text-white'>
                    Terms &amp; conditions
                  </Link>
                </li>
              </ul>
              <p className='aigocy-section-eyebrow mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45'>
                Connect
              </p>
              <Link
                href='/contact'
                className='mt-4 inline-flex rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#6493ea]/40 hover:bg-white/15'>
                Book Demo
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row'>
          <p>
            © {new Date().getFullYear()} {SITE_NAME} — doorear.com. All rights
            reserved.
          </p>
          <p className='text-center text-white/40'>
            Logistics marketplace &amp; operating system for Indian supply chains.
          </p>
        </div>
      </div>
    </footer>
  )
}
