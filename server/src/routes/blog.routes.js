import {Router} from "express"

const blogRouter=Router()

blogRouter.get("/add-blog",verifyJWT)

export default blogRouter