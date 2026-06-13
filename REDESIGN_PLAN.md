# Sambandha Restaurant Website Redesign Plan

## Executive Summary
A comprehensive redesign of the Sambandha restaurant website to elevate the brand with a modern, elegant fine-dining aesthetic. The new design incorporates the modern logo (pot + handshake + text) with warm gold/orange tones, leveraging Apple-inspired design principles with cinematic animations.

---

## 1. PROJECT OVERVIEW

### Goals
- **Brand Elevation**: Position Sambandha as a premium fine-dining destination
- **Modern Aesthetics**: Implement luxury dark-mode design with warm accents
- **Cinematic Experience**: Use Framer Motion for smooth, engaging animations
- **Mobile Excellence**: Ensure seamless experience across all devices
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML

### Key Features
- Hero section with animated logo and cinematic background
- Smooth scroll animations between sections
- Elegant navigation with glass morphism effect
- Interactive gallery with hover effects
- Integrated reservation system (existing backend)
- Contact form with email integration
- Dark/light mode support via CSS variables
- Performance optimized with lazy loading

---

## 2. COLOR PALETTE

### CSS Variables (Light Mode - Default)
```css
--apple-black: #FAFAF8;           /* Warm cream background */
--apple-dark: #F0EBE3;             /* Light section background */
--apple-card: #FFFFFF;             /* Card background */
--apple-card-hover: #FDF5EC;       /* Card hover state */
--apple-text: #1C1510;             /* Dark warm brown text */
--apple-muted: #6B5C4E;            /* Muted text */
--apple-gold: #9B6B2E;             /* Dark gold accent */
--apple-border: rgba(155, 107, 46, 0.15);  /* Subtle borders */
--apple-shadow: rgba(28, 21, 16, 0.12);    /* Warm shadows */
```

### CSS Variables (Dark Mode)
```css
--apple-black: #000000;            /* OLED black background */
--apple-dark: #1a1108;             /* Dark brown section */
--apple-card: #1C1510;             /* Dark warm card */
--apple-card-hover: #221A12;       /* Card hover state */
--apple-text: #FAF7F2;             /* Warm cream text */
--apple-muted: #A8998A;            /* Muted cream text */
--apple-gold: #D4A574;             /* Warm gold accent */
--apple-border: rgba(212, 165, 116, 0.10);  /* Gold borders */
--apple-shadow: rgba(0, 0, 0, 0.6);         /* Dark shadows */
```

