import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, XCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { COMMON_MISTAKES } from '../data/algorithmSteps';

export default function MistakesSection() {
  const [openCard, setOpenCard] = useState(1);

  return (
    <section id="mistakes" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#ff9500]">
          Pitfalls & Corrections
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Common Misconceptions
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          Clarifying subtle semantic differences that frequently cost marks in University DAA viva and theory exams.
        </p>
      </div>

      {/* Accordion / Flashcard Cards */}
      <div className="space-y-4">
        {COMMON_MISTAKES.map((item) => {
          const isOpen = openCard === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden apple-glass ${
                isOpen ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header / Question bar */}
              <button
                onClick={() => setOpenCard(isOpen ? null : item.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block font-semibold">
                      Mistake #{item.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.mistake}
                    </h3>
                  </div>
                </div>
                
                <div className="p-1 rounded-full bg-white/5 text-white/60">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded Correction Box */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-[#34c759]/10 border border-[#34c759]/30 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono font-bold text-[#34c759] uppercase tracking-wider mb-1">
                          Accurate Correction
                        </div>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {item.correction}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-white/50 pl-4 border-l-2 border-white/10">
                      <strong className="text-white/70">Why this matters: </strong>
                      {item.whyItMatters}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
