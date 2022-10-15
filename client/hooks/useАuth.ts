import { useEffect, useState } from "react";
import { setUser, removeUser } from "../features/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appConsts from "../consts/appConsts";
import { useDispatch } from "react-redux";


const useAuth = () => {
    const [userData, setUserData] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true)
    const dispatch = useDispatch()


    useEffect(() => {
        if (userData) return
        (async function verifyUser() {
            try {

                const token = await AsyncStorage.getItem("token")
                
                if (!token) return
                const res = await fetch(`${appConsts.serverIp}/verifyuser`, {
                    method: "POST",
                    body: JSON.stringify({ token })
                })
                
                const resData = await res.json()
                // console.log(resData);
                if (resData.err) {
                    setLoadingUser(false)
                    return
                }
                setUserData(resData)
                
                dispatch(setUser(resData))
                
                setLoadingUser(false)
            } catch (err) {
                setLoadingUser(false)
                console.log(err);
                
            }

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