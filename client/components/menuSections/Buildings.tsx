import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../../contexts/SocketContext'
import { BuildingType } from '../../types/types'

import BuildingCard from '../cards/BuildingCard'
import { View, Text, StyleSheet } from 'react-native'

const Buildings = () => {
  const socket = useContext(SocketContext)

  const [pageLoading, setPageLoading] = useState(true)
  const [buildings, setBuildings] = useState<BuildingType[]>([])

    if (!socket) return <Text>Connecting to socket...</Text>


    useEffect(() => {
      (async () => {
        const buildings = await socket.menuHelpers?.getBuildings()
        
        if (!buildings) return
        if (buildings.err) return

        setBuildings(buildings.data)
        setPageLoading(false)
      })()
    }, [])


  return (
    <View style={styles.container}>
      {pageLoading ? <Text>Loading...</Text> : <>
      
      {buildings.map((building: BuildingType) => {
        if (!building) return
        
        return <BuildingCard key={building.id} data={building}/>
      })}
      </>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row"
  }
})

export default Buildings