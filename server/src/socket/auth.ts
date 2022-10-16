import { IncomingMessage } from "http"

export const verifySocketUser = (req: IncomingMessage, callback: Function) => {
    callback(null, true)
}