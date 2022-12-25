import { useState, useEffect, useContext } from "react";
import { useAsyncStorage } from "../useAsyncStorage";
import { SocketContext } from "../../contexts/SocketContext";
import { useDispatch } from "react-redux";
import { setCards } from "../../features/gameData";
import { useSocketType } from "../useSocket";


export const useCards = (socket: useSocketType) => {
    //@ts-ignore
    // const socket = useContext(SocketContext)
    const [cardsStorage, setCardsStorage] = useAsyncStorage(null, "buildings")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (!socket.connected) return
        if (!socket.menuHelpers) return
        (async () => {
          setError("")
            if (cardsStorage) return setLoading(false) // buildings are saved locally
            const cardsData = await socket.menuHelpers?.getCards()
          
          if (!cardsData?.data) {
            setError("connection error")
            setLoading(false)
            return
          }
          if (cardsData.err) {
            setError(cardsData.err + "")
            setLoading(false)
            return
          }
  
          setCardsStorage(cardsData.data)
          dispatch(setCards({ cards: cardsData.data}))
          setLoading(false)
        })()
      }, [socket.connected, socket.menuHelpers])

      return { cards: cardsStorage, loading, error }
}