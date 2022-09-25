import express from 'express'
import cookieParser from "cookie-parser"
import cors from "cors"
require("dotenv").config()


const PORT = process.env.PORT || 5001
const app = express()
const corsOptions = {
    origin: true,
    methods: ["POST", "GET"]
}

app.use(cookieParser())
app.use(cors(corsOptions))




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))