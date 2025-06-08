import express from "express"
import { deletePost, editPost, filteredPosts, getAllPosts, getOnePost, newPost } from "../controllers/post.controller.js"

const router = express.Router()


router.post('/new', newPost)
router.get('/one/:id', getOnePost)
router.get('/all', getAllPosts)
router.put('/edit/:id', editPost)
router.delete('/delete/:id', deletePost)

router.get('/filtered', filteredPosts)


export default router