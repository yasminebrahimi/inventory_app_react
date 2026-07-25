import { useState } from "react";

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);
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
              name="category-title"
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
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
              name="category-description"
              id="category-description"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="button"
              className="flex-1 border border-slate-400 text-slate-300 rounded-xl py-2"
              id="cancel-add-category"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <button
        type="submit"
        id="add-new-category"
        className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
