/**
 * Algorithm state machine data for Smart Delivery Planning
 * Following Section 17-20 & Section 36 of prompt.md:
 * States 0 through 9
 */

export const SIMULATION_STEPS = [
  {
    state: 0,
    title: "Initial Problem State (Root Node)",
    subtitle: "Warehouse Dispatch Center",
    phase: "INITIALIZATION",
    description: "The initial root node represents the dispatch origin with an admissible baseline bound estimate (Bound = 10). No branching has occurred yet.",
    currentBest: "∞ (None)",
    eNode: "Warehouse (Root)",
    liveNodes: [
      { id: "root", name: "Warehouse", bound: 10, status: "live", path: "Start", note: "Root problem node" }
    ],
    prunedNodes: [],
    explanation: "At the start of Branch and Bound, the root problem is created and its lower bound is computed. It enters the live-node priority queue.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "enode" }
      ],
      edges: []
    }
  },
  {
    state: 1,
    title: "Branching: First Step Decisions",
    subtitle: "Branching to Immediate Deliveries",
    phase: "BRANCH",
    description: "The root node is branched into two candidate delivery sectors: Route A (Campus) and Route B (Hospital). Subproblems are systematically divided.",
    currentBest: "∞ (None)",
    eNode: "Warehouse (Processed)",
    liveNodes: [
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Generated partial route" },
      { id: "hospital", name: "Hospital", bound: 11, status: "live", path: "Warehouse → Hospital", note: "Generated partial route" }
    ],
    prunedNodes: [],
    explanation: "Branching divides the original dispatch problem into smaller subproblems by committing to the first stop.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "live" }
      ],
      edges: [
        { from: "root", to: "campus", label: "+18" },
        { from: "root", to: "hospital", label: "+11" }
      ]
    }
  },
  {
    state: 2,
    title: "Calculate Bounds for Child Nodes",
    subtitle: "Estimating Remaining Cost Potential",
    phase: "BOUND",
    description: "Admissible lower bounds are estimated: Campus is bounded at 18, while Hospital is bounded at 11. Remember: Bound ≠ Final Answer!",
    currentBest: "∞ (None)",
    eNode: "Selecting Next...",
    liveNodes: [
      { id: "hospital", name: "Hospital", bound: 11, status: "live", path: "Warehouse → Hospital", note: "Promising lower bound" },
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Higher bound estimate" }
    ],
    prunedNodes: [],
    explanation: "The bound estimates how good a complete route can still become. Because 11 < 18, the Hospital route holds greater potential.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "live" }
      ],
      edges: [
        { from: "root", to: "campus", label: "b=18" },
        { from: "root", to: "hospital", label: "b=11" }
      ]
    }
  },
  {
    state: 3,
    title: "Live-Node Evaluation (Least-Cost Comparison)",
    subtitle: "Min-Heap / Priority Queue Inspection",
    phase: "LEAST-COST SELECTION",
    description: "Live nodes are compared: Campus has bound 18, Hospital has bound 11. The Least-Cost Search rule dictates expanding the minimum bound first.",
    currentBest: "∞ (None)",
    eNode: "Hospital (Selected)",
    liveNodes: [
      { id: "hospital", name: "Hospital", bound: 11, status: "selected", path: "Warehouse → Hospital", note: "Minimum bound among live nodes" },
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Remains in priority queue" }
    ],
    prunedNodes: [],
    explanation: "LC (Least-Cost) Search selects the live node with the smallest bound (Hospital with bound 11) for immediate expansion.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "enode" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "root", to: "hospital", label: "11 (Selected)", active: true }
      ]
    }
  },
  {
    state: 4,
    title: "E-Node Expansion: Branching Hospital",
    subtitle: "Hospital Becomes Active E-Node",
    phase: "EXPANSION",
    description: "Hospital is extracted from the live queue and becomes the E-node (Expansion Node). It branches into Mall (bound 14) and Airport (bound 30).",
    currentBest: "∞ (None)",
    eNode: "Hospital (Expanding)",
    liveNodes: [
      { id: "mall", name: "Mall", bound: 14, status: "live", path: "Hospital → Mall", note: "Child node generated" },
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Live in queue" },
      { id: "airport", name: "Airport", bound: 30, status: "live", path: "Hospital → Airport", note: "Child node generated" }
    ],
    prunedNodes: [],
    explanation: "Hospital is now dead (processed). Its newly generated children 'Mall' and 'Airport' enter the live list alongside 'Campus'.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "dead" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "live" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "live" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "root", to: "hospital", label: "11" },
        { from: "hospital", to: "mall", label: "+3 (b=14)" },
        { from: "hospital", to: "airport", label: "+19 (b=30)" }
      ]
    }
  },
  {
    state: 5,
    title: "Select Next E-Node: Mall (Bound = 14)",
    subtitle: "LC Chooses Smallest Across All Live Branches",
    phase: "LEAST-COST SELECTION",
    description: "The live nodes are Mall (14), Campus (18), and Airport (30). Notice that Mall has the least cost (14 < 18 < 30). Mall is selected as the next E-node.",
    currentBest: "∞ (None)",
    eNode: "Mall (Selected)",
    liveNodes: [
      { id: "mall", name: "Mall", bound: 14, status: "selected", path: "Hospital → Mall", note: "Least cost (14)" },
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Live node (18)" },
      { id: "airport", name: "Airport", bound: 30, status: "live", path: "Hospital → Airport", note: "Live node (30)" }
    ],
    prunedNodes: [],
    explanation: "LC Search does not greedily stick to one path if another branch has lower cost; here Mall is the globally minimum live node.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "dead" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "enode" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "live" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "root", to: "hospital", label: "11" },
        { from: "hospital", to: "mall", label: "14", active: true },
        { from: "hospital", to: "airport", label: "30" }
      ]
    }
  },
  {
    state: 6,
    title: "Feasible Solution Found: Cost = 20",
    subtitle: "Incumbent / Current Best Established",
    phase: "SOLUTION DISCOVERY",
    description: "Mall branches to complete the route via Tech Park. This yields the first complete feasible solution with exact Cost = 20. Incumbent is set to 20!",
    currentBest: "20 (Route: W→H→M→Tech)",
    eNode: "Tech Park (Complete)",
    liveNodes: [
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "Bound 18 < Current Best 20" },
      { id: "airport", name: "Airport", bound: 30, status: "live", path: "Hospital → Airport", note: "Bound 30 ≥ Current Best 20" }
    ],
    prunedNodes: [],
    explanation: "A complete solution of cost 20 has been found. Any live or future node with bound ≥ 20 can never beat this solution and must be pruned!",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "dead" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "dead" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "live" },
        { id: "techpark", label: "Tech Park", bound: 20, x: 60, y: 88, status: "solution" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "root", to: "hospital", label: "11" },
        { from: "hospital", to: "mall", label: "14" },
        { from: "hospital", to: "airport", label: "30" },
        { from: "mall", to: "techpark", label: "Cost=20 ✓", active: true }
      ]
    }
  },
  {
    state: 7,
    title: "Pruning: Bound ≥ Current Best (30 ≥ 20)",
    subtitle: "Eliminating Non-Promising Subproblems",
    phase: "PRUNING",
    description: "Airport has bound 30. Since 30 ≥ 20 (Current Best), Airport cannot possibly contain a route better than 20. Airport is PRUNED immediately!",
    currentBest: "20 (Route: W→H→M→Tech)",
    eNode: "Pruning Airport Node",
    liveNodes: [
      { id: "campus", name: "Campus", bound: 18, status: "live", path: "Warehouse → Campus", note: "18 < 20 (Kept live)" }
    ],
    prunedNodes: [
      { id: "airport", name: "Airport", bound: 30, reason: "Bound (30) ≥ Current Best (20)" }
    ],
    explanation: "Pruning eliminates entire subtrees without exploring them. We save significant time and computational power by discarding the Airport branch.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "live" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "dead" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "dead" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "pruned" },
        { id: "techpark", label: "Tech Park", bound: 20, x: 60, y: 88, status: "solution" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "root", to: "hospital", label: "11" },
        { from: "hospital", to: "mall", label: "14" },
        { from: "hospital", to: "airport", label: "30 (PRUNED)", pruned: true },
        { from: "mall", to: "techpark", label: "Cost=20 ✓" }
      ]
    }
  },
  {
    state: 8,
    title: "Next LC Selection: Campus (Bound = 18)",
    subtitle: "Exploring Remaining Live Node",
    phase: "LEAST-COST SELECTION",
    description: "The only live node is Campus (bound 18). Since 18 < 20, it is still potentially better than our current best solution. Campus is chosen as E-node.",
    currentBest: "20 (Route: W→H→M→Tech)",
    eNode: "Campus (Selected)",
    liveNodes: [
      { id: "campus", name: "Campus", bound: 18, status: "selected", path: "Warehouse → Campus", note: "18 < 20, must be investigated" }
    ],
    prunedNodes: [
      { id: "airport", name: "Airport", bound: 30, reason: "Bound (30) ≥ Current Best (20)" }
    ],
    explanation: "Because the bound is an optimistic estimate, Campus could theoretically lead to an 18-cost route. Therefore, it must be expanded.",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "dead" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "enode" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "dead" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "dead" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "pruned" },
        { id: "techpark", label: "Tech Park", bound: 20, x: 60, y: 88, status: "solution" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18 (Selected)", active: true },
        { from: "root", to: "hospital", label: "11" },
        { from: "hospital", to: "mall", label: "14" },
        { from: "hospital", to: "airport", label: "30", pruned: true },
        { from: "mall", to: "techpark", label: "Cost=20 ✓" }
      ]
    }
  },
  {
    state: 9,
    title: "Termination: Global Optimal Solution Verified",
    subtitle: "Optimal Delivery Route Confirmed (Cost = 20)",
    phase: "TERMINATION",
    description: "Campus branches into final deliveries, yielding actual cost = 22. Since 22 ≥ 20, this branch is pruned! Live queue is now empty. The algorithm halts.",
    currentBest: "20 (GLOBAL OPTIMUM)",
    eNode: "None (Search Complete)",
    liveNodes: [],
    prunedNodes: [
      { id: "airport", name: "Airport", bound: 30, reason: "Bound (30) ≥ Current Best (20)" },
      { id: "campus_end", name: "Campus Subroute", bound: 22, reason: "Cost (22) ≥ Current Best (20)" }
    ],
    explanation: "All subproblems have either been expanded or mathematically proven sub-optimal and pruned. The route Warehouse → Hospital → Mall → Tech Park (Cost: 20) is GUARANTEED optimal!",
    tree: {
      nodes: [
        { id: "root", label: "Warehouse", bound: 10, x: 50, y: 15, status: "optimal" },
        { id: "campus", label: "Campus", bound: 18, x: 30, y: 40, status: "dead" },
        { id: "campus_sub", label: "End Route", bound: 22, x: 25, y: 65, status: "pruned" },
        { id: "hospital", label: "Hospital", bound: 11, x: 70, y: 40, status: "optimal" },
        { id: "mall", label: "Mall", bound: 14, x: 60, y: 65, status: "optimal" },
        { id: "airport", label: "Airport", bound: 30, x: 85, y: 65, status: "pruned" },
        { id: "techpark", label: "Tech Park", bound: 20, x: 60, y: 88, status: "optimal" }
      ],
      edges: [
        { from: "root", to: "campus", label: "18" },
        { from: "campus", to: "campus_sub", label: "22", pruned: true },
        { from: "root", to: "hospital", label: "11", optimal: true },
        { from: "hospital", to: "mall", label: "14", optimal: true },
        { from: "hospital", to: "airport", label: "30", pruned: true },
        { from: "mall", to: "techpark", label: "Optimal (20)", optimal: true }
      ]
    }
  }
];

