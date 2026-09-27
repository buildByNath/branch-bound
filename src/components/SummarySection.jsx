import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bookmark, Sparkles, Award, Compass, Zap } from 'lucide-react';

export default function SummarySection() {
  const revisionItems = [
    { term: 'BRANCH', meaning: 'Break the problem into smaller subproblems step by step.' },
    { term: 'BOUND', meaning: 'Estimate the best possible solution reachable from a partial state.' },
    { term: 'PRUNE', meaning: 'Discard subproblems that cannot improve the current best feasible solution (Bound ≥ Best).' },
    { term: 'LC SEARCH', meaning: 'Select the live node with the minimum bound across the priority queue.' },
    { term: 'E-NODE', meaning: 'The specific live node currently extracted for expansion.' },
    { term: 'LIVE NODE', meaning: 'A generated node that has not yet been expanded or discarded.' },
    { term: 'DEAD NODE', meaning: 'A node whose children have all been generated; no longer available.' },
  ];

  return (
    <section id="revision" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#34c759]">
          Key Takeaways
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Quick Revision
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          High-yield key takeaways for rapid recall and exam formulation.
        </p>
      </div>

      {/* Grid of Rapid Recall Flash Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {revisionItems.map((item) => (
          <div
            key={item.term}
            className="p-5 rounded-2xl apple-glass border border-white/10 hover:border-white/25 transition-all space-y-2"
          >
            <div className="text-xs font-mono font-bold tracking-wider text-[#60a5fa] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
              {item.term}
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>

      {/* The Master One-Line Definition Box */}
      <div className="p-8 sm:p-12 rounded-3xl apple-glass border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-black to-emerald-500/5 shadow-2xl mb-16 text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-3">
          Master Formula / Viva Summary
        </span>
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
          “LC Branch and Bound explores a state-space tree by repeatedly expanding the least-cost live node and pruning nodes whose bound cannot lead to a better solution.”
        </blockquote>
      </div>

      {/* The Triad Takeaway Mantra */}
      <div className="py-12 border-y border-white/10 text-center space-y-6">
        <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white/70 tracking-tight space-y-2">
          <div>Branch smart.</div>
          <div>Bound early.</div>
          <div className="text-[#0071e3]">Explore the most promising live node first.</div>
        </div>

        <div className="pt-4 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-white/20" />
          <span className="text-xs font-mono tracking-widest uppercase text-white/50">BRANCH & BOUND • LC SEARCH</span>
          <span className="h-[1px] w-12 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
