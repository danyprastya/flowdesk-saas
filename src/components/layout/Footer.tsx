import React from 'react'
import { Twitter, Github, Linkedin } from 'lucide-react'
import { FOOTER } from '@/constants/content'

export default function Footer() {
  return (
    <footer
      className="border-t py-16"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              {/* Logo Mark: 2x2 grid */}
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5 rounded overflow-hidden">
                <span style={{ backgroundColor: 'var(--indigo)' }} />
                <span style={{ backgroundColor: 'var(--surface-3)' }} />
                <span style={{ backgroundColor: 'var(--surface-3)' }} />
                <span style={{ backgroundColor: 'var(--indigo)' }} />
              </div>
              <span className="font-semibold text-base tracking-tight text-[var(--text-primary)]">
                {FOOTER.brand.name}
              </span>
            </div>
            <p
              className="text-sm max-w-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {FOOTER.brand.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 hover:text-[var(--text-primary)] transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          {FOOTER.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                {column.title}
              </h5>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--text-primary)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom area */}
        <div
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {FOOTER.legal.copyright}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {FOOTER.legal.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}
