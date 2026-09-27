import React from 'react';
import { Layers, ArrowDownUp, CheckCircle, XCircle, Award, Target, HelpCircle } from 'lucide-react';

export default function LiveNodePanel({ currentStepData }) {
  const { liveNodes, prunedNodes, eNode, currentBest, phase } = currentStepData;

  return (
    <div className="space-y-6">
      
      {/* Top Status Indicators: Incumbent & Current E-Node */}
      <div className="grid grid-cols-2 gap-3">
        
        {/* Incumbent (Current Best) Box */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
          <div className="text-[10px] uppercase font-mono tracking-wider text-white/50 flex items-center gap-1">
            <Award className="w-3 h-3 text-[#34c759]" />
            Current Best (Incumbent)
          </div>
          <div className="text-base font-bold font-mono text-[#34c759]">
            {currentBest}
          </div>
          <div className="text-[10px] text-white/40">Upper cutoff threshold</div>
        </div>

        {/* Selected E-Node Box */}
        <div className="p-4 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/30 space-y-1">
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#60a5fa] flex items-center gap-1">
            <Target className="w-3 h-3 text-[#0071e3]" />
            Current E-Node Focus
          </div>
          <div className="text-base font-bold text-white truncate">
            {eNode}
          </div>
          <div className="text-[10px] text-white/50">Node selected for expansion</div>
        </div>
      </div>

      {/* Live Nodes Min-Heap Priority Queue */}
      <div className="p-5 rounded-2xl apple-glass border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#f59e0b]" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Live Priority Queue (Min-Heap)
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
            {liveNodes.length} live
          </span>
        </div>

        {liveNodes.length === 0 ? (
          <div className="py-6 text-center text-xs text-white/40 font-mono border border-dashed border-white/10 rounded-xl">
            Queue is empty • Algorithm terminated
          </div>
        ) : (
          <div className="space-y-2">
            {liveNodes.map((item, idx) => {
              const isSelected = item.status === 'selected';
              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between text-xs font-mono ${
                    isSelected
                      ? 'bg-[#0071e3]/20 border-[#0071e3] text-white'
                      : 'bg-white/[0.03] border-white/10 text-white/80'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-white block">{item.name}</span>
                      <span className="text-[10px] text-white/40 font-sans">{item.path}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-bold text-[#f59e0b]">
                      b={item.bound}
                    </span>
                    {isSelected && (
                      <span className="px-2 py-0.5 rounded bg-[#0071e3] text-white text-[9px] font-bold">
                        LEAST-COST
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Pruned Nodes Summary */}
      {prunedNodes.length > 0 && (
        <div className="p-4 rounded-2xl bg-red-500/[0.06] border border-red-500/20 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
            <XCircle className="w-3.5 h-3.5" />
            <span>Pruned Subproblems ({prunedNodes.length})</span>
          </div>
          <div className="space-y-1.5">
            {prunedNodes.map((p, i) => (
              <div key={i} className="text-xs text-white/70 flex items-center justify-between">
                <span className="font-medium text-white">{p.name} (b={p.bound})</span>
                <span className="text-[10px] font-mono text-red-300">{p.reason}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
