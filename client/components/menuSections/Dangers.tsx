import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { gameDataSelectorType } from '../../features/gameData'
import DangerCard from '../cards/DangerCard'

const Dangers = () => {
    const dangers = useSelector((state: gameDataSelectorType) => state.gameData.value.dangers)
  return (
    <View style={styles.container}>
    <FlatList 
      data={dangers} 
      numColumns={4}
      contentContainerStyle={styles.buildingsList}
    
      renderItem={({ item }) => {
      return <DangerCard data={item}/>
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

export default Dangers