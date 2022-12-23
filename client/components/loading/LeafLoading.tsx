import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

type componentType = {
    visible?: boolean,
    text?: string,
    style?: StyleProp<TextStyle>
}

const LeafLoading = ({ text, visible = true, style = {}}: componentType) => {
    if (!visible) return null
    if (!text) text = "Loading..."
  return (
    <View style={[{ width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-start"}, style]}>
      <LottieView style={{ width: "100%", height: "100%", position: "absolute", top: -30 ,backgroundColor: "transparent"}} source={require("../../public/lottie/loading-leaf.json")} autoPlay/>
      <Text style={{ color: "white", fontSize: 40, top: 150}}>{text}</Text>
    </View>
  )
}

export default LeafLoading