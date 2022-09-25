import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import React from 'react'

const BlackLink = ({ text, onPressFunction }) => {
  return (
    <TouchableNativeFeedback onPress={onPressFunction}>
        <View>
            <Text style={textStyle}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
  )
}

const textStyle = StyleSheet.create({
  fontWeight: "bold"
})

export default BlackLink