# Sambandha Restaurant Website - Developer Guide

## Project Overview

**Sambandha** is a static website for an authentic Indian restaurant located in Satte, Saitama, Japan. The name "Sambandha" means "connection" in Sanskrit, representing the connection between cultures, flavors, and people.

**Website URL**: https://sambandha-restaurant.jp (as referenced in CNAME file)

**Key Information**:
- Restaurant Location: 埼玉県幸手市東2-２０-40, Satte, Saitama 340-0114, Japan
- Phone: 0480-44-2323
- Email: sambandha2009@gmail.com
- Hours: Mon-Sun: 11:00 AM - 10:00 PM

## Repository Structure

```
sambandha/
├── index.html          # Main HTML file - contains all website content
├── styles.css          # Global styling with responsive design
├── script.js           # JavaScript for interactivity
├── .gitignore          # Git ignore patterns
├── CNAME              # Custom domain configuration for GitHub Pages
├── README.md          # Project summary (minimal)
└── .git/              # Git repository metadata
```

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables, Flexbox, Grid, and media queries
- **JavaScript (ES6)**: Vanilla JavaScript for DOM manipulation and event handling
- **External Libraries**:
  - Font Awesome 6.4.0: Icon library (via CDN)
  - Unsplash API: Image hosting for gallery and hero section

## Code Conventions & Style

### HTML Conventions
- Semantic HTML5 elements: `<nav>`, `<section>`, `<footer>`
- BEM-like naming: Classes use hyphenated format (`nav-menu`, `menu-item`, `filter-btn`)
- Inline event handlers for simple interactions: `onclick="filterMenu('category')"`
- Proper accessibility: Form inputs have labels and semantic meaning
- External CDN resources are used for icons and images

### CSS Conventions
- **CSS Variables** (Custom Properties) in `:root` for theming:
  - `--primary-color: #2A2420` (dark brown)
  - `--accent-color: #D4A574` (warm gold)
  - `--text-light: #F5F5F5` (off-white)
  - `--text-dark: #333` (dark gray)
  - `--bg-light: #F9F6F3` (light cream)
  - `--hover-color: #E8B88F` (lighter gold)

- **Layout Patterns**:
  - `.container`: Max-width 1200px with horizontal padding for responsive layouts
  - CSS Grid for multi-column layouts (menu, gallery, contact sections)
  - Flexbox for navigation and form layouts
  - Mobile-first responsive design with breakpoints at 768px and 480px

- **Animations**:
  - `fadeIn`: 0.3s opacity animation for menu item filtering
  - `transform` and `transition` for hover effects
  - `box-shadow` for depth and interactive feedback

- **Media Queries**:
  - `@media (max-width: 768px)`: Tablet and below - single column layouts, mobile nav
  - `@media (max-width: 480px)`: Mobile phones - further size reductions

### JavaScript Conventions
- **DOM Selection**: `document.getElementById()` and `document.querySelectorAll()`
- **Event Listeners**: Attached via `addEventListener()` for flexibility
- **Event Handlers**: Named functions for callbacks (e.g., `filterMenu()`)
- **Data Attributes**: Use `data-category` on menu items for filtering
- **Console Output**: `console.log()` for form submissions (development only)
- **Alert Dialogs**: User feedback via `alert()` for form submissions

## Key Features & Components

### 1. Navigation Bar (`.navbar`)
- **Sticky positioning** for persistent navigation during scroll
- **Hamburger Menu** toggle for mobile devices
- **Active Link Highlighting**: Automatically updates based on scroll position
- **Smooth Scrolling**: Links scroll to sections smoothly

**Key JavaScript Functions**:
- Mobile menu toggle with hamburger
- Scroll-based active nav link detection
- Link click handlers for smooth navigation

### 2. Hero Section (`.hero`)
- **Background Image**: Layered gradient overlay with Unsplash image
- **Call-to-Action Button**: Triggers smooth scroll to reservations section
- **Responsive Heights**: 600px desktop, 400px tablet, adaptable mobile

### 3. Menu Section (`.menu-section`)
- **Category Filtering**: Buttons filter menu items by category (All, Appetizers, Curries, Breads, Biryani)
- **Grid Layout**: Responsive grid (auto-fit with 300px minimum)
- **Show/Hide Animation**: `display: none/block` with fadeIn animation
- **Menu Structure**: Each item has name, description, and price in Japanese Yen (¥)

