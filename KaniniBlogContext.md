# Kanini's Blog — Project Context

## Overview
A premium personal literary blog built with **React + Vite**, designed with an "Elden Ring" inspired aesthetic — deep teal/swamp green backgrounds, golden "Grace" accents, and ancient typography. Features real book reviews, poems, and essays.

**Local Dev:** `npm run dev` → http://localhost:5173  
**Project Path:** `c:\Users\Kanishka\Desktop\personal-blog\`

---

## Tech Stack
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Component Library |
| **Vite** | Build Tool & Dev Server |
| **React Router** | Client-side Routing |
| **Context API** | Theme State Management |
| **CSS3** | Styling, Variables, Animations |
| **React Icons** | Iconography (Feather Icons) |

---

## Project Structure
```
personal-blog/
├── index.html                  # Entry HTML (Fonts: Cinzel, Cormorant Garamond, Inter)
├── package.json
├── vite.config.js
├── KaniniBlogContext.md        # This file
├── public/
│   └── Books/                  # 13 book cover images (served by Vite)
│       ├── The Stranger.jpeg
│       ├── Crime and Punishment.jpeg
│       └── ... (13 total)
├── Books/                      # Source opinion screenshots (not served)
│   ├── 13 January 2025 - The Sailor...jpeg
│   └── ... (26 files: 13 covers + 13 opinion screenshots)
└── src/
    ├── main.jsx                # Entry Point (ThemeProvider wraps App)
    ├── App.jsx                 # Router + Layout
    ├── index.css               # Global Design System & CSS Variables
    ├── context/
    │   └── ThemeContext.jsx    # Light/Dark Mode (localStorage)
    ├── components/
    │   ├── Layout/
    │   │   ├── Header.jsx/.css # Sticky glass header, mobile menu
    │   │   └── Footer.jsx/.css # Social links, ornate top border
    │   ├── Blog/
    │   │   ├── PostCard.jsx/.css  # General poem/essay cards
    │   │   └── BookCard.jsx/.css  # Horizontal book card with 3D cover tilt
    │   └── UI/
    │       └── ThemeToggle.jsx/.css
    ├── pages/
    │   ├── HomePage.jsx/.css       # Hero + 3 featured books + posts
    │   ├── BooksPage.jsx/.css      # "The Library" — all 13 books + stats
    │   ├── BookDetailPage.jsx/.css # Immersive full review + prev/next nav
    │   ├── PoemsPage.jsx/.css
    │   └── AboutPage.jsx/.css
    └── data/
        └── posts.js               # All book reviews, poems, essays
```

---

## Routes
| Path | Page |
|------|------|
| `/` | HomePage |
| `/books` | BooksPage ("The Library") |
| `/books/:id` | BookDetailPage (individual review) |
| `/poems` | PoemsPage |
| `/about` | AboutPage |

---

## Design System ("Lands Between" / Elden Ring Theme)

### Color Tokens (CSS Variables)
| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--bg-primary` | `#1A2325` | `#DAD2B0` | Page background |
| `--bg-secondary` | `#30413D` | `#BDBE8E` | Card backgrounds |
| `--accent` | `#F2D16C` | `#B07943` | Gold glow, links, CTAs |
| `--border` | `#B07943` | `#677356` | Borders & dividers |
| `--text-primary` | `#DAD2B0` | `#1A2325` | Headings & body |
| `--text-secondary` | `#BDBE8E` | `#466747` | Meta, subtext |

### Typography
- **`--font-heading`**: `Cinzel` — Majestic, uppercase, Trajan-like. Used for all headings.
- **`--font-body`**: `Cormorant Garamond` — Elegant serif for review text and body.
- **`--font-ui`**: `Inter` — Clean sans-serif for badges, dates, nav, CTAs.

### Key Visual Effects
- **Golden Glow**: `text-shadow`/`box-shadow` using `var(--accent-glow)` on hover
- **Glassmorphism**: `backdrop-filter: blur(12px)` + semi-transparent `var(--bg-glass)`
- **Fog Reveal**: Pages animate in with `filter: blur(10px) → 0`
- **Spectral Text**: Headings animate `letter-spacing` on load
- **Ornate Divider**: `.ornate-divider` — bronze-to-gold gradient line with `◆` centrepiece

---

## Data (`src/data/posts.js`)

### Books Array (13 entries)
Each book has:
```js
{
  id: Number,           // 1–13
  title: String,
  author: String,
  dateRead: 'YYYY-MM-DD',
  coverImage: '/Books/Title.jpeg',  // served from public/
  genre: String,
  review: String,       // multi-paragraph, transcribed from Instagram screenshots
  quote: String | null, // closing pull-quote if available
}
```

**Helper functions:**
- `getFeaturedBooks()` — returns 3 most-recent books
- `getBookById(id)` — returns single book by id

### Posts Array (poems & essays)
```js
{ id, title, category, date, excerpt, content }
```

---

## Key Components

### BookCard
- Horizontal layout: cover image (left) + text (right)
- Cover tilts 3D on hover with golden glow puddle underneath
- Genre badge + date read + excerpt + "Read Review →" link

### BookDetailPage
- Hero: large cover + metadata side-by-side
- Full review text (paragraphs from `review` field)
- Pull-quote block (if `quote !== null`) — ornate gold left border + large `"` ornament
- Prev/Next navigation: thumbnail + title of adjacent books

### ThemeContext
- Reads from `localStorage('theme')` on first render (no flash)
- Falls back to `prefers-color-scheme`
- Applied as `data-theme="light"` attribute on `<html>`

---

## Development
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # outputs to dist/
```

---

## Books Source Files
The `Books/` folder contains two image types per book:
1. **Cover** — e.g., `The Stranger.jpeg` → copied to `public/Books/` for serving
2. **Opinion screenshot** — e.g., `28 July 2025 - The Stranger By Albert Camus.jpeg` → review text transcribed into `posts.js`, not served

---

## Future Roadmap
- Search / filter books by genre or author
- CMS integration (Contentful/Sanity) to replace `posts.js`
- Page transitions with Framer Motion
- Comments via Giscus
- Full essay pages (similar to BookDetailPage)

---

*Last Updated: 20 February 2026*
