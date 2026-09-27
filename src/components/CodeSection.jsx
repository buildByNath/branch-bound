import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Play, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState('heapq');
  const [copied, setCopied] = useState(false);
  const [consoleRun, setConsoleRun] = useState(false);

  const heapqCode = `import heapq

# Priority Queue (Min-Heap) for Live Nodes in LC Search
live_nodes = []

# heappush(heap, (bound, node_name))
# Store tuples: (bound, node) -> sorted automatically by smallest bound
heapq.heappush(live_nodes, (18, "Campus"))
heapq.heappush(live_nodes, (11, "Hospital"))
heapq.heappush(live_nodes, (24, "Mall"))

print("Live nodes initialized in min-heap.")

# LC Search Expansion Loop
while live_nodes:
    # heappop extracts the LIVE node with LEAST COST / BOUND
    bound, node = heapq.heappop(live_nodes)
    
    print(f"Selecting E-Node: {node:<10} with Bound: {bound}")
    
    # In full Branch and Bound:
    # 1. Branch into children
    # 2. Compute each child's lower bound
    # 3. Prune child if child_bound >= current_best
    # 4. Push remaining promising children into live_nodes`;

  const skeletonCode = `def lc_branch_and_bound(root):
    """
    Generic Educational Control Skeleton for LC Branch & Bound
    """
    best = initial_best_solution()  # Incumbent (upper bound)
    live = []                        # Priority Queue (Min-Heap)

    push(live, root)

    while live:
        # 1. LC Search Rule: Extract live node with minimum bound
        node = pop_least_cost(live)

        # 2. Pruning check against current best
        if bound(node) >= cost(best):
            continue

        # 3. Check if node is complete feasible solution
        if is_complete(node):
            if cost(node) < cost(best):
                best = node  # Update Incumbent
        else:
            # 4. Branch subproblem into children
            for child in branch(node):
                child_bound = bound(child)

                # Pruning test before adding to live queue
                if child_bound < cost(best):
                    push(live, child)

    return best`;

  const functionGlossary = [
    { fn: 'bound(node)', desc: 'Evaluates node potential via admissible lower bound function' },
    { fn: 'branch(node)', desc: 'Divides problem into smaller child subproblems' },
    { fn: 'is_complete(node)', desc: 'Checks if partial solution represents a full feasible route' },
    { fn: 'cost(solution)', desc: 'Evaluates exact cost of a complete candidate solution' },
    { fn: 'pop_least_cost(live)', desc: 'Performs the LC Selection via priority queue min-heap' },
  ];

  const handleCopy = () => {
    const text = activeTab === 'heapq' ? heapqCode : skeletonCode;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Chapter header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#0071e3]">
          Implementation
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Code-Level LC Selection
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
          Explore how Python’s <span className="font-mono text-[#60a5fa]">heapq</span> data structure naturally realizes Least-Cost Search with <span className="font-mono text-white">O(log n)</span> priority queue operations.
        </p>
      </div>

      {/* Code Editor Window */}
      <div className="rounded-3xl apple-glass border border-white/10 overflow-hidden shadow-2xl mb-12">
        
        {/* Editor Tab Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03] gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('heapq')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'heapq'
                  ? 'bg-[#0071e3] text-white font-bold'
                  : 'text-white/60 hover:text-white bg-white/5'
              }`}
            >
              python_heapq_lc.py
            </button>
            <button
              onClick={() => setActiveTab('skeleton')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeTab === 'skeleton'
                  ? 'bg-[#0071e3] text-white font-bold'
                  : 'text-white/60 hover:text-white bg-white/5'
              }`}
            >
              generic_solver_skeleton.py
            </button>
          </div>

          <div className="flex items-center space-x-3">
            {activeTab === 'heapq' && (
              <button
                onClick={() => setConsoleRun(!consoleRun)}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-medium hover:bg-emerald-500/30 transition-all apple-button"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{consoleRun ? 'Hide Output' : 'Simulate Run'}</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/70 hover:text-white transition-all apple-button flex items-center gap-1 text-xs font-mono"
              title="Copy code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-[#0a0a0c]">
          <pre className="text-white/90">
            <code>{activeTab === 'heapq' ? heapqCode : skeletonCode}</code>
          </pre>
        </div>

        {/* Simulated Interactive Output Console (for heapq) */}
        {activeTab === 'heapq' && consoleRun && (
          <div className="p-6 bg-black border-t border-white/10 font-mono text-xs text-white/90 space-y-2">
            <div className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#34c759]" />
              Terminal Output (Python 3.11 Runtime)
            </div>
            <div className="text-emerald-400">$ python lc_search_heapq.py</div>
            <div className="text-white/60">Live nodes initialized in min-heap.</div>
            <div className="text-yellow-300">Selecting E-Node: Hospital   with Bound: 11  &lt;-- LEAST-COST FIRST</div>
            <div className="text-white/80">Selecting E-Node: Campus     with Bound: 18</div>
            <div className="text-white/80">Selecting E-Node: Mall       with Bound: 24</div>
            <div className="text-emerald-400">[Process finished with exit code 0]</div>
          </div>
        )}
      </div>

      {/* Heap Data-Structure Pipeline Concept Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl apple-glass border border-white/10 text-center space-y-2">
          <div className="text-xs font-mono uppercase text-[#0071e3] font-bold">1. heapq.heappush()</div>
          <div className="text-lg font-bold text-white">Inserts Live Node</div>
          <p className="text-xs text-white/60">Preserves min-heap property in <span className="font-mono text-white">O(log n)</span> time.</p>
        </div>

        <div className="p-6 rounded-2xl apple-glass border border-white/10 text-center space-y-2">
          <div className="text-xs font-mono uppercase text-[#34c759] font-bold">2. heapq.heappop()</div>
          <div className="text-lg font-bold text-white">Extracts Smallest Bound</div>
          <p className="text-xs text-white/60">Guarantees the least-cost candidate is processed next.</p>
        </div>

        <div className="p-6 rounded-2xl apple-glass border border-white/10 text-center space-y-2">
          <div className="text-xs font-mono uppercase text-[#af52de] font-bold">3. E-Node Focus</div>
          <div className="text-lg font-bold text-white">Expands Promising Paths</div>
          <p className="text-xs text-white/60">Prunes children whose bounds exceed current best.</p>
        </div>
      </div>

      {/* Glossary of Functions for Generic Skeleton */}
      <div className="p-8 rounded-3xl apple-glass border border-white/10 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#0071e3]" />
          Component Subroutines in the Generic Skeleton
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {functionGlossary.map((g) => (
            <div key={g.fn} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="font-mono font-bold text-xs text-[#60a5fa] block mb-1">{g.fn}</span>
              <span className="text-xs text-white/70">{g.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/40 pt-2 font-mono">
          Disclaimer: This is a generic educational skeleton. The concrete implementation varies per optimization domain (TSP, 0/1 Knapsack, Vertex Cover).
        </p>
      </div>
    </section>
  );
}
