import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Sparkles, Binary, Award, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [pulseActive, setPulseActive] = useState(0);

  // Progressive pulse across tree nodes to demonstrate intelligent search
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseActive((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const heroNodes = [
    { id: 0, x: 250, y: 40, label: 'Root (Problem)', bound: 'b=10', state: 'root' },
    { id: 1, x: 140, y: 120, label: 'Subproblem A', bound: 'b=18', state: 'live' },
    { id: 2, x: 360, y: 120, label: 'Subproblem B (Least-Cost)', bound: 'b=11', state: 'enode' },
    { id: 3, x: 80, y: 200, label: 'Leaf A1', bound: 'b=25', state: 'pruned' },
    { id: 4, x: 200, y: 200, label: 'Leaf A2', bound: 'b=19', state: 'pruned' },
    { id: 5, x: 310, y: 200, label: 'Candidate Sol', bound: 'Cost=14', state: 'optimal' },
    { id: 6, x: 420, y: 200, label: 'Subproblem B2', bound: 'b=30', state: 'pruned' },
  ];

  const heroEdges = [
    { from: 0, to: 1, label: 'Decision 1' },
    { from: 0, to: 2, label: 'Decision 2 (LC Selected)', highlight: true },
    { from: 1, to: 3, pruned: true },
    { from: 1, to: 4, pruned: true },
    { from: 2, to: 5, highlight: true },
    { from: 2, to: 6, pruned: true },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Apple style ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0071e3]/20 via-[#34c759]/10 to-transparent blur-[140px] pointer-events-none -z-10" />


      {/* Main Title - Apple optical negative tracking */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/60"
        >
          BRANCH & BOUND
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-xl sm:text-3xl font-semibold tracking-tight text-[#0071e3]">
            LC (Least-Cost) Search Algorithm
          </span>
        </motion.div>

        {/* Core Question Callout */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl font-normal text-white/70 max-w-2xl mx-auto pt-2 leading-relaxed"
        >
          How can we search a massive solution space without exploring every dead end?
        </motion.p>
      </div>

      {/* State-Space Tree Hero Vector Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl mt-12 mb-8 p-6 sm:p-8 rounded-3xl apple-glass border border-white/10 relative shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs font-mono text-white/40 ml-2">state_space_tree_live.svg</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/60">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0071e3]" /> Live E-Node
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#ff3b30]" /> Pruned (Cutoff)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#34c759]" /> Feasible Best
            </span>
          </div>
        </div>

        {/* SVG State-Space Tree */}
        <div className="relative w-full aspect-[500/250] flex items-center justify-center">
          <svg viewBox="0 0 500 250" className="w-full h-full overflow-visible select-none">
            {/* Edges */}
            {heroEdges.map((edge, idx) => {
              const from = heroNodes[edge.from];
              const to = heroNodes[edge.to];
              return (
                <g key={`edge-${idx}`}>
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={
                      edge.highlight
                        ? '#0071e3'
                        : edge.pruned
                        ? 'rgba(255, 59, 48, 0.4)'
                        : 'rgba(255, 255, 255, 0.2)'
                    }
                    strokeWidth={edge.highlight ? 2.5 : 1.5}
                    strokeDasharray={edge.pruned ? '4 4' : 'none'}
                    className="transition-all duration-300"
                  />
                  {/* Subtle edge label */}
                  <text
                    x={(from.x + to.x) / 2 + (from.x > to.x ? -10 : 10)}
                    y={(from.y + to.y) / 2}
                    fill={edge.highlight ? '#0071e3' : edge.pruned ? '#ff3b30' : 'rgba(255,255,255,0.4)'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {edge.pruned ? 'PRUNED' : edge.label}
                  </text>
                </g>
              );
            })}

            {/* Nodes */}
            {heroNodes.map((node) => {
              const isE = node.state === 'enode';
              const isPruned = node.state === 'pruned';
              const isOptimal = node.state === 'optimal';
              const isRoot = node.state === 'root';

              let fillColor = '#1c1c1e';
              let strokeColor = 'rgba(255,255,255,0.3)';
              let textColor = '#ffffff';

              if (isE) {
                fillColor = '#0071e3';
                strokeColor = '#60a5fa';
              } else if (isPruned) {
                fillColor = '#2c0b0e';
                strokeColor = '#ff3b30';
                textColor = '#ff6b6b';
              } else if (isOptimal) {
                fillColor = '#0b2b14';
                strokeColor = '#34c759';
                textColor = '#4ade80';
              } else if (isRoot) {
                fillColor = '#27272a';
                strokeColor = '#a1a1aa';
              }

              return (
                <g key={`node-${node.id}`} className="cursor-pointer group">
                  {/* Glow circle for active E-node */}
                  {isE && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="22"
                      fill="none"
                      stroke="#0071e3"
                      strokeWidth="2"
                      opacity="0.4"
                      className="animate-ping"
                    />
                  )}

                  {/* Main Node Bubble */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isE || isOptimal ? 16 : 14}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isE || isOptimal ? 2.5 : 1.5}
                    className="transition-all duration-300 group-hover:scale-110"
                  />

                  {/* Bound tag badge above/below */}
                  <text
                    x={node.x}
                    y={node.y - 20}
                    fill={isE ? '#60a5fa' : isPruned ? '#ff4d4f' : isOptimal ? '#4ade80' : 'rgba(255,255,255,0.7)'}
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {node.bound}
                  </text>

                  {/* Node label inside/below */}
                  <text
                    x={node.x}
                    y={node.y + 26}
                    fill={textColor}
                    fontSize="9.5"
                    fontFamily="-apple-system, sans-serif"
                    fontWeight="500"
                    textAnchor="middle"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <p className="text-center text-xs text-white/50 pt-2 font-mono">
          State-Space Tree: The least-cost live node (b=11) is prioritized; subproblems exceeding the incumbent are eliminated.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-2"
      >
        <button
          onClick={() => {
            const el = document.getElementById('why');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 shadow-xl shadow-white/10 apple-button flex items-center gap-2"
        >
          <span>Start Seminar Tour</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            const el = document.getElementById('simulation');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/15 border border-white/15 apple-button flex items-center gap-2"
        >
          <span>Skip to Interactive Lab</span>
          <Binary className="w-4 h-4 text-[#0071e3]" />
        </button>
      </motion.div>

      {/* Scroll indicator prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-2 text-white/40 text-xs font-medium uppercase tracking-widest cursor-pointer"
        onClick={() => {
          const el = document.getElementById('why');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#0071e3]" />
      </motion.div>
    </section>
  );
}
