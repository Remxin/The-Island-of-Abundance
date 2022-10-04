import { View, Text, TouchableOpacity, Image, StyleProp, StyleSheet } from 'react-native'
import React from 'react'
import GreenBtn from "../../../components/buttons/greenBtn/GreenBtn"

import { containerStyle, backgroundImageStyles } from '../styles/styles'

//@ts-ignore
const AuthMenuScreen: React.FC = ({ navigation }) => {
  return (
    <View style={containerStyle.container}>
      <Image style={backgroundImageStyles.bgcImg} source={require("../../../public/images/mainScreen.jpg")}/>

      <Text style={{ color: "#EAE509", fontSize: 38, position: "absolute", top: "10%", textShadowColor: "#483838", textShadowRadius: 15}}>𝕿𝖍𝖊 𝕴𝖘𝖑𝖆𝖓𝖉 𝖔𝖋 𝕬𝖇𝖚𝖓𝖉𝖆𝖓𝖈𝖊</Text>
      <GreenBtn onPressFunction={() => navigation.navigate("Login")} text="Login"/>
      <GreenBtn onPressFunction={() => navigation.navigate("Register")} text="Register"/>
    </View>
  )
}


const styles = StyleSheet.create({
  bgcImg: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
})

export default AuthMenuScreen