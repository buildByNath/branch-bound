import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, AlertOctagon, Sliders, CheckCircle2, XCircle } from 'lucide-react';

export default function PruningSection() {
  const [incumbentThreshold, setIncumbentThreshold] = useState(20);

  const branches = [
    { id: 'A', name: 'Path A (Direct Boulevard)', bound: 12, x: 70, y: 140 },
    { id: 'B', name: 'Path B (Highway Link)', bound: 18, x: 170, y: 140 },
    { id: 'C', name: 'Path C (Mountain Pass)', bound: 27, x: 270, y: 140 },
    { id: 'D', name: 'Path D (Harbor Crossing)', bound: 31, x: 370, y: 140 },
  ];

  return (
    <section id="prune" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Prune the Impossible-to-Improve
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          If the optimistic lower bound cannot beat our current best feasible solution, there is no mathematical reason to explore it.
        </p>
      </div>

      {/* Main Pruning Mathematical Rule Box */}
      <div className="max-w-xl mx-auto mb-12 p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-3 apple-glass shadow-xl">
        <span className="text-xs uppercase tracking-widest text-[#ff3b30] font-mono font-semibold flex items-center justify-center gap-1.5">
          <Scissors className="w-4 h-4" /> Minimization Pruning Rule
        </span>
        <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-wider">
          Bound ≥ Current Best <span className="text-[#ff3b30]">→ PRUNE</span>
        </div>
        <p className="text-xs text-white/60">
          A smaller bound indicates a superior opportunity. Subproblems with equal or higher bounds are mathematically obsolete.
        </p>
      </div>

      {/* Interactive Pruning Laboratory Canvas */}
      <div className="p-8 sm:p-12 rounded-3xl apple-glass border border-white/10 mb-12 shadow-2xl space-y-8">
        
        {/* Interactive Threshold Slider */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-white/40 uppercase flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#0071e3]" />
              Adjust Incumbent Feasible Cost
            </div>
            <div className="text-xl font-bold text-white">
              Current Best Solution = <span className="text-[#34c759] font-mono">{incumbentThreshold}</span>
            </div>
            <p className="text-xs text-white/60">
              Drag slider to test how changing the incumbent solution triggers real-time pruning:
            </p>
          </div>

          <div className="w-full sm:w-72 space-y-2">
            <input
              type="range"
              min="10"
              max="35"
              step="1"
              value={incumbentThreshold}
              onChange={(e) => setIncumbentThreshold(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
            />
            <div className="flex justify-between text-[10px] font-mono text-white/40">
              <span>Tight (10)</span>
              <span>Default (20)</span>
              <span>Loose (35)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Vector Tree with Pruning Visuals */}
        <div className="w-full max-w-3xl mx-auto">
          <svg viewBox="0 0 440 210" className="w-full h-auto select-none overflow-visible">
            {/* Cutoff Threshold Reference Line */}
            <g>
              <line
                x1="20"
                y1="100"
                x2="420"
                y2="100"
                stroke="#34c759"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />
              <text x="30" y="93" fill="#34c759" fontSize="9" fontFamily="monospace">
                CURRENT BEST CUTOFF = {incumbentThreshold}
              </text>
            </g>

            {/* Root Origin */}
            <g transform="translate(220, 30)">
              <circle r="16" fill="#18181b" stroke="#a1a1aa" strokeWidth="2" />
              <text y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">PARENT</text>
            </g>

            {/* Branches & Children */}
            {branches.map((b) => {
              const isPruned = b.bound >= incumbentThreshold;
              return (
                <g key={b.id}>
                  {/* Branch Line */}
                  <line
                    x1="220"
                    y1="30"
                    x2={b.x}
                    y2={b.y}
                    stroke={isPruned ? 'rgba(255, 59, 48, 0.35)' : '#0071e3'}
                    strokeWidth={isPruned ? 1.5 : 2.5}
                    strokeDasharray={isPruned ? '4 4' : 'none'}
                    className="transition-all duration-300"
                  />

                  {/* Branch Node */}
                  <g transform={`translate(${b.x}, ${b.y})`} className="cursor-pointer">
                    <circle
                      r="18"
                      fill={isPruned ? '#20080a' : '#0b1d3a'}
                      stroke={isPruned ? '#ff3b30' : '#0071e3'}
                      strokeWidth={isPruned ? 1.5 : 2.5}
                      className="transition-all duration-300"
                    />
                    <text y="4" fill={isPruned ? '#ff6b6b' : '#60a5fa'} fontSize="10" fontWeight="bold" textAnchor="middle">
                      {b.id}
                    </text>

                    {/* Bound value badge */}
                    <text y="-25" fill={isPruned ? '#ff3b30' : '#34c759'} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      b={b.bound}
                    </text>

                    {/* Pruned or Live status */}
                    {isPruned ? (
                      <g transform="translate(0, 32)">
                        <rect x="-24" y="-8" width="48" height="16" rx="4" fill="#ff3b30" />
                        <text y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">PRUNED</text>
                      </g>
                    ) : (
                      <g transform="translate(0, 32)">
                        <rect x="-20" y="-8" width="40" height="16" rx="4" fill="#34c759" />
                        <text y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">LIVE</text>
                      </g>
                    )}
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Status Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {branches.map((b) => {
            const isPruned = b.bound >= incumbentThreshold;
            return (
              <div
                key={b.id}
                className={`p-4 rounded-xl border transition-all text-center ${
                  isPruned
                    ? 'bg-red-500/[0.05] border-red-500/20 text-white/50'
                    : 'bg-[#0071e3]/[0.08] border-[#0071e3]/30 text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1 font-semibold text-sm">
                  {isPruned ? <XCircle className="w-4 h-4 text-red-400" /> : <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  <span>Node {b.id}</span>
                </div>
                <div className="text-xs font-mono">Bound = {b.bound}</div>
                <div className={`text-[11px] font-mono mt-2 font-bold ${isPruned ? 'text-red-400' : 'text-emerald-400'}`}>
                  {isPruned ? 'PRUNED (≥ Best)' : 'EXPLORE (< Best)'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
