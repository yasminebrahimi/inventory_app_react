# Inventory App

A simple inventory management app built with React and Tailwind CSS. Add categories and products, then search, sort, and filter your inventory — all data is saved locally in the browser.

**Live demo:** [inventory-app-yasmin.netlify.app](https://inventory-app-yasmin.netlify.app/)

## Features

- Add categories with a title and description
- Add products with a title, quantity, and category
- Search products by title
- Sort products by date added (latest / earliest)
- Filter products by category
- Delete products
- Data persists in `localStorage`, so it stays after a page refresh

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
src/
├── components/
│   ├── Category.jsx      # Form to add a new category
│   ├── Products.jsx      # Form to add a new product
│   ├── ProductList.jsx   # Displays the list of products
│   ├── Filter.jsx        # Search, sort, and category filter controls
│   └── NavBar.jsx        # Top navigation bar
├── App.jsx                # Main app logic and state
└── main.jsx                # App entry point
```

## Getting Started

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```
4. Open the app at `http://localhost:5173` 

