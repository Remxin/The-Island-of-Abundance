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
        home: new Sound(require("../public/music/neverland.mp3"))
        // home: new Sound("neverland.mp3", Sound.MAIN_BUNDLE)
    }
}


export const soundSlice = createSlice({
    name: "sound",
    initialState: { value:  sounds},
    reducers: {
        playBgcMusic: (state, action: {payload: { musicName: string}} ) => {
            
            switch (action.payload.musicName) {
                case "home": 
                // console.log(state.value.musics.home);
                state.value.musics.home.play()
                // console.log(state.value.musics.home);
                
                    break
                default:
                    break
            }

        }
    }
})

export const { playBgcMusic } = soundSlice.actions
export default soundSlice.reducer