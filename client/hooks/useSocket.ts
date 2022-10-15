import React, { useEffect, useState} from "react";
import io, { Socket } from "socket.io-client"
import { useSelector } from "react-redux";
import { UserType } from "../features/user";
import appConsts from "../consts/appConsts";
import MenuHelpers from "../helpers/socketMenuHelpers";
import LobbyHelpers from "../helpers/socketLobbyHelpers";
import GameHelpers from "../helpers/socketGameHelpers";

export type useSocketType = {
    connectToServer: Function,
    connected: boolean,
    socket: null | Socket,
    menuHelpers: MenuHelpers | null
}

const useSocket = () => {
    const user = useSelector((state: {user: {value: UserType}}) => state.user.value)
    const [connected, setConnected] = useState(false)
    const [socket, setSocket] = useState<null | Socket>(null)
    const [helpers, setHelpers] = useState<{lobby: null | LobbyHelpers, game: null | GameHelpers, menu: null | MenuHelpers}>({ lobby: null, game: null, menu: null})

    function connectToServer() {
        const ioconn = io(appConsts.socketIp, { withCredentials: true })

        ioconn.on("connect", () => {
            setSocket(ioconn)
            setConnected(true)
            setHelpers({
                menu: new MenuHelpers(ioconn),
                game: new GameHelpers(ioconn),
                lobby: new LobbyHelpers(ioconn)
            })
        })
    }

    useEffect(() => {
        if (!socket) return
        // TODO: every listening to socket
        
        
    }, [socket])

    return { connectToServer, connected, socket, menuHelpers: helpers.menu }
}

export default useSocket