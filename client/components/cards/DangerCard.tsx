import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useState } from 'react'
import { DangerType } from '../../types/types'

import imageConsts from '../../consts/imageConsts'
import useAnimate from '../../hooks/useAnimate'

type componentType = {
    data: DangerType
}

const DangerCard = ({ data }: componentType) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false)
    const [opacityRef, fadeIn, fadeOut] = useAnimate(0, 1, 500)

    function handleOnPress() {
        if (descriptionVisible) {
            setDescriptionVisible(false)
            //@ts-ignore
            fadeOut()
        } else {
            setDescriptionVisible(true)
            //@ts-ignore
            fadeIn()
        }
    }
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleOnPress}>
            <View style={styles.background}></View>
            {/* @ts-ignore */}
            <Image source={imageConsts.dangersImageMap[data.imageUrl]} style={styles.cardBackground}/>
            <View style={styles.backgroundShadow}></View>
            <Text style={styles.cardName}>{data.name}</Text>
            {/* @ts-ignore */}
            <Animated.View style={[styles.descriptionBackground, { opacity: opacityRef }]}>
                <Text style={styles.description}>{data.description}</Text>
            </Animated.View>
        </TouchableOpacity>
      )
}
    
    const styles = StyleSheet.create({
        container: {
          position: "relative",
          width: 180,
          aspectRatio: 3 / 4,
          backgroundColor: "white",
          borderRadius: 10,
          margin: 10
        },

        background: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#232323ff",
            borderRadius: 10
        },
      
        cardBackground: {
          position: "absolute",
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          borderRadius: 10
        },
    
        backgroundShadow: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            backgroundColor: "#23232345"
        },
    
        cardName: {
            color: "white",
            position: "absolute",
            top : 10,
            textAlign: "center",
            width: "100%",
            fontSize: 20,
            fontWeight: "bold"
        },
        
        descriptionBackground: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#232323dd"
        },
        description: {
            color: "white",
            padding: 5,
            fontSize: 16
        }
    
  
      
        
    })
export default DangerCard