import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { soundsType } from '../../features/soundsMusic'

import Windmill from '../../components/buildings/Windmill'
import Castle from '../../components/buildings/Castle'
import TradingPost from '../../components/buildings/TradingPost'

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
      <Windmill/>
      <Castle/>
      <TradingPost/>
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