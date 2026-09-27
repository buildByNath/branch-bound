import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, EyeOff, Sparkles, AlertTriangle, ArrowRight, Gauge, Cpu } from 'lucide-react';

export default function WhyBranchBound() {
  const [pruneMode, setPruneMode] = useState(true);

  return (
    <section id="why" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          The Combinatorial Explosion
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          A problem may have thousands or millions of possible solutions. Exploring every single permutation is impossible.
        </p>
      </div>

      {/* Interactive Contrast Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        
        {/* Left Side: Story & Concept */}
        <div className="space-y-6">

          <div className="p-6 rounded-2xl apple-glass border border-[#0071e3]/30 bg-gradient-to-br from-[#0071e3]/10 to-transparent space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#0071e3]/20 text-[#60a5fa]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">The Branch & Bound Breakthrough</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Instead of blindly evaluating every dead end, Branch and Bound calculates a <strong className="text-white">mathematical bound</strong> on the best outcome each subproblem could possibly achieve.
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              If a partial branch mathematically <strong className="text-[#ff3b30]">cannot beat</strong> our current best feasible solution, we prune it instantly!
            </p>
          </div>

          {/* Interactive Toggle for Prune demonstration */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs text-white/70 font-medium">Toggle Algorithm Filter:</span>
            <button
              onClick={() => setPruneMode(!pruneMode)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold apple-button transition-all bg-[#0071e3] text-white hover:bg-[#0077ed]"
            >
              {pruneMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{pruneMode ? 'Pruning Active (B&B)' : 'Exhaustive Search (No Pruning)'}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Animated Visual Growth Tree */}
        <div className="apple-glass rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-white/50 mb-4 font-mono">
            <span>EXPLORATION FOOTPRINT</span>
            <span>{pruneMode ? 'Pruned: 75% eliminated' : 'Explored: 100% full space'}</span>
          </div>

          <svg viewBox="0 0 400 280" className="w-full h-auto select-none">
            {/* Level 0 to 1 lines */}
            <line x1="200" y1="30" x2="80" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="200" y1="30" x2="200" y2="90" stroke="#0071e3" strokeWidth="2.5" />
            <line x1="200" y1="30" x2="320" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Level 1 to 2 lines */}
            {/* Left subtree */}
            <line x1="80" y1="90" x2="40" y2="160" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />
            <line x1="80" y1="90" x2="110" y2="160" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />

            {/* Center subtree (Promising) */}
            <line x1="200" y1="90" x2="160" y2="160" stroke="#0071e3" strokeWidth="2" />
            <line x1="200" y1="90" x2="240" y2="160" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />

            {/* Right subtree */}
            <line x1="320" y1="90" x2="290" y2="160" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />
            <line x1="320" y1="90" x2="355" y2="160" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />

            {/* Level 2 to 3 lines (Subtree explosion) */}
            {/* Center optimal path */}
            <line x1="160" y1="160" x2="140" y2="230" stroke="#34c759" strokeWidth="2.5" />
            <line x1="160" y1="160" x2="180" y2="230" stroke={pruneMode ? 'rgba(255,59,48,0.2)' : 'rgba(255,255,255,0.2)'} strokeDasharray={pruneMode ? '3 3' : 'none'} />

            {/* Other exploded leaves */}
            {[40, 110, 240, 290, 355].map((x, i) => (
              <g key={`sub-exp-${i}`}>
                <line
                  x1={x}
                  y1="160"
                  x2={x - 12}
                  y2="230"
                  stroke={pruneMode ? 'rgba(255,59,48,0.1)' : 'rgba(255,255,255,0.15)'}
                  strokeDasharray={pruneMode ? '2 2' : 'none'}
                />
                <line
                  x1={x}
                  y1="160"
                  x2={x + 12}
                  y2="230"
                  stroke={pruneMode ? 'rgba(255,59,48,0.1)' : 'rgba(255,255,255,0.15)'}
                  strokeDasharray={pruneMode ? '2 2' : 'none'}
                />
              </g>
            ))}

            {/* Root Node */}
            <circle cx="200" cy="30" r="14" fill="#1d1d1f" stroke="#a1a1aa" strokeWidth="2" />
            <text x="200" y="34" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ROOT</text>

            {/* Level 1 Nodes */}
            <circle cx="80" cy="90" r="12" fill={pruneMode ? '#22080a' : '#1d1d1f'} stroke={pruneMode ? '#ff3b30' : '#888'} strokeWidth="1.5" />
            <text x="80" y="94" fill={pruneMode ? '#ff6b6b' : '#fff'} fontSize="8" textAnchor="middle">P1</text>

            <circle cx="200" cy="90" r="14" fill="#0071e3" stroke="#60a5fa" strokeWidth="2" />
            <text x="200" y="94" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">P2 (LC)</text>

            <circle cx="320" cy="90" r="12" fill={pruneMode ? '#22080a' : '#1d1d1f'} stroke={pruneMode ? '#ff3b30' : '#888'} strokeWidth="1.5" />
            <text x="320" y="94" fill={pruneMode ? '#ff6b6b' : '#fff'} fontSize="8" textAnchor="middle">P3</text>

            {/* Optimal solution leaf */}
            <circle cx="140" cy="230" r="13" fill="#0b2b14" stroke="#34c759" strokeWidth="2.5" />
            <text x="140" y="234" fill="#4ade80" fontSize="8" fontWeight="bold" textAnchor="middle">BEST</text>

            {/* Pruned Badges or Exhaustive badges */}
            {pruneMode && (
              <>
                <rect x="60" y="145" width="40" height="15" rx="3" fill="#ff3b30" opacity="0.9" />
                <text x="80" y="156" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">PRUNED</text>

                <rect x="300" y="145" width="40" height="15" rx="3" fill="#ff3b30" opacity="0.9" />
                <text x="320" y="156" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">PRUNED</text>
              </>
            )}
          </svg>

          <div className="mt-4 text-center">
            <span className="text-xs text-white/60">
              {pruneMode
                ? '✓ Only promising subproblem P2 is expanded. P1 and P3 are pruned before subtree evaluation.'
                : '✕ Full brute-force enumeration: Evaluates all subtrees regardless of cost.'}
            </span>
          </div>
        </div>
      </div>

      {/* Official KTU Definition Callout Banner */}
      <div className="p-8 sm:p-10 rounded-3xl apple-glass border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] shadow-xl">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <div className="text-xs uppercase tracking-widest text-[#34c759] font-mono font-semibold">
            Definition
          </div>
          <blockquote className="text-lg sm:text-2xl font-medium text-white/95 leading-relaxed tracking-tight">
            “Branch and Bound is an algorithm design technique for solving optimization problems by systematically dividing the solution space into smaller subproblems (branching), computing a bound on the best solution that can be obtained from each subproblem, and eliminating/pruning subproblems that cannot improve the current best solution.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
