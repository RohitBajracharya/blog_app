import { createNewBlog, deleteBlogById, findAllBlog, findAllBlogByUserId, findBlogById, updateBlogById } from "../services/blog.services.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//return all blogs of all users
const getAllBlog = async (req, res) => {
    try {
        const blogs = await findAllBlog();
        if (!blogs) {
            return res.status(400).json(new ApiError(400, "Blog is empty"))
        }
        return res.status(200).json(new ApiResponse(200, blogs, "Blogs retrieved successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while fetching all blogs"))
    }
}
//return all blog of particular signin user
const getBlogByUser = async (req, res) => {
    const userId = req.user._id;
    try {
        const blogs = await findAllBlogByUserId(userId);
        if (!blogs) {
            return res.status(400).json(new ApiError(400, "Blog is empty"))
        }
        return res.status(200).json(new ApiResponse(200, blogs, "Blogs retrieved successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while fetching all blogs"))
    }
}

//add blog of particular signin user
const addBlog = async (req, res) => {
    console.log("body: ", req.body);
    try {
        const { title, description } = req.body;
        const userId = req.user._id;
        const blog = await createNewBlog(userId, title, description)
        if (!blog) {
            return res.status(500).json(new ApiError(500, "Failed to add blog"))
        }
        return res.status(201).json(new ApiResponse(201, blog, "Blog added successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while adding blog"))
    }
}

//update blog of particular blog of particular signin user
const modifyBlog = async (req, res) => {
    console.log("body: ", req.body);
    try {
        const { title, description } = req.body;
        const userId = req.user._id;
        const blogId = req.params.id;
        const existingblog = await findBlogById(blogId);
        if (!existingblog) {
            return res.status(400).json(new ApiError(400, "Blog not found"))
        }
        await updateBlogById(blogId, userId, title, description)
        return res.status(200).json(new ApiResponse(200, {}, "Blog updated successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while updating blog"))
    }
}

//delete blog of particular blog of particular signin user
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const existingBlog = await findBlogById(blogId);
        if (!existingBlog) {
            return res.status(400).json(new ApiError(400, "Blog not found"))
        }
        const deletedBlog = await deleteBlogById(blogId)
        if (!deleteBlog) {
            return res.status(500).json(new ApiError(500, "Failed to delete blog"))
        }
        return res.status(200).json(new ApiResponse(200, deletedBlog, "Blog deleted successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while deleting blog"))
    }
}



export {
    addBlog, deleteBlog, getAllBlog, getBlogByUser, modifyBlog
};

