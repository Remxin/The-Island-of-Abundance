import { View, Text, StyleSheet, StyleProp, TextStyle, Animated } from 'react-native'
import React, { Dispatch, useEffect } from 'react'
import useAnimate from '../../hooks/useAnimate'

type componentType = {
    children?: React.ReactNode,
    visible: boolean,
    setVisible?: Dispatch<boolean>,
    style?: StyleProp<TextStyle>,
    deleteOnHide?: boolean
}

const FullScreenBlock = ({ children, visible, setVisible = undefined, style = {}, deleteOnHide = false }: componentType) => {
    const [opacityRef, fadeIn, fadeOut] = useAnimate(0, 1, 500)

    useEffect(() => {
        //@ts-ignore
        if (visible) return fadeIn()
        //@ts-ignore
        else fadeOut()

    }, [visible])
    if (!visible && deleteOnHide) return null

  return ( // @ts-ignore
    <Animated.View style={[styles.container, style, { opacity: opacityRef }]}>
      { children }
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#232323aa"
    }
})

export default FullScreenBlock