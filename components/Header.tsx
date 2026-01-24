'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { Phone, Calculator, Menu, X } from '@/components/icons/AnimatedIcons'

const nav = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#estimate', label: 'Estimate' },
  { href: '/#contact', label: 'Contact' }
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [compact, setCompact] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setCompact(y > 140)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    // Set initial value
    setIsDesktop(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    // Subscribe to changes
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange)
    } else {
      // Safari fallback (deprecated but still present)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mql.addListener(onChange as any)
    }
    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', onChange)
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mql.removeListener(onChange as any)
      }
    }
  }, [])

  return (
    <>
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[1000] bg-white md:bg-white/95 md:backdrop-blur-md"
      initial={false}
      animate={!isDesktop ? { backgroundColor: 'rgba(255,255,255,1)' } : (compact ? { backgroundColor: 'rgba(255,255,255,0.92)' } : { backgroundColor: 'rgba(255,255,255,1)' })}
      transition={{ duration: 0.25 }}
    >
      <div className="container">
        <div className={`flex items-center justify-between transition-all duration-300 ${compact ? 'h-14 rounded-2xl border border-brand-200/60 md:bg-white/90 bg-white shadow-md px-3 mt-2' : 'h-18 px-0'}`}>
        <Link href="/" className="flex items-center gap-3 group" aria-label="AZ Media home">
          <div className="relative">
            <Image
              src="/images/small_logo.png"
              alt="AZ Media"
              width={40}
              height={40}
                className={`transition-transform duration-300 group-hover:scale-110 ${compact ? 'h-9 w-9' : 'h-11 w-11'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent`}>
              AZ Media
            </span>
            <span className="sr-only">AZ Media</span>
        </Link>

        <LayoutGroup>
          <nav
            className={`hidden md:flex items-center gap-1 text-sm transition-[gap] duration-300 ${compact ? 'gap-0.5' : 'gap-1'}`}
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`relative text-slate-600 hover:text-brand-700 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${compact ? 'px-3 py-2' : 'px-4 py-2.5'}`}
                onMouseEnter={() => setHovered(n.href)}
                onFocus={() => setHovered(n.href)}
                onBlur={() => setHovered(null)}
              >
                {hovered === n.href && (
                  <motion.span 
                    layoutId="navHover" 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-50 to-brand-100/80 pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 1 }} 
                  />
                )}
                <span className="relative z-10">{n.label}</span>
              </a>
            ))}
          </nav>
        </LayoutGroup>

        <div className="hidden md:flex items-center gap-3">
          <a href="/#estimate" className="btn-ghost text-sm">
            <Calculator animation="pulse" size={16} className="mr-2"/>
            Get a Quote
          </a>
          <a href="/#contact" className="btn-primary text-sm">
            <Phone animation="pulse" size={16} className="mr-2"/>
            Book a Call
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden btn-ghost p-2">
          <Menu animation="pulse" size={20}/>
        </button>
        </div>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <motion.div
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 24, stiffness: 240 }}
          className="fixed inset-0 bg-black/80 md:hidden z-[9999]" onClick={() => setOpen(false)}>
          <div className="ml-auto h-full w-80 max-w-[85vw] bg-white p-6 flex flex-col gap-4 border-l-2 border-gray-400 shadow-2xl relative z-10" onClick={(e) => e.stopPropagation()} style={{backgroundColor: '#ffffff'}}>
            <div className="flex items-center justify-between pb-4 border-b border-brand-100">
              <div className="font-bold text-lg bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                AZ Media
              </div>
              <button className="inline-flex items-center justify-center p-2 bg-white border border-brand-200 hover:border-brand-300 text-brand-700 hover:text-brand-800 hover:bg-brand-50 rounded-xl transition-all duration-300" onClick={() => setOpen(false)}>
                <X animation="pulse" size={20}/>
              </button>
            </div>
            {nav.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 font-medium bg-transparent"
                style={{backgroundColor: 'transparent'}}
              >
                {n.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-brand-100 space-y-3">
              <a href="/#estimate" onClick={() => setOpen(false)} className="inline-flex items-center justify-start w-full px-4 py-2.5 bg-white border border-brand-200 hover:border-brand-300 text-brand-700 hover:text-brand-800 hover:bg-brand-50 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                <Calculator animation="pulse" size={18} className="mr-3"/>
                Get a Quote
              </a>
              <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-start">
                <Phone animation="pulse" size={18} className="mr-3"/>
                Book a Call
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
    {/* Spacer to offset fixed header height */}
    <div aria-hidden className="w-full" style={{ height: compact ? 56 : 72 }} />
    </>
  )
}
