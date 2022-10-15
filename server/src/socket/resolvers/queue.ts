import { Socket } from "socket.io"
import { findRandomGameProps } from "../types"

const findRandomGame = async (socket: Socket, data: findRandomGameProps) => {
    const { desiredMapSize, userName } = data
    socket.join("queue" + desiredMapSize)

}


// exports
export default {
    findRandomGame
}