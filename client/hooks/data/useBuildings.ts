import { useState, useEffect, useContext } from "react";
import { useAsyncStorage } from "../useAsyncStorage";
import { SocketContext } from "../../contexts/SocketContext";
import { useDispatch } from "react-redux";
import { setBuildings } from "../../features/gameData";
import { useSocketType } from "../useSocket";


export const useBuildings = (socket: useSocketType) => {
    //@ts-ignore
    // const socket = useContext(SocketContext)
    const [buildingsStorage, setBuildingsStorage] = useAsyncStorage(null, "buildings")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')
    const dispatch = useDispatch()

    useEffect(() => {
      console.log(socket.menuHelpers)
        if (!socket.connected) return
        if (!socket.menuHelpers) return
        (async () => {
          setError("")
            if (buildingsStorage) return setLoading(false) // buildings are saved locally
            console.log(socket)
          console.log(socket.menuHelpers)
            const buildingsData = await socket.menuHelpers?.getBuildings()
            console.log(buildingsData)
          
          if (!buildingsData?.data) {
            setError("connection error")
            setLoading(false)
            return
          }
          if (buildingsData.err) {
            setError(buildingsData.err + "")
            setLoading(false)
            return
          }
  
          setBuildingsStorage(buildingsData.data)
          dispatch(setBuildings({ buildings: buildingsData.data}))
          setLoading(false)
        })()
      }, [socket.connected, socket.menuHelpers])

      return { buildings: buildingsStorage, loading, error }
}