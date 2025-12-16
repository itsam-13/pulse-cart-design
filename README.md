## PulseCart – Smart E‑Commerce Frontend

BuyMetrics (PulseCart) is a **frontend-only smart e‑commerce experience** built with React, TypeScript, Tailwind CSS, and shadcn‑ui.  
It focuses on **price intelligence, budget awareness, and cart insights** while remaining fully mock‑data driven (no backend).

### Features

- **Product browsing**
  - Responsive product grid with hover effects and clean price display
  - Product detail pages with specs, reviews section, and related UX
  - Category filtering, price range slider, rating filter, and text search
  - Sorting by featured, price (low → high, high → low), and rating

- **Smart cart & budget awareness**
  - Centralized cart state via React Context with localStorage persistence
  - Quantity controls, subtotal, tax estimate, and grand total
  - Remove‑item confirmation dialog and toasts for add/update/remove
  - Monthly budget input with:
    - Budget health meter / progress bar
    - Warnings when near or over budget
    - Navbar budget pill and spending insights (history + category pie chart)

- **Price intelligence & alerts**
  - Per‑product price history chart (static/mock data)
  - Lowest / highest / current price metrics
  - Rule‑based badges: **Good Time to Buy**, **Wait – Price May Drop**, **High Price Today**
  - Frontend‑only “notify me if price drops” alerts using `localStorage`

- **UX enhancements**
  - Currency selector with country flags and automatic price conversion
  - Newbie promo marquee banner and polished navbar/footer
  - Smooth hover/transition effects using Tailwind utilities

### Tech Stack

- **Framework**: React 18, TypeScript
- **Build Tooling**: Vite
- **Styling**: Tailwind CSS, custom design tokens in `index.css`
- **UI Library**: shadcn‑ui (Radix primitives)
- **State Management**: React Context (Cart, Currency)
- **Charts**: Recharts wrapped in a reusable `ChartContainer`

### Project Structure (high level)

- `src/components` – Reusable UI + feature components (navbar, footer, product card, currency selector, shadcn primitives)
- `src/pages` – Route‑level pages (`Home`, `Products`, `ProductDetails`, `Cart`, `Checkout`, etc.)
- `src/contexts` – `CartContext`, `CurrencyContext`
- `src/hooks` – Custom hooks (e.g. toast, mobile detection)
- `src/data` – Mock product and category data
- `src/types` – Shared TypeScript types (`Product`, `CartItem`, etc.)
- `src/lib` – Utilities (e.g. Tailwind `cn` helper)

### Getting Started

#### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn) installed

#### Installation

```bash
git clone <REPO_URL>
cd pulse-cart-design
npm install
```

#### Running the app

```bash
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

### Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Production build
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint checks

### Screenshots (placeholders)

- `docs/screenshots/home.png` – Home / hero + featured products  
- `docs/screenshots/products.png` – Product listing with filters/search  
- `docs/screenshots/product-details.png` – Product details + price intelligence  
- `docs/screenshots/cart.png` – Cart with budget awareness & recommendations  

_(Create a `docs/screenshots` folder and capture real screenshots when ready.)_

### Future Improvements

- Add pagination or infinite scroll for large product catalogs
+- Enhance search with fuzzy matching and multi‑field filters
+- Add wishlists and simple compare‑products view (still frontend‑only)
+- Extract more UI primitives into dedicated components for design consistency
+- Hook up to a real backend or headless commerce API (when allowed)

This project is designed to be **interview‑ready**: strongly typed, modular, and easy to extend while remaining fully mock‑data based.
