import { prisma } from "../.."

const getBuildings = async (callback: Function) => {
    try {
        const allBuildings = await prisma.building.findMany({ include: { cost: true}})
        callback({ data: allBuildings })
    } catch (err) {
        callback({ err })
    }
}

const getCards = async (callback: Function) => {
    try {
        console.log("cards")
        const allCards = await prisma.card.findMany({ orderBy: { number: "desc" }})
        console.log(allCards)
        callback({ data: allCards })
    } catch (err) {
        callback({ err })
    }
}

export default {
    getBuildings,
    getCards
}