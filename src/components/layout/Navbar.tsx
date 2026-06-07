'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Menu } from 'lucide-react'
import { NAV_LINKS } from '@/constants/content'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Scroll handler for transparent vs solid styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer to track the active section in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(element)
      return { observer, element }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element)
      })
    }
  }, [])

  const handleLinkClick = (href: string) => {
    setIsMobileOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 flex items-center',
        isScrolled
          ? 'bg-[#07090F]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#hero" className="flex items-center gap-2">
          {/* Logo Mark: 2x2 grid */}
          <div className="w-7 h-7 grid grid-cols-2 gap-0.5 rounded overflow-hidden">
            <span style={{ backgroundColor: 'var(--indigo)' }} />
            <span style={{ backgroundColor: 'var(--surface-3)' }} />
            <span style={{ backgroundColor: 'var(--surface-3)' }} />
            <span style={{ backgroundColor: 'var(--indigo)' }} />
          </div>
          <span className="font-semibold text-lg tracking-tight text-[var(--text-primary)]">
            Flowdesk
          </span>
        </a>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                'text-sm transition-colors duration-200 cursor-pointer',
                activeSection === link.href
                  ? 'text-[var(--text-primary)] font-medium'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 text-sm"
          >
            Log in
          </Button>
          <a href="#demo-request">
            <Button
              className="text-sm flex items-center gap-1.5 text-white"
              style={{ backgroundColor: 'var(--indigo)' }}
            >
              Start free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--text-primary)]"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-l border-[var(--border)] p-6 flex flex-col gap-6"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <SheetTitle className="text-left text-sm font-semibold tracking-wide uppercase text-[var(--text-muted)]">
                Navigation
              </SheetTitle>
              {/* Stacked Nav Links */}
              <div className="flex flex-col gap-4 mt-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      'text-left text-base font-medium py-1 transition-colors',
                      activeSection === link.href
                        ? 'text-[var(--indigo-text)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Stacked CTAs */}
              <div className="flex flex-col gap-3 mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]"
                >
                  Log in
                </Button>
                <a href="#demo-request" onClick={() => setIsMobileOpen(false)}>
                  <Button
                    className="w-full text-white flex items-center justify-center gap-1.5"
                    style={{ backgroundColor: 'var(--indigo)' }}
                  >
                    Start free
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
