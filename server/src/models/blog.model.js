import { Schema, model } from "mongoose"

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImageUrl: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })

export const Blog = model("Blog", blogSchema)