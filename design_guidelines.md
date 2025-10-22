# Design Guidelines: Educational Transistor Calculator

## Design Approach

**System Selected:** Material Design (adapted for technical/scientific applications)
**Rationale:** Information-dense engineering tool requiring clear data hierarchy, structured layouts, and professional aesthetics. Material Design provides robust patterns for data tables, forms, and technical interfaces while maintaining clarity.

**Key Design Principles:**
- Data-first hierarchy: Information clarity over decoration
- Systematic organization: Structured tabbed navigation
- Functional color coding: Status indicators with clear meaning
- Professional precision: Technical aesthetic for academic/engineering audience

## Typography System

**Font Stack:** Inter (primary), Roboto Mono (code/data)

**Hierarchy:**
- H1: 32px/40px, Semi-bold - Page titles
- H2: 24px/32px, Semi-bold - Section headers
- H3: 18px/24px, Medium - Subsection headers
- Body: 16px/24px, Regular - General content
- Data/Numbers: 16px/20px Roboto Mono - Parameters, calculations
- Labels: 14px/20px, Medium - Form labels, table headers
- Caption: 12px/16px, Regular - Helper text, footnotes

Bulgarian language requires clear, legible typefaces—Inter provides excellent Cyrillic support.

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Micro spacing: p-2, gap-2 (inputs, badges)
- Component spacing: p-4, gap-4 (cards, form groups)
- Section spacing: p-6, p-8 (containers)
- Major spacing: p-12, p-16, p-24 (page sections)

**Grid Structure:**
- Container: max-w-7xl mx-auto
- Content sections: px-6 md:px-8
- Comparison tables: 3-column grid (lg:grid-cols-3) for semiconductor types
- Database view: 2-column layout (specs sidebar + main content)

## Component Library

### Navigation System
**Top Header Bar:**
- Fixed navigation with logo/title left-aligned
- Horizontal tab bar for main sections (Calculator | Database | Drivers | Tools)
- Active tab indicator with subtle elevation
- Secondary actions (settings, language) right-aligned
- Height: 64px with tab bar integrated

### Data Input Forms
**Calculator Section:**
- Card-based layout with labeled input groups
- Semiconductor type selector (Si/SiC/GaN) as prominent chip-style buttons
- Parameter inputs in organized grid (2-column on desktop, single on mobile)
- Input fields: outlined style with floating labels
- Unit indicators clearly displayed post-input (A, V, kHz, etc.)
- Calculate button: prominent, elevated, full-width on mobile

### Status Indicator System
**Visual Indicators:**
- Success state: ✅ with confirmation badge
- Warning state: ⚠️ with cautionary badge  
- Error/Unsuitable: ❌ with rejection badge
- Each indicator accompanied by brief text explanation
- Color coding through background badges, border treatments, and icon fills

### Data Display Components

**Comparison Tables:**
- Structured table with alternating row backgrounds for readability
- Header row with parameter names
- Three columns for Si/SiC/GaN side-by-side comparison
- Status indicators embedded in cells
- Sortable columns with chevron indicators
- Responsive: horizontal scroll on mobile with sticky first column

**Results Cards:**
- Elevated cards displaying calculation outcomes
- Parameter name + value + unit in structured layout
- Suitability assessment with visual indicator
- Expandable sections for detailed explanations
- Organized in responsive grid

**Database View:**
- Searchable/filterable table interface
- Advanced filters in collapsible sidebar
- Datasheet parameter columns with sort capability
- Row selection for detailed view modal/drawer
- Pagination with items-per-page control

### Tools Section
**Driver Analysis Interface:**
- Split layout: Configuration panel (left) + Results visualization (right)
- Parameter adjustment sliders with real-time feedback
- Compatibility matrix display
- Downloadable results option

### Interactive Elements
**Buttons:**
- Primary actions: Elevated with medium emphasis
- Secondary actions: Outlined style
- Text buttons: Low emphasis for tertiary actions
- Icon buttons: 40px touch target minimum
- Blurred background for buttons over images

**Chips/Badges:**
- Technology type selectors (Si/SiC/GaN): Toggle-able chips
- Status badges: Compact with icon + text
- Filter tags: Dismissible with × icon

**Input Fields:**
- Outlined variant for technical precision
- Clear error states with helper text
- Prefix/suffix support for units
- Number inputs with optional steppers

## Page Layouts

### Landing View (Hero + Introduction)
**Hero Section:**
- Height: 60vh minimum
- Background: Abstract technical imagery (circuit board patterns, semiconductor wafer close-up, or transistor schematic visualization)
- Overlay: Semi-transparent gradient for text legibility
- Content: Centered heading + subtitle explaining tool purpose
- CTA buttons: "Започнете изчисление" (primary) + "Разгледайте базата данни" (secondary) with blurred backgrounds
- Trust indicators: "Used by 500+ engineers" badge

**Introduction Section:**
- 3-column grid showcasing key features
- Each column: Icon + heading + description
- Features: "Научни изчисления" | "Datasheet база данни" | "Driver анализ"
- Clean cards with subtle shadows

### Calculator Page
- Full-width workspace
- Left sidebar: Input parameters (collapsible on mobile)
- Main area: Results display with comparison tables
- Bottom: Calculation methodology explanation (collapsible)

### Database Page  
- Filter sidebar (left, 280px): Semiconductor type, voltage range, current capacity
- Main area: Data table with pagination
- Top bar: Search + view options (table/grid toggle)

### Drivers/Tools Pages
- Tab-based sub-navigation for different tool types
- Centered workspace with max-w-5xl
- Action buttons in sticky footer on mobile

## Images

**Hero Image:**
- Placement: Full-width hero section on landing page
- Subject: High-quality macro photography of semiconductor wafer or modern transistor chip with visible circuit patterns
- Style: Clean, professional, slightly desaturated for technical aesthetic
- Treatment: Subtle gradient overlay to ensure text legibility
- Alternative: Abstract visualization of electron flow or circuit topology

**Feature Icons:**
- Small illustrative graphics for feature sections (calculator icon, database icon, analysis tools icon)
- Style: Line-style or duotone technical illustrations
- Placement: Above feature headings in introduction section

**Database Thumbnails:**
- Product/component images in database listings (if available from manufacturers)
- Standardized aspect ratio: 4:3 or 1:1
- Fallback: Technical schematic icons

## Accessibility Standards

- Minimum touch targets: 44×44px
- Keyboard navigation for all interactive elements
- ARIA labels for status indicators
- High contrast ratios for all text (WCAG AA minimum)
- Focus indicators on all focusable elements
- Screen reader announcements for calculation results
- Semantic HTML throughout (tables use proper table markup, forms use proper fieldsets)

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, collapsible navigation)
- Tablet: 768px-1024px (2-column layouts)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adaptations:**
- Horizontal tab navigation converts to hamburger menu
- Tables: Horizontal scroll with sticky columns
- Input forms: Full-width stacking
- Comparison grids: Swipeable cards instead of side-by-side
- Fixed bottom action bar for primary CTAs