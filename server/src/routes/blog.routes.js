import { Router } from "express"
import { addBlog, deleteBlog, getAllBlog, getBlogByUser, modifyBlog } from "../controller/blog.controller.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js"

const blogRouter = Router()

blogRouter.route("/blogs").get(getAllBlog)
blogRouter.route("/users/blogs").get(verifyJWT, getBlogByUser)

blogRouter.route("/users/add-blog").post(verifyJWT, addBlog)
blogRouter.route("/users/update-blog/:id").put(verifyJWT, modifyBlog)
blogRouter.route("/users/delete-blog/:id").delete(verifyJWT, deleteBlog)

export default blogRouter