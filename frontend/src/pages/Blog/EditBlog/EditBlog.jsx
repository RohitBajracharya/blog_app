import React from "react";
import Button from "../../../components/Button/Button";

const EditBlog = () => {
  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen flex justify-center items-center">
      <div className="bg-slate-100 py-5 max-w-md mx-auto rounded-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Update Your Blog</h1>
        </div>
        <div className="mt-6">
          <form>
            {/* title field */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter title"
              />
            </div>
            {/* description field */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="4"
                placeholder="Enter description"
              ></textarea>
            </div>
            {/* image field */}
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-bold mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                accept="image/*"
              />
            </div>
            {/* submit button */}
            <div className="text-center">
              <Button buttonName={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
