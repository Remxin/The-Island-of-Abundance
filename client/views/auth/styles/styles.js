import { StyleSheet } from "react-native";

export const containerStyle = StyleSheet.create({
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
})

export const secondContainerStyle = StyleSheet.create({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
})

export const horizontalContainerStyle = StyleSheet.create({
    widht: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
})

// export const loginButton = StyleSheet.create({
//     width: "100px"
// })

export const backgroundImageStyle = StyleSheet.create({
    width: "100%",
    height: "100%",
    position: "absolute"
})

export const knightImageStyle = StyleSheet.create({
    widht: "80%",
    height: "60%",
    maxWidth: "60%",
    resizeMode: "contain",
    zIndex: -1,
    borderRadius: 200
})

export const screenTitleStyle = StyleSheet.create({
    position: "absolute",
    top: 5,
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center"
})

export const textInputStyle = StyleSheet.create({
    background: "white",
    width: 120,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 15,
    textAlign: "center"
})