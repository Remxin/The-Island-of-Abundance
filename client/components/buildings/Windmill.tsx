import { View, Image, StyleSheet, Animated, Easing } from 'react-native'
import React , { useRef, useEffect } from 'react'

const Windmill = () => {
    const wingsRotate = useRef(new Animated.Value(0)).current 

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                wingsRotate,
                {
                  toValue: 1,
                  duration: 10000,
                  useNativeDriver: true,
                  easing: Easing.linear
                }
            )).start();

            
    }, [wingsRotate])
        
        let wingsSpin = wingsRotate.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        })
    
  return (
    <View style={styles.container}>
        <Image style={styles.windmill} source={require("../../public/images/buildings/windmill/windmill.png")}/>
        <Image  style={styles.profileSign} source={require("../../public/images/wooden-hang-profile.png")}/>
        <Animated.Image style={[styles.wings, { transform: [{ rotate: wingsSpin}]}]} source={require("../../public/images/buildings/windmill/wings.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 20,
        left: -50,
        width: 400,
        height: 400,
    },

    windmill: {
        position: "absolute",
        left: 100,
        height: 400,
        width: 400,
        resizeMode: "contain"
    },

    wings :{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 70,
        top: 5,
        width: 200,
        height: 200,
        resizeMode: "contain",
        // backgroundColor: "red"
    },

    profileSign: {
        position: "absolute",
        left: 115,
        top: 135,
        width: 110,
        height: 110
    }

})

export default Windmill