export const TERMINOLOGY_ITEMS = [
  {
    term: "Root Node",
    symbol: "●",
    color: "blue",
    tag: "Start Point",
    definition: "The initial unexpanded node representing the complete, undivided problem before any branch decisions are made."
  },
  {
    term: "Live Node",
    symbol: "○",
    color: "amber",
    tag: "Candidate Subproblem",
    definition: "A generated node that has not yet been expanded or pruned. Live nodes are stored in the priority queue waiting for selection."
  },
  {
    term: "E-Node (Expansion Node)",
    symbol: "◆",
    color: "purple",
    tag: "Active Focus",
    definition: "The specific live node currently selected by the LC Search rule (least cost/bound) for branching into child nodes."
  },
  {
    term: "Dead Node",
    symbol: "⊘",
    color: "secondary",
    tag: "Retired",
    definition: "A node that will never be expanded again because all its children have already been generated, or it has been processed."
  },
  {
    term: "Pruned Node",
    symbol: "✕",
    color: "red",
    tag: "Eliminated",
    definition: "A node discarded without further exploration because its calculated bound cannot improve upon the current best solution (Bound ≥ Incumbent)."
  },
  {
    term: "Current Best (Incumbent)",
    symbol: "★",
    color: "green",
    tag: "Benchmark",
    definition: "The best complete feasible solution discovered so far. It acts as the upper cutoff threshold for all pruning decisions."
  }
];

