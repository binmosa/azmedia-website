'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  TrendingUp,
  Users,
  ArrowRight,
  Award,
  Sparkles
} from '@/components/icons/AnimatedIcons'
import {
  Calendar,
  X,
  Download,
  Globe,
  Palette,
  BarChart3,
  Share2,
  Settings,
  FileText,
  Code,
  Layers,
  CheckCircle2,
  Building2,
  Phone,
  Play,
  Film
} from 'lucide-react'

// Solution badge types with colors
const solutionBadges = {
  'website': { label: 'Website', color: 'bg-blue-500/10 text-blue-700 border-blue-200', icon: Globe },
  'custom-solution': { label: 'Custom Solution', color: 'bg-violet-500/10 text-violet-700 border-violet-200', icon: Code },
  'social-media': { label: 'Social Media', color: 'bg-pink-500/10 text-pink-700 border-pink-200', icon: Share2 },
  'analytics': { label: 'Analytics', color: 'bg-amber-500/10 text-amber-700 border-amber-200', icon: BarChart3 },
  'visual-identity': { label: 'Visual Identity', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200', icon: Palette },
  'content-management': { label: 'Content Management', color: 'bg-cyan-500/10 text-cyan-700 border-cyan-200', icon: FileText },
  'wordpress': { label: 'WordPress', color: 'bg-indigo-500/10 text-indigo-700 border-indigo-200', icon: Layers },
  'branding': { label: 'Branding', color: 'bg-rose-500/10 text-rose-700 border-rose-200', icon: Sparkles },
  'creative-solution': { label: 'Creative Solution', color: 'bg-purple-500/10 text-purple-700 border-purple-200', icon: Sparkles },
  'automation': { label: 'Automation', color: 'bg-teal-500/10 text-teal-700 border-teal-200', icon: Settings },
} as const

type SolutionKey = keyof typeof solutionBadges

interface PortfolioItem {
  id: string
  title: string
  client: string
  category: 'Digital Marketing' | 'Web & Digital' | 'Media & Branding' | 'Branding Showcase'
  description: string
  challenge?: string
  solution?: string
  results?: {
    metric: string
    value: string
    improvement: string
  }[]
  image: string
  tags: string[]
  solutions: SolutionKey[]
  duration?: string
  teamSize?: number
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  // For branding projects
  isBranding?: boolean
  pdfUrl?: string
}

const portfolioItems: PortfolioItem[] = [
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
    solutions: ['social-media', 'analytics', 'content-management', 'creative-solution'],
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
    solutions: ['website', 'custom-solution', 'analytics', 'content-management'],
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
    solutions: ['website', 'custom-solution', 'automation', 'analytics'],
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
    solutions: ['website', 'creative-solution', 'visual-identity', 'wordpress'],
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
    solutions: ['visual-identity', 'branding', 'creative-solution'],
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
    solutions: ['visual-identity', 'branding', 'creative-solution', 'content-management'],
    duration: '6 weeks',
    teamSize: 4,
    testimonial: {
      quote: 'AZ Media delivered a complete brand system that works beautifully across every application. Our brand now feels professional and cohesive.',
      author: 'CEO',
      position: 'Neurize'
    }
  },
  // Branding Showcase - PDF Downloads
  {
    id: 'identity-design-showcase',
    title: 'Identity Design Collection',
    client: 'Various Clients',
    category: 'Branding Showcase',
    description: 'A curated collection of premium identity design work showcasing our expertise in creating distinctive brand marks, logos, and visual identity systems for diverse industries.',
    image: '/branding/identity design.png',
    tags: ['Logo Design', 'Brand Marks', 'Visual Identity', 'Design Systems'],
    solutions: ['visual-identity', 'branding', 'creative-solution'],
    isBranding: true,
    pdfUrl: '/branding/Identity design .pdf'
  },
  {
    id: 'social-media-showcase',
    title: 'Social Media Design Portfolio',
    client: 'Various Clients',
    category: 'Branding Showcase',
    description: 'Comprehensive collection of social media design work including post templates, story designs, campaign visuals, and brand-consistent social content strategies.',
    image: '/branding/Social media .png',
    tags: ['Social Media', 'Content Design', 'Campaign Visuals', 'Digital Marketing'],
    solutions: ['social-media', 'creative-solution', 'content-management', 'branding'],
    isBranding: true,
    pdfUrl: '/branding/Social media samples.pdf'
  }
]

