import appConsts from "../consts/appConsts"

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
       
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

export const register = (name, email, password) => {
    return new Promise(async (resolve, reject) => {
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

export const verifyUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/login`, {
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