import bcrypt from "bcrypt"

const hashPassword = (password: string) => {
    return new Promise<string>(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt()
            const hashedPass = await bcrypt.hash(password, salt)

            resolve(hashedPass)
        } catch(err) {
            reject({ err })
        }
    })
}

const isPasswordValid = (originalPass: string, inputPass: string) => {
    return new Promise<boolean>(async (resolve, reject) => {
        try {
            const isValid = await bcrypt.compare(inputPass, originalPass)
            resolve(isValid)
        } catch(err) {
            reject({ err })
        }
    })
}

export default {
    hashPassword,
    isPasswordValid
}