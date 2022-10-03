import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", password: ""}
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        setUser: (state, action) => {

        },
        removeUser: (state, action) => {

        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer