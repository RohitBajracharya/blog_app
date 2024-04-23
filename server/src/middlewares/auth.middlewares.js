import jwt from "jsonwebtoken";
import { findUserById } from "../services/user.services.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")
        if (!token) {
            return res.status(401).json(new ApiError(401, "Unauthorized request"))
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await findUserById(decodedToken?._id)
        if (!user) {
            return res.status(401).json(new ApiError(401, "Invalid Access Token"))
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json(new ApiError(401, error.message))
    }
}