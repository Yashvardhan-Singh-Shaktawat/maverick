import React, { useState } from 'react'
import { Plus, Minus, RotateCcw, Check, Copy, Palette, Bell, Sparkles } from 'lucide-react'

export default function InteractiveDemo() {
  const [count, setCount] = useState(0)
  const [accentColor, setAccentColor] = useState('indigo')
  const [copied, setCopied] = useState(false)
  const [notification, setNotification] = useState('Welcome to your new React + Tailwind application!')

  const colorThemes = [
    { id: 'indigo', name: 'Indigo Glow', bg: 'bg-indigo-600', ring: 'ring-indigo-500', text: 'text-indigo-400', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
    { id: 'emerald', name: 'Emerald Wave', bg: 'bg-emerald-600', ring: 'ring-emerald-500', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { id: 'rose', name: 'Rose Nebula', bg: 'bg-rose-600', ring: 'ring-rose-500', text: 'text-rose-400', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
    { id: 'cyan', name: 'Cyan Pulse', bg: 'bg-cyan-600', ring: 'ring-cyan-500', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { id: 'amber', name: 'Amber Sunset', bg: 'bg-amber-600', ring: 'ring-amber-500', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  ]

  const currentTheme = colorThemes.find((t) => t.id === accentColor) || colorThemes[0]

  const codeSnippet = `// Example Tailwind + React Component
export function CounterWidget() {
  const [count, setCount] = useState(${count})
  return (
    <button className="px-4 py-2 ${currentTheme.bg} text-white rounded-lg shadow">
      Count: {count}
    </button>
  )
}`

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const triggerNotify = () => {
    const messages = [
      'Tailwind CSS classes compiled instantly! ⚡',
      'React state hook updated smoothly! 🚀',
      'Glassmorphism & animations active! ✨',
      'Components rendered without lag! 🎉'
    ]
    const randomMsg = messages[Math.floor(Math.random() * messages.length)]
    setNotification(randomMsg)
  }

  return (
    <section id="demo" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-cyan-400 mb-3">
            Interactive Playground
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Live React State & Tailwind Styles
          </p>
          <p className="text-slate-400 mt-3 text-base">
            Interact with the reactive state controls and customize the theme below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Controls & Interactive Widget */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              {/* Header with status */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${currentTheme.badge} border`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Interactive State Widget</h3>
                    <p className="text-xs text-slate-400">Live React component with dynamic Tailwind classes</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${currentTheme.badge}`}>
                  Active Theme: {currentTheme.name}
                </span>
              </div>

              {/* Theme Color Picker */}
              <div className="mb-8">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Select Accent Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setAccentColor(theme.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                        accentColor === theme.id
                          ? 'border-white/50 bg-slate-800 text-white shadow-md'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${theme.bg}`} />
                      <span>{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Counter Demo */}
              <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Current Value
                    </div>
                    <div className={`text-4xl font-extrabold ${currentTheme.text} mt-1`}>
                      {count}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCount(count - 1)}
                      className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition"
                      aria-label="Decrement"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCount(0)}
                      className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition"
                      aria-label="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCount(count + 1)}
                      className={`p-3 rounded-lg text-white font-semibold transition shadow-md ${currentTheme.bg} hover:opacity-90`}
                      aria-label="Increment"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification Trigger Demo */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Live Toast State
                  </span>
                  <button
                    onClick={triggerNotify}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Send Random Alert</span>
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-sm text-slate-300">{notification}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Preview with Copy button */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-slate-400 font-mono ml-2">PreviewCode.jsx</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{codeSnippet}</code>
                </pre>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>⚡ Instant hot reload ready</span>
                <span className="font-mono text-indigo-400">Tailwind CSS 3.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
