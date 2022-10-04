import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import React from 'react'

type componentType = {
  text: string,
  onPressFunction: () => any
}

const BlackLink = ({ text, onPressFunction }: componentType) => {
  return (
    <TouchableNativeFeedback onPress={onPressFunction}>
        <View>
            <Text style={textStyle.style}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
  )
}

const textStyle = StyleSheet.create({
  style: {
    fontWeight: "bold"
  }
})

export default BlackLink