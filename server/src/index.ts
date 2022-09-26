// imports
import express from 'express'
import cookieParser from "cookie-parser"
import cors from "cors"
import { PrismaClient } from "@prisma/client"
require("dotenv").config()

// routes 
import authRoutes from "./routes/authRoutes"

// variables
const PORT = process.env.PORT || 5001
const app = express()
export const prisma = new PrismaClient()

const corsOptions = {
    origin: true,
    methods: ["POST", "GET"]
}

// app use
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.static("/static"))
app.use(express.urlencoded({ extended: true}))
app.use(express.text())

app.use(authRoutes)


// listening
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))