import { ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export const containerStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }
})

export const secondContainerStyle = StyleSheet.create({
    style: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }
})

export const horizontalContainerStyle = StyleSheet.create({
    style: {
        widht: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }
})


export const backgroundImageStyles = StyleSheet.create({
    bgcImg: {
      position: "absolute",
      height: "100%",
      width: "100%"
    }
  })

export const knightImageStyle = StyleSheet.create({
    style: {
        widht: "80%",
        height: "80%",
        maxWidth: "60%",
        resizeMode: "contain",
        zIndex: -1,
        borderRadius: 200
    }
    
})

export const screenTitleStyle = StyleSheet.create({
    style: {
        position: "absolute",
        top: 5,
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    }
})

export const textInputStyle = StyleSheet.create({
    style: {
        background: "white",
        width: 120,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 15,
        textAlign: "center"
    }
})