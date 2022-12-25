import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { CardsType } from '../../types/types'
import imageConsts from '../../consts/imageConsts'

type componentType = {
    data: CardsType
}

const CardCard = ({ data }: componentType) => {
  return (
    <View style={styles.container}>
        {/* @ts-ignore */}
        <Image source={imageConsts.cardsImageMap[data.imageUrl]} style={styles.cardBackground}/>
        <View style={styles.backgroundShadow}></View>
        <View style={styles.number}>
            <Text style={styles.numberText}>{data.number}</Text>
        </View>
        <Image source={require("../../public/images/silver_circle_border.png")} style={styles.numberCircle}/>
        <Text style={styles.cardName}>{data.special}</Text>
    </View>
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
  
    cardBackground: {
      position: "absolute",
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      borderRadius: 10
    },

    backgroundShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: "#23232334"
    },

    cardName: {
        color: "white",
        position: "absolute",
        bottom : 10,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        fontWeight: "bold"
    },

    numberCircle: {
        width: 80,
        height: 80,
        // backgroundColor: "gray"
        // aspectRatio: 1 / 1
    },

    number: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        position: "absolute",
        top: 19,
        left: 19,
        backgroundColor: "#232323",
        borderRadius: 21
    },

    numberText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    }
  
    
  })

export default CardCard