import { createSlice } from "@reduxjs/toolkit";
import { BuildingType } from "../types/types";

export type GameDataType = {
   buildings: BuildingType[] | null,
}

const initialState: GameDataType = { 
    buildings: null
}

export const userSlice = createSlice({
    name: "gameData",
    initialState: { value: initialState },
    reducers: {
   
    }
})

export const { } = userSlice.actions
export default userSlice.reducer