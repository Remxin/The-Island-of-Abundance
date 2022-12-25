import { Socket } from "socket.io-client"
import { BuildingType } from "../types/types"

interface MenuHelpersTypes {
    socket: Socket
}

type responseType = { 
    data?: any
    err?: Error
 }



class MenuHelpers implements MenuHelpersTypes {
    socket

    constructor(socket: Socket) {
        this.socket = socket
    }

    getBuildings = () => {
        return new Promise<responseType>((resolve, reject) => {
            try {
                this.socket.emit("get buildings", {},  (response: responseType, error: Error) => {
                    if (error) resolve({ err: error})
                    
                    resolve(response)
                })
            } catch (err) {
                reject({ err })
            }
        })
    }

    getCards = () => {
        return new Promise<responseType>((resolve, reject) => {
            try {
                this.socket.emit("get cards", {},  (response: responseType, error: Error) => {
                    if (error) resolve({ err: error})
                    
                    resolve(response)
                })
            } catch (err) {
                reject({ err })
            }
        })
    }

}

export default MenuHelpers