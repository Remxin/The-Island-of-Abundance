import { Socket } from "socket.io-client"

interface LobbyHelpersTypes {
    socket: Socket
}
class LobbyHelpers implements LobbyHelpersTypes {
    socket

    constructor(socket: Socket) {
        this.socket = socket
    }

}

export default LobbyHelpers