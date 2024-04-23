import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(cookieParser())


import blogRouter from "./routes/blog.routes.js"
import userRouter from "./routes/user.routes.js"

app.use("/api/users", userRouter)
app.use("/api", blogRouter)

export { app }



