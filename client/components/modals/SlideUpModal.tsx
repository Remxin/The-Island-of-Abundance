import { View, Text, StyleSheet, StyleProp, TextStyle, Animated } from 'react-native'
import React from 'react'
import useAnimate from '../../hooks/useAnimate'

type componentPropsType = {
    style?: StyleProp<TextStyle>,
    visible: boolean,
    text: string
}

const SlideUpModal = ({ style, visible, text }: componentPropsType) => {
    const [containerWidthRef, expandContainer, shrinkContainer] = useAnimate(0, 100, 500)

    //@ts-ignore
    if (visible) expandContainer()
    //@ts-ignore
    else shrinkContainer()

  return ( // @ts-ignore
    <Animated.View style={[staticStyles.container, style, { height: containerWidthRef }]}>
      <Text style={staticStyles.text}>{text}</Text>
    </Animated.View>
  )
}

const staticStyles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        // height: 100,
        backgroundColor: "#23232399",
        width: "100%"
    },

    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20
    }
})

export default SlideUpModal