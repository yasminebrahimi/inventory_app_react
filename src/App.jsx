import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import ProductsForm from "./components/Products";
import ProductList from "./components/ProductList";

const products = [];

const categories = [];

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
