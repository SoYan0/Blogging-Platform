import express from "express"
import dotenv from "dotenv"

import postRoute from "./routes/post.route.js"
import connectDB from "./lib/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5004

app.listen(PORT, () => {
    console.log(`Online on http://localhost:${PORT}`)
    connectDB()
})

app.use(express.json())

app.use('/api/posts', postRoute)