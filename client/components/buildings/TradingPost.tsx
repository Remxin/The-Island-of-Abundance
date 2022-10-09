import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const TradingPost = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Castle...</Text> */}
            <Image style={styles.tradingPost} source={require("../../public/images/buildings/tradepost/trade.png")}/>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            top: 120,
            left: 560,
            width: 400,
            height: 400,
        },
    
        tradingPost: {
            position: "absolute",
            height: 250,
            width: 250,
            resizeMode: "contain"
        },
    
    
    })
export default TradingPost