const categories = ['All', 'Digital Marketing', 'Web & Digital', 'Media & Branding', 'Branding Showcase']

// Video portfolio items
interface VideoItem {
  id: string
  title: string
  description: string
  youtubeId: string
  thumbnail: string
}

const videoItems: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Brand Motion Graphics',
    description: 'Dynamic motion graphics showcasing brand identity and visual storytelling.',
    youtubeId: 'b9V9HugDFQM',
    thumbnail: 'https://img.youtube.com/vi/b9V9HugDFQM/maxresdefault.jpg'
  },
  {
    id: 'video-2',
    title: 'Promotional Video',
    description: 'Engaging promotional content designed to captivate and convert audiences.',
    youtubeId: 'arU20gsPyqg',
    thumbnail: 'https://img.youtube.com/vi/arU20gsPyqg/maxresdefault.jpg'
  },
  {
    id: 'video-3',
    title: 'Creative Animation',
    description: 'Creative animated content that brings ideas to life with visual impact.',
    youtubeId: 'boxgb_wqFLM',
    thumbnail: 'https://img.youtube.com/vi/boxgb_wqFLM/maxresdefault.jpg'
  }
]

// Category badge colors
const categoryColors: Record<string, string> = {
  'Digital Marketing': 'bg-amber-500/10 text-amber-700 border-amber-200',
  'Web & Digital': 'bg-blue-500/10 text-blue-700 border-blue-200',
  'Media & Branding': 'bg-rose-500/10 text-rose-700 border-rose-200',
  'Branding Showcase': 'bg-purple-500/10 text-purple-700 border-purple-200',
}

