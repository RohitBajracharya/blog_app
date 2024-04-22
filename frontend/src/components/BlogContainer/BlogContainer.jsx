import React from "react";
import { Link } from "react-router-dom";

const BlogContainer = ({ blogs }) => {
  return (
    <Link to="/edit-blog" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={blog.image}
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
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BlogContainer;
