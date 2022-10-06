import { createSlice } from "@reduxjs/toolkit";
import Sound from 'react-native-sound'

Sound.setCategory("Playback")

export type soundsType = {
    soundEffects: {

    },

    musics: {
        home: Sound
    }
}

const sounds = {
    soundEffects: {

    },

    musics: {
        home: new Sound("neverland.mp3", Sound.MAIN_BUNDLE)
    }
}


export const soundSlice = createSlice({
    name: "sound",
    initialState: { value:  sounds},
    reducers: {
    }
})

export const { } = soundSlice.actions
export default soundSlice.reducer