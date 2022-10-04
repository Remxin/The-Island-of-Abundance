import { useEffect, useState } from "react";
import { setUser, removeUser } from "../features/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appConsts from "../consts/appConsts";

const useAuth = () => {
    const [userData, setUserData] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true)


    useEffect(() => {
        if (userData) return
        (async function verifyUser() {
            const token = await AsyncStorage.getItem("token")
            console.log(token);
            
            if (!token) return
            const res = await fetch(`${appConsts.serverIp}/verifyuser`, {
                method: "POST",
                body: JSON.stringify({ token })
            })

            const resData = await res.json()
            setUserData(resData)
            
            setUser(resData)

            setLoadingUser(false)

        }())
    }, [])

    function setToken(token: string) {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.setItem("token", token)
                resolve({ data: true })
            } catch (err) {
                reject({ err })
            }
        })
    }

    return { userData, setToken, loadingUser}
}

export default useAuth