### Color Palette Semantics
- **Primary Background**: Warm cream (light) / OLED Black (dark)
- **Accent Color**: Warm gold (#9B6B2E light / #D4A574 dark) - logo inspiration
- **Tertiary Color**: Deep brown/red for highlights and overlays
- **Neutral Text**: High contrast for accessibility
- **Gradients**: Gold gradient for text emphasis (warm to deeper tones)

---

## 3. TYPOGRAPHY SYSTEM

### Heading Hierarchy
- **`.apple-headline`** - Hero/Main titles (clamp 2.5rem-7rem)
  - Font-weight: 600, letter-spacing: -0.025em
  - Usage: Page hero, section titles
  
- **`.apple-subhead`** - Subtitle/Section heads (clamp 1.5rem-3rem)
  - Font-weight: 600, letter-spacing: -0.018em
  - Usage: Section subtitles, cards
  
- **`.apple-title`** - Card titles (clamp 1.2rem-2rem)
  - Font-weight: 600, letter-spacing: -0.015em
  - Usage: Feature cards, menu items

### Body Text
- **`.apple-body`** - Default body text (17px)
  - Font-weight: 400, line-height: 1.65
  - Usage: Paragraphs, descriptions
  
- **`.apple-eyebrow`** - Labels/Tags (12px)
  - Font-weight: 600, letter-spacing: 0.15em, uppercase
  - Usage: Section labels, category tags

### Font Stack
```css
font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```
- Uses system fonts for best performance and native feel
- No web font loading required

---

## 4. SITE STRUCTURE & SECTIONS

### A. Navigation Header
**Component**: `<nav class="apple-nav">`
- **Desktop**: Horizontal menu with logo, navigation links, actions
- **Mobile**: Hamburger menu with slide-out navigation
- **Features**:
  - Sticky positioning with scroll-aware background
  - Glass morphism effect (backdrop blur)
  - Logo integrated (new pot + handshake design)
  - Active link indicator (gold underline)
  - Mobile hamburger with smooth animation
  - Responsive breakpoints: 768px toggle

**Nav Links**:
- Home
- About
- Menu
- Gallery
- Reservations
- Contact

### B. Hero Section (Home)
**Component**: `<section id="home" class="hero-section">`
- **Background**: Cinematic food photography with overlay gradient
- **Layout**: Vertical stack centered, full viewport height
- **Elements**:
  - Animated logo (scale/fade-in on load)
  - Main tagline: "Experience India in Japan"
  - Subheading: "Sambandha - Connection through Cuisine"
  - CTA buttons:
    - Primary: "Reserve Table" → smoothscroll to reservations
    - Secondary: "Explore Menu" → smoothscroll to menu
- **Animations**:
  - Logo: staggered scale + fade (400-600ms)
  - Text: staggered reveal from bottom (300-500ms delay)
  - Background: subtle parallax on scroll

### C. About Section
**Component**: `<section id="about" class="about-section">`
- **Layout**: Two-column (left image, right text) → stack on mobile
- **Content**:
  - Logo display area (large, centered top)
  - "About Sambandha" narrative
  - Core values cards:
    - Authentic Spices
    - Expert Chefs
    - Warm Ambiance
  - Chef's philosophy quote (serif, gold text)
- **Animations**:
  - Image: reveal on scroll with parallax
  - Text: staggered line reveals
  - Cards: staggered scale-up from bottom

### D. Featured Menu Preview
**Component**: `<section id="menu-preview" class="menu-preview-section">`
- **Layout**: Grid of 3-6 featured items (responsive to 2 cols on tablet, 1 col on mobile)
- **Each Card**:
  - High-quality food image (lazy loaded)
  - Dish name (serif/elegant)
  - Brief description
  - Price
  - "View Full Menu" link
- **Actions**:
  - Full menu links: Lunch, Dinner, Drinks
  - Each opens dedicated menu page or PDF
- **Animations**:
  - Cards: staggered fade-in + slide-up on scroll
  - Hover: subtle elevation (shadow increase) + image zoom
  - Links: gold underline animation

### E. Gallery Section
**Component**: `<section id="gallery" class="gallery-section">`
- **Layout**: Masonry grid (4 cols → 3 → 2 → 1 responsive)
- **Images**: 
  - Restaurant ambiance
  - Dish presentations
  - Team/Chef
  - Dining experience
  - All with alt text (accessibility)
  - Lazy loaded except above-fold
- **Interactive**:
  - Hover: image zoom + text overlay (dark gradient to text)
  - Click: lightbox modal (open in new tab for mobile)
- **Animations**:
  - Staggered fade-in as items scroll into view
  - Smooth zoom on hover (0.1s easing)

### F. Reservations Section
**Component**: `<section id="reservations" class="reservations-section">`
- **Layout**: Centered form with max-width 600px
- **Form Fields**:
  - Name (text)
  - Email (email)
  - Phone (tel)
  - Date (date picker)
  - Time (time picker)
  - Number of guests (select)
  - Special requests (textarea)
  - Submit button
- **UX**:
  - Client-side validation with error messages
  - Success notification modal
  - Disable submit during request
  - Loading spinner on submit
- **Backend**: Uses existing `/api/reservation` endpoint
- **Animations**:
  - Form: staggered field reveals on scroll
  - Focus: smooth border + shadow color change to gold
  - Submit: button loading animation (pulse)

### G. Contact Section
**Component**: `<section id="contact" class="contact-section">`
- **Layout**: Two columns (info grid + contact form)
- **Left Column** - Contact Info Cards:
  - Address
  - Phone
  - Email
  - Hours
  - Location map (embedded)
- **Right Column** - Contact Form:
  - Name, Email, Subject, Message
  - Similar validation/animations as reservations
- **Backend**: Uses existing `/api/contact` endpoint
- **Animations**:
  - Cards: staggered slide-up on scroll
  - Form: field-by-field reveal

### H. Footer
**Component**: `<footer class="footer">`
- **Content**:
  - Brand/copyright
  - Social links (Instagram, Facebook, Twitter)
  - Quick links
  - Newsletter signup (optional)
- **Layout**: Horizontal flex, responsive stack on mobile
- **Styling**: Dark background with warm accents
- **Animations**: Hover effects on links (gold color shift)

---

## 5. COMPONENT LIBRARY

### Core Components

#### Button Variants
```
.btn-primary
  - Background: gold
  - Text: white/cream
  - Hover: lighter gold
  - Padding: 15px 40px
  - Border-radius: 12px
  - Transition: 300-600ms ease

.btn-secondary
  - Background: transparent
  - Border: 2px solid gold
  - Text: gold
  - Hover: filled gold
  - Same dimensions
```

#### Card Component
```
.apple-card
  - Background: var(--apple-card)
  - Border: 1px solid var(--apple-border)
  - Border-radius: 18px
  - Transition: all 300ms
  - Hover: elevated shadow, border brightens
```

#### Form Inputs
```
input, select, textarea
  - Padding: 15px
  - Border: 1px solid var(--apple-border)
  - Border-radius: 12px
  - Transition: border-color 300ms
  - Focus: border changes to gold, shadow added
  - Font-size: 17px (prevents zoom on iOS)
```

#### Section Spacing
```
section {
  padding: 7rem 0;  /* via .apple-section */
}

@media (max-width: 768px) {
  section { padding: 4rem 0; }
}
```

---

## 6. ANIMATION STRATEGY

### Framer Motion Setup
- **Config**: 
  - Stagger: 0.06-0.1s between children
  - Duration: 300-600ms ease (cubic-bezier(0.22, 1, 0.36, 1))
  - Trigger: Scroll-based with `useInView`
- **Performance**:
  - GPU acceleration (transform/opacity only)
  - Respect `prefers-reduced-motion`
  - Lazy load animation library on first interaction

### Animation Categories

#### 1. Entrance Animations
- **Fade In**: opacity 0 → 1
- **Slide Up**: translateY(40px) → 0
- **Scale In**: scale(0.95) → 1
- **Staggered Children**: each child offset by 0.06-0.08s
- **Usage**: Hero, section titles, cards on scroll

#### 2. Hover/Interaction Animations
- **Elevation**: box-shadow increase + translateY(-2px)
- **Color Shift**: gold text/border on hover
- **Image Zoom**: scale(1.05-1.1) with `overflow: hidden`
- **Link Underline**: scaleX(0) → scaleX(1) from right to left
- **Duration**: 0.2-0.3s for snappy feel

#### 3. Micro-interactions
- **Button Click**: scale pulse (1 → 1.02 → 1)
- **Form Focus**: border glow, subtle shadow
- **Success Toast**: slide-down + fade-out
- **Loading Spinner**: rotate 360deg infinitely

#### 4. Parallax Effects
- **Hero Background**: slower scroll (0.5x viewport speed)
- **Gallery Images**: subtle translateY on scroll
- **Usage**: Limited to avoid distraction

### CSS Easing Functions
```css
/* Apple-like cubic bezier */
cubic-bezier(0.22, 1, 0.36, 1)   /* Spring-like ease */
cubic-bezier(0.4, 0, 0.2, 1)     /* Material ease-out */
ease, ease-in-out               /* Fallback */
```

---

## 7. RESPONSIVE DESIGN

### Breakpoints
```css
/* Mobile First */
base styles: 0px+
tablet: @media (min-width: 640px)
large: @media (min-width: 1024px)
xl: @media (min-width: 1440px)

/* Common breakpoints used */
768px: Nav toggle, form layout
1200px: Container max-width
1600px: Hero height, spacing adjustments
```

### Mobile-First Approach
1. **Base**: Single column, full-width (0px+)
2. **Tablet** (640px+): Two columns, adjusted spacing
3. **Desktop** (1024px+): Full layout, wider spacing
4. **Large Desktop** (1440px+): Premium spacing, larger text

### Touch Targets
- Minimum 44×44px for all interactive elements
- Adequate spacing between buttons (20px+ gap)
- Form inputs: 15px padding minimum
- Links: sufficient color contrast ratio (4.5:1+)

---

## 8. ACCESSIBILITY

### WCAG 2.1 AA Compliance
- **Semantic HTML**: `<section>`, `<article>`, `<main>`, `<nav>`, `<footer>`
- **Images**: All images have descriptive `alt` attributes
- **Color Contrast**: Text meets 4.5:1 minimum ratio
- **Interactive Elements**: 
  - Keyboard navigation supported
  - Focus states visible (gold outline)
  - `aria-label` on icon-only buttons
  - `role` attributes where needed
- **Forms**:
  - Labels associated with inputs (`for` attribute)
  - Error messages linked to fields
  - Required fields marked with `aria-required="true"`
- **Motion**:
  - Respects `prefers-reduced-motion` media query
  - No auto-playing videos
  - Animations disabled if user preference detected

### Screen Reader Support
- Landmarks properly marked
- Heading hierarchy correct (h1 → h2 → h3)
- Skip to main content link
- Form fields have labels
- Dynamic content updates announced

---

## 9. TECHNICAL SPECIFICATIONS

### Frontend Stack
- **HTML5**: Semantic structure
- **CSS3**: Custom properties (CSS variables), Grid/Flex
- **Tailwind CSS**: Utility-first (via globals.css)
- **Framer Motion**: Scroll & interaction animations
- **Font Awesome 6.4**: Icons (existing)

### Backend Integration
- **Node.js + Express**: Existing server.js
- **Nodemailer**: Email for reservations/contact
- **CORS + Body Parser**: Request handling
- **Environment**: EMAIL_USER, EMAIL_PASSWORD via .env

### Performance Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Lighthouse Score**: 85+

### Image Optimization
- WebP format with JPEG fallback
- Responsive sizes (srcset)
- Lazy loading (loading="lazy") except hero
- Compression: TinyPNG/ImageOptim
- CDN delivery recommended

---

## 10. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1)
- [ ] Set up new React/HTML structure (if converting from legacy)
- [ ] Implement color palette & typography system
- [ ] Create core components (Button, Card, Input, Section)
- [ ] Build responsive grid system
- [ ] Ensure accessibility baseline

### Phase 2: Structure (Week 2)
- [ ] Build Navigation (sticky, mobile-responsive)
- [ ] Hero section with logo animation
- [ ] About section with image + text
- [ ] Menu preview grid
- [ ] Gallery masonry layout

### Phase 3: Interactivity (Week 3)
- [ ] Add Framer Motion animations
- [ ] Implement scroll-triggered reveals
- [ ] Hover effects on cards/images
- [ ] Form validation & submission
- [ ] Toast notifications

### Phase 4: Polish (Week 4)
- [ ] Dark mode testing
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance optimization (image compression, code splitting)
- [ ] Accessibility audit (Axe DevTools)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Phase 5: Deployment & QA (Week 5)
- [ ] Production build
- [ ] Email service verification
- [ ] A/B testing setup
- [ ] Analytics implementation
- [ ] Launch & monitoring

---

## 11. DESIGN MOCKUP DESCRIPTIONS

### Hero Section Layout
```
┌─────────────────────────────────────┐
│                                     │
│        [Cinematic Background]       │
│     (restaurant/food image)         │
│                                     │
│    ┌──────────────────────────┐    │
│    │   [Animated Logo]        │    │
│    │   (pot + handshake)      │    │
│    │   "sambandha" text       │    │
│    └──────────────────────────┘    │
│                                     │
│    "Experience India in Japan"     │
│    Subtle subheading              │
│                                     │
│    ┌──────────┐  ┌──────────┐    │
│    │ Reserve  │  │ Menu     │    │
│    └──────────┘  └──────────┘    │
│                                     │
└─────────────────────────────────────┘
```

### About Section Layout (Desktop)
```
┌────────────────────────────────────────┐
│ ┌─────────────┐  ┌──────────────────┐ │
│ │   [Logo     │  │ About Sambandha  │ │
│ │   Large]    │  │                  │ │
│ │             │  │ Connection...    │ │
│ │             │  │ Sanskrit meaning │ │
│ │             │  │                  │ │
│ │             │  │ [Values Cards]   │ │
│ └─────────────┘  └──────────────────┘ │
└────────────────────────────────────────┘
```

### Menu Grid Layout
```
┌──────────────┬──────────────┬──────────────┐
│   [IMG]      │   [IMG]      │   [IMG]      │
│   Butter     │   Biryani    │   Tandoori   │
│   Chicken    │              │              │
├──────────────┼──────────────┼──────────────┤
│   [IMG]      │   [IMG]      │   [IMG]      │
│   Naan       │   Curry      │   Samosas    │
└──────────────┴──────────────┴──────────────┘
```

### Gallery Masonry (4 cols desktop → 2 cols mobile)
```
┌──────┬──────┬──────┬──────┐
│      │      │      │      │
│ [1]  │ [2]  │ [3]  │ [4]  │
│      │      │      │      │
├──────┼──────┼──────┼──────┤
│      │      │      │      │
│ [5]  │ [6]  │ [7]  │ [8]  │
│      │      │      │      │
└──────┴──────┴──────┴──────┘
```

---

## 12. LOGO INTEGRATION

### Logo Specifications
- **Design**: Modern pot + handshake (connection theme)
- **Color Palette**: Warm gold/orange tones (primary), cream accents
- **Placement**:
  - Navigation header (small, 40-60px)
  - Hero section (large, 200-300px)
  - About section (medium, 150-200px)
  - Footer (small, 40px)
- **Formats**: SVG (primary), PNG fallback
- **Animation**: Scale + fade on hero load (400-600ms)

### Logo Animation Logic
```javascript
const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

---

## 13. FORM SUBMISSION FLOW

### Reservation Form
```
User Input → Client Validation → Submit Button Disabled
→ Loading Spinner → POST /api/reservation
→ Success: Toast + Form Reset + Scroll to top
→ Error: Toast with error message
```

### Contact Form
```
User Input → Client Validation → POST /api/contact
→ Success/Error Toast → Form optional reset
```

### Email Integration
- Restaurant receives: Reservation details, customer contact
- Customer receives: Confirmation + callback promise
- Backend: Existing nodemailer setup in server.js

---

## 14. DARK MODE IMPLEMENTATION

### CSS Variable Strategy
All colors are CSS variables defined in `:root` with `@media (prefers-color-scheme: dark)` override.

**Light Mode** (default):
- Background: Warm cream (#FAFAF8)
- Text: Dark brown (#1C1510)
- Gold: Deep gold (#9B6B2E)
- Cards: White (#FFFFFF)

**Dark Mode** (user preference):
- Background: OLED black (#000000)
- Text: Warm cream (#FAF7F2)
- Gold: Bright warm gold (#D4A574)
- Cards: Dark warm (#1C1510)

### No JavaScript Toggle
- Uses native `prefers-color-scheme` media query
- Respects system setting automatically
- No page reload required
- Seamless transition via CSS transitions

---

## 15. PERFORMANCE OPTIMIZATIONS

### Code Splitting
- Lazy load Framer Motion on first scroll
- Dynamic imports for heavy components (gallery modal, menu PDF)
- Separate CSS for mobile vs. desktop (optional)

### Image Strategy
1. **Hero**: Background via CSS (srcset for different DPRs)
2. **Gallery**: 
   - Thumbnail: 300px × 300px (WebP, ~30KB)
   - Full: 800px × 600px (WebP, ~80KB)
   - Lazy load (loading="lazy")
3. **Optimizations**:
   - Remove metadata (exiftool)
   - Compress with cwebp/imagemin
   - Serve from CDN (Cloudflare, Bunny)

### CSS Optimization
- Minify Tailwind output
- Purge unused styles in production
- CSS variables for theming (no duplication)
- Inline critical CSS (above-fold styles)

### JavaScript
- Minify & compress Framer Motion
- Tree-shake unused utilities
- Defer non-critical scripts
- Use native APIs (Intersection Observer) for scroll triggers

---

## 16. TESTING CHECKLIST

### Visual Testing
- [ ] Light mode (all sections)
- [ ] Dark mode (all sections)
- [ ] Mobile (375px, 480px, 640px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1440px+)
- [ ] High DPI screens (2x, 3x)

### Functional Testing
- [ ] Navigation links scroll correctly
- [ ] Mobile hamburger opens/closes
- [ ] Form validation (required fields, email format)
- [ ] Form submission (success, error states)
- [ ] Links open in correct target (same vs. new tab)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Shift+Tab, Enter)
- [ ] Focus states visible
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (WebAIM checker)
- [ ] Alt text on all images
- [ ] ARIA labels on buttons

### Performance Testing
- [ ] Lighthouse score ≥ 85
- [ ] Load time < 3s (3G)
- [ ] Interaction to Paint < 100ms
- [ ] No layout shifts (CLS < 0.1)
- [ ] Image sizes optimized

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (iOS + macOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Samsung Internet (Android)

### Email Integration Testing
- [ ] Reservation form email sends correctly
- [ ] Contact form email sends correctly
- [ ] Customer receives confirmation
- [ ] Restaurant receives notification
- [ ] Email formatting is readable

---

## 17. DELIVERABLES

### Files to Create/Modify
1. **HTML Structure**:
   - `/src/index.html` (main page with all sections)
   - Navigation, hero, about, menu, gallery, reservations, contact, footer

2. **CSS Styling**:
   - `/src/styles/main.css` (new section-specific styles)
   - Override/extend `/src/app/globals.css` for custom animations
   - Responsive breakpoints (mobile, tablet, desktop)

3. **JavaScript/Animation**:
   - `/src/components/Hero.jsx` (if React)
   - `/src/components/Gallery.jsx`
   - `/src/hooks/useScrollAnimation.js` (Framer Motion scroll triggers)
   - Form submission handlers (reservation, contact)

4. **Assets**:
   - `/public/logo.svg` (new logo)
   - `/public/images/hero-bg.jpg` (hero background)
   - `/public/images/gallery/*.jpg` (gallery images)
   - `/public/images/menu-items/*.jpg` (featured dishes)

5. **Documentation**:
   - Design system guide (color palette, typography, components)
   - Animation specs (duration, easing, triggers)
   - Deployment checklist

---

## 18. NOTES & CONSIDERATIONS

### Existing Assets
- Keep existing backend (server.js with Nodemailer)
- Preserve email functionality
- Maintain restaurant contact info (phone, address, hours)
- Reuse existing menu structure (PDF links)

### Browser Support
- Modern browsers (Chrome 90+, Safari 14+, Firefox 88+)
- Graceful degradation for older browsers (no animations)
- Mobile-first ensures good experience on all sizes

### Future Enhancements
- Online ordering system
- Real-time reservation availability
- Instagram feed integration
- Live kitchen webcam
- Chef video interviews
- Recipe blog
- Email newsletter signup

### Brand Voice
- Premium, elegant, welcoming
- Emphasize "connection" (Sambandha meaning)
- Highlight authentic Indian cuisine + Japanese hospitality
- Use warm, inviting language
- Showcase chef expertise and ingredient quality

---

## NEXT STEPS

1. **Approval**: Review design plan with restaurant owner
2. **Asset Preparation**: Gather logo, hero image, food photos
3. **Handoff to Coder**: Implementation via Framer Motion + HTML/CSS
4. **Iterative Review**: Weekly checkpoints for visual/functional alignment
5. **QA & Launch**: Comprehensive testing before production deployment

---

**Document Version**: 1.0
**Created**: 2026-06-13
**Status**: Ready for Implementation
**Assigned to**: Coder Agent
