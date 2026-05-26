# Instagram Progress Report - Specification

## Concept & Vision

Website laporan perkembangan Instagram yang menampilkan visualisasi pertumbuhan followers dan engagement secara bulan ke bulan. Desain minimalis dengan tema merah-putih yang bold dan profesional, memberikan kesan laporan yang serius namun tetap menarik. Pengalaman pengguna yang smooth dengan navigasi antar bulan yang intuitif.

## Design Language

### Aesthetic Direction
Bold minimalist dengan aksen merah yang kuat pada latar putih bersih. Terinspirasi dari laporan korporat modern dengan sentuhan social media energy.

### Color Palette
- **Primary Red**: `#DC2626` (Vermillion)
- **Dark Red**: `#991B1B` (Deep Crimson)
- **Light Red**: `#FEE2E2` (Soft Blush)
- **Pure White**: `#FFFFFF`
- **Off White**: `#FEF2F2`
- **Text Primary**: `#1F2937` (Charcoal)
- **Text Secondary**: `#6B7280` (Gray)

### Typography
- **Headings**: Inter (700, 600) - clean, modern, professional
- **Body**: Inter (400, 500) - readable, versatile
- **Fallback**: system-ui, sans-serif

### Spatial System
- Container max-width: 1200px
- Section padding: 64px vertical
- Card padding: 24px
- Grid gap: 24px
- Border radius: 12px (cards), 8px (buttons)

### Motion Philosophy
- Page transitions: fade-in 300ms ease-out
- Button hover: scale(1.02) + shadow lift, 200ms
- Image hover: subtle zoom(1.05), 400ms ease
- Stagger animation for image grid: 100ms delay between items

### Visual Assets
- Icons: Lucide React (Instagram, ChevronLeft, ChevronRight, Calendar, TrendingUp)
- Images: Placeholder Instagram screenshot mockups
- Decorative: Gradient overlays, subtle shadows

## Layout & Structure

### Header
- Full-width hero section dengan gradient merah
- Logo/Title "Laporan Perkembangan Instagram"
- Subtitle dengan periode laporan
- Floating card effect dengan shadow

### Navigation
- Month selector dengan pills/chips style
- Active month highlighted dengan fill merah
- Previous/Next arrow buttons
- Smooth scroll to content

### Content Grid
- 2x2 grid untuk 4 gambar per bulan
- Each card: screenshot image, caption, date
- Hover effect dengan overlay info
- Lightbox capability (optional enhancement)

### Footer
- Minimal footer dengan credits
- Consistent spacing dengan header

## Features & Interactions

### Month Navigation
- Click month pill → smooth transition ke konten bulan tersebut
- Active month visually distinct (filled background)
- Arrow keys untuk navigasi (bonus)
- URL hash update untuk shareability

### Image Display
- Lazy loading untuk performance
- Hover: zoom effect + shadow
- Caption overlay dengan fade-in
- Date badge untuk setiap screenshot

### Responsive Behavior
- Desktop: 2x2 grid
- Tablet: 2x2 grid dengan reduced padding
- Mobile: single column stack

### Empty States
- Fallback placeholder images
- Loading skeleton dengan shimmer effect

## Component Inventory

### HeroSection
- States: default
- Gradient background (red gradient)
- White text, centered content
- Shadow effect on content card

### MonthNavigation
- Props: months[], activeMonth, onMonthChange
- States: default, hover (pill), active (filled)
- Horizontal scrollable on mobile
- Smooth indicator animation

### ImageCard
- Props: image, caption, date, index
- States: default, hover (zoom + shadow)
- Caption overlay on hover
- Stagger animation on mount

### ProgressStats (optional)
- Follower count
- Growth percentage
- Engagement rate

## Technical Approach

### Framework
- Next.js 14+ dengan App Router
- TypeScript untuk type safety
- Tailwind CSS untuk styling

### Architecture
- Static site generation (SSG)
- Client-side navigation untuk month switching
- React state untuk active month management

### Data Structure
```typescript
interface MonthData {
  month: string;
  year: number;
  images: {
    url: string;
    caption: string;
    date: string;
  }[];
}

interface InstagramReport {
  profileName: string;
  period: string;
  months: MonthData[];
}
```

### Performance
- Image optimization dengan Next/Image
- Static export capability
- Minimal JavaScript bundle
