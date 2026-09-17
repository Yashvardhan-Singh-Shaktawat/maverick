import React from 'react'
import { Zap, Palette, Layers, Layout, ShieldCheck, Cpu } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Powered by Vite 6 with esbuild and Rollup for millisecond hot-reloading and lightweight builds.',
      badge: 'Speed',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20'
    },
    {
      icon: Palette,
      title: 'Tailwind CSS Styling',
      description: 'Fully customized color palettes, glassmorphic panels, gradient backgrounds, and responsive utilities.',
      badge: 'Design',
      color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20'
    },
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Modular, decoupled React components organized cleanly in the src/ directory for rapid feature scaling.',
      badge: 'Structure',
      color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20'
    },
    {
      icon: Layout,
      title: '100% Responsive',
      description: 'Crafted mobile-first with adaptive layouts that look crisp and polished on mobile, tablet, and desktop.',
      badge: 'Layout',
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    },
    {
      icon: ShieldCheck,
      title: 'Type & Lint Friendly',
      description: 'Standard modern JavaScript with clean props, predictable hooks, and standard ecosystem compatibility.',
      badge: 'Quality',
      color: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
    },
    {
      icon: Cpu,
      title: 'Extensible Tooling',
      description: 'Easily plug in React Router, TanStack Query, Zustand, Radix UI, or Framer Motion as your project grows.',
      badge: 'Ecosystem',
      color: 'text-rose-400 bg-rose-400/10 border-rose-400/20'
    }
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-indigo-400 mb-3">
            Core Highlights
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need to craft delightful interfaces
          </p>
          <p className="text-slate-400 mt-4 text-base">
            Modern front-end building blocks configured with best practices.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${feature.color}`}>
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
