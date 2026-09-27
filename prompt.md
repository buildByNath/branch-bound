# Branch & Bound with LC Search — React Seminar Website
## Apple-Inspired Design + Vector-Art + Scroll-Driven Algorithm Visualization

## IMPORTANT — READ THIS FIRST

Build a **single-page, scroll-driven educational seminar website** for a KTU S5 CSE seminar on:

# **Branch & Bound with LC (Least-Cost) Search Algorithm**

The website must combine:

1. **Apple-inspired design quality and interaction principles**
2. **Modern vector/SVG artwork**
3. **Scroll-driven storytelling**
4. **Animated state-space tree visualization**
5. **KTU PCCST502 syllabus-aligned theory**
6. **Code-level algorithm explanation**
7. **A polished seminar/presentation experience**

The result should feel like:

> **An Apple-quality interactive learning experience for an algorithms seminar.**

It must NOT look like a normal PPT converted into a website.

---

# 0. ANTIGRAVITY / APPLE DESIGN SKILL — MANDATORY

There is an external design skill repository associated with this project:

**https://github.com/emilkowalski/skills/tree/main/skills**

The project may contain an installed Antigravity/agent skill based on this repository.

## Before implementing the UI

Inspect the project's agent skills directory.

Expected structure:

```text
project-root/
├── .agent/
│   └── skills/
│       └── <exact-installed-apple-design-skill-name>/
│           └── SKILL.md
├── src/
├── public/
├── package.json
└── ...
```

### Important folder naming rule

Do NOT invent a different skill name.

If the repository provides a skill folder specifically for Apple-style design, copy/use that skill using its **exact repository folder name**.

If the installed skill is named:

```text
apple-design
```

then use:

```text
.agent/skills/apple-design/SKILL.md
```

If it has another name, preserve that exact name.

### Mandatory instruction for the coding agent

Before writing the interface:

1. Inspect `.agent/skills/`.
2. Identify the installed Apple/design skill.
3. Read its `SKILL.md` and any directly referenced required files.
4. Apply the skill's design and implementation guidance.
5. Do not merely mention the skill — actually use its recommendations.
6. If the skill conflicts with this prompt on a purely visual detail, use the skill's implementation guidance while preserving the educational content and overall website structure specified here.
7. Do not copy Apple's website, logos, proprietary assets, or branding. Use **Apple-inspired principles**, not a clone.

The Apple design skill should influence:
- visual hierarchy
- typography
- spacing
- composition
- restraint
- interaction quality
- motion
- transitions
- responsive behavior
- component polish
- micro-interactions
- perceived quality

---

# 1. ACADEMIC SOURCE — KTU PCCST502

This website is for:

- University: APJ Abdul Kalam Technological University (KTU)
- Semester: S5
- Course: Design and Analysis of Algorithms
- Course Code: **PCCST502**
- Scheme: KTU 2024 Scheme
- Module: **Module 4**

The supplied KTU syllabus explicitly lists:

> **Branch and Bound – Control Abstraction, Travelling Salesman Problem, Algorithm**

The same Module 4 also includes:
- Tractable and Intractable Problems
- P, NP, NP-Hard and NP-Complete
- Clique and Vertex Cover
- Approximation Algorithms – Bin Packing
- Monte Carlo and Las Vegas algorithms
- Randomized Quick Sort with analysis

This website is specifically a seminar website for:

# **Branch & Bound with LC Search**

Do NOT turn the website into a complete Module 4 website.

TSP may be mentioned as the KTU syllabus context/example for Branch and Bound, but the central teaching objective is understanding **Branch and Bound + LC Search itself**.

---

# 2. ACADEMIC ACCURACY — VERY IMPORTANT

Use this seminar-level definition:

> **Branch and Bound is an algorithm design technique for solving optimization problems by systematically dividing the solution space into smaller subproblems (branching), computing a bound on the best solution that can be obtained from each subproblem, and eliminating/pruning subproblems that cannot improve the current best solution.**

Explain:

## Branch

> Dividing a problem into smaller subproblems by making decisions step by step.

## Bound

