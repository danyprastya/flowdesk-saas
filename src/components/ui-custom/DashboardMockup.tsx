'use client'

import React from 'react'

export default function DashboardMockup() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto transition-transform duration-500 ease-out"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Outer tilt container */}
      <div
        className="w-full transition-transform duration-500 ease-out hover:rotate-y-[-2deg] hover:rotate-x-[1deg]"
        style={{
          transform: 'rotateY(-6deg) rotateX(2deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main Dashboard shell */}
        <div
          className="glass-card overflow-hidden w-full shadow-2xl"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)',
          }}
        >
          {/* Top window bar */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface-2)',
            }}
          >
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            {/* Tab title */}
            <div
              className="text-[11px] font-mono tracking-wide"
              style={{ color: 'var(--text-muted)' }}
            >
              Q3 Sprint — Engineering
            </div>
            {/* Right window actions */}
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 rounded bg-[var(--surface-3)]" />
              <span className="w-4 h-4 rounded bg-[var(--surface-3)]" />
              <span className="w-4 h-4 rounded bg-[var(--surface-3)]" />
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-row min-h-[340px]">
            {/* Sidebar */}
            <div
              className="w-14 border-r flex flex-col items-center gap-2 pt-4"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface-2)',
              }}
            >
              <span className="w-7 h-7 rounded-md bg-[var(--surface-3)]" />
              <span className="w-7 h-7 rounded-md bg-[var(--surface-3)]" />
              {/* Active icon */}
              <span
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ backgroundColor: 'var(--indigo)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </span>
              <span className="w-7 h-7 rounded-md bg-[var(--surface-3)]" />
              <span className="w-7 h-7 rounded-md bg-[var(--surface-3)]" />
            </div>

            {/* Main content area */}
            <div className="flex-1 p-5 flex flex-col gap-4">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">
                    Q3 Sprint
                  </h4>
                  <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                    14 days remaining
                  </p>
                </div>
                {/* Avatars */}
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <span className="w-6 h-6 rounded-full border border-[var(--surface)] bg-indigo-100 text-[9px] font-semibold flex items-center justify-center text-indigo-700">
                    JD
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[var(--surface)] bg-emerald-100 text-[9px] font-semibold flex items-center justify-center text-emerald-700">
                    AL
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[var(--surface)] bg-amber-100 text-[9px] font-semibold flex items-center justify-center text-amber-700">
                    TH
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-[var(--surface-3)] border">
                  <div className="text-[9px] text-[var(--text-muted)]">
                    Tasks
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                    24
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--surface-3)] border">
                  <div className="text-[9px] text-[var(--text-muted)]">
                    Done
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                    18
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--surface-3)] border">
                  <div className="text-[9px] text-[var(--text-muted)]">
                    On Track
                  </div>
                  <div
                    className="text-sm font-semibold mt-1"
                    style={{ color: 'var(--green)' }}
                  >
                    83%
                  </div>
                </div>
              </div>

              {/* Chart area */}
              <div className="p-3 rounded-lg bg-[var(--surface-3)] border flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-[var(--text-muted)]">
                    Velocity
                  </span>
                  <span className="text-[9px] text-[var(--text-muted)]">
                    This sprint
                  </span>
                </div>
                {/* Bar Chart */}
                <div className="flex items-end gap-1.5 h-12 pt-2">
                  <div className="flex-1 bg-[var(--surface)] rounded-t-sm h-[60%]" />
                  <div className="flex-1 bg-[var(--surface)] rounded-t-sm h-[45%]" />
                  <div className="flex-1 bg-[var(--surface)] rounded-t-sm h-[75%]" />
                  <div className="flex-1 bg-[var(--surface)] rounded-t-sm h-[55%]" />
                  <div className="flex-1 bg-[var(--surface)] rounded-t-sm h-[85%]" />
                  {/* Active bar */}
                  <div
                    className="flex-1 rounded-t-sm h-[70%]"
                    style={{ backgroundColor: 'var(--indigo)' }}
                  />
                </div>
              </div>

              {/* Task list */}
              <div className="flex flex-col gap-1.5">
                {/* Task 1 */}
                <div className="flex items-center justify-between p-2 rounded bg-[var(--surface-3)]/40 border border-[var(--border)]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded border flex items-center justify-center text-[8px] bg-[var(--indigo-subtle)] text-[var(--indigo-text)]">
                      ✓
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] line-through">
                      Setup CI/CD pipeline deployments
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--red-subtle)] text-[var(--red)]">
                    High
                  </span>
                </div>
                {/* Task 2 */}
                <div className="flex items-center justify-between p-2 rounded bg-[var(--surface-3)]/40 border border-[var(--border)]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded border" />
                    <span className="text-[11px] text-[var(--text-secondary)]">
                      Implement rate limiting on auth endpoints
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--amber-subtle)] text-[var(--amber)]">
                    Med
                  </span>
                </div>
                {/* Task 3 */}
                <div className="flex items-center justify-between p-2 rounded bg-[var(--surface-3)]/40 border border-[var(--border)]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded border" />
                    <span className="text-[11px] text-[var(--text-secondary)]">
                      Design light-mode landing page assets
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--green-subtle)] text-[var(--green)]">
                    Low
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div
          className="absolute bottom-[-12px] left-5 flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-lg"
          style={{
            backgroundColor: 'var(--surface-2)',
            borderColor: 'var(--border)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-dot" />
          <span className="text-[10px] font-medium text-[var(--text-secondary)]">
            AI prioritized 6 tasks
          </span>
        </div>
      </div>
    </div>
  )
}
