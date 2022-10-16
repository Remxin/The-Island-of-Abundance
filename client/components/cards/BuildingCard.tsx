import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BuildingType } from '../../types/types'
import imageConsts from '../../consts/imageConsts'

type componentType = {
  data: BuildingType
}

const BuildingCard = ({data}: componentType) => {

  
  
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Image style={styles.cardImage} source={imageConsts.buildingCardsImagesMap[data.imgUrl]}/>
      {/* <Text>BuildingCard</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    // backgroundColor: "red"
  },

  cardImage: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
})

export default BuildingCard