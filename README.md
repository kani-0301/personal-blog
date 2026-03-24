# Kanini's Blog — Personal Literary Journal

A premium personal blog built with **React + Vite**, styled with an **Elden Ring** inspired aesthetic. Features 13 real book reviews, poems, and essays — all reflecting Kanini's personal taste and opinions.

🔗 **Repo:** [github.com/kani-0301/personal-blog](https://github.com/kani-0301/personal-blog)

---

## ✨ Features

- **13 Real Book Reviews** — personal, unfiltered opinions on books read in 2025
- **"The Library"** — a dedicated books page with reading stats and chronological review cards
- **Book Detail Pages** — immersive full-page review with pull quotes and prev/next navigation
- **Elden Ring Theme** — golden accents, ancient typography (Cinzel + Cormorant Garamond), spectral animations, and glassmorphism effects
- **Light & Dark Mode** — togglable theme with `localStorage` persistence
- **Responsive Design** — fully mobile-friendly

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI Library |
| Vite | Build tool & dev server |
| React Router | Client-side routing |
| Context API | Theme state management |
| CSS3 | Custom variables, animations |
| React Icons | Icons |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/kani-0301/personal-blog.git
cd personal-blog

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
personal-blog/
├── public/
│   └── Books/              # 13 book cover images
├── src/
│   ├── components/
│   │   ├── Layout/         # Header, Footer
│   │   ├── Blog/           # BookCard, PostCard
│   │   └── UI/             # ThemeToggle
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── posts.js        # All 13 book reviews + poems/essays
│   └── pages/
│       ├── HomePage.jsx
│       ├── BooksPage.jsx
│       ├── BookDetailPage.jsx
│       ├── PoemsPage.jsx
│       └── AboutPage.jsx
├── Books/                  # Source opinion screenshots (not served)
└── KaniniBlogContext.md    # Full developer context doc
```

---

## 📚 Books in the Library

| # | Title | Author |
|---|-------|--------|
| 1 | The Sailor Who Fell From Grace With the Sea | Yukio Mishima |
| 2 | The Vegetarian | Han Kang |
| 3 | The Iliad | Homer |
| 4 | The Republic | Plato |
| 5 | Angels & Demons | Dan Brown |
| 6 | Crime and Punishment | Fyodor Dostoevsky |
| 7 | The Stranger | Albert Camus |
| 8 | The Hobbit | J.R.R. Tolkien |
| 9 | The Great Gatsby | F. Scott Fitzgerald |
| 10 | The Bell Jar | Sylvia Plath |
| 11 | The Fall | Albert Camus |
| 12 | Human Acts | Han Kang |
| 13 | Frankenstein | Mary Shelley |

---

## 🎨 Design System

**Colors** (Dark mode)
- Background: `#1A2325` (deep teal-black)
- Accent: `#F2D16C` (Elden Ring gold)
- Border: `#B07943` (bronze)
- Text: `#DAD2B0` (aged parchment)

**Fonts**
- Headings: **Cinzel** (ancient, majestic)
- Body: **Cormorant Garamond** (elegant serif)
- UI: **Inter** (clean sans-serif)

---

## 📄 Routes

| Path | Page |
|------|------|
| `/` | Home — hero + featured books |
| `/books` | The Library — all 13 book reviews |
| `/books/:id` | Book Detail — full review + quotes |
| `/poems` | Poems |
| `/about` | About |

---

*Made with ☕ and way too many books.*
