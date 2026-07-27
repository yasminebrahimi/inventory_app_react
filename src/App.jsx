import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import ProductsForm from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {}, [products, sort, searchValue]);

  const sortHandler = (e) => {
    setSort(e.target.value);
    let sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (e.target.value === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (e.target.value === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    const value = e.target.value.trim().toLowerCase();
    const filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(value),
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <Filter
            sort={sort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