> An estimate or limit on the best solution that can still be obtained from a partial solution.

## Pruning

> Eliminating a subproblem when its bound shows that it cannot improve the current best feasible solution.

For a **minimization problem**:

```text
Bound >= Current Best
        ↓
      PRUNE
```

A smaller bound is more promising.

### Critical clarification

Do NOT say:

> "The bound is the answer."

Instead:

> **The bound is used to estimate the potential of a node and decide whether it is worth exploring.**

The exact bounding method depends on the optimization problem.

---

# 3. LC SEARCH — CENTRAL CONCEPT

Use this definition prominently:

> **LC (Least-Cost) Search selects the live node having the least cost/bound for expansion.**

Important terminology:

### State-Space Tree
Represents possible subproblems or partial solutions.

### Root Node
The initial problem.

### Live Node
A generated node that has not yet been expanded or discarded/pruned.

### E-node / Expansion Node
The live node selected for expansion.

### Dead Node
A node that will no longer be expanded because it has been processed or pruned.

### Current Best / Incumbent
The best feasible complete solution found so far.

Do NOT confuse:
- LC Search with DFS
- LC Search with BFS
- bound with exact solution cost
- Branch and Bound with Backtracking

---

# 4. APPLE-INSPIRED DESIGN DIRECTION

Use the design skill as guidance and aim for an extremely polished, restrained interface.

## Design philosophy

The visual language should communicate:

> **Clarity. Simplicity. Precision. Depth.**

Do not make it flashy just for the sake of being flashy.

Use:
- generous whitespace
- strong typographic hierarchy
- large hero typography
- carefully controlled content width
- minimal chrome
- subtle borders
- soft depth
- elegant cards
- restrained gradients
- precise alignment
- beautiful SVG illustrations
- smooth transitions
- subtle micro-interactions

The website should feel **premium and intentional**.

---

# 5. APPLE-STYLE VISUAL RULES

## Typography

Use a clean modern system sans-serif stack.

Prefer something similar to:

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Display",
  "SF Pro Text",
  "Inter",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

Do not depend on downloading proprietary fonts.

Use typography with strong hierarchy:

```text
Huge hero title
        ↓
Section title
        ↓
Short explanation
        ↓
Small supporting detail
```

Avoid dense paragraphs.

---

# 6. COLOR SYSTEM

Use a restrained palette.

Primary direction:

- near-white / soft white backgrounds
- deep charcoal/black text
- subtle gray secondary text
- one carefully selected accent color
- optional subtle accent gradients

Do NOT create a rainbow website.

The accent should be used primarily for:
- selected LC node
- important algorithm state
- active scroll indicator
- branch highlighting
- pruning status
- key keywords

The algorithm visualization should remain visually coherent.

---

# 7. SPACING AND COMPOSITION

Use generous whitespace.

Do not cram content into cards.

Prefer:

```text
        large whitespace

             TITLE

       short explanation

       visual interaction

        large whitespace
```

Sections should feel like **cinematic chapters**, not stacked Bootstrap cards.

Use a constrained content width.

For large desktop displays:
- wide visual canvas
- readable text column
- centered composition

---

# 8. MOTION DESIGN

Motion is extremely important.

Use scroll-driven storytelling, but keep it elegant.

Preferred technologies:

- Framer Motion / Motion for React
- GSAP + ScrollTrigger for complex timelines
- CSS transforms for simple interactions

Do not unnecessarily use multiple animation systems on the same element.

Motion should feel:
- smooth
- physically believable
- purposeful
- restrained
- responsive

Avoid:
- excessive bouncing
- spinning everything
- constant floating objects
- random particle effects
- flashy transitions
- animation that blocks reading

Every animation must communicate a concept.

---

# 9. SCROLL EXPERIENCE

The page should feel like one continuous story.

Suggested progression:

```text
0%   → Hero
10%  → Why Branch and Bound?
20%  → Branch
30%  → Bound
40%  → Pruning
50%  → LC Search
60%  → Interactive Example
75%  → Control Abstraction
82%  → Code
90%  → Revision
100% → Thank You
```

Use sticky visual areas where appropriate.

Example:

