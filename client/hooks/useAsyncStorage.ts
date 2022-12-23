import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useAsyncStorage = (value: any, key: string) => {
    const [storageValue, setStorageValue] = useState(null)
    const [err, setErr] = useState<any>("")

    async function writeToStorage () {
        // console.log('setitem',key, JSON.stringify(storageValue))
        const item = JSON.stringify(storageValue)
        await AsyncStorage.setItem(key, item)
        setStorageValue(value)
    }
 
    useEffect(() => {
        (async () => { 
            try {
                let storageValue = await AsyncStorage.getItem(key)
                if (typeof storageValue === "string") storageValue = JSON.parse(storageValue)
                if (storageValue) { // item exists in storage
                    if (value) { // we want to override it's value
                        writeToStorage()
                        return
                    }
                    const json = JSON.parse(storageValue)
                    setStorageValue(json)
                    return
                }
                // item does not exist
               writeToStorage()
                
            } catch (err) {
                setErr(err)
            }
        })()
    }, [])

    useEffect(() => {
        // console.log("zmienia się", value)
        if (value) writeToStorage()
    }, [value, storageValue])

    return [storageValue, setStorageValue, err]
}