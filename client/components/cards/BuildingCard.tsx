import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import imageConsts from '../../consts/imageConsts'

// components
import ResourceWidget from '../widgets/ResourceWidget'
import FullScreenBlock from '../fullScreen/FullScreenBlock'

// types
import { BuildingType } from '../../types/types'

type componentType = {
  data: BuildingType
}

const BuildingCard = ({data}: componentType) => {

  const [descriptionVisible, setDescriptionVisible] = useState(false)

  function handleOnPress() {
    setDescriptionVisible(p => !p)
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleOnPress}>
      {/* images */}

      {/* @ts-ignore */}
      <Image source={imageConsts.buildingDestinationImagesMap[data.name]} style={styles.cardBackground}/>
      {/* @ts-ignore */}
      <Image style={styles.cardImage} source={imageConsts.buildingCardsImagesMap[data.imgUrl]}/>
      <View style={styles.containerShadow}></View>
      <Text style={styles.cardName}>{data.name}</Text>
      <View style={styles.resourcesContainer}>
        <View style={styles.column}>
          <ResourceWidget name="clay" value={data.cost.clay}/>
          <ResourceWidget name="wood" value={data.cost.wood}/>
        </View>
        <View style={styles.column}>
          <ResourceWidget name="stone" value={data.cost.stone}/>
          <ResourceWidget name="wheat" value={data.cost.wheat}/>
        </View>
        <View style={styles.column}>
          <ResourceWidget name="meat" value={data.cost.meat}/>
          <ResourceWidget name="fish" value={data.cost.fish}/>
        </View>
        <View style={styles.column}>
          <ResourceWidget name="ducats" value={data.cost.ducats}/>
        </View>
      </View>
      <FullScreenBlock visible={descriptionVisible}>
        <Text style={styles.description}>{data.description}</Text>
      </FullScreenBlock>
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

  containerShadow: {
    position: "absolute",
    width: '100%',
    height: "100%",
    backgroundColor: "#23232323"
  },

  cardName: {
    display: "flex",
    color: "white",
    height: 35,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textShadowColor: "black",
    textShadowRadius: 1
  },

  cardBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },

  cardImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10
  },

  resourcesContainer: {
    height: "30%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row"
  },

  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },

  description: {
    padding: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  }
})

export default BuildingCard