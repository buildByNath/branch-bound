import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Heart, GraduationCap, ChevronUp, ArrowUp } from 'lucide-react';

export default function ThankYou() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] text-center overflow-hidden">
      
      {/* Background soft ambient bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-[#0071e3]/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Minimalist Final Solution Tree Vector */}
        <div className="w-48 h-32 mx-auto">
          <svg viewBox="0 0 160 100" className="w-full h-full select-none overflow-visible">
            {/* Edges */}
            <line x1="80" y1="15" x2="40" y2="50" stroke="rgba(255,59,48,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="80" y1="15" x2="120" y2="50" stroke="#34c759" strokeWidth="2" />
            
            <line x1="120" y1="50" x2="95" y2="85" stroke="rgba(255,59,48,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="120" y1="50" x2="145" y2="85" stroke="#34c759" strokeWidth="2.5" />

            {/* Root */}
            <circle cx="80" cy="15" r="7" fill="#082512" stroke="#34c759" strokeWidth="1.5" />
            <text x="80" y="18" fill="#4ade80" fontSize="7" fontWeight="bold" textAnchor="middle">✓</text>

            {/* Left child pruned */}
            <circle cx="40" cy="50" r="6" fill="#20080a" stroke="#ff3b30" strokeWidth="1" />
            <text x="40" y="52.5" fill="#f87171" fontSize="6.5" textAnchor="middle">✕</text>

            {/* Right child selected */}
            <circle cx="120" cy="50" r="7" fill="#082512" stroke="#34c759" strokeWidth="1.5" />
            <text x="120" y="53" fill="#4ade80" fontSize="7" fontWeight="bold" textAnchor="middle">✓</text>

            {/* Left grandchild pruned */}
            <circle cx="95" cy="85" r="6" fill="#20080a" stroke="#ff3b30" strokeWidth="1" />
            <text x="95" y="87.5" fill="#f87171" fontSize="6.5" textAnchor="middle">✕</text>

            {/* Optimal solution leaf */}
            <circle cx="145" cy="85" r="9" fill="#0071e3" stroke="#60a5fa" strokeWidth="2" />
            <text x="145" y="88.5" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">★</text>
          </svg>
        </div>

        {/* Big Apple-Style Thank You */}
        <div className="space-y-3">
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
            THANK YOU
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-white/80">
            Branch and Bound with LC Search Algorithm
          </p>
        </div>

        {/* Academic Course Credits */}
        <div className="pt-4 pb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
            <GraduationCap className="w-4 h-4 text-[#0071e3]" />
            <span>Design and Analysis of Algorithms</span>
          </div>
          <div className="text-xs text-white/40 font-mono">
            Computer Science & Engineering Seminar
          </div>
        </div>

        {/* Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white font-medium transition-all apple-button active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Back to Introduction</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
