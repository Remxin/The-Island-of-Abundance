import { View, Text, StyleSheet, StyleProp, TextStyle, Image } from 'react-native'
import React from 'react'
import imageConsts from '../../consts/imageConsts'
import { ResourceType } from '../../types/types'

type componentPropsType = {
  name: ResourceType,
  value: number,
  style?: StyleProp<TextStyle>
}

const ResourceWidget = ({ name, value, style }: componentPropsType) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={imageConsts.resourceImageMap[name]} style={styles.backgroundImage}/>
      {/* <View style={styles.backgroundImage}></View> */}
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    position: "relative",
    height: 31,
    borderRadius: 15,
    aspectRatio: 3 / 2,
    backgroundColor: "#232323cc"
  },
  
  backgroundImage: {
    width: 25,
    maxHeight: 30,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
    borderRadius: 15,
  },

  value: {
    color: "white"
  }
})

export default ResourceWidget