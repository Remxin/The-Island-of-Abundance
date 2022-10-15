import { Socket } from "socket.io-client"

interface GameHelpersTypes {
    socket: Socket
}
class GameHelpers implements GameHelpersTypes {
    socket

    constructor(socket: Socket) {
        this.socket = socket
    }

}

export default GameHelpers