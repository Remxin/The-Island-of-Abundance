import { Socket } from "socket.io-client"
import { BuildingType } from "../types/types"

interface MenuHelpersTypes {
    socket: Socket
}




class MenuHelpers implements MenuHelpersTypes {
    socket

    constructor(socket: Socket) {
        this.socket = socket
    }

    getBuildings = () => {
        return new Promise<BuildingType[] | Error>((resolve, reject) => {
            try {
                this.socket.emit("/get/buildings", (response: BuildingType[]) => {
                    resolve(response)
                })
            } catch (err) {
                reject({ err })
            }
        })
    }

}

export default MenuHelpers