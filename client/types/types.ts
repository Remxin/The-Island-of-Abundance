export type BuildingType = {
    id: string
    name: string
    imgUrl: string
    description: string,
    upgradableFrom: string
    functionalities: string,
    tier: string
    cost?: CostType
}

export type CostType = {
    id: string
    building?: BuildingType
    buildingId?: string
    ducats: number
    wood: number
    stone: number
    clay: number
    wheat: number
    meat: number
    fish: number
}