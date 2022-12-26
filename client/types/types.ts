export type BuildingType = {
    id: string
    name: string
    imgUrl: string
    description: string,
    upgradableFrom: string
    functionalities: string,
    tier: string
    cost: CostType
}

export type CardsType = {
    id: string
    number: number
    special: string
    imageUrl: string
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

export type DangerType = {
    id: number
    name: string
    imageUrl: string
    description: string
}

export type DevelopementType = {
    id: number,
    name: string
    imageUrl: string
    description: string
    probability: number
}

export type ResourceType =  "ducats" | "wood" | "stone" | "clay" | "wheat" | "meat" | "fish"