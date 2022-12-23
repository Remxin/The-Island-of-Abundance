import { createSlice } from "@reduxjs/toolkit";
import { BuildingType } from "../types/types";

export type GameDataType = {
   buildings: BuildingType[] | null,
}

export type gameDataSelectorType = {
    gameData: {
        value: GameDataType
    
    }
}

const initialState: GameDataType = { 
    buildings: null
}

export const gameDataSlice = createSlice({
    name: "gameData",
    initialState: { value: initialState },
    reducers: {
        setBuildings: (state, action: { payload: { buildings: BuildingType[]}}) => {
            // console.log(action.payload)
            state.value.buildings = action.payload.buildings
        }
    }
})

export const { setBuildings } = gameDataSlice.actions
export default gameDataSlice.reducer