import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'



const GreenBtn = ({ text, onPressFunction}) => {
  return (
    <TouchableOpacity onPress={onPressFunction} activeOpacity={0.8}>
        <View style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </View>
      </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42855B",
    width: 120,
    height: 40,
    // padding: 5,
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 15,
})

const textStyles = StyleSheet.create({
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    fontSize: 16,
    fontWeight: "bold",
    // textShadowRadius: 2
    fontFamily: "Avenir-Book"
    
})

export default GreenBtn