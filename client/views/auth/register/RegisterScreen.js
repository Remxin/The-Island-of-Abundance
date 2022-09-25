import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle, textInputStyle } from '../styles/styles'
import { TextInput } from 'react-native-paper'

import BlackLink from '../../../components/links/BlackLink'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{...containerStyle, position: "relative"}}>
       <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", width: "30%", height: "60%", borderRadius: 10}}>
            <Text style={screenTitleStyle}>Register</Text>
            <TextInput mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginTop: 28}} placeholder='Name:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25}} placeholder='Email:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput mode='outlined' outlineColor="#233223" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginBottom: 8}} placeholder='Password:' secureTextEntry autoCapitalize='none'/>
            <GreenBtn text="Register" onPressFunction={() => console.log("register")}/>
            <BlackLink text="Already have an account" onPressFunction={() => navigation.navigate("Login")}/>
          </View>
          <Image style={{...knightImageStyle, position: "absolute", right: "-45%"}} source={require("../../../public/images/knight.jpg")}/>
    
  </View>
  )
}

export default RegisterScreen