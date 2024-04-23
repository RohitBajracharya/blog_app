import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SubmitButton from "../../../components/Button/SubmitButton";
import { useBlog } from "../../../context/BlogContext";

const EditBlog = () => {
  const { blog } = useBlog(); // Get blog data from context
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const id = blog._id;
      const response = await axios.put(
        `http://localhost:8001/api/users/update-blog/${id}`,
        {
          title,
          description,
        },
        {
          withCredentials: true,
        }
      );
      const { message } = response.data;
      toast(message);
      navigate("/");
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };
  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen flex justify-center items-center">
      <div className="bg-slate-100 py-5 max-w-md mx-auto rounded-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Update Your Blog</h1>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            {/* title field */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="4"
                placeholder="Enter description"
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

export default EditBlog;
