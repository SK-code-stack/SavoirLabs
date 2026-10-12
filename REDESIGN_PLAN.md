# SavoirLabs Website Redesign Plan

## Executive Summary

This document outlines a complete redesign of the SavoirLabs Next.js website, transforming it from its current dark/red aesthetic to a clean, premium, modern design using the new color palette (#FFFFFF, #F6F6F6, #051824, #18BCB7, #2EE6D6).

---

## Part 1: Current State Analysis

### Project Overview
- **Framework:** Next.js 14.2.35 (App Router)
- **Styling:** Tailwind CSS 3.4.3 + Global CSS
- **Animation:** Framer Motion 11.0.0
- **3D Graphics:** Three.js (canvas effects)
- **Icons:** Lucide React
- **Forms:** EmailJS integration
- **Pages:** Home, Blog, Blog/[slug], FAQ

### Current Design Issues

#### 1. Visual Problems
| Issue | Location | Impact |
|-------|----------|--------|
| Excessive red glow effects | All interactive elements | Visual noise, poor hierarchy |
| Dark #050505 background with crimson accents | Entire site | Feels aggressive, not premium |
| Over-animated elements | Founder cards, hover states | Distracting, accessibility concerns |
| Inconsistent card styling | Services, Projects, Testimonials | Repetitive, hard to scan |
| Heavy font-weight-900 overuse | All headings | No clear hierarchy |
| Text-stroke effects | Hero headlines | Rendering issues on mobile |

#### 2. Content Problems
| Issue | Example | Impact |
|-------|---------|--------|
| Hyperbolic metrics | "99.999% SLA", "$14.2M Fraud Prevented" | Credibility concerns |
| Fictional case studies | "NexERP Automation Suite", "Global Logistics Corp" | Unverifiable |
| Generic AI-generated copy | "Architecting robust enterprise software..." | Lacks authenticity |
| Marketing buzzwords | "Revolutionary", "World-class", "Visionaries" | Sounds templated |
| Vague value propositions | "Precision-engineered with ultra-responsive UX" | No concrete benefits |

#### 3. Technical Problems
| Issue | Impact |
|-------|--------|
| Sitemap only includes homepage | Poor SEO discoverability |
| Three.js adds bundle weight | Performance impact |
| No prefers-reduced-motion support | Accessibility violation |
| Missing CAPTCHA on forms | Spam vulnerability |
| Images not optimized (WebP/AVIF) | Larger file sizes |
| No breadcrumb navigation | Poor UX on secondary pages |

### What's Working Well (Preserve)
- ✅ EmailJS contact form integration
- ✅ Blog system with structured data (JSON-LD)
- ✅ FAQ with search and filtering
- ✅ Project Estimator interactive tool
- ✅ Responsive mobile menu
- ✅ Dynamic metadata generation
- ✅ Google Analytics integration
- ✅ Next.js App Router architecture
- ✅ TypeScript implementation

---

## Part 2: New Design System

### Color Palette

```css
/* Primary Colors */
--white: #FFFFFF;           /* Primary background, cards */
--light-gray: #F6F6F6;      /* Secondary background, sections */
--dark-navy: #051824;       /* Primary text, headings, navbar */
--teal-primary: #18BCB7;    /* Primary accent, buttons, links */
--teal-light: #2EE6D6;      /* Secondary accent, hovers, gradients */

/* Derived Colors */
--teal-gradient: linear-gradient(135deg, #18BCB7 0%, #2EE6D6 100%);
--text-muted: #4A5568;      /* Secondary text */
--text-light: #718096;      /* Tertiary text, captions */
--border: #E2E8F0;          /* Subtle borders */
--border-hover: #18BCB7;    /* Border on interaction */
```

### Typography Scale

```css
/* Font Family */
--font-primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: "Outfit", "Inter", sans-serif; /* For major headings only */

/* Type Scale (Desktop) */
--text-display: 4rem / 1.1;     /* 64px - Hero headlines */
--text-h1: 3rem / 1.2;          /* 48px - Page titles */
--text-h2: 2.25rem / 1.25;      /* 36px - Section headings */
--text-h3: 1.5rem / 1.35;       /* 24px - Subsection headings */
--text-h4: 1.25rem / 1.4;       /* 20px - Card titles */
--text-body: 1.125rem / 1.7;    /* 18px - Body text */
--text-small: 1rem / 1.6;       /* 16px - Supporting text */
--text-caption: 0.875rem / 1.5; /* 14px - Metadata, labels */

/* Font Weights */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

### Spacing System

```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 5rem;     /* 80px */
--space-16: 6rem;     /* 96px */
--space-20: 8rem;     /* 128px */

/* Section Padding */
--section-padding-y: 6rem;      /* 96px vertical padding */
--section-padding-y-lg: 8rem;   /* 128px for emphasis sections */
--container-padding-x: 1.5rem;  /* 24px horizontal */
```

### Component Design Tokens

```css
/* Border Radius */
--radius-sm: 0.375rem;  /* 6px - buttons, inputs */
--radius-md: 0.5rem;    /* 8px - cards */
--radius-lg: 0.75rem;   /* 12px - modals */
--radius-xl: 1rem;      /* 16px - feature cards */
--radius-full: 9999px;  /* Pills, avatars */

/* Shadows */
--shadow-sm: 0 1px 2px rgba(5, 24, 36, 0.05);
--shadow-md: 0 4px 6px -1px rgba(5, 24, 36, 0.07), 0 2px 4px -2px rgba(5, 24, 36, 0.05);
--shadow-lg: 0 10px 15px -3px rgba(5, 24, 36, 0.08), 0 4px 6px -4px rgba(5, 24, 36, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(5, 24, 36, 0.1), 0 8px 10px -6px rgba(5, 24, 36, 0.05);
--shadow-teal: 0 4px 14px rgba(24, 188, 183, 0.25);

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Part 3: Page-by-Page Redesign

### Homepage Redesign

#### Section 1: Navigation (Navbar.tsx)
**Current:** Dark background, red accents, aggressive styling
**New Design:**
- Clean white background with subtle shadow on scroll
- Logo on left, navigation centered or right-aligned
- Primary CTA: Teal gradient button "Start a Project"
- Mobile: Clean slide-in menu, no dramatic animations

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]              Services  Work  About  Blog  FAQ  [CTA] │
└─────────────────────────────────────────────────────────────┘
```

#### Section 2: Hero (Hero.tsx)
**Current:** 3D canvas background, red glows, aggressive headline
**New Design:**
- Clean white/light gray background
- Left: Headline + subtext + 2 CTAs
- Right: Simple illustration OR subtle gradient shape (no 3D)
- Optional: One meaningful statistic below CTAs
- Remove: Stats bar, animated badges, ThreeCanvas

**Content Rewrite:**
```
Current: "PARTNER FOR YOUR DIGITAL FUTURE"
New: "Software that runs your business, built by engineers who understand it"

Current: "Architecting robust enterprise software, scalable AI infrastructure..."
New: "We build custom software, automate workflows, and implement AI solutions
      for growing companies. No templates. No agencies. Just engineering."
```

#### Section 3: Services (ServicesScroll.tsx)
**Current:** 3 service cards with filtering, heavy gradients
**New Design:**
- 3 clean service cards on light gray background
- Icon + Title + 2-3 sentence description + bullet points
- No filtering (unnecessary for 3 items)
- Subtle teal accents on hover
- "Learn more" text links (not buttons)

**Content Rewrite:**
```
Current: "Enterprise AI & ERP Automation: Custom ERPNext & Neural Workflow Engines"
New: "Business Automation
      We configure and customize ERPNext, build workflow automations,
      and connect your existing tools so your team spends less time on repetitive tasks.
      • ERPNext implementation and customization
      • Workflow automation with Python
      • System integrations (APIs, webhooks)"
```

#### Section 4: How We Work (ProcessTimeline.tsx)
**Current:** 4-phase timeline with animated progress bar
**New Design:**
- Horizontal 4-step process (desktop), vertical (mobile)
- Simple numbered circles with teal accent
- Clean icons, short descriptions
- No scroll-linked animations

```
[1. Discovery] → [2. Design] → [3. Build] → [4. Launch]
```

#### Section 5: Case Studies (Projects.tsx)
**Current:** 4 fictional projects with modals
**New Design:**
- 2-3 real projects (or clearly labeled as "Example Projects")
- Large image/screenshot + title + one-line result
- Click to expand inline (no modal)
- If fictional, add disclaimer: "Representative examples of our work"

**Content Rewrite:**
```
Current: "NexERP Automation Suite: +340% Workflow Efficiency"
New: "Workflow Automation for a Logistics Company
      We automated invoice processing and inventory updates,
      reducing manual data entry by 80%."
```

#### Section 6: Why Choose Us (NEW - Replace InteractiveShowcase)
**Current:** 4-tier clickable architecture showcase
**New Design:**
- Simple 3-column grid of differentiators
- Icon + heading + short paragraph
- Focus on real benefits, not technical jargon

```
[Engineers, Not Salespeople]    [Ownership & Transparency]    [Long-term Partnership]
We build your software          You own 100% of the code      We provide ongoing support
ourselves. No outsourcing.      and documentation.            and maintenance.
```

#### Section 7: Testimonials (Testimonials.tsx)
**Current:** 3 testimonials with 5-star ratings, fictional names
**New Design:**
- If real: Keep with real photos and company names
- If fictional: Remove entirely or replace with "Client feedback" without names
- Clean quote card design, no star ratings
- Maximum 2 testimonials

#### Section 8: Team/Founders (Founders.tsx)
**Current:** Founder cards with rotating animations, cyber halos
**New Design:**
- Simple 2-column layout
- Professional photo + name + title + short bio
- LinkedIn link only (remove GitHub, portfolio if not relevant)
- No animations

#### Section 9: Blog Preview (BlogPreview.tsx)
**Current:** 3-column grid with all blog posts
**New Design:**
- "Latest Insights" heading
- 2-3 article cards: Image + title + excerpt + date
- Clean card design with subtle hover
- "View all articles" link

#### Section 10: Project Estimator (ProjectEstimator.tsx)
**Current:** Interactive calculator with domain/scale selection
**New Design:**
- Simplify to single "Start a Project" form
- 3 fields: Name, Email, "Tell us about your project"
- OR keep estimator but with cleaner UI
- Remove fake timeline calculations

#### Section 11: Contact (ContactSection.tsx)
**Current:** Form with multiple fields, red styling
**New Design:**
- Two-column: Contact info left, form right
- Clean form: Name, Email, Message
- Teal submit button
- Company email and response time below

#### Section 12: Footer (Footer.tsx)
**Current:** Dark footer with SLA status badge
**New Design:**
- Clean white or light gray footer
- Logo + tagline
- Navigation links in columns
- Social links (only if active)
- Remove SLA status badge

---

### Blog Page (/blog) Redesign

**Current:** Featured article + grid, heavy gradients
**New Design:**
- Clean white background
- Simple heading: "Blog" or "Insights"
- Grid of article cards (2 columns desktop, 1 mobile)
- Each card: Image, category pill, title, excerpt, date
- Category filter as simple text tabs (not buttons)

---

### Blog Post (/blog/[slug]) Redesign

**Current:** Hero banner with cover image, gradient overlay
**New Design:**
- Clean article layout with good typography
- Title at top (large)
- Author, date, read time in one line
- Featured image below metadata
- Body content with proper heading hierarchy
- Related articles at bottom (2 cards)

---

### FAQ Page (/faq) Redesign

**Current:** Dark styling with search, category filters
**New Design:**
- Clean white background
- Simple heading: "Frequently Asked Questions"
- Accordion-style Q&A
- Keep search functionality
- Simplify category filters to 3-4 tabs
- Add contact CTA at bottom

---

## Part 4: Component Architecture

### New Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Site navigation
│   │   ├── Footer.tsx           # Site footer
│   │   └── Container.tsx        # Max-width wrapper
│   │
│   ├── sections/
│   │   ├── Hero.tsx             # Homepage hero
│   │   ├── Services.tsx         # Service cards (simplified)
│   │   ├── Process.tsx          # How we work (simplified)
│   │   ├── CaseStudies.tsx      # Project showcase
│   │   ├── WhyUs.tsx            # Differentiators (NEW)
│   │   ├── Testimonials.tsx     # Client quotes
│   │   ├── Team.tsx             # Founders/team
│   │   ├── BlogPreview.tsx      # Latest articles
│   │   ├── Contact.tsx          # Contact form
│   │   └── ProjectEstimator.tsx # (Keep or simplify)
│   │
│   ├── blog/
│   │   ├── ArticleCard.tsx      # Blog listing card
│   │   ├── ArticleContent.tsx   # Blog post body
│   │   └── RelatedArticles.tsx  # Related posts
│   │
│   ├── faq/
│   │   ├── FAQAccordion.tsx     # Q&A component
│   │   └── FAQSearch.tsx        # Search input
│   │
│   └── ui/
│       ├── Button.tsx           # Primary/secondary buttons
│       ├── Card.tsx             # Base card component
│       ├── Input.tsx            # Form inputs
│       ├── Badge.tsx            # Category pills
│       └── SectionHeading.tsx   # Consistent headings
```

### Components to Remove
- `ThreeCanvas.tsx` - Replace with static illustration or gradient
- `CustomCursor.tsx` - Unnecessary, accessibility concern
- `Preloader.tsx` - Remove boot animation
- `InteractiveShowcase.tsx` - Replace with simpler content

### Components to Simplify
- `ServicesScroll.tsx` → `Services.tsx` (remove filtering)
- `ProcessTimeline.tsx` → `Process.tsx` (static layout)
- `Projects.tsx` → `CaseStudies.tsx` (inline expansion)
- `Founders.tsx` → `Team.tsx` (remove animations)

---

## Part 5: Animation Strategy

### Guiding Principles
1. **Purposeful only** - Animations should communicate state changes or guide attention
2. **Subtle and fast** - 200-300ms max for micro-interactions
3. **Respect motion preferences** - Honor `prefers-reduced-motion`
4. **No decorative animations** - Remove rotating halos, breathing effects

### Allowed Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Page transitions | Fade in content | 200ms |
| Button hover | Background color shift | 150ms |
| Card hover | Subtle shadow increase, slight lift | 200ms |
| Mobile menu | Slide in from right | 250ms |
| Accordion expand | Height + opacity | 200ms |
| Form submission | Button loading state | N/A |
| Scroll reveal | Fade up (once, optional) | 300ms |

### Removed Animations
- ❌ Rotating founder card rings
- ❌ Breathing/pulsing effects
- ❌ Custom cursor effects
- ❌ 3D canvas background
- ❌ Boot/preloader sequence
- ❌ Marquee scrolling text
- ❌ Complex scroll-linked timeline
- ❌ Stats counter animations
- ❌ Excessive hover scaling

### Motion Accessibility

```tsx
// Add to globals.css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Part 6: SEO Improvements

### Technical SEO

| Task | Current State | Action |
|------|---------------|--------|
| Sitemap | Only homepage | Add all pages: /, /blog, /blog/*, /faq |
| Robots.txt | Basic | Keep as-is (already good) |
| Meta descriptions | Generic | Write unique descriptions per page |
| OG images | Missing for blog | Add og:image for all blog posts |
| Canonical URLs | Implemented | Keep as-is |
| Structured data | Good coverage | Add breadcrumb schema |

### Content SEO

| Page | Current Title | New Title |
|------|---------------|-----------|
| Home | "SavoirLabs \| Enterprise Software..." | "SavoirLabs - Custom Software & Automation for Growing Businesses" |
| Blog | "Blog \| SavoirLabs — Insights..." | "Blog - Software & Automation Insights \| SavoirLabs" |
| FAQ | "Frequently Asked Questions \| SavoirLabs" | "FAQ - Common Questions About Our Services \| SavoirLabs" |

### New Schema Markup

```json
// Add to homepage
{
  "@type": "WebSite",
  "name": "SavoirLabs",
  "url": "https://savoirlabs.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://savoirlabs.com/search?q={search_term}",
    "query-input": "required name=search_term"
  }
}

