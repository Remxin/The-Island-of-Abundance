import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

const Castle = () => {
    let flagInterval = useRef().current
    const [flagAnim, setFlagAnim] = useState({ down: true, value: 0})

    useEffect(() => {
        //@ts-ignore
        flagInterval = setInterval(() => {

            setFlagAnim(prev => {
                if (prev.down) {
                    if (prev.value > 20) return {...prev, down: false}
                    return { ...prev, value: prev.value + .5}
                }

                if (prev.value < 1) return { ...prev, down: true }
                return { ...prev, value: prev.value - .5}
            })  
        }, 60)
    }, [])
        
        
  return (
    <View style={styles.container}>
        {/* <Text>Castle...</Text> */}
        <Image style={styles.castle} source={require("../../public/images/buildings/castle/castle.png")}/>
        <Image  style={[styles.castleFlag, { marginTop: flagAnim.value}]} source={require("../../public/images/buildings/castle/castle-flag.png")}/>
        {/* <Animated.Image style={[styles.wings, { transform: [{ rotate: wingsSpin}]}]} source={require("../../public/images/buildings/windmill/wings.png")}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 200,
        width: 400,
        height: 400,
    },

    castle: {
        position: "absolute",
        height: 350,
        width: 350,
        resizeMode: "contain"
    },

    castleFlag :{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 174,
        width: 200,
        height: 200,
        resizeMode: "contain",
    }

})

export default Castle