```text
┌────────────────────────────────────────────┐
│                                            │
│  Explanation          Animated Diagram    │
│                                            │
│  text changes          visualization       │
│  while scrolling       changes             │
│                                            │
└────────────────────────────────────────────┘
```

This should feel like a guided interactive explanation.

---

# 10. HERO SECTION

Large title:

# BRANCH & BOUND

Subtitle:

### LC (Least-Cost) Search Algorithm

Supporting question:

> **How can we search a huge solution space without exploring everything?**

Create an elegant animated state-space tree:

```text
                  ●
                /   \
              ●       ●
            /  \     /  \
           ●    ●   ●    ●
```

The tree should progressively grow as the user scrolls.

Use subtle vector elements.

Do not overwhelm the hero.

Add:

**Scroll to explore ↓**

---

# 11. WHY DO WE NEED BRANCH AND BOUND?

Do not immediately show a textbook definition.

Tell a visual story.

Start with:

```text
              Problem
                 |
        +--------+--------+
        |        |        |
       P1       P2       P3
      / \      / \      / \
     ...      ...      ...
```

Then make the tree grow.

Text:

> A problem may have many possible solutions.

Then:

> Exploring every possibility can become expensive.

Then show some branches fading.

Introduce:

> **Branch and Bound reduces unnecessary exploration by using bounds to identify unpromising subproblems.**

Use Apple-style large text + small supporting text.

---

# 12. BRANCH SECTION

Title:

# Branch

Show:

```text
                 PROBLEM
                    |
          +---------+---------+
          |         |         |
         P1        P2        P3
```

Definition:

> **Branching divides the original problem into smaller subproblems by making decisions step by step.**

Animate the branches being created.

Each branch should visually represent a different choice.

Use a meaningful vector scenario such as:
- delivery decision
- resource allocation
- planning choice

Do not make the whole explanation dependent on TSP.

---

# 13. BOUND SECTION

This should be one of the most visually polished sections.

Title:

# Bound

Show a partial solution.

```text
Partial solution
      |
      + Current information
      |
      + Best possible remaining contribution
      |
      v
     Bound
```

Then show an elegant animated comparison:

```text
Current Best = 20

A     Bound 12     ✓
B     Bound 18     ✓
C     Bound 27     ×
D     Bound 31     ×
```

Explain:

> A bound estimates how good a solution could still become from a partial solution.

Highlight:

# Bound ≠ Final Answer

This should be visually prominent.

---

# 14. PRUNING SECTION

Title:

# Prune the Impossible-to-Improve

Show:

```text
Current Best = 20

A → 12
B → 18
C → 27  ×
D → 31  ×
```

Animate C and D being faded and removed.

Show:

```text
Bound >= Current Best
          ↓
        PRUNE
```

Explanation:

> If the best possible result from a branch cannot beat the current best feasible solution, there is no reason to explore that branch.

Make the pruning animation elegant:
- branch becomes muted
- line becomes dashed
- node fades
- `PRUNED` appears briefly
- remaining nodes become visually clearer

---

# 15. LC SEARCH SECTION

Now reveal the main idea.

Title:

# Least-Cost Search

Show a premium live-node panel:

```text
LIVE NODES

A        18
B        11   ←
C        24
D        15
```

Question:

> **Which node should we expand next?**

Animate the comparison.

Then:

```text
11
↓
SELECT
```

Definition:

> **LC Search selects the live node having the least cost/bound for expansion.**

Show:

```text
Branch
   ↓
Calculate Bound
   ↓
Create Live Nodes
   ↓
Select Least-Cost Node
   ↓
Expand
   ↓
Repeat
```

---

# 16. STATE-SPACE TERMINOLOGY

Create a beautiful interactive legend.

```text
● Live
◆ E-node
× Pruned / Dead
```

Explain:

### Root Node
Starting state.

### Live Node
Generated but not yet expanded or discarded.

### E-node
Currently selected for expansion.

### Dead Node
No longer available for expansion.

Use the actual animated tree to demonstrate these states rather than only using text.

---

# 17. MAIN INTERACTIVE EXAMPLE

