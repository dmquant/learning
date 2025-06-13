# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a C++ Learning Hub - an interactive educational website built with Astro and React. The site provides comprehensive C++ programming tutorials from basic syntax to advanced competitive programming concepts, organized into 6 progressive levels (L1-L6).

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check TypeScript types
npx astro check
```

The development server runs at `http://localhost:4321`

## Architecture

### Technology Stack
- **Framework**: Astro 5.8+ with React integration
- **Language**: TypeScript with strict configuration
- **Styling**: CSS-in-JS with CSS custom properties for theming
- **Content**: Static site generation with `.astro` pages

### Project Structure
```
src/
├── layouts/Layout.astro          # Main layout with navigation & TOC
├── components/CodeExample.tsx    # Interactive code component
└── pages/                        # Learning content pages
    ├── index.astro              # Homepage with level overview
    ├── l1-syntax-basics/        # Level 1: C++ fundamentals
    ├── l2-algorithm-basics/     # Level 2: Core algorithms
    ├── l3-data-structures/      # Level 3: Data structures
    ├── l4-competitive/          # Level 4: Competitive programming
    ├── l5-advanced/             # Level 5: Advanced algorithms
    └── l6-expert/               # Level 6: Expert techniques
```

### Key Components

**Layout.astro** (`src/layouts/Layout.astro`):
- Global layout with responsive design
- Sidebar navigation with 6-level hierarchy
- Top navigation bar with breadcrumbs
- Table of contents generation
- Dark/light theme toggle
- Reading progress tracking

**CodeExample.tsx** (`src/components/CodeExample.tsx`):
- Interactive code blocks with syntax highlighting (Prism.js)
- Copy-to-clipboard functionality
- Toggle between code and output views
- Supports explanations and expected output

### Content Organization

Each level follows this structure:
- **Index page**: Overview with lesson cards showing difficulty, duration, and topics
- **Individual lessons**: Detailed content with code examples and explanations

Navigation hierarchy:
- L1: Syntax Basics (7 lessons) - Variables, functions, classes, pointers
- L2: Algorithm Basics (7 lessons) - Sorting, searching, recursion, DP
- L3: Data Structures (8 lessons) - Arrays, trees, graphs, hash tables
- L4: Competitive Programming (14 lessons) - STL, segment trees, advanced algorithms
- L5: Advanced Algorithms (7 lessons) - Graph theory, Union-Find, sweep line
- L6: Expert Level (10 lessons) - Combinatorics, advanced DP, balanced trees

### Styling System

Uses CSS custom properties for theming:
- Light/dark mode support via `data-theme` attribute
- Consistent color palette with CSS variables
- Responsive grid layouts for lesson cards
- Interactive hover effects and animations

## Content Development

### Adding New Lessons
1. Create `.astro` file in appropriate level directory (`l1-syntax-basics/`, etc.)
2. Use `Layout.astro` and import `CodeExample.tsx` for interactive code
3. Update sidebar navigation in `Layout.astro` if adding new pages
4. Follow existing naming conventions and URL structure

### CodeExample Usage
```astro
<CodeExample 
  client:load
  title="Example Title"
  code={`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`}
  explanation="Brief explanation of what this code demonstrates"
  output="Hello World!"
/>
```

### Responsive Design
The layout adapts to different screen sizes:
- Desktop: 3-column layout (sidebar, content, TOC)
- Tablet: Content only with collapsible sidebars
- Mobile: Stacked layout with hamburger menu

## Development Notes

- All pages use the shared `Layout.astro` for consistent navigation
- TypeScript is configured with strict mode
- Prism.js provides syntax highlighting for C++ code
- Interactive elements require `client:load` directive for React components
- The site is statically generated - no server-side rendering needed