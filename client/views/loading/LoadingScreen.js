import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'

const LoadingScreen = ({ navigation }) => {
    const loadingInterval = useRef()

    useEffect(() => {
        loadingInterval.current = setTimeout(() => {
            navigation.navigate("Auth")
        }, 1000)
    }, [])
  return (
    <View>
      <Text>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen