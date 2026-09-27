import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Check, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { TERMINOLOGY_ITEMS } from '../data/algorithmSteps';

export default function TerminologySection() {
  const [selectedTerm, setSelectedTerm] = useState('E-Node (Expansion Node)');

  const visualNodes = [
    { id: 'root', name: 'Root', role: 'Root Node', x: 200, y: 35, state: 'dead', desc: 'Starting problem, already expanded' },
    { id: 'enode', name: 'E-Node', role: 'E-Node (Expansion Node)', x: 120, y: 110, state: 'enode', desc: 'Currently being branched' },
    { id: 'live', name: 'Live', role: 'Live Node', x: 280, y: 110, state: 'live', desc: 'In priority queue waiting for turn' },
    { id: 'dead', name: 'Dead', role: 'Dead Node', x: 60, y: 185, state: 'dead', desc: 'Fully processed, all children generated' },
    { id: 'pruned', name: 'Pruned', role: 'Pruned Node', x: 180, y: 185, state: 'pruned', desc: 'Discarded: Bound ≥ Incumbent' },
    { id: 'best', name: 'Incumbent', role: 'Current Best (Incumbent)', x: 340, y: 185, state: 'optimal', desc: 'Best complete solution found so far' },
  ];

  return (
    <section id="terminology" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#0071e3]">
          Terminology
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          State-Space Tree Terminology
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          Every node in a Branch & Bound tree transitions through strictly defined lifecycle phases.
        </p>
      </div>

      {/* Interactive Legend Visualizer Canvas */}
      <div className="p-8 sm:p-12 rounded-3xl apple-glass border border-white/10 mb-12 shadow-2xl">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
            Interactive State-Space Lifecycle Diagram (Click any node to inspect)
          </span>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <svg viewBox="0 0 400 230" className="w-full h-auto select-none overflow-visible">
            {/* Tree branches */}
            <line x1="200" y1="35" x2="120" y2="110" stroke="#0071e3" strokeWidth="2" />
            <line x1="200" y1="35" x2="280" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            
            <line x1="120" y1="110" x2="60" y2="185" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="120" y1="110" x2="180" y2="185" stroke="#ff3b30" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="280" y1="110" x2="340" y2="185" stroke="#34c759" strokeWidth="2" />

            {/* Nodes */}
            {visualNodes.map((node) => {
              const isSelected = selectedTerm === node.role;
              let fill = '#18181b';
              let stroke = '#888';
              let textFill = '#fff';

              if (node.state === 'enode') {
                fill = '#0071e3';
                stroke = '#60a5fa';
              } else if (node.state === 'live') {
                fill = '#382806';
                stroke = '#f59e0b';
                textFill = '#fbbf24';
              } else if (node.state === 'pruned') {
                fill = '#22080a';
                stroke = '#ef4444';
                textFill = '#f87171';
              } else if (node.state === 'optimal') {
                fill = '#082512';
                stroke = '#22c55e';
                textFill = '#4ade80';
              }

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedTerm(node.role)}
                  className="cursor-pointer group"
                >
                  {/* Glowing ring if selected or enode */}
                  {(isSelected || node.state === 'enode') && (
                    <circle r="22" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.4" className="animate-pulse" />
                  )}

                  <circle
                    r="16"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isSelected ? 3 : 1.5}
                    className="transition-all duration-200 group-hover:scale-110"
                  />
                  <text y="4" fill={textFill} fontSize="9" fontWeight="bold" textAnchor="middle">
                    {node.name}
                  </text>
                  <text y="28" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    {node.role.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Grid of Formal Definitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TERMINOLOGY_ITEMS.map((item) => {
          const isSelected = selectedTerm === item.term;
          return (
            <div
              key={item.term}
              onClick={() => setSelectedTerm(item.term)}
              className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer apple-button ${
                isSelected
                  ? 'bg-white/[0.08] border-[#0071e3] shadow-lg shadow-[#0071e3]/20 -translate-y-1'
                  : 'apple-glass border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold">{item.symbol}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.term}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{item.definition}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
