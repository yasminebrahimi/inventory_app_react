import React, { useState } from "react";

const ProductsForm = ({ categories }) => {
  const [productsFormData, setPorductsFormData] = useState({
    ttile: "",
    quantity: 0,
    category: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPorductsFormData({ ...productsFormData, [name]: value });
  };

  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new product
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="block mb-1 text-slate-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="product-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              value={productsFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-400"
            >
              Quantity
            </label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-500"
              type="number"
              name="quantity"
              id="product-quantity"
              value={productsFormData.quantity}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="block mb-1 text-slate-400"
            >
              Category
            </label>
            <select
              value={productsFormData.category}
              onChange={changeHandler}
              name="category"
              id="product-category"
              className="bg-transparent text-slate-400 rounded-xl w-full"
            >
              <option className="bg-slate-500 text-slate-300" value="">
                Select a category
              </option>
              {categories.map((category) => {
                return (
                  <option
                    kay={category.id}
                    className="bg-slate-500 text-slate-300"
                    value=""
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="submit"
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add New Product
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className="text-slate-600 text-lg mb-4 font-medium"
      >
        Add Category
      </button>
    </>
  );
};

export default ProductsForm;
