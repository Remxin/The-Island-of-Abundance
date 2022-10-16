import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LottieView from "lottie-react-native"

type componentType = {
  position?: { x: number | string, y: number | string},
  onClickFunction: Function
}

const CloseBtn = ({ position = {x: 0, y: 0}, onClickFunction }: componentType) => {
  const [isTextVisible, setIsTestVisible] = useState(false)

  return (
    <TouchableOpacity style={[styles.container, { left: position.x, top: position.y,}]} onPressIn={() => setIsTestVisible(true)} onPressOut={() => setIsTestVisible(false)} activeOpacity={.7} onPress={() => onClickFunction()}>
        <Text style={[styles.text, { color: isTextVisible ? "white" : "red"}]}>X</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    // marginLeft: "-5%",
    // marginTop: "1%"
  },

  text: {
    textAlign: "center",
    color: "white",
    width: 20,
    height: 20,
    fontSize: 16,
    borderRadius: 10,
    fontWeight: "bold"
  },

})

export default CloseBtn