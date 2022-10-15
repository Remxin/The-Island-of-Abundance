import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

type componentType = {
  position?: { x: number | string, y: number | string},
  onClickFunction: Function
}

const CloseBtn = ({ position = {x: 0, y: 0}, onClickFunction }: componentType) => {

  return (
    <TouchableOpacity style={[styles.container, { left: position.x, top: position.y,}]} activeOpacity={.7} onPress={() => onClickFunction()}>
        <Text style={styles.text}>X</Text>
        {/* <LottieView style={styles.button} source={require("../../public/lottie/close-btn.json")} autoPlay loop/> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    left: "-50%"
  },

  text: {
    color: "white"
  },

  button: {
    width: 200,
    // backgroundColor: "green"
  }
})

export default CloseBtn