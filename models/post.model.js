import mongoose from "mongoose";

const Schema = mongoose.Schema

const PostModel = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        tags: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true },
)

const Post = mongoose.model('post', PostModel)

export default Post