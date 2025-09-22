# Frontend Intern Test – Product Listing Page

This is the solution for the **SoftDef Frontend Intern Test**.  
The goal was to create a **pixel-perfect Product Listing Page** based on the Figma design:  
[Figma Design Link](https://www.figma.com/design/kNs2WbNk5h7qfsQMFOwbXt/Frontend_Role?node-id=0-1&p=t)  

The app is built with **Next.js** and **Tailwind CSS**, using reusable components, client-side mock data, and fully working filters, sorting, pagination, and responsive layouts.

---

## Features Implemented

- Reusable components:
  - `Navbar`, `Sidebar`, `FilterPanel`, `ProductCard`, `Badge`, `Rating`, `Pagination`, `Footer`
- Sidebar filters with expand/collapse functionality
- Product listing grid with:
  - Product image, HOT badge, title, prices, discount, rating, and quick actions
- Color selection filter that visually updates product cards
- Sorting options (Name, Price, Popularity) and pagination
- Fully responsive layout (desktop, tablet, mobile)
- Accessibility: keyboard navigation, focus styles, alt text, ARIA attributes
- Client-side mock data (24+ products)

> **Note:** The cart image may not display in deployed environments due to static asset path handling, but the app is fully functional.

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm / yarn / pnpm

### Installation


Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

###Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

###Deployement
The app is deployed on Vercel:

Live URL: https://product-listings-kohl.vercel.app/

###Technical Stack

Framework: Next.js (React)  

Language: JavaScript  

Styling: Tailwind CSS  

Icons: Lucide / Heroicons  

State: React hooks / component state  

Data: Client-side mock dataset  

git clone <your-repo-url>
cd <project-folder>
