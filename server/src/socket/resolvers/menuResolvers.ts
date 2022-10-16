import { prisma } from "../.."
import { Socket } from "socket.io"

const getBuildings = async (callback: Function) => {
    try {
        const allBuildings = await prisma.building.findMany({ include: { cost: true}})
        callback({ data: allBuildings })
    } catch (err) {
        callback({ err })
    }
}

export default {
    getBuildings
}