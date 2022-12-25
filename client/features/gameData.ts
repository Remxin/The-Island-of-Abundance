import { createSlice } from "@reduxjs/toolkit";
import { BuildingType, CardsType } from "../types/types";

export type GameDataType = {
   buildings: BuildingType[] | null,
   cards: CardsType[] | null
}

export type gameDataSelectorType = {
    gameData: {
        value: GameDataType
    
    }
}

const initialState: GameDataType = { 
    buildings: null,
    cards: null
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