// Add breadcrumbs to blog posts
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "/blog" },
    { "@type": "ListItem", "position": 3, "name": "{{title}}", "item": "/blog/{{slug}}" }
  ]
}
```

---

## Part 7: Accessibility Requirements

### WCAG 2.1 AA Compliance

| Requirement | Current State | Action |
|-------------|---------------|--------|
| Color contrast | Some failures | Ensure 4.5:1 for text, 3:1 for large text |
| Keyboard navigation | Partial | Add visible focus states to all interactive elements |
| Screen reader | Basic | Add ARIA labels, live regions for dynamic content |
| Motion sensitivity | Not supported | Implement `prefers-reduced-motion` |
| Focus management | Missing | Trap focus in modals, return focus on close |
| Alt text | Partial | Add meaningful alt text to all images |
| Form labels | Present | Ensure all inputs have visible labels |
| Error messages | Basic | Add descriptive error messages with `aria-describedby` |

### Focus States

```css
/* Add to all interactive elements */
:focus-visible {
  outline: 2px solid #18BCB7;
  outline-offset: 2px;
}

/* Remove default outline only when focus-visible is supported */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## Part 8: Performance Considerations

### Current Performance Issues
1. Three.js library adds ~150KB to bundle
2. Framer Motion heavily used (keep but reduce)
3. Large founder/logo images (2.3MB logo)
4. No visible image optimization

