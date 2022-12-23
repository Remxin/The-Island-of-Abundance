import { Request, Response } from "express"
import tokenHelper from "../helpers/tokenHelper"
import hashHelpers from "../helpers/hashHelpers"
import { prisma } from ".."


export const signup = async (req: Request, res: Response) => {
    
    const { name, email, password } = JSON.parse(req.body)
    if (!name || !email || !password) return res.status(400).send({ err: "Please enter all fields"})

    const hashedPass = await hashHelpers.hashPassword(password)
    if (!hashedPass) return res.status(500).send({ err: "Internal server error "})
    const user = await prisma.user.create({ data: {name, email, password: hashedPass }})

    const token = await tokenHelper.signUserToken(user.id)
    await prisma.user.update({ where: { id: user.id }, data: { authToken: token }})
    
    res.json({...user, authToken: token})
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = JSON.parse(req.body)
    if (!email || !password) return res.status(400).send({ err: "Please enter all fields"}) 
    
    try {

        const user = await prisma.user.findUnique({ where: {email}})
        if (!user) return res.status(400).send({ err: "This user does not exist" })
        const isPasswordValid = await hashHelpers.isPasswordValid(user?.password, password)
        
        if (!isPasswordValid) return res.status(400).send({ err: "Wrong password"})
        const token = await tokenHelper.signUserToken(user.id)
        await prisma.user.update({ where: { id: user.id }, data: { authToken: token }})
        res.json({ ...user, authToken: token })
    } catch (err) {
        res.json({ err: "501 - internal server error"})
    }
}

export const verifyUser = async (req: Request, res: Response) => {
    const { token } = JSON.parse(req.body)
    if (!token) return res.status(401).send({ err: "User not logged"})
    
    
    const userId = await tokenHelper.decodeUserId(token)
    if (!userId) return res.status(401).send({ err: "User not verified"})
    
    
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { name: true, email: true, level: true, experience: true, id: true }})
    if (!user) return res.status(401).send({ err: "User does not exist anymore"})
    res.json(user)
}