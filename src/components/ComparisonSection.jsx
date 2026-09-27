import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowDown, GitCommit, CheckCircle2, Zap } from 'lucide-react';
import { COMPARISON_DATA } from '../data/algorithmSteps';

export default function ComparisonSection() {
  const [activeStrategy, setActiveStrategy] = useState('LC');

  return (
    <section id="comparison" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#0071e3]">
          Algorithmic Comparison
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          DFS vs. BFS vs. LC Search
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          The node selection discipline defines the character and efficiency of state-space search.
        </p>
      </div>

      {/* Visual Triplet Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-center">
        
        {/* DFS */}
        <div className="p-6 rounded-2xl apple-glass border border-white/10 space-y-3">
          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Depth-First Search</div>
          <div className="text-3xl font-extrabold text-white tracking-tight">DEPTH</div>
          <p className="text-xs text-white/60">Follows single path straight down to maximum depth before backtracking.</p>
          <div className="pt-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 font-mono text-[11px]">LIFO Stack</span>
          </div>
        </div>

        {/* BFS */}
        <div className="p-6 rounded-2xl apple-glass border border-white/10 space-y-3">
          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Breadth-First Search</div>
          <div className="text-3xl font-extrabold text-white tracking-tight">LEVEL</div>
          <p className="text-xs text-white/60">Uniformly sweeps all nodes at depth d before proceeding to d+1.</p>
          <div className="pt-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 font-mono text-[11px]">FIFO Queue</span>
          </div>
        </div>

        {/* LC SEARCH - Highlighted */}
        <div className="p-6 rounded-2xl apple-glass border-2 border-[#0071e3] bg-[#0071e3]/10 space-y-3 shadow-xl shadow-[#0071e3]/20 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0071e3] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
            Optimization Choice
          </div>
          <div className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest mt-1">Least-Cost Search</div>
          <div className="text-3xl font-extrabold text-white tracking-tight">LEAST COST</div>
          <p className="text-xs text-white/80">Always expands globally minimum bound live node next.</p>
          <div className="pt-2">
            <span className="px-2.5 py-1 rounded-md bg-[#0071e3]/30 text-white font-mono text-[11px] font-semibold">Priority Queue (Min-Heap)</span>
          </div>
        </div>
      </div>

      {/* Comparative Analytical Table */}
      <div className="rounded-3xl apple-glass border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/[0.04] text-white/60 uppercase font-mono text-[11px]">
              <tr>
                <th className="py-4 px-6">Method</th>
                <th className="py-4 px-6">Data Structure</th>
                <th className="py-4 px-6">Selection Criterion</th>
                <th className="py-4 px-6">Optimization Suitability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {COMPARISON_DATA.map((row) => (
                <tr
                  key={row.method}
                  className={`transition-colors ${
                    row.highlight ? 'bg-[#0071e3]/10 font-medium' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-white">
                    <div className="flex items-center space-x-2">
                      <span>{row.method}</span>
                      {row.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-white/70">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-xs">
                      {row.queueType}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-white/80">
                    {row.expansionOrder}
                  </td>
                  <td className="py-4 px-6 text-white/70">
                    {row.optimizationSuitability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
