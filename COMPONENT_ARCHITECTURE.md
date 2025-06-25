# Portfolio Component Architecture

This project has been refactored to follow Next.js best practices by breaking down a large monolithic page into smaller, reusable components.

## 🏗️ Project Structure

```
components/
├── layout/                 # Layout-related components
│   ├── navigation.tsx     # Fixed navigation header
│   ├── progress-bar.tsx   # Scroll progress indicator
│   ├── footer.tsx         # Footer component
│   └── index.ts           # Export barrel
├── sections/               # Page section components
│   ├── hero-section.tsx   # Landing/hero section
│   ├── about-section.tsx  # About me section
│   ├── skills-section.tsx # Skills and technologies
│   ├── education-section.tsx # Education and certificates
│   ├── experience-section.tsx # Work experience
│   ├── contact-section.tsx # Contact information
│   └── index.ts           # Export barrel
├── shared/                 # Reusable utility components
│   ├── animated-section.tsx # Animation wrapper
│   ├── skill-badge.tsx    # Individual skill badge
│   ├── parallax-background.tsx # Background effects
│   └── index.ts           # Export barrel
└── ui/                     # shadcn/ui components
    ├── badge.tsx
    ├── button.tsx
    └── card.tsx

lib/
├── data/                   # Data and constants
│   └── portfolio-data.ts  # Skills, projects, personal info
├── hooks/                  # Custom hooks
│   └── use-smooth-scroll.ts # Smooth scrolling behavior
└── utils.ts               # Utility functions

app/
├── page.tsx               # Main portfolio page (now clean!)
├── layout.tsx             # Root layout
└── globals.css            # Global styles
```

## 🎯 Key Improvements

### 1. **Separation of Concerns**

- **Layout components**: Handle navigation, progress tracking, and footer
- **Section components**: Each major section is its own component
- **Shared components**: Reusable UI elements and animations
- **Data separation**: Constants moved to dedicated files

### 2. **Better Maintainability**

- Each component has a single responsibility
- Easy to modify individual sections without affecting others
- Clear component boundaries and interfaces

### 3. **Improved Reusability**

- Components can be easily reused across different pages
- Shared animation logic centralized
- Consistent styling and behavior

### 4. **Enhanced Developer Experience**

- Smaller, focused files are easier to understand
- Better IntelliSense and code completion
- Easier debugging and testing

### 5. **Performance Benefits**

- Better tree-shaking potential
- Cleaner component hierarchy
- Easier to implement code splitting if needed

## 🔧 Usage

The main page now simply imports and composes the components:

```tsx
import { Navigation, ProgressBar, Footer } from "@/components/layout"
import { HeroSection, AboutSection /* ... */ } from "@/components/sections"
import { ParallaxBackground } from "@/components/shared"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <ParallaxBackground />
      <ProgressBar />
      <Navigation />

      <HeroSection />
      <AboutSection />
      {/* ... other sections */}

      <Footer />
    </div>
  )
}
```

## 📝 Data Management

Personal information, skills, and project data are centralized in `lib/data/portfolio-data.ts`:

```tsx
export const personalInfo = {
  name: "Nguyễn Huy Hoàng",
  title: "Full-Stack Developer & Control Engineering Graduate",
  // ...
}

export const skills = {
  programming: ["JavaScript", "TypeScript" /* ... */],
  // ...
}
```

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **shadcn/ui** for base UI components
- Consistent color scheme and spacing throughout

## 🚀 Next Steps

This architecture makes it easy to:

- Add new sections by creating components in `components/sections/`
- Modify existing sections without touching other parts
- Extract common patterns into shared components
- Add more pages while reusing existing components
- Implement proper testing for individual components

The codebase now follows Next.js best practices and is much more maintainable and scalable.
