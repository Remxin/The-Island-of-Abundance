import React from 'react'

// - components import
import { View, Text, StyleSheet } from 'react-native'
import LottieView from "lottie-react-native"


type componentType = {
    visible: boolean
    loadingText?: string
}

const LightLoadingModal = ({ visible, loadingText = "Loading..." }: componentType) => {
    if (!visible) return <></>

  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>{loadingText}</Text>
        <LottieView style={styles.loadingBall} source={require("../../public/lottie/loading-ball.json")} autoPlay/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        // flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#dedede9a"
    },

    loadingText: {
        // color: "#005500cc",
        color: "#ffffff",
        top: 70,
        fontWeight: "bold",
        fontSize: 35
    },

    loadingBall: {
        // position: "relative",
        left: 0,
        // backgroundColor: "red",
        width: "40%",
        // maxWitdh: "40%",
        maxHeight: 250,
    }
})

export default LightLoadingModal