import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { GameInfoButtonContext } from '../../../contexts/GameInfoButtonContext'

type componentType = {
  text: string,
  position: { x: number, y: number},
  onClickFunction: Function
}

const LightWoodenBtn = ({ text, position, onClickFunction}: componentType) => {
    //@ts-ignore
    const { selectedBtn, setBtn } = useContext(GameInfoButtonContext)
    const isThisBtnSelected = text === selectedBtn


    const onClickHandler = () => {  
        setBtn(text)
    }

  return (
    <TouchableOpacity onPress={onClickHandler} style={[styles.container, { top: position.y, left: position.x, borderBottomColor: isThisBtnSelected ? "white" : "transparent", borderBottomWidth: 2}]} activeOpacity={.7}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    position: "relative",
    height: 60,
    borderRadius: 10,
    // backgroundColor: "red"
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
})

export default LightWoodenBtn