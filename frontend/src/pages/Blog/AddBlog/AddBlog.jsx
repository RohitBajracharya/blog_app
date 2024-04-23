import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SubmitButton from "../../../components/Button/SubmitButton";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "http://localhost:8001/api/users/add-blog",
        {
          title,
          description,
        },
        {
          withCredentials: true,
        }
      );

      const { message } = response.data;
      setTitle("");
      setDescription("");
      toast(message);
      navigate("/my-blogs");
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };

  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen flex justify-center items-center">
      <div className="bg-slate-100 py-5 max-w-md mx-auto rounded-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Post Your Blog</h1>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            {/* title field */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-bold mb-2">
                Title
              </label>
              <input
                name="title"
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
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
                name="description"
                id="description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="4"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* submit button */}
            <div className="text-center">
              <SubmitButton buttonName={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
