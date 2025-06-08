import Post from "../models/post.model.js"

export const newPost = async (req, res) => {
    const { title, content, category, tags } = req.body
    try {
        if (!title) return res.status(400).json({ message: "Title is required!" })

        const post = await Post.insertOne({
            title,
            content,
            category,
            tags,
        })

        res.status(201).json(post)
    } catch (error) {
        console.log("Error in newPost controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getOnePost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById({ _id: id })

        if (!post) return res.status(404).json({ message: "Not Found!" })

        res.status(200).json(post)
    } catch (error) {
        console.log("Error in getOnePost controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        if (!posts) return res.status(404).json({ message: "Not Found!" })
        
        res.status(200).json(posts)
    } catch (error) {
        console.log("Error in getAllPosts controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const editPost = async (req, res) => {
    const { id } = req.params
    const { title, content, category, tags } = req.body
    try {
        if (!title) return res.status(400).json({ message: "Title is required!" })
        
        const post = await Post.findOneAndUpdate({ _id: id }, {
            title,
            content,
            category,
            tags,    
        })

        return res.status(200).json(post)
    } catch (error) {
        console.log("Error in editPost controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        const deletedPost = await Post.findOneAndDelete({ _id: id })

        if (!deletedPost) return res.status(404).json({ message: "Not Found!" })

        res.status(204).json({ message: "No Content" })
    } catch (error) {
        console.log("Error in deletePost controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const filteredPosts = async (req, res) => {
    const { category, tags } = req.body
    try {
        const filter = {}

        if (category) {
            filter.category = category
        }

        if (tags) {
            filter.tags = tags
        }

        const posts = await Post.find(filter)

        res.status(200).json(posts)
    } catch (error) {
        console.log("Error in filteredPosts controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}