import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { gameDataSelectorType } from '../../features/gameData'
import DevelopementCard from '../cards/DevelopementCard'

const Developements = () => {
    const developements = useSelector((state: gameDataSelectorType) => state.gameData.value.developements)
    return (
        <View style={styles.container}>
        <FlatList 
          data={developements} 
          numColumns={4}
          contentContainerStyle={styles.buildingsList}
        
          renderItem={({ item }) => {
          return <DevelopementCard data={item}/>
        }}/>
        
      </View>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "row"
        },
      
        buildingsList: {
          width: "100%",
          alignItems: 'center',
          justifyContent: "space-between"
        }
      })
export default Developements