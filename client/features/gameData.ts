import { createSlice } from "@reduxjs/toolkit";
import { BuildingType, CardsType, DangerType, DevelopementType } from "../types/types";

// types
export type GameDataType = {
   buildings: BuildingType[] | null,
   cards: CardsType[] | null,
   dangers: DangerType[],
   developements: DevelopementType[]
}

export type gameDataSelectorType = {
    gameData: {
        value: GameDataType
    
    }
}

// constants
const dangers: DangerType[] = [
    {
        id: 0,
        name: "bandits",
        imageUrl: "/images/dangers/bandits.png",
        description: "They attack your settlements on 'bandits' card. Randomly deletes half of your resources when you have more than 10 (except ducats)"
    },
    {
        id: 1,
        name: "barbarian",
        imageUrl: "/images/dangers/barbarian.png",
        description: "Spawns near coast on 'bandits' card or when player builds or upgrades settlement. When 3 on the same field, they disable that field and weakens functioning of nearest settlements. Can be defeated by knights by outnumbering its count."
    },
    {
        id: 2,
        name: "arsonist",
        imageUrl: "/images/dangers/arsonist.png",
        description: "Spawns near coast on 'arsonist' card. Works as 3 barbarians."
    }
]

const developements: DevelopementType[] = [
    {
        id: 0,
        name: "knight",
        imageUrl: "/images/developements/knight.png",
        description: "Basic unit for fighting barbarians. Can be placed near main or player's castle.",
        probability: 40
    },
    {
        id: 1,
        name: "dark knight",
        imageUrl: "/images/developements/dark_knight.png",
        description: "Executes all barbarians or arsonist from specific field and then dies (provides 1 ducat for each defeated unit)",
        probability: 5
    },
    {
        id: 2,
        name: "betrayal",
        imageUrl: "/images/developements/betrayal.png",
        description: "Move 2 barbarians to other fields gain 2 ducats",
        probability: 20
    },
    {
        id: 3,
        name: "bribery",
        imageUrl: "/images/developements/bribery.png",
        description: "Delete one barbarian and gain 2 ducats",
        probability: 25
    },
    {
        id: 4,
        name: "wonder",
        imageUrl: "/images/developements/wonder.png",
        description: "Gain 1 victory point",
        probability: 10
    },
]

const initialState: GameDataType = { 
    buildings: null,
    cards: null,
    dangers: dangers,
    developements: developements
}

export const gameDataSlice = createSlice({
    name: "gameData",
    initialState: { value: initialState },
    reducers: {
        setBuildings: (state, action: { payload: { buildings: BuildingType[]}}) => {
            // console.log(action.payload)
            state.value.buildings = action.payload.buildings
        },

        setCards: (state, action: {payload: { cards: CardsType[]}}) => {
            state.value.cards = action.payload.cards
        }
    }
})

export const { setBuildings, setCards } = gameDataSlice.actions
export default gameDataSlice.reducer