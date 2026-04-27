import Link from 'next/link'
import MarketingLogo from '@/components/marketing/MarketingLogo'
import { NAV_LINKS, SITE_NAME } from './site-config'

export default function MarketingFooter() {
  return (
    <footer className='border-t border-[var(--app-border)] bg-[var(--app-sidebar)] text-white'>
      <div className='marketing-container py-14'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <div className='inline-block max-w-full'>
              <MarketingLogo />
            </div>
            <p className='mt-5 max-w-md text-sm leading-relaxed text-white/75'>
              {SITE_NAME} is a cloud logistics operations platform for courier and
              logistics companies in India—book and track shipments, coordinate
              hubs and last-mile delivery, run MIS and commercial analytics, and
              manage branches, coverage, fleet, partners, users, and roles from
              one secure, multi-tenant workspace at{' '}
              <span className='font-medium text-white'>doorear.com</span>.
            </p>
            <p className='mt-4 text-xs leading-relaxed text-white/50'>
              GST-aware company profiles, PIN validation, subscription allowances
              with shipment top-ups, and procurement modules when you enable
              them—aligned to how mid-market networks actually buy software.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4'>
            <div>
              <p className='text-[10px] font-semibold uppercase tracking-wider text-white/45'>
                Product
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                {NAV_LINKS.filter((l) =>
                  ['Features', 'Solutions', 'Pricing'].includes(l.label)
                ).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='text-white/75 transition hover:text-white hover:underline'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='text-[10px] font-semibold uppercase tracking-wider text-white/45'>
                Company
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                <li>
                  <Link
                    href='/about'
                    className='text-white/75 transition hover:text-white hover:underline'>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/blog'
                    className='text-white/75 transition hover:text-white hover:underline'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-white/75 transition hover:text-white hover:underline'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='/documentation'
                    className='text-white/75 transition hover:text-white hover:underline'>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='text-[10px] font-semibold uppercase tracking-wider text-white/45'>
                Legal
              </p>
              <ul className='mt-4 space-y-2.5 text-sm'>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-white/75 hover:text-white'>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-white/75 hover:text-white'>
                    Terms &amp; conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <p className='text-[10px] font-semibold uppercase tracking-wider text-white/45'>
                Connect
              </p>
              <p className='mt-4 text-sm text-white/70'>
                Sales &amp; onboarding for Indian courier / 3PL operators—branch
                rollouts, MIS workshops, and finance alignment.
              </p>
              <Link
                href='/contact'
                className='mt-3 inline-flex rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15'>
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
            Courier management software &amp; logistics operations platform for
            Indian networks.
          </p>
        </div>
      </div>
    </footer>
  )
}
