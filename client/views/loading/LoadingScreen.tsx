import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import useAuth from '../../hooks/useАuth'
import LottieView from "lottie-react-native"

const loadingText = ["Chopping woods...", "Bulding villages...", "Mining stone...", ""]
//@ts-ignore
const LoadingScreen = ({ navigation }) => {
    const { userData, loadingUser } = useAuth()
    const [loadingStage, setLoadingStage] = useState(0)

    let intervalRef = useRef().current

    useEffect(() => {
      //@ts-ignore
      intervalRef = setInterval(() => {
        // console.log("stage: " + loadingStage);
        
        // if (loadingStage > loadingText.length - 1) return
        setLoadingStage((prev) => prev < loadingText.length - 2 ? prev + 1 : prev)
      }, 2000)

      return () => {
        //@ts-ignore
        clearInterval(intervalRef)
      }
    }, [])

    useEffect(() => {
        if (loadingUser) return
      
        if (!userData) return navigation.navigate("Auth")
        navigation.navigate("Home")
    }, [loadingUser])

    // console.log(loadingStage);
    
  return (
    <View style={styles.pageContainer}>
      <Image source={require("../../public/images/forest.jpg")} style={styles.bgcImage}/>
      <LottieView style={styles.loadingSpinner} source={require("../../public/lottie/wood-loading.json")} autoPlay/>
      <Text style={styles.loadingText}>{loadingText[loadingStage]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },

  bgcImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  loadingSpinner: {
    width: "20%",
    heigth: "40%",
    position: "relative"
  },

  loadingText: {
    textAlign: "center",
    color: "#fefefe",
    fontWeight: "bold",
    fontSize: 24
  }
})

export default LoadingScreen