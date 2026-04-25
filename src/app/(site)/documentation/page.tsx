import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation — Product Modules & Setup Guides',
  description:
    'Read Doorear product documentation for courier and logistics teams: setup guides, configuration, and module references.',
  alternates: { canonical: '/documentation' },
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
