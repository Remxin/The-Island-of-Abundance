import jwt from "jsonwebtoken"

const secret = process.env.TOKEN
if (!secret) throw new Error("Token secret is not defined")

const signUserToken = (userId: string) => {
    const token = jwt.sign({ id: userId }, secret, { expiresIn: "5d"})
    return token
}

const decodeUserId = async (token: string) => {
    return new Promise<string>(async (resolve, reject) => {
        try {
            const userId = await jwt.verify(token, secret)
            //@ts-ignore
            resolve(userId?.id)
        } catch (err) {
            reject({ err })
        }
    })
}

export default {
    signUserToken,
    decodeUserId
}