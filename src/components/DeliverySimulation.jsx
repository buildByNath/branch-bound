import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, SkipForward, SkipBack, RotateCcw, 
  Sparkles, CheckCircle2, AlertCircle, Info, ChevronRight, Compass
} from 'lucide-react';
import { SIMULATION_STEPS } from '../data/algorithmSteps';
import StateSpaceVisualizer from './StateSpaceVisualizer';
import LiveNodePanel from './LiveNodePanel';

export default function DeliverySimulation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < SIMULATION_STEPS.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2600);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stepData = SIMULATION_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < SIMULATION_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section id="simulation" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#34c759]">
          Interactive Simulator
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Smart Delivery Planning
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          Step through an entire execution of LC Search on a state-space tree. Watch nodes get generated, evaluated, selected, and pruned in real time.
        </p>

        {/* Academic Disclaimers required by Section 20 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/70">
          <Info className="w-3.5 h-3.5 text-[#0071e3]" />
          <span>Illustrative LC Search Example • Demonstrating selection and pruning mechanics</span>
        </div>
      </div>

      {/* Main Simulation Console */}
      <div className="rounded-3xl apple-glass border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Step Progress & Phase Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0071e3]/20 text-[#60a5fa] border border-[#0071e3]/40 text-[11px] font-mono font-bold">
                STATE {stepData.state} OF 9
              </span>
              <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                {stepData.phase}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {stepData.title}
            </h3>
            <p className="text-xs text-white/60">{stepData.subtitle}</p>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed apple-button"
              aria-label="Previous step"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-5 py-2.5 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] flex items-center gap-2 text-xs font-semibold shadow-lg shadow-[#0071e3]/25 apple-button"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === SIMULATION_STEPS.length - 1}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed apple-button"
              aria-label="Next step"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white apple-button ml-2"
              title="Reset simulation"
              aria-label="Reset simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Scrubber Dots */}
        <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
          {SIMULATION_STEPS.map((s, idx) => {
            const isCurrent = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(idx);
                }}
                className={`py-2 px-1 rounded-lg border text-center transition-all ${
                  isCurrent
                    ? 'bg-[#0071e3] border-[#60a5fa] text-white shadow-md'
                    : isCompleted
                    ? 'bg-white/10 border-white/20 text-white/80'
                    : 'bg-white/[0.02] border-white/5 text-white/40 hover:bg-white/5'
                }`}
              >
                <div className="text-[10px] font-mono font-bold leading-none">{idx}</div>
                <div className="text-[8px] uppercase tracking-tighter truncate hidden sm:block mt-1 font-mono">
                  {s.phase.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Centerpiece Layout: Tree Visualizer + Live Node Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Tree Canvas (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-black/50 border border-white/10 p-4 sm:p-6 relative overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs text-white/40 mb-2 font-mono">
              <span>STATE-SPACE TREE TOPOLOGY</span>
              <span>Minimization Problem</span>
            </div>

            {/* SVG Tree Component */}
            <StateSpaceVisualizer currentStepData={stepData} />

            {/* Tree Step Explanation Banner */}
            <div className="mt-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/80 leading-relaxed font-sans">
              <strong className="text-white">What is happening: </strong>
              {stepData.explanation}
            </div>
          </div>

          {/* Right Column: Live Node Priority Queue Panel (5 Cols) */}
          <div className="lg:col-span-5">
            <LiveNodePanel currentStepData={stepData} />
          </div>
        </div>
      </div>
    </section>
  );
}
