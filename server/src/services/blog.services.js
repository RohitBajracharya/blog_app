import { Blog } from "../models/blog.model.js";

const findAllBlog = async () => {
    try {
        return await Blog.find();
    } catch (error) {
        console.log("Error in blog find service: ", error.message);
        throw error;
    }
}

const findAllBlogByUserId = async (userId) => {
    try {
        return await Blog.find({ user: userId })
    } catch (error) {
        console.log("Error in blog find by user id service: ", error.message);
        throw error

    }
}

const findBlogById = async (blogId) => {
    try {
        return await Blog.findById({ _id: blogId })
    } catch (error) {
        console.log("Error in blog find by id service: ", error.message);
        throw error
    }
}

const createNewBlog = async (userId, title, description) => {

    try {
        return await Blog.create({
            title: title, description: description, user: userId
        })
    } catch (error) {
        console.log("Error in blog create service: ", error.message)
        throw error;
    }
}

const updateBlogById = async (id, userId, title, description) => {
    console.log("id: ", id);
    try {
        const updateBlog = {
            title: title,
            description: description,
            user: userId
        }
        return await Blog.findByIdAndUpdate(id, updateBlog, { new: true })
    } catch (error) {
        console.log("Error in update blog service: ", error.message);
        throw error;
    }
}

const deleteBlogById = async (id) => {
    try {
        return await Blog.findByIdAndDelete(id, { new: true })
    } catch (error) {
        console.log("Error in delete blog service: ", error.message);
        throw error;
    }
}

export {
    createNewBlog, deleteBlogById, findAllBlog, findAllBlogByUserId, findBlogById, updateBlogById
};

