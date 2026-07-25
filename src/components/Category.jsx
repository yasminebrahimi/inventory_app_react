import { useState } from "react";

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  const changeHandler = ({ e }) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandlder = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    setCategoryFormData({title: "", description: ""})
  };

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              Description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="button"
              className="flex-1 border border-slate-400 text-slate-300 rounded-xl py-2"
              id="cancel-add-category"
              onClick={cancelFormHandler}
            >
              Cancel
            </button>
            <button
              onClick={addNewCategoryHandlder}
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        type="submit"
        id="add-new-category"
        className={`text-slate-600 text-lg mb-4 font-medium ${isShow && "hidden"}`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
