import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../../contexts/SocketContext'
import { BuildingType } from '../../types/types'

import BuildingCard from '../cards/BuildingCard'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useBuildings } from '../../hooks/data/useBuildings'

const Buildings = () => {
  const { buildings, loading} = useBuildings()

    if (loading) return <Text>Connecting to socket...</Text>

  return (
    <View style={styles.container}>
      <FlatList 
        data={buildings} 
        numColumns={4}
        contentContainerStyle={styles.buildingsList}
      
        renderItem={({ item }) => {
        return <BuildingCard data={item}/>
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

export default Buildings