This is the centerpiece of the website.

## Scenario

Use:

# Smart Delivery Planning

The purpose is to demonstrate **LC Search behavior**, not to solve TSP.

Do not use only boring A/B/C/D labels.

Use meaningful names in the visible UI where possible, for example:

```text
Warehouse
Campus
Hospital
Mall
```

However, keep the underlying state-space representation simple enough to understand.

---

# 18. EXAMPLE — STAGE 1

Start:

```text
                 START
                /     \
          Campus      Hospital
            18            11
```

Text:

> Two possible decisions are available.

Then:

> LC Search compares the live nodes.

Show:

```text
Campus     18
Hospital   11
```

Animate Hospital becoming the E-node.

Explain:

> **11 is smaller than 18, so Hospital is selected for expansion.**

---

# 19. EXAMPLE — STAGE 2

Expand Hospital:

```text
                    START
                   /     \
            Campus:18   Hospital:11
                       /          \
                Mall:14        Airport:30
```

Live-node panel:

```text
Campus     18
Mall       14
Airport    30
```

Then:

> **Mall becomes the next E-node because 14 is the least cost among the live nodes.**

---

# 20. EXAMPLE — STAGE 3

Continue the process.

Every scroll stage must show:

1. Current state-space tree
2. Current live nodes
3. Current costs/bounds
4. Least-cost selection
5. E-node
6. Expansion
7. New child nodes
8. Pruning where applicable

The viewer should literally see the algorithm making decisions.

### IMPORTANT

All displayed values must be internally consistent.

If the values are only being used to demonstrate the LC selection mechanism and are not derived from a complete optimization problem, label the example:

> **Illustrative LC Search Example**

Do not present arbitrary values as mathematically derived bounds.

---

# 21. FULL LC SEARCH ANIMATION

Create a cinematic full-screen sequence:

```text
                BRANCH
                   ↓
          Generate subproblems
                   ↓
                 BOUND
                   ↓
          Estimate potential
                   ↓
                PRUNE
                   ↓
       Remove non-promising nodes
                   ↓
            LEAST-COST
                   ↓
        Select best live node
                   ↓
                EXPAND
                   ↓
                REPEAT
```

Animate each stage as the user scrolls.

Final center statement:

# Branch → Bound → Select → Prune → Repeat

---

# 22. KTU-LEVEL CONTROL ABSTRACTION

After the visual explanation, transition into formal academic content.

Title:

# Control Abstraction

Use:

```text
LC_Branch_And_Bound(root)

1. Create the root node.
2. Compute its bound/cost.
3. Insert the root into the live-node structure.
4. While live nodes are available:
      a. Select the live node with least cost/bound.
      b. Remove it from the live-node structure.
      c. If it represents a complete feasible solution:
             update the current best solution if necessary.
         Otherwise:
             branch the node into child subproblems.
             compute a bound for each child.
             prune children that cannot improve
             the current best solution.
             insert remaining children into the live-node structure.
5. Return the best solution.
```

Add:

> The exact bound function, branching operation, feasibility test, and solution test depend on the optimization problem.

Present this like an interactive code/documentation section, not a boring paragraph.

---

# 23. CODE-LEVEL LC SELECTION

The website MUST include actual code.

Use Python for clarity.

```python
import heapq

live_nodes = []

heapq.heappush(live_nodes, (18, "Campus"))
heapq.heappush(live_nodes, (11, "Hospital"))
heapq.heappush(live_nodes, (24, "Mall"))

while live_nodes:
    bound, node = heapq.heappop(live_nodes)

    print("Expand:", node, "Bound:", bound)

    # Generate children here
    # Calculate their bounds
    # Prune children that cannot improve
    # Push promising children into the heap
```

Animate the important relationship:

```text
heappush()
     ↓
add live node

heappop()
     ↓
remove smallest bound

smallest bound
     ↓
least-cost live node
     ↓
E-node
```

Explain:

> The priority queue is used here to demonstrate the LC selection mechanism.

IMPORTANT:

Do not claim that this snippet is a complete TSP or complete Branch and Bound solver.

---