**JavaScript Logic**:
```javascript
filterMenu(category) {
  - Updates active filter button styling
  - Shows/hides menu items based on data-category attribute
  - All items shown by default on page load
}
```

### 4. About Section (`.about-section`)
- **Restaurant Story**: 3 paragraphs describing the restaurant's mission
- **Detail Boxes**: 3-column grid highlighting key attributes (Spices, Chefs, Ambiance)

### 5. Gallery Section (`.gallery-section`)
- **Image Grid**: Responsive grid with hover effects
- **Unsplash Images**: External image links for food and ambiance
- **Hover Overlay**: Titles appear with gradient background on hover
- **Image Scaling**: Subtle zoom effect on hover

### 6. Reservations Section (`.reservations-section`)
- **Reservation Form**:
  - Name and Email (2-column on desktop, stacked on mobile)
  - Phone and Date picker
  - Time and Guest count selector
  - Special Requests textarea
  - Submit button
- **Form Handling**: Currently logs to console and shows alert (no backend integration)

### 7. Contact Section (`.contact-section`)
- **Contact Information Grid**: Address, Phone, Email, Hours (4-column responsive)
- **Contact Form**:
  - Name, Email, Subject, Message fields
  - Submit button
  - Currently logs to console and shows alert (no backend integration)
- **External Links**: Phone and email links with `href` attributes

### 8. Footer (`.footer`)
- **Copyright Text**: Year 2024
- **Social Links**: Facebook, Instagram, Twitter (placeholder links)

## Development Workflow

### Common Tasks

#### Adding Menu Items
1. Open `index.html` and find the menu grid section (around line 57)
2. Add new menu item div with appropriate data-category:
   ```html
   <div class="menu-item [category]" data-category="[category]">
       <h3>Dish Name</h3>
       <p class="description">Dish description</p>
       <p class="price">¥Price</p>
   </div>
   ```
3. Categories: `appetizers`, `curry`, `bread`, `biryani`
4. Prices should use ¥ symbol

#### Adding Gallery Images
1. Find gallery-grid in `index.html` (around line 169)
2. Add new gallery-item:
   ```html
   <div class="gallery-item">
       <img src="[image-url]" alt="[description]">
       <h3>Image Title</h3>
   </div>
   ```
3. Use Unsplash URLs with query parameters: `?w=400&h=300&fit=crop`

#### Styling Changes
1. All colors defined in CSS variables in `styles.css`:root
2. Update colors there for global changes
3. Component-specific styling is grouped by section (e.g., `.menu-section`, `.gallery-section`)
4. Always test responsive design at 768px and 480px breakpoints

#### Adding New Sections
1. Add semantic `<section>` element with unique `id` attribute
2. Add corresponding navigation link in navbar
3. Create CSS class for section styling
4. Add responsive media queries if needed
5. Update navigation scroll detection in `script.js` if needed

### Testing Checklist
- [ ] Navigation links work and highlight correctly
- [ ] Mobile hamburger menu opens/closes
- [ ] Menu filtering works for all categories
- [ ] Forms can be submitted (check console for data)
- [ ] Images load correctly (check network tab)
- [ ] Smooth scrolling works on all links
- [ ] Responsive design at 768px and 480px breakpoints
- [ ] No console errors
- [ ] All external CDN resources load

## Performance & Accessibility Considerations

### Performance
- **External Images**: Use Unsplash URLs with size parameters to reduce file size
- **CSS**: Single stylesheet, no unnecessary nesting
- **JavaScript**: Vanilla JS with no framework overhead
- **Potential Optimizations**:
  - Implement lazy loading for gallery images
  - Minify CSS and JavaScript for production
  - Consider critical CSS inlining for faster first paint

### Accessibility
- **Current State**: Basic accessibility with semantic HTML
- **Improvements Needed**:
  - Add `aria-label` attributes to icon buttons
  - Ensure keyboard navigation works (Tab key)
  - Add `alt` text to all images (currently present)
  - Ensure color contrast meets WCAG AA standards
  - Add focus indicators for keyboard navigation

## Git Workflow

### Branch Strategy
- **Main Development**: Work on dedicated feature branches
- **Branch Naming**: Use descriptive names (e.g., `claude/add-menu-items`, `claude/fix-mobile-nav`)
- **Commits**: Make atomic commits with clear, descriptive messages

