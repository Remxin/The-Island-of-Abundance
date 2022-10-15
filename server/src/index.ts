// imports
import express, { Request, Response } from 'express'
import cookieParser from "cookie-parser"
import cors from "cors"
import { PrismaClient } from "@prisma/client"
import path from "path"
require("dotenv").config()
import { initSocket } from './socket/init'

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
// app.use("/images", express.static("/static/images"))
// app.use('/images', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true}))
app.use(express.text())
app.use(express.static("static"))

app.use(authRoutes)

app.get("/images/*", (req: Request, res: Response ) => {
    const url = req.url
    console.log(path.join(__dirname, "/static/images"));
    
    res.sendFile(path.join(__dirname, "/static/", url))
    
    // res.sendFile("")
})


// listening
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    initSocket()
})


// ----- TESTS -----
// USERS

// async function showUsers() {
//     const users = await prisma.user.findMany()
//     console.log(users);
    
// }
// showUsers()

// async function deleteUsers() {
//     await prisma.user.deleteMany()
// }
// deleteUsers()


// BUILDINGS AND COSTS

async function create () {
    // const building = await prisma.building.create({ data: {

    // }})
    
    // const building = await prisma.building.create({ data: {
    //     name: "Trading City",
    //     imgUrl: "/images/trading-post.png",
    //     description: "Tier III settlement. Provides 2 copies of surrounding filelds sources and 1 ducat on them + 7.",
    //     upgradableFrom: "City",
    //     functionalities: "d1",
    //     tier: "III"
    // }})
    // const cost = await prisma.cost.create({ data: {
    //     buildingId: building.id,
    //     ducats: 6,
    //     wheat: 2,
    //     meat: 2,
    //     fish: 3
    // }})
    // console.log(cost);

    // const building = await prisma.building.findMany({include: { cost: true}})
    // console.log(building);

    // const cost2 = await prisma.cost.findUnique({ where: {id: "a73578d8-9a0c-4f00-a0e7-252c210c2fb9"}, include: {building: true}})
    // //@ts-ignore
    // console.log(cost2)


    
}

create()