# 24. GENERIC CODE SKELETON

Show:

```python
def lc_branch_and_bound(root):
    best = initial_best_solution()
    live = []

    push(live, root)

    while live:
        node = pop_least_cost(live)

        if bound(node) >= cost(best):
            continue

        if is_complete(node):
            if cost(node) < cost(best):
                best = node
        else:
            for child in branch(node):
                child_bound = bound(child)

                if child_bound < cost(best):
                    push(live, child)

    return best
```

Explain the functions:

```text
bound()
    → evaluates node potential

branch()
    → creates child subproblems

is_complete()
    → checks whether a full solution exists

cost()
    → evaluates a feasible solution

pop_least_cost()
    → performs LC selection
```

Add:

> This is a generic educational skeleton. The exact implementation depends on the optimization problem.

---

# 25. DFS VS BFS VS LC SEARCH

Keep this concise.

| Method | Node selection |
|---|---|
| DFS | Go deep first |
| BFS | Explore level by level |
| LC Search | Expand least-cost live node |

Visual:

```text
DFS
↓
DEPTH

BFS
↓
LEVEL

LC SEARCH
↓
LEAST COST
```

Make LC visually prominent.

---

# 26. COMMON MISTAKES

Create an Apple-style interactive correction section.

### Mistake 1

**“Bound is the final answer.”**

Correction:

> Bound is an estimate/limit used to judge the potential of a node.

### Mistake 2

**“LC means the lowest final solution found so far.”**

Correction:

> LC selects the least-cost live node for expansion.

### Mistake 3

**“Every generated node must be explored.”**

Correction:

> Branch and Bound can prune nodes that cannot improve the current best solution.

### Mistake 4

**“Branch and Bound and Backtracking are exactly the same.”**

Correction:

> They are related state-space techniques, but Branch and Bound uses bounds to guide/prune optimization search.

---

# 27. KTU QUICK REVISION

Create a premium revision section.

```text
BRANCH
Break the problem into subproblems.

BOUND
Estimate the best possible result from a node.

PRUNE
Discard nodes that cannot improve the current best.

LC SEARCH
Choose the least-cost live node.

E-NODE
Node currently being expanded.

LIVE NODE
Generated but not yet expanded/pruned.

DEAD NODE
No longer available for expansion.
```

One-line definition:

> **LC Branch and Bound explores a state-space tree by repeatedly expanding the least-cost live node and pruning nodes whose bound cannot lead to a better solution.**

---

# 28. FINAL TAKEAWAY

The state-space tree should now show many unnecessary branches faded out.

Text:

> **Branch smart.**
>
> **Bound early.**
>
> **Explore the most promising live node first.**

Then:

# BRANCH & BOUND
## LC Search

---

# 29. THANK-YOU SECTION

Final visual:

```text
                         ✓
                       /   \
                     ×       ✓
                           /   \
                         ×     ★
```

Large:

# THANK YOU

Subtitle:

> Branch and Bound with LC Search Algorithm

Footer:

> Design and Analysis of Algorithms — PCCST502

Use a calm final animation.

Do not overcrowd it.

---

# 30. APPLE-STYLE MICRO-INTERACTIONS

Add subtle interactions such as:

- cards gently responding to pointer movement
- node highlighting
- smooth focus transitions
- buttons with tactile hover/press feedback
- subtle elevation changes
- animated progress indicator
- smooth section transitions
- elegant code highlighting
- subtle cursor/pointer effects only where useful

Do NOT overuse these.

The interface should feel confident and quiet.

---

# 31. FIXED NAVIGATION

Use a minimal floating/fixed navigation.

Example:

```text
01 Intro
02 Branch
03 Bound
04 Prune
05 LC
06 Example
07 Algorithm
08 Code
09 Summary
```

Include:
- scroll progress
- active section indicator
- back-to-top control

Navigation should remain visually quiet.

---

# 32. RESPONSIVE DESIGN

Support:

- Desktop
- Laptop
- Tablet
- Mobile

On mobile:
- preserve the storytelling
- convert two-column layouts into vertical layouts
- keep state-space trees readable
- allow horizontal code scrolling
- reduce animation complexity
- never depend on hover
- preserve typography hierarchy

