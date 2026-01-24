import type { Metadata } from 'next'
import { PortfolioPageContent } from '@/components/PortfolioPageContent'

export const metadata: Metadata = {
  title: 'Portfolio | AZ Media — Award-Winning Digital Solutions',
  description: 'Explore our portfolio of premium digital solutions for government, public sector, and multinational organizations. See how we deliver exceptional results through strategic design, web development, and brand identity.',
  openGraph: {
    title: 'Portfolio | AZ Media',
    description: 'Award-winning digital solutions for enterprise clients',
    url: 'https://az-media.ca/portfolio',
    siteName: 'AZ Media',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function PortfolioPage() {
  return (
    <main className="relative">
      <PortfolioPageContent />
    </main>
  )
}