function SolutionBadge({ solution }: { solution: SolutionKey }) {
  const badge = solutionBadges[solution]
  if (!badge) return null
  const Icon = badge.icon
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${badge.color}`}>
      <Icon className="w-3.5 h-3.5" />
      {badge.label}
    </span>
  )
}

export function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.15),transparent_50%)]" />

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 mb-8">
              <Award animation="pulse" className="w-5 h-5 text-brand-300" />
              <span className="text-white font-medium">High-Quality Portfolio</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Visions Into
              <span className="block bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Explore our portfolio of premium digital solutions trusted by government agencies,
              public sector organizations, and multinational corporations. Each project represents
              our commitment to <strong className="text-white">exceptional quality</strong> and measurable results.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { icon: Building2, label: 'Enterprise Clients', value: '50+' },
                { icon: Award, label: 'Projects Delivered', value: '200+' },
                { icon: CheckCircle2, label: 'Client Satisfaction', value: '98%' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-brand-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
              <TrendingUp animation="pulse" className="w-4 h-4 text-brand-600" />
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Case Studies &{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From strategic brand positioning to custom digital platforms, discover how we've helped
              organizations achieve their goals with <strong className="text-brand-600">measurable impact</strong>.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                    : 'bg-white hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-200 shadow-sm'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:ring-2 group-hover:ring-brand-200 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-64 bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.client} - ${item.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium border backdrop-blur-sm ${categoryColors[item.category] || 'bg-white/90 text-slate-700'}`}>
                          {item.category}
                        </span>
                      </div>

                      {/* PDF indicator for branding */}
                      {item.isBranding && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 text-xs bg-white/95 backdrop-blur text-slate-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
                            <Download className="w-3.5 h-3.5" />
                            PDF Available
                          </span>
                        </div>
                      )}

                      {/* Hover overlay with CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white/95 backdrop-blur text-brand-700 px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2">
                          View Details
                          <ArrowRight animation="pulse" className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-brand-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-brand-600 font-semibold">{item.client}</p>
                      </div>

                      <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed flex-1">
                        {item.description}
                      </p>

                      {/* Solution badges preview */}
                      <div className="flex flex-wrap gap-2">
                        {item.solutions.slice(0, 2).map((solution) => (
                          <SolutionBadge key={solution} solution={solution} />
                        ))}
                        {item.solutions.length > 2 && (
                          <span className="inline-flex items-center px-3 py-1.5 text-xs text-slate-500 font-medium">
                            +{item.solutions.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Motion Graphics & Videos Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-50 text-violet-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
              <Film className="w-4 h-4 text-violet-600" />
              Motion Graphics
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Videos &{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-400 bg-clip-text text-transparent">
                Motion Graphics
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Bringing brands to life through captivating motion graphics and video content
              that tells your story with <strong className="text-violet-600">visual impact</strong>.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoItems.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:ring-2 group-hover:ring-violet-200">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-violet-100 via-purple-50 to-violet-200 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 text-violet-600 ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Video badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-violet-500/90 backdrop-blur text-white px-3 py-1.5 rounded-full font-medium">
                        <Film className="w-3.5 h-3.5" />
                        Video
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-violet-700 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(124,58,237,0.2),transparent_50%)]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles animation="pulse" className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Ready to Start Your Project?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Create Something
              <span className="block bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>

            <p className="text-lg text-brand-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Join industry leaders who trust AZ Media for premium digital solutions.
              From government agencies to multinational corporations, we deliver
              <strong className="text-white"> exceptional results</strong> that drive real business impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#estimate"
                  className="group relative overflow-hidden bg-white hover:bg-brand-50 text-brand-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-3"
                >
                  Get Your Free Estimate
                  <ArrowRight animation="pulse" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#contact"
                  className="group border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-brand-100 to-brand-200">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur hover:bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Category badge on image */}
                <div className="absolute bottom-4 left-6">
                  <span className={`inline-flex items-center gap-1 text-sm px-4 py-2 rounded-full font-semibold border backdrop-blur-sm ${categoryColors[selectedItem.category] || 'bg-white/90 text-slate-700'}`}>
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{selectedItem.title}</h3>
                  <p className="text-brand-600 font-semibold text-lg">{selectedItem.client}</p>
                </div>

                {/* Project Info */}
                {(selectedItem.duration || selectedItem.teamSize) && (
                  <div className="flex flex-wrap gap-4 mb-8 text-sm">
                    {selectedItem.duration && (
                      <div className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg">
                        <Calendar className="w-4 h-4 text-brand-600" />
                        {selectedItem.duration}
                      </div>
                    )}
                    {selectedItem.teamSize && (
                      <div className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg">
                        <Users animation="none" className="w-4 h-4 text-brand-600" />
                        {selectedItem.teamSize} team members
                      </div>
                    )}
                  </div>
                )}

                {/* Solutions Delivered */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-600" />
                    Solutions Delivered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.solutions.map((solution) => (
                      <SolutionBadge key={solution} solution={solution} />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-slate-600 leading-relaxed text-lg">{selectedItem.description}</p>
                </div>

                {/* Challenge & Solution */}
                {(selectedItem.challenge || selectedItem.solution) && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {selectedItem.challenge && (
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-sm font-bold">!</span>
                          The Challenge
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{selectedItem.challenge}</p>
                      </div>
                    )}
                    {selectedItem.solution && (
                      <div className="bg-brand-50 rounded-xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          Our Solution
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{selectedItem.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Results */}
                {selectedItem.results && selectedItem.results.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <TrendingUp animation="pulse" className="w-5 h-5 text-brand-600" />
                      Results & Impact
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedItem.results.map((result, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-5 text-center border border-brand-100">
                          <div className="text-3xl font-bold text-brand-600 mb-1">{result.value}</div>
                          <div className="text-sm text-brand-700 font-medium">{result.improvement}</div>
                          <div className="text-xs text-slate-500 mt-1">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Project Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span key={tag} className="text-sm bg-slate-100 text-slate-600 px-4 py-2 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedItem.testimonial && (
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-xl p-6 mb-8 border border-brand-200/50">
                    <blockquote className="text-slate-700 italic text-lg mb-4 leading-relaxed">
                      "{selectedItem.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center">
                        <Users animation="none" className="w-5 h-5 text-brand-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{selectedItem.testimonial.author}</div>
                        <div className="text-sm text-slate-600">{selectedItem.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PDF Download for branding items */}
                {selectedItem.isBranding && selectedItem.pdfUrl && (
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 mb-8 border border-violet-200/50">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Download Full Portfolio</h4>
                        <p className="text-slate-600 text-sm">Get the complete PDF with high-resolution samples</p>
                      </div>
                      <a
                        href={selectedItem.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}

                {/* Modal CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                  <Link
                    href="/#estimate"
                    className="flex-1 btn-primary py-4 justify-center text-base"
                    onClick={() => setSelectedItem(null)}
                  >
                    Start a Similar Project
                    <ArrowRight animation="pulse" className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="flex-1 btn-ghost py-4 justify-center text-base"
                    onClick={() => setSelectedItem(null)}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Your Needs
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video title */}
              <div className="absolute -top-12 left-0 text-white font-semibold text-lg">
                {selectedVideo.title}
              </div>

              {/* YouTube iframe */}
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