---

# 33. ACCESSIBILITY

Implement:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- accessible controls
- sufficient contrast
- meaningful ARIA labels where needed
- `prefers-reduced-motion`

If reduced motion is enabled:

> Keep the same information and visual states, but reduce or remove large movement.

---

# 34. PERFORMANCE

The website should feel extremely smooth.

Use:
- transform/opacity animations where possible
- optimized SVGs
- lazy loading where useful
- efficient React rendering
- avoid unnecessary re-renders
- avoid huge image assets
- avoid scroll listeners that run expensive work on every frame
- use Intersection Observer or animation libraries appropriately

The page must not become slow because of its animations.

---

# 35. REACT ARCHITECTURE

Use a modular structure:

```text
src/
├── components/
│   ├── Hero.jsx
│   ├── WhyBranchBound.jsx
│   ├── BranchSection.jsx
│   ├── BoundSection.jsx
│   ├── PruningSection.jsx
│   ├── LCSearchSection.jsx
│   ├── StateSpaceVisualizer.jsx
│   ├── LiveNodePanel.jsx
│   ├── AlgorithmSection.jsx
│   ├── CodeSection.jsx
│   ├── ComparisonSection.jsx
│   ├── MistakesSection.jsx
│   ├── SummarySection.jsx
│   └── ThankYou.jsx
│
├── data/
│   └── algorithmSteps.js
│
├── App.jsx
├── main.jsx
└── index.css
```

Do NOT create one giant `App.jsx`.

---

# 36. SCROLL STATE ARCHITECTURE

For the main LC visualization, use explicit states:

```text
STATE 0 → Root
STATE 1 → Branch
STATE 2 → Bounds appear
STATE 3 → Live-node list
STATE 4 → Least-cost selected
STATE 5 → Node expanded
STATE 6 → New children
STATE 7 → Pruning
STATE 8 → Next least-cost selection
STATE 9 → Final result
```

Map scroll progress to these states.

The animation should communicate the algorithm's logical progression.

---

# 37. DESIGN QUALITY CHECKLIST

Before considering the site finished, verify:

### Apple-inspired quality
- [ ] Typography feels premium
- [ ] Spacing is intentional
- [ ] Visual hierarchy is obvious
- [ ] Motion is restrained
- [ ] Interactions feel polished
- [ ] No visual clutter
- [ ] No unnecessary gradients/effects
- [ ] Responsive layouts are elegant

### Academic quality
- [ ] KTU PCCST502 terminology is used
- [ ] Branch and Bound definition is correct
- [ ] LC Search definition is correct
- [ ] Bound is not incorrectly described as the final answer
- [ ] Live/E/Dead nodes are explained
- [ ] Pruning rule is correctly stated for minimization
- [ ] Control abstraction is included
- [ ] Code-level explanation is included
- [ ] TSP is treated as KTU context, not the only explanation
- [ ] Illustrative example values are internally consistent

### Animation quality
- [ ] Every animation teaches something
- [ ] Scroll progression feels natural
- [ ] No animation blocks reading
- [ ] Reduced-motion mode works
- [ ] Mobile remains usable

---

# 38. IMPORTANT CONTENT RULE

This is a **seminar learning website**, not merely a visual portfolio.

Before implementing an animation ask:

> **What concept does this animation communicate?**

If it does not teach anything, remove it.

Do not sacrifice academic clarity for visual effects.

---

# 39. FINAL EXPERIENCE

The finished website should feel like:

> **Apple-inspired interactive textbook + animated seminar presentation + algorithm visualization + visual code walkthrough**

The user should finish the page understanding:

```text
BRANCH
   ↓
Create subproblems

BOUND
   ↓
Estimate potential

PRUNE
   ↓
Remove branches that cannot improve

LEAST-COST
   ↓
Choose the most promising live node

EXPAND
   ↓
Generate new subproblems

REPEAT
```

Final central message:

# **LC Search chooses the least-cost live node for expansion.**

Build the website with **clarity first, visual excellence second, and decoration last**.
