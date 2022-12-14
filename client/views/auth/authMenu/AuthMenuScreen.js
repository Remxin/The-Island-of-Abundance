import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GreenBtn from "../../../components/buttons/greenBtn/GreenBtn"

import { containerStyle, backgroundImageStyle } from '../styles/styles'

const AuthMenuScreen = ({ navigation }) => {
  return (
    <View style={containerStyle}>
      <Image style={backgroundImageStyle} source={require("../../../public/images/mainScreen.jpg")}/>

      <Text style={{ color: "#EAE509", fontSize: 38, position: "absolute", top: "10%", textShadowColor: "#483838", textShadowRadius: 15}}>πΏππ π΄πππππ ππ π¬ππππππππ</Text>
      <GreenBtn onPressFunction={() => navigation.navigate("Login")} text="Login"/>
      <GreenBtn onPressFunction={() => navigation.navigate("Register")} text="Register"/>
    </View>
  )
}

export default AuthMenuScreen