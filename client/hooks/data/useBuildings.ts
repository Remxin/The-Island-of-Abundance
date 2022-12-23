import { useState, useEffect, useContext } from "react";
import { useAsyncStorage } from "../useAsyncStorage";
import { SocketContext } from "../../contexts/SocketContext";


export const useBuildings = () => {
    //@ts-ignore
    const socket = useContext(SocketContext)
    const [buildings, setBuildings] = useAsyncStorage(null, "buildings")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!socket?.socket) return
        (async () => {
            setLoading(true)
            if (buildings) return setLoading(false) // buildings are saved locally

            const buildingsData = await socket.menuHelpers?.getBuildings()
            // console.log(buildingsData)
          
          if (!buildingsData) return
          if (buildingsData.err) return
  
          setLoading(false)
          setBuildings(buildingsData.data)
        })()
      }, [socket])

      return { buildings, loading }
}