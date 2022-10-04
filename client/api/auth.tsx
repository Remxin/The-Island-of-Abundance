import appConsts from "../consts/appConsts"

type returnType = {
    err?: Error,
    data?: any
}

export const login = (email: string, password: string) => {
    return new Promise<returnType>(async (resolve, reject) => {
       
        try {
            const res = await fetch(`${appConsts.serverIp}/login`, {
                method: "POST",
                body: JSON.stringify({
                    email, password
                })
            })

            const resData = await res.json()
            resolve({ data: resData })
        } catch (err) {
            reject({ err })
        }
    })
}

export const register = (name: string, email: string, password: string) => {
    return new Promise<returnType>(async (resolve, reject) => {
        try {
            console.log(name, email, password);
            const res = await fetch(`${appConsts.serverIp}/signup`, {
                method: "POST",
                body: JSON.stringify({
                    name, email, password
                })
            })

            const resData = await res.json()
            resolve({ data: resData })
        } catch (err) {
            reject({ err })
        }
    })
}

export const verifyUser = (token: string) => {
    return new Promise<returnType>(async (resolve, reject) => {
        try {
            const res = await fetch(`${appConsts.serverIp}/login`, {
                method: "POST",
                body: JSON.stringify({
                   token
                })
            })

            const resData = await res.json()
            resolve({ data: resData })
        } catch (err) {
            reject({ err })
        }
    })
}