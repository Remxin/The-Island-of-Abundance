import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { containerStyle, knightImageStyle, screenTitleStyle } from '../styles/styles'
import GreenBtn from '../../../components/buttons/greenBtn/GreenBtn'
import BlackLink from "../../../components/links/BlackLink"
import { TextInput } from 'react-native-paper'

const LoginScreen = ({ navigation }) => {


    function login(){

    }
  return (
    <View style={{...containerStyle, position: "relative", backgroundColor: ""}}>
        <Image source={require("../../../public/gradients/EasyMed.jpg")} style={{ position: "absolute", zIndex: -1}}/>
        <View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", width: "30%", height: "60%", borderRadius: 10}}>
            <Text style={screenTitleStyle}>Login</Text>
            <TextInput mode="outlined" outlineColor="#232323" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginTop: 25}} placeholder='Email:' autoCapitalize="none" keyboardType="email-address"/>
            <TextInput mode='outlined' outlineColor="#233223" activeOutlineColor='##42855B' style={{ width: 120, height: 25, marginBottom: 10}} placeholder='Password:' secureTextEntry autoCapitalize='none'/>
            <GreenBtn text="Login" onPressFunction={login}/>
            <BlackLink text="Forgot password?" onPressFunction={() => console.log("aa")}/>
            <BlackLink text="Don't have an account" onPressFunction={() => navigation.navigate("Register")}/>
        </View>
            <Image style={{...knightImageStyle, position: "absolute", right: "-45%"}} source={require("../../../public/images/vikingKnight.jpg")}/>
    
  </View>
  )
}

export default LoginScreen