### Performance Improvements

| Task | Impact | Priority |
|------|--------|----------|
| Remove Three.js | -150KB bundle size | High |
| Optimize images (WebP, sizing) | -2MB+ page weight | High |
| Lazy load below-fold images | Faster LCP | High |
| Reduce Framer Motion usage | Smaller bundle | Medium |
| Add font-display: swap | Faster text render | Medium |
| Preload critical fonts | Faster FCP | Low |

### Image Optimization

```tsx
// Use Next.js Image component with optimization
<Image
  src="/images/project.jpg"
  alt="Description"
  width={800}
  height={450}
  quality={80}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Bundle Analysis Target
- Current estimated: ~400-560KB
- Target: <300KB (excluding images)
- Remove: Three.js, CustomCursor, Preloader
- Keep but optimize: Framer Motion (tree-shake)

---

## Part 9: Content Rewriting Guidelines

### Voice & Tone
- **Clear over clever** - Plain language, no jargon
- **Specific over vague** - Real numbers, concrete examples
- **Confident not boastful** - State facts, avoid superlatives
- **Human not corporate** - First person, conversational

### Examples

| Section | Current Copy | Rewritten Copy |
|---------|--------------|----------------|
| Hero | "Architecting robust enterprise software, scalable AI infrastructure, and custom cloud-native solutions for high-impact global businesses." | "We build custom software and automate workflows for growing businesses. No templates. No offshore teams. Just experienced engineers working directly with you." |
| Services | "Custom ERPNext & Neural Workflow Engines with 99.8% Automation Accuracy" | "ERPNext Implementation: We configure ERPNext for your business and build custom automations to reduce manual work." |
| CTA | "Schedule Call" | "Start a conversation" or "Get in touch" |
| Stats | "350+ Enterprise Projects / 99.99% System Uptime" | Remove or replace with verifiable: "10+ years combined experience" |

### Content to Remove
- "World-class", "Revolutionary", "Cutting-edge"
- Unverifiable statistics ($14.2M, 340%, 99.999%)
- Fictional company names in case studies
- Technical jargon in marketing sections (gRPC, mTLS, Qdrant)

### Content to Add
- Real project examples (anonymized if needed)
- Team backgrounds and experience
- Clear pricing model explanation (hourly, project, retainer)
- Typical project timeline ranges with context

---

## Part 10: Risk Assessment & Migration

### Breaking Changes to Avoid

| Functionality | Risk | Mitigation |
|---------------|------|------------|
| EmailJS integration | None | Keep ContactSection logic |
| Blog routing | Low | Preserve /blog/[slug] structure |
| SEO/Schema | Medium | Maintain all existing schema markup |
| Analytics | None | Keep Google Analytics as-is |
| FAQ search | Low | Preserve filtering logic |

### Files That Must Be Preserved
- `src/lib/blogs.ts` - Blog content data
- `src/app/blog/[slug]/page.tsx` - Dynamic routing
- `src/app/sitemap.ts` - SEO (will be updated)
- `src/app/robots.ts` - SEO
- `.env.local` - EmailJS credentials

### Migration Strategy
1. **Phase 1:** Update Tailwind config with new colors
2. **Phase 2:** Create new UI components (Button, Card, etc.)
3. **Phase 3:** Redesign layout components (Navbar, Footer)
4. **Phase 4:** Rebuild homepage sections top to bottom
5. **Phase 5:** Redesign Blog and FAQ pages
6. **Phase 6:** Content rewriting
7. **Phase 7:** Testing and optimization

### Testing Checklist
- [ ] All links work correctly
- [ ] Contact form submits successfully
- [ ] Blog posts render correctly
- [ ] FAQ search and filter work
- [ ] Mobile responsive on all breakpoints
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Core Web Vitals passing
- [ ] All pages indexed in sitemap

---

## Part 11: File Changes Summary

### Files to Modify
| File | Changes |
|------|---------|
| `tailwind.config.js` | New color palette, typography scale |
| `globals.css` | New design tokens, remove old utilities |
| `layout.tsx` | Update metadata, remove Preloader/CustomCursor |
| `page.tsx` (home) | Restructure sections, new components |
| `Navbar.tsx` | Complete redesign |
| `Footer.tsx` | Complete redesign |
| `Hero.tsx` | Remove ThreeCanvas, simplify |
| `ServicesScroll.tsx` → `Services.tsx` | Simplify |
| `ProcessTimeline.tsx` → `Process.tsx` | Static layout |
| `Projects.tsx` → `CaseStudies.tsx` | Inline expansion |
| `Testimonials.tsx` | Simplify styling |
| `Founders.tsx` → `Team.tsx` | Remove animations |
| `BlogPreview.tsx` | Clean card design |
| `ContactSection.tsx` | New form styling |
| `ProjectEstimator.tsx` | Cleaner UI or simplify |
| `FAQClient.tsx` | Light theme styling |
| `blog/page.tsx` | Light theme |
| `blog/[slug]/page.tsx` | Clean article layout |
| `faq/page.tsx` | Light theme |
| `sitemap.ts` | Add all pages |

### Files to Delete
| File | Reason |
|------|--------|
| `ThreeCanvas.tsx` | Removing 3D graphics |
| `CustomCursor.tsx` | Unnecessary, accessibility |
| `Preloader.tsx` | Removing boot animation |
| `InteractiveShowcase.tsx` | Replacing with simpler content |

### Files to Create
| File | Purpose |
|------|---------|
| `src/components/ui/Button.tsx` | Reusable button |
| `src/components/ui/Card.tsx` | Base card component |
| `src/components/ui/Input.tsx` | Form inputs |
| `src/components/ui/SectionHeading.tsx` | Consistent headings |
| `src/components/ui/Container.tsx` | Max-width wrapper |
| `src/components/sections/WhyUs.tsx` | New differentiators section |

---

## Approval

This plan preserves all existing functionality (EmailJS, blog system, FAQ, SEO) while completely transforming the visual design from dark/aggressive to clean/premium.

**Estimated scope:** ~15-20 files to modify, 4 to delete, 6+ to create

**Next steps upon approval:**
1. Update Tailwind configuration with new design tokens
2. Create base UI components
3. Rebuild sections one by one
4. Rewrite content as we go

---

*Plan created: October 2026*
*Ready for user approval*
