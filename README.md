# C++ Learning Hub

A comprehensive, interactive website for learning C++ programming, data structures, and algorithms. Built with Astro and React components for an optimal learning experience.

## 🎯 Features

- **Interactive Code Examples**: Copy, run, and explore C++ code with syntax highlighting
- **Comprehensive Curriculum**: From basic syntax to advanced algorithms and data structures
- **Modern UI**: Clean, responsive design with top navigation and sidebar navigation
- **React Components**: Interactive elements for enhanced learning experience
- **Progressive Learning Path**: Structured content that builds knowledge step by step

## 📚 Learning Sections

### C++ Basics
- Introduction to C++
- Variables and Data Types
- Control Structures (if, while, for)
- Functions
- Classes and Objects
- Pointers and References
- Memory Management

### Data Structures
- Arrays
- Vectors
- Linked Lists
- Stacks and Queues
- Trees
- Graphs
- Hash Tables

### Algorithms
- Sorting Algorithms
- Search Algorithms
- Recursion
- Dynamic Programming
- Greedy Algorithms
- Graph Algorithms
- String Algorithms

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd learning

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview the built site
npm run preview
```

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) - Fast, modern web framework
- **UI Components**: React with TypeScript
- **Styling**: CSS with modern layout techniques
- **Syntax Highlighting**: Prism.js for code examples
- **Fonts**: Inter font family for clean typography

## 📖 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   └── CodeExample.tsx
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Website pages
│   │   ├── index.astro    # Homepage
│   │   ├── basics/        # C++ basics section
│   │   ├── data-structures/ # Data structures section
│   │   └── algorithms/    # Algorithms section
│   └── assets/            # Project assets
├── astro.config.mjs       # Astro configuration
├── package.json
└── README.md
```

## 🎨 Key Components

### Layout Features
- **Top Navigation**: Easy access to main sections
- **Sidebar Navigation**: Detailed topic navigation
- **Responsive Design**: Works on desktop and mobile devices
- **Breadcrumb Navigation**: Clear location indicators

### Interactive Elements
- **Code Examples**: Interactive code blocks with copy functionality
- **Show/Hide Output**: Toggle between code and execution results
- **Syntax Highlighting**: Professional code presentation
- **Copy to Clipboard**: Easy code sharing and testing

## 🔧 Development

### Adding New Content

1. **New Section**: Create a new directory under `src/pages/`
2. **New Page**: Add `.astro` files with the standard layout
3. **Code Examples**: Use the `CodeExample` component for interactive code
4. **Navigation**: Update the sidebar in `Layout.astro`

### Code Example Component Usage

```jsx
<CodeExample 
  client:load
  title="Example Title"
  code={`your C++ code here`}
  explanation="Description of what the code does"
  output="Expected output (optional)"
/>
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Collapsible navigation on small screens
- Optimized reading experience across devices
- Touch-friendly interactive elements

## 🎓 Learning Philosophy

This website follows a hands-on learning approach:
- **Learn by Example**: Every concept is demonstrated with practical code
- **Progressive Complexity**: Start simple, build to advanced topics
- **Interactive Practice**: Encourage experimentation and modification
- **Real-world Applications**: Connect concepts to practical programming

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Add new learning content
- Improve existing examples
- Fix bugs or typos
- Enhance the user interface
- Suggest new features

## 📄 License

This project is open source and available under the MIT License.

## 🌟 Acknowledgments

- Built with [Astro](https://astro.build)
- Syntax highlighting by [Prism.js](https://prismjs.com)
- Typography using [Inter](https://rsms.me/inter/) font
- Icons and design inspiration from modern web practices
