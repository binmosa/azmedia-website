'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, ArrowRight } from '@/components/icons/AnimatedIcons'

interface CaseStudy {
  id: string
  title: string
  client: string
  category: 'Digital Marketing' | 'Web & Digital' | 'Media & Branding'
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  image: string
  tags: string[]
  duration: string
  teamSize: number
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

const caseStudies: CaseStudy[] = [
  // Digital Marketing
  {
    id: 'tapari-investment-campaign',
    title: 'Strategic Brand Positioning & Marketing',
    client: 'Tapari Investment Inc',
    category: 'Digital Marketing',
    description: 'Comprehensive brand positioning and digital marketing strategy for a growing investment firm to establish credibility and attract high-value clients.',
    challenge: 'Tapari Investment needed to differentiate themselves in a competitive investment market and build trust with potential investors while showcasing their "Invest Smart... Live Better" philosophy.',
    solution: 'Developed an integrated marketing strategy combining thought leadership content, targeted LinkedIn campaigns, investor webinars, and strategic partnerships to position Tapari as a trusted investment partner.',
    results: [
      { metric: 'Client Acquisition', value: '185%', improvement: 'increase' },
      { metric: 'Brand Awareness', value: '240%', improvement: 'growth' },
      { metric: 'Lead Quality', value: '165%', improvement: 'improvement' }
    ],
    image: '/images/portfolio/tapari-preview.jpg',
    tags: ['Brand Positioning', 'Digital Marketing', 'Content Strategy', 'Lead Generation'],
    duration: '5 months',
    teamSize: 4,
    testimonial: {
      quote: 'AZ Media helped us establish a strong market presence and attract the right investors. Their strategic approach transformed our business development.',
      author: 'Investment Director',
      position: 'Tapari Investment Inc'
    }
  },
  // Web & Digital
  {
    id: 'anjam-website',
    title: 'Corporate Website Development',
    client: 'Anjam Group',
    category: 'Web & Digital',
    description: 'Modern, professional corporate website showcasing Anjam Group\'s diversified business portfolio including industrial solutions, corrosion protection, and marine services.',
    challenge: 'Anjam Group needed a cohesive digital presence to effectively communicate their diverse business sectors while maintaining a unified corporate identity and improving lead generation.',
    solution: 'Designed and developed a responsive corporate website with clear navigation structure, dedicated sections for each business unit, and integrated contact forms for different departments.',
    results: [
      { metric: 'User Engagement', value: '220%', improvement: 'increase' },
      { metric: 'Lead Generation', value: '175%', improvement: 'boost' },
      { metric: 'Mobile Traffic', value: '190%', improvement: 'growth' }
    ],
    image: '/images/portfolio/anjam-preview.png',
    tags: ['Corporate Website', 'Responsive Design', 'Multi-sector Portfolio', 'Lead Generation'],
    duration: '8 weeks',
    teamSize: 4,
    testimonial: {
      quote: 'The website perfectly represents our diverse business operations. It\'s professional, easy to navigate, and has significantly improved our client inquiries.',
      author: 'Business Development Manager',
      position: 'Anjam Group'
    }
  },
  {
    id: 'messengerco-platform',
    title: 'Corporate Gifting E-commerce Platform',
    client: 'MessengerCo',
    category: 'Web & Digital',
    description: 'Custom e-commerce platform for corporate gifting services featuring instant quotes, seasonal gift collections, and streamlined ordering for businesses.',
    challenge: 'MessengerCo needed a user-friendly platform to showcase their diverse gift collections and simplify the corporate gifting process with instant pricing and bulk order capabilities.',
    solution: 'Built an intuitive e-commerce platform with categorized gift collections, instant quote system, custom gift options, and seamless ordering experience tailored for corporate clients.',
    results: [
      { metric: 'Online Orders', value: '310%', improvement: 'increase' },
      { metric: 'Order Value', value: '145%', improvement: 'growth' },
      { metric: 'Customer Satisfaction', value: '95%', improvement: 'rating' }
    ],
    image: '/images/portfolio/messengerco-preview.png',
    tags: ['E-commerce', 'Corporate Solutions', 'Custom Platform', 'UX Design'],
    duration: '10 weeks',
    teamSize: 5,
    testimonial: {
      quote: 'The platform transformed our business operations. Clients love how easy it is to browse and order corporate gifts now.',
      author: 'Founder',
      position: 'MessengerCo'
    }
  },
  {
    id: 'unietal-website',
    title: 'Digital Marketing Agency Website',
    client: 'Unietal LLC',
    category: 'Web & Digital',
    description: 'Bold, creative website for a digital marketing agency showcasing their services in graphic design, e-commerce, IT consultation, and digital marketing with stunning gradient aesthetics.',
    challenge: 'Unietal needed a website that would demonstrate their creative capabilities and technical expertise while effectively communicating their full range of digital services.',
    solution: 'Created a visually striking website with modern gradient design, engaging animations, clear service sections, and a compelling portfolio showcase that reflects their creative approach.',
    results: [
      { metric: 'Client Inquiries', value: '265%', improvement: 'increase' },
      { metric: 'Portfolio Views', value: '380%', improvement: 'boost' },
      { metric: 'Time on Site', value: '155%', improvement: 'improvement' }
    ],
    image: '/images/portfolio/unietal-preview.jpg',
    tags: ['Agency Website', 'Creative Design', 'Modern UI/UX', 'Portfolio Showcase'],
    duration: '6 weeks',
    teamSize: 3,
    testimonial: {
      quote: 'Our new website perfectly captures our creative spirit and has become our best marketing tool. Client feedback has been phenomenal.',
      author: 'Creative Director',
      position: 'Unietal LLC'
    }
  },
  // Media & Branding
  {
    id: 'nano-branding',
    title: 'Complete Brand Identity System',
    client: 'Nano Business',
    category: 'Media & Branding',
    description: 'Comprehensive brand identity development for a business management firm including logo design, color system, signage, and brand guidelines.',
    challenge: 'Nano Business needed a professional brand identity to establish their presence in the business management sector and build credibility with potential clients.',
    solution: 'Developed a modern, geometric brand identity with distinctive logo, cohesive color palette of navy and green, professional signage design, and comprehensive brand guidelines for consistent application.',
    results: [
      { metric: 'Brand Recognition', value: '290%', improvement: 'increase' },
      { metric: 'Client Trust', value: '85%', improvement: 'rating' },
      { metric: 'Market Presence', value: '210%', improvement: 'growth' }
    ],
    image: '/images/portfolio/nano-preview.jpg',
    tags: ['Brand Identity', 'Logo Design', 'Signage', 'Brand Guidelines'],
    duration: '5 weeks',
    teamSize: 3,
    testimonial: {
      quote: 'The brand identity they created perfectly represents our professional approach. We now have a strong, recognizable presence in our market.',
      author: 'Managing Director',
      position: 'Nano Business'
    }
  },
  {
    id: 'neurize-branding',
    title: 'Brand System & Collateral Design',
    client: 'Neurize',
    category: 'Media & Branding',
    description: 'Complete brand system development including logo design, color palette, business cards, packaging, and promotional materials with distinctive coral/orange branding.',
    challenge: 'Neurize required a cohesive brand identity that would work across all touchpoints from digital to print while creating memorable brand recognition.',
    solution: 'Created a comprehensive brand system with clean, modern logo, distinctive coral color scheme, professional business card design, branded packaging, and consistent visual language across all materials.',
    results: [
      { metric: 'Brand Consistency', value: '95%', improvement: 'rating' },
      { metric: 'Brand Recall', value: '245%', improvement: 'increase' },
      { metric: 'Client Impressions', value: '88%', improvement: 'positive' }
    ],
    image: '/images/portfolio/neurize-preview.png',
    tags: ['Brand System', 'Visual Identity', 'Collateral Design', 'Brand Consistency'],
    duration: '6 weeks',
    teamSize: 4,
    testimonial: {
      quote: 'AZ Media delivered a complete brand system that works beautifully across every application. Our brand now feels professional and cohesive.',
      author: 'CEO',
      position: 'Neurize'
    }
  }
]

const categories = ['All', 'Digital Marketing', 'Web & Digital', 'Media & Branding']

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredCases = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <div>
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
          <TrendingUp animation="pulse" className="w-4 h-4 text-brand-600" />
          Portfolio & Results
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Proven Success Stories{' '}
          <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            That Deliver Results
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Real projects, real results. See how we've transformed Calgary businesses with strategic 
          digital solutions that drive <strong className="text-brand-600">measurable growth and ROI</strong>.
        </p>
      </div>

      {/* Enhanced Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                : 'bg-white/80 backdrop-blur hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCases.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group h-full"
          >
            <Link href="/portfolio" className="block h-full">
              <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:ring-2 group-hover:ring-brand-200 h-full flex flex-col cursor-pointer">
                {/* Enhanced image with better placeholder */}
                <div className="h-56 bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 relative overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.client} - ${study.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-white/95 backdrop-blur text-brand-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
                      {study.category}
                    </span>
                  </div>

                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <span className="bg-white/95 backdrop-blur text-brand-700 px-5 py-2.5 rounded-xl font-semibold shadow-lg flex items-center gap-2">
                      View Portfolio
                      <ArrowRight animation="pulse" className="w-4 h-4" />
                    </span>
                  </div>

                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-brand-700 transition-colors">{study.title}</h3>
                    <p className="text-brand-600 font-semibold">{study.client}</p>
                  </div>

                  <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed flex-1">{study.description}</p>

                  {/* Tags preview */}
                  <div className="flex flex-wrap gap-1">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 2 && (
                      <span className="text-xs text-slate-500">+{study.tags.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <a href="/portfolio" className="btn-primary">
          View Full Portfolio Projects
          <ArrowRight animation="pulse" className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  )
}