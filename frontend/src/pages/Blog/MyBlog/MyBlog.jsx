import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogContainer from "../../../components/BlogContainer/BlogContainer";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/users/blogs",
          {
            withCredentials: true,
          }
        );
        setBlogs(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen">
      <div className=" mt-6 min-h-screen">
        <div>
          <h1 className="lg:text-3xl font-bold uppercase">All Blogs</h1>
        </div>
        {/* blog container */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <BlogContainer blogs={blogs} authenticatedUserId={blogs[0].user} />
        )}
      </div>
    </div>
  );
};

export default MyBlog;
