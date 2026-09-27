import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ChevronRight, Zap, Award, Layers, CheckCircle2, RotateCcw } from 'lucide-react';

export default function LCSearchSection() {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(1); // Node B (11) is minimum

  const liveQueue = [
    { id: 'A', name: 'Campus Sector', bound: 18, isMin: false },
    { id: 'B', name: 'Hospital Sector', bound: 11, isMin: true },
    { id: 'C', name: 'Mall Perimeter', bound: 24, isMin: false },
    { id: 'D', name: 'Suburban Depot', bound: 15, isMin: false },
  ];

  const cycleStages = [
    { title: '1. Branch', desc: 'Divide problem into subproblems', color: 'blue' },
    { title: '2. Bound', desc: 'Calculate lower bound for each node', color: 'purple' },
    { title: '3. Enqueue', desc: 'Push promising nodes to Min-Heap', color: 'amber' },
    { title: '4. Select LC', desc: 'Pop node with minimum bound', color: 'green', active: true },
    { title: '5. Prune', desc: 'Discard if bound ≥ Current Best', color: 'red' },
    { title: '6. Expand & Repeat', desc: 'Branch selected E-node', color: 'blue' },
  ];

  return (
    <section id="lc-search" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#0071e3]">
          Central Concept
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Least-Cost (LC) Search
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          The intelligent selection rule that guides the search directly towards the optimal solution.
        </p>
      </div>

      {/* Prominent Formal Academic Definition */}
      <div className="p-8 sm:p-10 rounded-3xl apple-glass border-2 border-[#0071e3]/40 bg-gradient-to-br from-[#0071e3]/15 via-black to-[#0071e3]/5 shadow-2xl mb-16 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#60a5fa] font-mono font-bold block mb-2">
          Core Algorithmic Rule
        </span>
        <blockquote className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
          “LC (Least-Cost) Search selects the live node having the least cost / bound for expansion.”
        </blockquote>
      </div>

      {/* Interactive Live-Node Selection Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        
        {/* Left: The Question & Demonstration */}
        <div className="p-8 rounded-3xl apple-glass border border-white/10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0071e3] font-semibold">
              Priority Queue Selection Demonstration
            </span>
            <h3 className="text-2xl font-bold text-white">
              Which node should we expand next?
            </h3>
            <p className="text-sm text-white/70">
              Unlike BFS (which blindly explores level-by-level) or DFS (which blindly plunges deep), LC Search inspects the entire active frontier and extracts the globally minimum bound.
            </p>
          </div>

          {/* Min-Heap Priority Queue List */}
          <div className="space-y-2.5">
            {liveQueue.map((item, index) => {
              const isSelected = selectedNodeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedNodeIndex(index)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between apple-button ${
                    isSelected
                      ? 'bg-[#0071e3]/20 border-[#0071e3] shadow-lg shadow-[#0071e3]/20 -translate-x-1'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                      item.isMin ? 'bg-[#34c759] text-black font-extrabold' : 'bg-white/10 text-white'
                    }`}>
                      {item.id}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-white/40 font-mono">Subproblem #{item.id}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className="text-xs text-white/40 font-mono block">Bound / Cost</span>
                      <span className={`text-base font-bold font-mono ${
                        item.isMin ? 'text-[#34c759]' : 'text-white'
                      }`}>
                        {item.bound}
                      </span>
                    </div>
                    {item.isMin && (
                      <span className="px-2.5 py-1 rounded-full bg-[#34c759]/20 text-[#34c759] border border-[#34c759]/40 text-xs font-mono font-bold">
                        LEAST-COST ←
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/60">
            Node <strong>B (Hospital)</strong> has the smallest bound (11 &lt; 15, 18, 24). LC Search extracts Node B as the active <strong>E-Node</strong>.
          </div>
        </div>

        {/* Right: The Full Algorithmic Loop Pipeline */}
        <div className="p-8 rounded-3xl apple-glass border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0071e3]" />
            The Continuous LC Cycle
          </h3>
          <p className="text-xs text-white/60">
            The heart of Branch & Bound operates in a continuous loop until the live queue is exhausted:
          </p>

          <div className="space-y-3">
            {cycleStages.map((stage, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  stage.active
                    ? 'bg-[#34c759]/10 border-[#34c759]/40 text-white shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-white/80'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-2 h-2 rounded-full ${
                    stage.active ? 'bg-[#34c759] animate-ping' : 'bg-white/30'
                  }`} />
                  <div>
                    <span className="font-semibold text-xs block">{stage.title}</span>
                    <span className="text-[11px] text-white/50">{stage.desc}</span>
                  </div>
                </div>
                {stage.active && (
                  <span className="text-[10px] font-mono font-bold text-[#34c759] uppercase tracking-wider">
                    Core LC Step
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <span className="text-xs font-mono text-white/50 tracking-wider">
              BRANCH → BOUND → SELECT LC → PRUNE → REPEAT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
