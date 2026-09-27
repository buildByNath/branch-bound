import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, MapPin, Truck, Building2, Landmark, Plane, Check } from 'lucide-react';

export default function BranchSection() {
  const [selectedBranch, setSelectedBranch] = useState('b2');

  const branches = [
    {
      id: 'b1',
      title: 'Branch P1: Route via Campus',
      dest: 'Campus University Hub',
      icon: Building2,
      subproblem: 'Deliver to Campus first, remaining destinations: Hospital, Mall, Airport',
      decision: 'Next stop = Node 1',
      costPartial: 18,
    },
    {
      id: 'b2',
      title: 'Branch P2: Route via Hospital',
      dest: 'City General Hospital',
      icon: Landmark,
      subproblem: 'Deliver to Hospital first, remaining destinations: Campus, Mall, Airport',
      decision: 'Next stop = Node 2',
      costPartial: 11,
      recommended: true,
    },
    {
      id: 'b3',
      title: 'Branch P3: Route via Airport',
      dest: 'International Terminal',
      icon: Plane,
      subproblem: 'Deliver to Airport first, remaining destinations: Campus, Hospital, Mall',
      decision: 'Next stop = Node 3',
      costPartial: 26,
    }
  ];

  return (
    <section id="branch" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Branch
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          Dividing the original problem into smaller subproblems by making decisions step by step.
        </p>
      </div>

      {/* Visual Vector Architecture for Branching */}
      <div className="p-8 sm:p-12 rounded-3xl apple-glass border border-white/10 mb-12 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-sm">
            <Truck className="w-4 h-4 text-[#0071e3]" />
            <span>ORIGINAL PROBLEM: Dispatch from Central Warehouse</span>
          </div>
        </div>

        {/* Dynamic Branching SVG Tree */}
        <div className="w-full max-w-2xl mx-auto">
          <svg viewBox="0 0 500 180" className="w-full h-auto select-none overflow-visible">
            {/* Fork lines from root */}
            <path
              d="M 250 30 C 250 70, 90 70, 90 120"
              fill="none"
              stroke={selectedBranch === 'b1' ? '#0071e3' : 'rgba(255,255,255,0.2)'}
              strokeWidth={selectedBranch === 'b1' ? 3 : 1.5}
              className="transition-all duration-300"
            />
            <path
              d="M 250 30 C 250 70, 250 70, 250 120"
              fill="none"
              stroke={selectedBranch === 'b2' ? '#0071e3' : 'rgba(255,255,255,0.2)'}
              strokeWidth={selectedBranch === 'b2' ? 3 : 1.5}
              className="transition-all duration-300"
            />
            <path
              d="M 250 30 C 250 70, 410 70, 410 120"
              fill="none"
              stroke={selectedBranch === 'b3' ? '#0071e3' : 'rgba(255,255,255,0.2)'}
              strokeWidth={selectedBranch === 'b3' ? 3 : 1.5}
              className="transition-all duration-300"
            />

            {/* Root Problem Node */}
            <g transform="translate(250, 30)">
              <circle r="18" fill="#18181b" stroke="#a1a1aa" strokeWidth="2" />
              <text y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">P₀</text>
              <text y="-25" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle" fontFamily="monospace">ORIGINAL PROBLEM</text>
            </g>

            {/* Branch 1 Node */}
            <g transform="translate(90, 120)" onClick={() => setSelectedBranch('b1')} className="cursor-pointer">
              <circle
                r="18"
                fill={selectedBranch === 'b1' ? '#0071e3' : '#1f2937'}
                stroke={selectedBranch === 'b1' ? '#60a5fa' : 'rgba(255,255,255,0.3)'}
                strokeWidth={selectedBranch === 'b1' ? 3 : 1.5}
              />
              <text y="4" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">P₁</text>
              <text y="32" fill={selectedBranch === 'b1' ? '#60a5fa' : 'rgba(255,255,255,0.7)'} fontSize="10" textAnchor="middle">Campus</text>
            </g>

            {/* Branch 2 Node */}
            <g transform="translate(250, 120)" onClick={() => setSelectedBranch('b2')} className="cursor-pointer">
              <circle
                r="18"
                fill={selectedBranch === 'b2' ? '#0071e3' : '#1f2937'}
                stroke={selectedBranch === 'b2' ? '#60a5fa' : 'rgba(255,255,255,0.3)'}
                strokeWidth={selectedBranch === 'b2' ? 3 : 1.5}
              />
              <text y="4" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">P₂</text>
              <text y="32" fill={selectedBranch === 'b2' ? '#60a5fa' : 'rgba(255,255,255,0.7)'} fontSize="10" textAnchor="middle">Hospital</text>
            </g>

            {/* Branch 3 Node */}
            <g transform="translate(410, 120)" onClick={() => setSelectedBranch('b3')} className="cursor-pointer">
              <circle
                r="18"
                fill={selectedBranch === 'b3' ? '#0071e3' : '#1f2937'}
                stroke={selectedBranch === 'b3' ? '#60a5fa' : 'rgba(255,255,255,0.3)'}
                strokeWidth={selectedBranch === 'b3' ? 3 : 1.5}
              />
              <text y="4" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">P₃</text>
              <text y="32" fill={selectedBranch === 'b3' ? '#60a5fa' : 'rgba(255,255,255,0.7)'} fontSize="10" textAnchor="middle">Airport</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Interactive Branch Inspector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((b) => {
          const isSelected = selectedBranch === b.id;
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 apple-button ${
                isSelected
                  ? 'bg-[#0071e3]/15 border-2 border-[#0071e3] shadow-lg shadow-[#0071e3]/20 -translate-y-1'
                  : 'apple-glass border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0071e3] text-white' : 'bg-white/10 text-white/70'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {b.recommended && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Least Cost Choice
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-white/60 mb-4">{b.subproblem}</p>
              
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/50">{b.decision}</span>
                <span className={`font-semibold ${isSelected ? 'text-[#60a5fa]' : 'text-white'}`}>
                  Est. Bound = {b.costPartial}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Principle Callout */}
      <div className="mt-8 text-center">
        <p className="text-sm text-white/50 max-w-xl mx-auto">
          Every branch partitions the search space into mutually exclusive subsets so no feasible solution is omitted.
        </p>
      </div>
    </section>
  );
}
