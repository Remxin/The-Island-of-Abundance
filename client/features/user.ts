import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    id: string,
    name: string,
    email: string,
    level: number,
    authToken: string,
    experience: number,
    gameId?: string
}
const initialState: UserType = { id: "", name: "", email: "", level: 0, authToken: "", experience: 0 }

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        removeUser: (state, action) => {

        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer