'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Calendar, Share2 } from 'lucide-react'
import type { AutomationLogLine } from '@/types'
import { Button } from '@/components/ui/button'

interface AutomationLogProps {
  lines: AutomationLogLine[]
  submittedEmail: string
  submittedName: string
  onComplete?: () => void
}

export default function AutomationLog({
  lines,
  submittedEmail,
  submittedName,
  onComplete,
}: AutomationLogProps) {
  const [visibleLines, setVisibleLines] = useState<AutomationLogLine[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const firstName = submittedName.split(' ')[0] || submittedName

  useEffect(() => {
    let active = true
    const runLogs = async () => {
      for (let i = 0; i < lines.length; i++) {
        if (!active) return
        const line = lines[i]
        // Wait for the delay defined on the line
        await new Promise((resolve) => setTimeout(resolve, line.delay))
        if (!active) return
        setVisibleLines((prev) => [...prev, line])
      }
      if (active) {
        setIsComplete(true)
        onComplete?.()
      }
    }

    runLogs()
    return () => {
      active = false
    }
  }, [lines, onComplete])

  return (
    <div
      className="glass-card flex flex-col w-full overflow-hidden shadow-2xl font-mono"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface-2)',
      }}
    >
      {/* Terminal window top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--surface-3)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
        </div>
        <div className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
          <span style={{ color: 'var(--indigo)' }}>n8n</span>
          <span className="opacity-50">·</span>
          <span>demo-request.json</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isComplete
                ? 'bg-[var(--green)]'
                : 'bg-[var(--green)] animate-pulse-dot'
            }`}
          />
          <span style={{ color: 'var(--text-secondary)' }}>
            {isComplete ? 'completed' : 'workflow running...'}
          </span>
        </div>
      </div>

      {/* Terminal terminal body */}
      <div className="p-4 flex-1 min-h-[240px] flex flex-col gap-2 overflow-y-auto text-xs">
        <AnimatePresence>
          {visibleLines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-2.5 leading-relaxed text-[11px]"
            >
              {/* Timestamp */}
              <span className="text-[var(--text-muted)] shrink-0">
                [{line.timestamp}]
              </span>
              {/* Status indicator / icon */}
              <span
                className="shrink-0"
                style={{
                  color: line.message.startsWith('★')
                    ? 'var(--indigo)'
                    : 'var(--green)',
                }}
              >
                {line.message.startsWith('★') ? '★' : '✓'}
              </span>
              {/* Message */}
              <span
                className="break-all"
                style={{
                  color: line.message.startsWith('★')
                    ? 'var(--indigo-text)'
                    : 'var(--text-primary)',
                }}
              >
                {line.message.replace('★ ', '')}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Success Card shown when isComplete */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mt-4 pt-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="w-6 h-6 shrink-0 mt-0.5"
                style={{ color: 'var(--green)' }}
              />
              <div className="flex-1 space-y-1.5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  You&apos;re on the list, {firstName}!
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We&apos;ve sent a confirmation email to{' '}
                  <span className="text-[var(--text-primary)] font-medium">
                    {submittedEmail}
                  </span>
                  .
                </p>
                {/* Actions */}
                <div className="flex items-center gap-2 pt-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[10px] h-7 px-2.5 flex items-center gap-1 font-mono border-[var(--border)] hover:bg-[var(--surface-3)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Add to calendar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[10px] h-7 px-2.5 flex items-center gap-1 font-mono border-[var(--border)] hover:bg-[var(--surface-3)]"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share Flowdesk
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Powered by footer */}
      <div
        className="px-4 py-2.5 border-t text-[10px] text-center"
        style={{
          borderColor: 'var(--border)',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--surface-3)/40',
        }}
      >
        Powered by n8n automation — zero manual steps
      </div>
    </div>
  )
}
