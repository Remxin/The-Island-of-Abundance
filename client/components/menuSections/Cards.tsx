import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { gameDataSelectorType } from '../../features/gameData'
import CardCard from '../cards/CardCard'

const Cards = () => {
    const cards = useSelector((state: gameDataSelectorType) => state.gameData.value.cards)

  return (
    <View style={styles.container}>
      <FlatList 
        data={cards} 
        numColumns={4}
        contentContainerStyle={styles.buildingsList}
      
        renderItem={({ item }) => {
        return <CardCard data={item}/>
      }}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // width: "100%",
      flexDirection: "row"
    },
  
    buildingsList: {
      // flex: 1,
      width: "100%",
      // flexDirection: "column",
      // flex: 1,
      alignItems: 'center',
      justifyContent: "space-between"
    }
  })

export default Cards