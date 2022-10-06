import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { soundsType } from '../../features/soundsMusic'

// const bgMusic = new Sound(require("../../public/music/Neverland.mp3"), (err) => {
//   if (err) console.log(err)
// }) 
// const bgMusic = new Sound("neverland.mp3", Sound.MAIN_BUNDLE, (err) => {
//   console.log(err)
// })
type stateType = {
  sound: { value: soundsType}
}

const HomeScreen = () => {
  const sounds = useSelector((state: stateType) => state.sound.value)

  useEffect(() => {
    sounds.musics.home.play()

    return () => {
      sounds.musics.home.release()
    }
  }, [])
  return (
    <View style={styles.pageContainer}>
      <Image style={styles.bgcImage} source={require("../../public/images/green-hills.jpg")}/>
      {/* <Text>HomeScreen</Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    height: "100%"
  },

  bgcImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover"
  }
})

export default HomeScreen