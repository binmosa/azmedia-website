'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, ArrowRight, Award, Heart, ExternalLink } from 'lucide-react'
import NextImage from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'Strategic Marketing', href: '/#services' },
    { name: 'Web Development', href: '/#services' },
    { name: 'Brand & Creative', href: '/#services' },
    { name: 'Project Estimation', href: '/#estimate' }
  ]

  const company = [
    { name: 'About Us', href: '/#about' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Core Values', href: '/#values' },
    { name: 'Client Success', href: '/#clients' }
  ]

  const resources = [
    { name: 'Free Consultation', href: '/#contact' },
    { name: 'Project Estimate', href: '/#estimate' },
    { name: 'Privacy Policy', href: '/privacy-and-policy' },
    { name: 'Terms of Service', href: '/terms-of-services' }
  ]

  return (
    <footer className="relative overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
      
      <div className="container relative">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2">
              
              <div className="flex items-center gap-3 mb-6">
                <NextImage
                  src="/images/small_logo.png"
                  alt="AZ Media"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="text-2xl font-bold text-white">AZ Media</div>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Calgary's premier digital agency, transforming businesses through strategic design, 
                cutting-edge development, and data-driven marketing that delivers measurable results.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-brand-400" />
                  <a href="mailto:hello@az-media.ca" className="hover:text-white transition-colors">
                    hello@az-media.ca
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-brand-400" />
                  <a href="tel:+15873936400" className="hover:text-white transition-colors">
                    +1 (587) 3936400
                  </a>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-brand-400 mt-0.5" />
                  <address className="not-italic leading-relaxed">
                    Suite 1800, Tower One<br />
                    330 5th Avenue SW<br />
                    Calgary, AB T2P 5H4<br />
                    Canada
                  </address>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/109464810', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/azmediaca/', label: 'Instagram' },
                  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579442004540', label: 'Facebook' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-slate-800 hover:bg-brand-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-400" />
                Services
              </h4>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {company.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 mb-8">
                {resources.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-4 rounded-xl">
                <h5 className="text-white font-semibold mb-2">Ready to Start?</h5>
                <p className="text-brand-100 text-sm mb-3">Get your free consultation today</p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors">
                  Let's Talk
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with love in Calgary, AB</span>
              </div>
              <div>© {currentYear} AZ Media. All rights reserved.</div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy-and-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-services" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <div className="flex items-center gap-2 text-slate-500">
                <Award className="w-4 h-4" />
                <span>Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
