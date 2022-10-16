// ___ REACT + BASIC COMPONENTS ___
import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

// ___ COMPONENTS ___
// - buildings
import Windmill from '../../components/buildings/Windmill'
import Castle from '../../components/buildings/Castle'
import TradingPost from '../../components/buildings/TradingPost'
// - modals
import GameInfoModal from '../../components/modals/GameInfoModal'
import LightLoadingModal from '../../components/modals/LightLoadingModal'

// ___ HOOKS ___
import { useSelector } from 'react-redux'

// ___ CONTEXTS ___
import { SocketContext } from '../../contexts/SocketContext'

// ___ TYPES ___
import { soundsType } from '../../features/soundsMusic'
type stateType = {
  sound: { value: soundsType}
}

const HomeScreen = () => {
  const socket = useContext(SocketContext)
  const sounds = useSelector((state: stateType) => state.sound.value)

  const socketConnected = socket?.connected
  const [showGameInfo, setShowGameInfo] = useState(false)
  

  useEffect(() => {
    sounds.musics.home.setNumberOfLoops(-1).play()

    return () => {
      sounds.musics.home.stop()
      sounds.musics.home.release()
    }
  }, [sounds.musics.home])
  return (
    <View style={styles.pageContainer}>
      <Image style={styles.bgcImage} source={require("../../public/images/green-hills.jpg")}/>
      <Windmill/>
      <Castle/>
      <TradingPost onClickFunction={() => setShowGameInfo(true)}/>

      <LightLoadingModal visible={!socketConnected} loadingText="Connecting to server..."/>
      <GameInfoModal visible={showGameInfo} setVisible={setShowGameInfo}/>
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