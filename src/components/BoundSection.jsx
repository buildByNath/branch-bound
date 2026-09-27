import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, XCircle, AlertCircle, Sparkles, Scale, Info } from 'lucide-react';

export default function BoundSection() {
  const currentBest = 20;

  const candidateNodes = [
    { id: 'A', name: 'Subroute A (Campus Path)', bound: 12, feasible: true, delta: -8 },
    { id: 'B', name: 'Subroute B (Hospital Path)', bound: 18, feasible: true, delta: -2 },
    { id: 'C', name: 'Subroute C (Highway Bypass)', bound: 27, feasible: false, delta: +7 },
    { id: 'D', name: 'Subroute D (Airport Detour)', bound: 31, feasible: false, delta: +11 },
  ];

  return (
    <section id="bound" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Bound
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          An estimate or lower limit on the best possible solution reachable from a partial state.
        </p>
      </div>

      {/* Prominent Golden Rule Banner: Bound ≠ Final Answer */}
      <div className="mb-14 p-8 sm:p-10 rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-black to-amber-500/5 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              Critical Academic Distinction
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Bound ≠ Final Answer
            </h3>
            <p className="text-white/80 text-sm sm:text-base max-w-xl">
              The bound is <strong>not</strong> the solution value itself. The bound is used exclusively to estimate the future potential of a node and decide whether it is worth exploring.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-center min-w-[200px]">
            <span className="text-xs font-mono text-white/40 uppercase">Minimization Goal</span>
            <div className="text-2xl font-mono font-bold text-[#34c759] mt-1">Lower = Better</div>
            <span className="text-[11px] text-white/60">More promising candidate</span>
          </div>
        </div>
      </div>

      {/* Bound Calculation Logic Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        
        {/* Left: Mathematical Structure of a Lower Bound */}
        <div className="p-8 rounded-3xl apple-glass border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#0071e3]" />
            How a Bound is Structured
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            In any optimization problem, a lower bound function <span className="font-mono text-white font-semibold">ĉ(x)</span> consists of accumulated exact cost plus an admissible (optimistic) lower bound on remaining steps:
          </p>

          {/* Visual flowchart representation */}
          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <span className="text-white/70">1. Accumulated Cost to Node</span>
              <span className="font-semibold text-white">f(x) — Known Exact</span>
            </div>
            <div className="flex justify-center text-white/40">+</div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <span className="text-white/70">2. Admissible Remaining Estimate</span>
              <span className="font-semibold text-[#60a5fa]">ĝ(x) — Heuristic Lower Bound</span>
            </div>
            <div className="flex justify-center text-white/40">=</div>
            <div className="p-4 rounded-xl bg-[#0071e3]/20 border border-[#0071e3]/40 flex items-center justify-between text-white font-bold text-sm">
              <span>Overall Node Bound</span>
              <span className="text-[#60a5fa]">ĉ(x) = f(x) + ĝ(x)</span>
            </div>
          </div>

          <p className="text-xs text-white/50">
            Admissibility condition: <span className="font-mono text-white/70">ĉ(x) ≤ c*(x)</span> ensures the estimate never overestimates the true remaining cost, guaranteeing global optimality!
          </p>
        </div>

        {/* Right: Live Interactive Bound vs Benchmark Comparison */}
        <div className="p-8 rounded-3xl apple-glass border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Pruning Filter In Action</h3>
            <div className="px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-white/90">
              Current Best = <strong className="text-[#34c759]">{currentBest}</strong>
            </div>
          </div>

          <p className="text-xs text-white/60">
            Compare candidate subproblems against Current Best ({currentBest}). Any bound ≥ {currentBest} cannot beat our best known solution:
          </p>

          <div className="space-y-3">
            {candidateNodes.map((node) => (
              <div
                key={node.id}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  node.feasible
                    ? 'bg-white/[0.03] border-white/10 hover:border-emerald-500/40'
                    : 'bg-red-500/[0.04] border-red-500/20 opacity-75'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    node.feasible ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {node.id}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{node.name}</div>
                    <div className="text-xs font-mono text-white/50">
                      Bound: <span className="text-white font-bold">{node.bound}</span> vs Best: {currentBest}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <span className={`text-xs font-mono font-semibold block ${
                      node.feasible ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {node.feasible ? 'POTENTIAL CANDIDATE' : 'PRUNED'}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">
                      {node.feasible ? `${node.delta} under best` : `+${node.delta} over best`}
                    </span>
                  </div>
                  {node.feasible ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-white/50 font-mono">
            Rule: Bound &lt; Best → Explore | Bound ≥ Best → Prune
          </div>
        </div>
      </div>
    </section>
  );
}