export const COMPARISON_DATA = [
  {
    method: "Depth-First Search (DFS)",
    strategy: "Go deep into the tree first along a single path",
    queueType: "LIFO Stack",
    expansionOrder: "Deepest unvisited live node",
    optimizationSuitability: "May wander deep down terrible paths before finding a solution",
    badge: "Stack-based"
  },
  {
    method: "Breadth-First Search (BFS / FIFO)",
    strategy: "Explore all nodes level by level uniformly",
    queueType: "FIFO Queue",
    expansionOrder: "Shallowest unvisited live node",
    optimizationSuitability: "Explores all shallow subproblems regardless of their cost or promise",
    badge: "Queue-based"
  },
  {
    method: "Least-Cost (LC) Search",
    strategy: "Prioritize the most promising subproblem across the entire frontier",
    queueType: "Min-Heap / Priority Queue",
    expansionOrder: "Live node having the minimum cost / bound",
    optimizationSuitability: "Directs exploration directly toward the optimal solution, enabling early aggressive pruning",
    badge: "Priority Queue",
    highlight: true
  }
];

export const COMMON_MISTAKES = [
  {
    id: 1,
    mistake: "“The bound is the final answer.”",
    correction: "The bound is strictly an estimate or limit on the best possible solution reachable from a partial state. It is used to judge node potential and decide pruning, not as the final solution.",
    whyItMatters: "Thinking the bound is the answer confuses an optimistic lower bound with a completed feasible solution."
  },
  {
    id: 2,
    mistake: "“LC Search means the lowest final solution found so far.”",
    correction: "LC (Least-Cost) Search defines the selection rule for expanding live nodes. It picks the live node with the minimum bound. The 'current best' is called the Incumbent.",
    whyItMatters: "Conflating the selection policy with the global optimum hides how LC guides the search frontier."
  },
  {
    id: 3,
    mistake: "“Every generated node in the tree must eventually be explored.”",
    correction: "The core power of Branch and Bound is pruning! Any node whose bound is greater than or equal to the current best feasible solution is permanently discarded without expanding its subtree.",
    whyItMatters: "Without pruning, Branch and Bound would devolve into brute-force exhaustive enumeration."
  },
  {
    id: 4,
    mistake: "“Branch & Bound and Backtracking are exactly the same technique.”",
    correction: "While both search a state-space tree, Backtracking is typically DFS-based and guided by feasibility constraints (e.g., N-Queens). Branch and Bound specifically addresses optimization problems using bounding functions to prune non-optimal branches.",
    whyItMatters: "KTU university exams frequently test the exact conceptual boundary between Backtracking and Branch & Bound."
  }
];