### Commit Message Format
```
[Type] Brief description

Longer explanation if needed.

Example:
[Feature] Add new curry items to menu
- Paneer Makhani
- Chana Saag
- Updated prices

[Fix] Resolve mobile menu alignment issue
- Adjust hamburger icon positioning
- Fix nav menu animation timing
```

### Push and Deploy
- Push to feature branches: `git push -u origin [branch-name]`
- Site auto-deploys via GitHub Pages when changes are pushed
- CNAME file ensures deployment to custom domain

## Form Handling & Backend Integration

### Current State
- Both reservation and contact forms have event listeners
- Form submissions are logged to console via `console.log()`
- User feedback via `alert()` dialogs
- **No backend integration** - forms don't actually send data anywhere

### To Implement Backend Integration
1. Remove inline event listeners or modify them
2. Create backend endpoint to handle form submissions
3. Update `script.js` to send FormData via `fetch()` or `XMLHttpRequest`
4. Implement email notifications or database storage
5. Handle validation server-side

**Example Backend Handler (conceptual)**:
```javascript
// POST to /api/reservation with form data
// POST to /api/contact with form data
// Return confirmation to user
```

## Known Issues & Technical Debt

### Current Limitations
1. **No Backend**: Forms don't persist or send emails
2. **No Form Validation**: Client-side validation not implemented
3. **Static Content**: Menu and gallery images hardcoded in HTML
4. **No Database**: No dynamic content management
5. **Basic Analytics**: No tracking or analytics implemented
6. **External Dependencies**: Reliance on CDN for icons and images

### Potential Improvements
1. Implement form backend with email service
2. Add form validation with error messages
3. Create admin panel for menu/gallery management
4. Add reservation system with calendar availability
5. Implement analytics tracking
6. Optimize images and assets
7. Add SEO improvements (meta tags, structured data)
8. Implement dark mode toggle
9. Add internationalization for Japanese menu items
10. Create blog/news section

## File Size Reference

```
index.html  - ~13.5 KB (semantic HTML structure)
styles.css  - ~10.4 KB (responsive styling)
script.js   - ~3.7 KB (vanilla JavaScript)
```

## External Resources

### CDN Dependencies
- Font Awesome Icons: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Image Hosting: Unsplash API (`https://images.unsplash.com/...`)

### Static Hosting
- Deployed via GitHub Pages
- Custom domain: sambandha-restaurant.jp (CNAME configured)

## Development Environment Setup

### Prerequisites
- Text editor (VS Code, Sublime, etc.)
- Git for version control
- Web browser for testing
- No build tools or dependencies required

### Local Testing
1. Clone the repository
2. Open `index.html` in browser (no server needed for static content)
3. Or use a local server: `python -m http.server 8000` (Python 3)
4. Navigate to `http://localhost:8000`

## Version History & Future Planning

### Current Version
- Static HTML5/CSS3/JavaScript website
- Single-page application with smooth scrolling
- Responsive design for all devices
- Menu filtering functionality
- Contact and reservation forms (non-functional)

### Version History
- Initial launch with basic website structure
- Responsive design implementation
- Menu filtering feature addition
- Form elements and styling

### Future Roadmap
1. Backend implementation for form handling
2. Admin dashboard for content management
3. Online reservation system with real-time availability
4. Email notifications
5. Database for menu items and reservations
6. Analytics and user tracking
7. Testimonials/reviews section
8. Blog functionality
9. Multi-language support
10. Mobile app integration

## Support & Resources

### Common Questions

**Q: How do I add a new menu item?**
A: See "Adding Menu Items" section in Development Workflow above.

**Q: How do I change the website colors?**
A: Edit CSS variables in `styles.css` `:root` selector. All colors are defined there.

**Q: How do I test the website locally?**
A: Use `python -m http.server 8000` in the directory and open `http://localhost:8000` in your browser.

**Q: Why aren't the forms sending emails?**
A: Currently, forms only log to console. Backend integration is needed to send actual emails.

**Q: How do I deploy changes?**
A: Push to the main/deploy branch and GitHub Pages automatically deploys the site.

## Contact & Maintenance

- **Restaurant Owner Contact**: sambandha2009@gmail.com, 0480-44-2323
- **Repository Owner**: Check Git commit history for maintainers
- **Issues/Bug Reports**: Create GitHub issues with clear descriptions

---

**Last Updated**: May 12, 2026
**Version**: 1.0
**Maintained By**: AI Assistant (Claude)
