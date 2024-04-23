import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import slider3 from "../../assets/slider3.jpg";
import { useBlog } from "../../context/BlogContext";

const BlogContainer = ({ blogs, authenticatedUserId = "" }) => {
  const { setBlog } = useBlog(); // Get setBlog function from context
  const handleEditBlog = (blog) => {
    setBlog(blog); // Set the blog data in the context
  };

  const handleDelete = async (blog) => {
    try {
      const id = blog._id;
      const response = await axios.delete(
        `http://localhost:8001/api/users/delete-blog/${id}`,
        {
          withCredentials: true,
        }
      );

      const { message } = response.data;
      toast(message);
      window.location.reload();
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={slider3}
              alt={blog.title}
              className="w-full h-40 object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-2">{blog.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{blog.date}</span>
                <span>{blog.time}</span>
              </div>
              {/* Conditionally render Link based on user ID match */}
              {authenticatedUserId === blog.user && (
                <div className="flex gap-3">
                  <Link
                    to="/edit-blog"
                    onClick={() => handleEditBlog(blog)}
                    className="text-blue-500 hover:underline hover:cursor-pointer"
                  >
                    Edit Blog
                  </Link>
                  <div
                    onClick={() => handleDelete(blog)}
                    className="text-red-500 hover:underline hover:cursor-pointer"
                  >
                    Delete Blog
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
