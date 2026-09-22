import React, { useState } from 'react'
import { GripVertical, Minus, Plus, ChevronDown, CheckCircle2, TrendingUp, Layers } from 'lucide-react'

export default function HierarchicalFunnelTree() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeChildId, setActiveChildId] = useState('applications')
  const [draggedItemIndex, setDraggedItemIndex] = useState(null)
  const [dragOverIndex, setDragOverIndex] = useState(null)

  const [children, setChildren] = useState([
    { id: 'leads', title: 'Qualified Leads', step: '01', subtitle: 'Targeted High-Intent Prospects' },
    { id: 'applications', title: 'Applications', step: '02', subtitle: 'Completed & Verified Submissions' },
    { id: 'acceptances', title: 'Acceptances', step: '03', subtitle: 'Institutional Admissions Offers' },
    { id: 'enrollments', title: 'Enrollments', step: '04', subtitle: 'Confirmed Matriculation & Yield' },
  ])

  // Drag and Drop handlers for reordering
  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    if (draggedItemIndex === null || draggedItemIndex === index) return
    setDragOverIndex(index)
  }

  const handleDrop = (e, targetIndex) => {
    e.preventDefault()
    if (draggedItemIndex === null || draggedItemIndex === targetIndex) {
      setDraggedItemIndex(null)
      setDragOverIndex(null)
      return
    }

    const updatedChildren = [...children]
    const [draggedItem] = updatedChildren.splice(draggedItemIndex, 1)
    updatedChildren.splice(targetIndex, 0, draggedItem)

    setChildren(updatedChildren)
    setDraggedItemIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedItemIndex(null)
    setDragOverIndex(null)
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#FAFAFA] text-slate-800 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#00A8CC] text-xs sm:text-[13px] font-extrabold tracking-widest uppercase shadow-xs">
            FUNNEL MEASUREMENT & YIELD
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A4A] tracking-tight leading-tight">
            More HQL.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Track and optimize the full student journey from initial inquiry to confirmed enrollment.
          </p>
        </div>

        {/* Tree Structure Container (Free floating on simple background) */}
        <div className="relative max-w-2xl mx-auto pl-8 sm:pl-10">
          
          {/* ============================================================== */}
          {/* PARENT NODE (TOP)                                              */}
          {/* ============================================================== */}
          <div className="relative flex items-center group">
            
            {/* Collapse / Expand Toggle Button (Outside left of parent card) */}
            <button
              type="button"
              aria-label={isCollapsed ? 'Expand node tree' : 'Collapse node tree'}
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -left-8 sm:-left-10 w-6 h-6 rounded-full border border-slate-300 bg-white hover:bg-cyan-50 hover:border-[#00A8CC] text-slate-600 hover:text-[#00A8CC] flex items-center justify-center transition-all duration-200 shadow-xs z-30 focus:outline-none"
            >
              {isCollapsed ? (
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : (
                <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
              )}
            </button>

            {/* Parent Card Body */}
            <div 
              className="w-full bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00A8CC]/40 transition-all duration-300 flex items-center p-3 sm:p-3.5 relative z-20"
            >
              {/* Drag Handle Icon Container */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-slate-100/90 flex items-center justify-center text-slate-400 group-hover:text-slate-600 shrink-0 cursor-grab active:cursor-grabbing mr-3 sm:mr-4 border border-slate-200/50">
                <GripVertical className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Text Content */}
              <div className="min-w-0 pr-2">
                <h3 className="text-base sm:text-lg font-bold text-[#1E2A4A] tracking-tight truncate leading-tight">
                  We focus on the numbers that matter
                </h3>
              </div>

              {/* Pill Status Badge */}
              <div className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-[#00A8CC] border border-cyan-100 text-[11px] font-bold shrink-0">
                <TrendingUp className="w-3 h-3" />
                <span>Pipeline Active</span>
              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* CONNECTORS & CHILD NODES CONTAINER                             */}
          {/* ============================================================== */}
          <div 
            className={`transition-all duration-300 ease-in-out relative ${
              isCollapsed ? 'max-h-0 opacity-0 overflow-hidden mt-0' : 'max-h-[800px] opacity-100 mt-6'
            }`}
          >
            
            {/* SVG Connectors Trunk & Curved Elbow Branches */}
            <svg 
              className="absolute top-[-24px] left-[-20px] sm:left-[-24px] w-[50px] sm:w-[68px] h-[340px] pointer-events-none z-10"
              viewBox="0 0 68 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main Vertical Trunk Line */}
              <path 
                d="M 12 0 L 12 285" 
                stroke="#CBD5E1" 
                strokeWidth="1.5" 
                strokeDasharray="3 3"
              />

              {/* Branch 1 (to child 1) */}
              <path 
                d="M 12 40 Q 12 56 28 56 L 68 56" 
                stroke="#CBD5E1" 
                strokeWidth="1.5" 
                fill="none"
              />

              {/* Branch 2 (to child 2) */}
              <path 
                d="M 12 116 Q 12 132 28 132 L 68 132" 
                stroke="#CBD5E1" 
                strokeWidth="1.5" 
                fill="none"
              />

              {/* Branch 3 (to child 3) */}
              <path 
                d="M 12 192 Q 12 208 28 208 L 68 208" 
                stroke="#CBD5E1" 
                strokeWidth="1.5" 
                fill="none"
              />

              {/* Branch 4 (to child 4) */}
              <path 
                d="M 12 268 Q 12 284 28 284 L 68 284" 
                stroke="#CBD5E1" 
                strokeWidth="1.5" 
                fill="none"
              />

              {/* Traveling Animated Pulse Dot */}
              <circle r="3" fill="#00A8CC">
                <animateMotion 
                  path="M 12 0 L 12 285" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </circle>
            </svg>

            {/* Children Nodes Stack (Indented) */}
            <div className="pl-8 sm:pl-14 space-y-4 sm:space-y-5">
              {children.map((child, index) => {
                const isActive = activeChildId === child.id
                const isDragging = draggedItemIndex === index
                const isOver = dragOverIndex === index

                return (
                  <div 
                    key={child.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={handleDragEnd}
                    onClick={() => setActiveChildId(child.id)}
                    className={`relative group cursor-pointer transition-all duration-200 ${
                      isDragging ? 'opacity-40 scale-95' : ''
                    } ${isOver ? 'translate-y-1' : ''}`}
                  >
                    {/* Downward flow arrow between pairs of children */}
                    {index > 0 && (
                      <div className="absolute -top-3 sm:-top-3.5 left-6 sm:left-7 -translate-x-1/2 text-[#00A8CC]/60 pointer-events-none z-20">
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    )}

                    {/* Child Card Frame */}
                    <div 
                      className={`w-full rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex items-center justify-between transition-all duration-200 ${
                        isActive 
                          ? 'bg-white border-2 border-[#00A8CC] shadow-md shadow-cyan-500/10 ring-4 ring-cyan-50' 
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-[#00A8CC]/50 hover:shadow-sm hover:-translate-y-0.5'
                      }`}
                    >
                      
                      <div className="flex items-center min-w-0 pr-2">
                        {/* Child Drag Handle */}
                        <div 
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 cursor-grab active:cursor-grabbing mr-3 sm:mr-3.5 border ${
                            isActive 
                              ? 'bg-cyan-50 text-[#00A8CC] border-cyan-200' 
                              : 'bg-slate-100/90 text-slate-400 group-hover:text-slate-600 border-slate-200/50'
                          }`}
                        >
                          <GripVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-[#00A8CC]">
                              0{index + 1}
                            </span>
                            <h4 className={`text-sm sm:text-[15px] font-bold tracking-tight truncate leading-tight ${
                              isActive ? 'text-[#1E2A4A]' : 'text-slate-700'
                            }`}>
                              {child.title}
                            </h4>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate font-normal">
                            {child.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Active Indicator & Step Badge */}
                      <div className="flex items-center gap-2 shrink-0">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00A8CC] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-100">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="hidden sm:inline">Active Focus</span>
                          </span>
                        ) : (
                          <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-slate-400">
                            Stage 0{index + 1}
                          </span>
                        )}
                      </div>

                    </div>

                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
